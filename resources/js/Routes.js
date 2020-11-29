import multiguard from 'vue-router-multiguard';
import axios from 'axios'

const token = localStorage.getItem('userToken')
if (token) {
  axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token
}

const nama_sekolah = process.env.MIX_NAMA_SEKOLAH

/**
 *
 * For Authenticated
 * And Not Authenticated
 *
 * Guard
 */
const ifAuthenticated = (to, from, next) => {
    if (localStorage.getItem('userToken')) {
        next()
        return
    } else {
        next('/login')
    }
}

const ifNotAuthenticated = (to, from, next) => {

    if (localStorage.hasOwnProperty('userToken') === false) {
        next()
    } else {

            axios.get('api/auth/me', {
                headers: {
                  Authorization: 'Bearer ' + token,
                  withCredentials: true //the token is a variable which holds the token
                }
               })
                .then(function (response) {
                    // handle success
                    let userRole = response.data.role
                    if (userRole == "admin") {
                        next('/siAdmino')
                        return
                    } else {
                        next('/perpus')
                    }
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })
    }
}


/**
 * Guard For
 * Admin Only
 * &
 * User Only
 */
const adminOnly = (to, from, next) => {
        axios.get('api/auth/me')
            .then(function (response) {
                // handle success
                let userRole = response.data.role
                if (userRole == "admin") {
                    next()
                    return
                } else {
                    next('/login')
                    return
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
}

const pustakawanOnly = (to, from, next) => {

        axios.get('api/auth/me')
            .then(function (response) {
                // handle success
                let userRole = response.data.role
                if (userRole == "pustakawan") {
                    next()
                    return
                } else {
                    next('/login')
                    return
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
}

// const memberOnly = (to, from, next) => {

//     axios.get('api/auth/me')
//         .then(function (response) {
//             // handle success
//             let userRole = response.data.role
//             if (userRole == "member") {
//                 next()
//                 return
//             } else {
//                 next('/login')
//                 return
//             }
//         })
//         .catch(function (error) {
//             // handle error
//             console.log(error);
//         })
// }

/**
 * Guard For
 * Verified User Email
 */
const verifiedEmail = (to, from, next) => {

    axios.get('api/auth/me')
        .then(function (response) {
            // handle success
            let isVerified = response.data.user.email_verified_at
            if (isVerified) {
                next()
                return
            } else {
                next('/UnverifiedEmail')
                return
            }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
}

/**
* Guard For
* Un Verified User Email
*/
const unVerifiedEmail = (to, from, next) => {

axios.get('api/auth/me')
    .then(function (response) {
        // handle success
        let isVerified = response.data.user.email_verified_at
        if (isVerified == null) {
            next('/UnverifiedEmail')
            return
        } else {
            next()
            return
        }
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
}

const pageTitle = (to, from, next) => {
    document.title = to.meta.title
    next()
}


export const routes = [
    /**
     * Authentication Routes
     */
    {
        path: "",
        component: () => import(/* webpackChunkName: "LandingLayout" */'./layouts/Landing.vue'),
        children: [
            {
                path: "",
                component: () => import(/* webpackChunkName: "LoginPage" */'./pages/auth/Login.vue'),
                meta: {
                        title: 'Welcome - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([pageTitle, ifNotAuthenticated]),
            },
            /**
             * Pustakawan Must Be Registered by Admin 
             */
            // {
            //     path: "/register",
            //     component: () => import(/* webpackChunkName: "RegisterPage" */'./pages/auth/Register.vue'),
            //     meta: {
            //             title: 'Register - ' + 'Perpus ' + nama_sekolah,
            //     },
            //     beforeEnter: multiguard([pageTitle, ifNotAuthenticated]),
            // },
            // {
            //     path: "/resend-verification-mail",
            //     component: () => import(/* webpackChunkName: "ResendVerificationEmail" */'./pages/auth/ResendVerificationMail.vue'),
            //     meta: {
            //             title: 'Resend Verification Mail - ' + 'Perpus ' + nama_sekolah,
            //     },
            //     beforeEnter: multiguard([ifNotAuthenticated]),
            // },
            {
                path: "/forgot-password",
                component: () => import(/* webpackChunkName: "ForgotPassword" */'./pages/auth/ForgotPassword.vue'),
                meta: {
                        title: 'Forgot Password - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifNotAuthenticated]),
            },
            {
                path: "/reset-password",
                component: () => import(/* webpackChunkName: "ResetPassword" */'./pages/auth/ResetPassword.vue'),
                meta: {
                        title: 'Reset Password - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifNotAuthenticated]),
            },
        ]
    },
    // {
    //     path: "/home",
    //     component: MemberLayout,
    //     children: [
    //         {
    //             path: "",
    //             component: MemberHomePage,
    //             beforeEnter: multiguard([ifAuthenticated, memberOnly, verifiedEmail]),
    //         }
    //     ]
    // },
    {
        path: "/perpus",
        component: () => import(/* webpackChunkName: "PustakawanLayout" */'./layouts/Dashboard-Pustakawan.vue'),
        children: [
            {
                path: "",
                component: () => import(/* webpackChunkName: "PusatakawanHomePage" */'./pages/pustakawan/PustakawanHome.vue'),
                meta: {
                    title: 'Home - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, pustakawanOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "buku/create",
                component: () => import(/* webpackChunkName: "CreateBuku" */'./pages/pustakawan/buku/BuatBuku.vue'),
                meta: {
                    title: 'Tambah Buku - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, pustakawanOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "buku/list",
                component: () => import(/* webpackChunkName: "DaftarBuku" */'./pages/pustakawan/buku/DaftarBuku.vue'),
                meta: {
                    title: 'Daftar Buku - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, pustakawanOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "pinjam-buku",
                component: () => import(/* webpackChunkName: "PinjamBuku" */'./pages/pustakawan/peminjaman/PinjamBuku.vue'),
                meta: {
                    title: 'Pinjam Buku - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, pustakawanOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "sirkulasi",
                component: () => import(/* webpackChunkName: "Sirkulasi" */'./pages/pustakawan/peminjaman/Sirkulasi.vue'),
                meta: {
                    title: 'Sirkulasi - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, pustakawanOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "log-data/peminjaman",
                component: () => import(/* webpackChunkName: "LogPeminjaman" */'./pages/pustakawan/logData/Peminjaman.vue'),
                meta: {
                    title: 'Log Data Peminjaman - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, pustakawanOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "log-data/pengembalian",
                component: () => import(/* webpackChunkName: "LogPengembalian" */'./pages/pustakawan/logData/Pengembalian.vue'),
                meta: {
                    title: 'Log Data Pengembalian - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, pustakawanOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "anggota/create",
                component: () => import(/* webpackChunkName: "CreateAnggota" */'./pages/pustakawan/anggota/CreateAnggota.vue'),
                meta: {
                    title: 'Tambah Anggota - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, pustakawanOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "anggota/list",
                component: () => import(/* webpackChunkName: "DaftarAnggota" */'./pages/pustakawan/anggota/DaftarAnggota.vue'),
                meta: {
                    title: 'Daftar Anggota - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, pustakawanOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "profile/settings/password",
                component: () => import(/* webpackChunkName: "PustakawanEditPassword" */'./pages/pustakawan/settings/EditPassword.vue'),
                meta: {
                    title: 'Ganti Password - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, pustakawanOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "profile/settings/identity",
                component: () => import(/* webpackChunkName: "PustakawanEditIdentity" */'./pages/pustakawan/settings/EditIdentity.vue'),
                meta: {
                    title: 'Ubah Identitas - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, pustakawanOnly, verifiedEmail, pageTitle]),
            },
        ]
    },
    {
        path: "/siAdmino",
        component: () => import(/* webpackChunkName: "AdminLayout" */'./layouts/Dashboard-Admin.vue'),
        children: [
            {
                path: "",
                component: () => import(/* webpackChunkName: "AdminHomePage" */'./pages/admin/AdminHome.vue'),
                meta: {
                    title: 'Admin Home - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, adminOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "users/create",
                component: () => import(/* webpackChunkName: "AdminCreateUser" */'./pages/admin/users/CreateUser.vue'),
                meta: {
                    title: 'Create User - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, adminOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "users/anggota/list",
                component: () => import(/* webpackChunkName: "AdminDaftarAnggota" */'./pages/admin/users/DaftarAnggota.vue'),
                meta: {
                    title: 'Daftar Anggota - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, adminOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "users/pustakawan/list",
                component: () => import(/* webpackChunkName: "AdminDaftarPustakawan" */'./pages/admin/users/DaftarPustakawan.vue'),
                meta: {
                    title: 'Daftar Pustakawan - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, adminOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "users/admin/list",
                component: () => import(/* webpackChunkName: "AdminDaftarAdmin" */'./pages/admin/users/DaftarAdmin.vue'),
                meta: {
                    title: 'Daftar Admin - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, adminOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "profile/settings/password",
                component: () => import(/* webpackChunkName: "AdminEditPassword" */'./pages/admin/settings/EditPassword.vue'),
                meta: {
                    title: 'Ganti Password - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, adminOnly, verifiedEmail, pageTitle]),
            },
            {
                path: "profile/settings/identity",
                component: () => import(/* webpackChunkName: "AdminEditIdentity" */'./pages/admin/settings/EditIdentity.vue'),
                meta: {
                    title: 'Ubah Identitas - ' + 'Perpus ' + nama_sekolah,
                },
                beforeEnter: multiguard([ifAuthenticated, adminOnly, verifiedEmail, pageTitle]),
            },
        ]
    },

    /**
     * Other Page Routes
     */
    // {
    //     path: "/verification-success",
    //     component: () => import(/* webpackChunkName: "VerificaitonSuccess" */'./pages/auth/RedirectAfterVerify.vue'),
    //     meta: {
    //         title: 'Verification Success - ' + 'Perpus ' + nama_sekolah,
    //     },
    //     beforeEnter: multiguard([pageTitle]),
    // },
    // {
    //     path: "/UnverifiedEmail",
    //     component: () => import(/* webpackChunkName: "UnverifiedEmail" */'./pages/auth/UnverifiedEmail.vue'),
    //     meta: {
    //         title: 'Unverified Email Address - ' + 'Perpus ' + nama_sekolah,
    //     },
    //     beforeEnter: multiguard([pageTitle]),
    // },
    /**
		 * Error Page Routes
		 */
		{
			path: "*",
			component: () => import(/* webpackChunkName: "Error404Page" */'./pages/error/404.vue'),
			meta: {
				title: '404 Not Found - ' + 'Perpus ' + nama_sekolah,
			},
			beforeEnter: multiguard([pageTitle]),
		},
];


