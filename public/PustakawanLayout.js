(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["PustakawanLayout"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    source: String
  },
  data: function data() {
    return {
      firstName: null,
      lastName: null,
      fav: true,
      menu: false,
      message: false,
      hints: true,
      dialog: false,
      drawer: true,
      itemPopup: 1,
      itemsPopup: [{
        text: 'Home',
        icon: 'mdi-view-dashboard',
        url: '/perpus'
      }, {
        text: 'Change Identity',
        icon: 'mdi-account',
        url: '/perpus/profile/settings/identity'
      }, {
        text: 'Change Password',
        icon: 'mdi-account-key',
        url: '/perpus/profile/settings/password'
      }],
      sidebar: [{
        icon: 'mdi-view-dashboard',
        text: 'Home',
        link: '/home'
      }]
    };
  },
  // end of data
  computed: {
    nama_sekolah: function nama_sekolah() {
      return "SD TECHY";
    },
    alamat_sekolah: function alamat_sekolah() {
      return "Jl. Sentul No. 57, Curug Kulon, Curug, Kab. Tangerang, Banten 15810";
    },
    logo_sekolah: function logo_sekolah() {
      return "/statics/logo-sekolah.png";
    }
  },
  // End of Computed
  methods: {
    logout: function logout() {
      var currentObj = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/auth/logout').then(function (response) {
        localStorage.removeItem('userToken');
        currentObj.$router.push('/');
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getMe: function getMe() {
      var currentObj = this;
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.get('api/auth/me').then(function (response) {
        currentObj.firstName = response.data.user.first_name || 'FirstName';
        currentObj.lastName = response.data.user.last_name || 'LastName';
      })["catch"](function (error) {
        if (error.response) {
          console.log(error.response.data.errors);
        }
      });
    }
  },
  // End of Methods
  mounted: function mounted() {
    var currentObj = this;
    currentObj.getMe();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=template&id=830327e0&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=template&id=830327e0& ***!
  \********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-navigation-drawer",
        {
          attrs: {
            dark: "",
            color: "purple lighten-2",
            clipped: _vm.$vuetify.breakpoint.lgAndUp,
            app: "",
            elevation: "4"
          },
          scopedSlots: _vm._u([
            {
              key: "prepend",
              fn: function() {
                return [
                  _c(
                    "v-list-item",
                    { attrs: { "two-line": "" } },
                    [
                      _c(
                        "v-list-item-avatar",
                        [_c("v-icon", [_vm._v("mdi-face")])],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-list-item-content",
                        [
                          _c("v-list-item-title", [
                            _vm._v(
                              _vm._s(_vm.firstName) + " " + _vm._s(_vm.lastName)
                            )
                          ]),
                          _vm._v(" "),
                          _c("v-list-item-subtitle", [_vm._v("Logged In")])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ]
              },
              proxy: true
            }
          ]),
          model: {
            value: _vm.drawer,
            callback: function($$v) {
              _vm.drawer = $$v
            },
            expression: "drawer"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-list",
            [
              _c(
                "v-list-item",
                { attrs: { link: "", href: "/perpus" } },
                [
                  _c(
                    "v-list-item-icon",
                    [_c("v-icon", [_vm._v("mdi-view-dashboard-outline")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [_vm._v("Home Page")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-group",
                {
                  attrs: {
                    "prepend-icon": "mdi-account-multiple",
                    value: "",
                    "active-class": "white--text"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function() {
                        return [_c("v-list-item-title", [_vm._v("Anggota")])]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    { attrs: { link: "", href: "/perpus/anggota/create" } },
                    [
                      _c("v-list-item-title", [_vm._v("Tambah Anggota")]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-plus-circle-outline")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    { attrs: { link: "", href: "/perpus/anggota/list" } },
                    [
                      _c("v-list-item-title", [_vm._v("Daftar Anggota")]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-icon",
                        [
                          _c("v-icon", [
                            _vm._v("mdi-format-list-bulleted-type")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-group",
                {
                  attrs: {
                    "prepend-icon": "mdi-book-multiple",
                    value: "",
                    "active-class": "white--text"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function() {
                        return [_c("v-list-item-title", [_vm._v("Buku")])]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    { attrs: { link: "", href: "/perpus/buku/create" } },
                    [
                      _c("v-list-item-title", [_vm._v("Tambah Buku")]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-plus-circle-outline")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    { attrs: { link: "", href: "/perpus/buku/list" } },
                    [
                      _c("v-list-item-title", [_vm._v("Daftar Buku")]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-icon",
                        [
                          _c("v-icon", [
                            _vm._v("mdi-format-list-bulleted-type")
                          ])
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { link: "", href: "/perpus/pinjam-buku" } },
                [
                  _c(
                    "v-list-item-icon",
                    [_c("v-icon", [_vm._v("mdi-book")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [_vm._v("Pinjam Buku")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-item",
                { attrs: { link: "", href: "/perpus/sirkulasi" } },
                [
                  _c(
                    "v-list-item-icon",
                    [_c("v-icon", [_vm._v("mdi-autorenew")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-list-item-title", [_vm._v("Sirkulasi")])
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-list-group",
                {
                  attrs: {
                    "prepend-icon": "mdi-inbox",
                    value: "",
                    "active-class": "white--text"
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "activator",
                      fn: function() {
                        return [_c("v-list-item-title", [_vm._v("Log Data")])]
                      },
                      proxy: true
                    }
                  ])
                },
                [
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    {
                      attrs: { link: "", href: "/perpus/log-data/peminjaman" }
                    },
                    [
                      _c("v-list-item-title", [_vm._v("Peminjaman")]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-inbox-arrow-up")])],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-list-item",
                    {
                      attrs: { link: "", href: "/perpus/log-data/pengembalian" }
                    },
                    [
                      _c("v-list-item-title", [_vm._v("Pengembalian")]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-icon",
                        [_c("v-icon", [_vm._v("mdi-inbox-arrow-down")])],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-app-bar",
        {
          attrs: {
            "clipped-left": _vm.$vuetify.breakpoint.lgAndUp,
            app: "",
            color: "purple darken-3",
            dark: "",
            src: "/statics/gradient.jpg"
          }
        },
        [
          _c("v-app-bar-nav-icon", {
            on: {
              click: function($event) {
                $event.stopPropagation()
                _vm.drawer = !_vm.drawer
              }
            }
          }),
          _vm._v(" "),
          _c(
            "v-toolbar-title",
            { staticClass: "ml-0 pl-4", staticStyle: { width: "300px" } },
            [
              _vm.logo_sekolah
                ? _c("v-avatar", { attrs: { size: "48" } }, [
                    _c("img", {
                      staticClass: "hidden-sm-and-down",
                      attrs: { src: _vm.logo_sekolah, alt: "Logo" }
                    })
                  ])
                : _vm._e(),
              _vm._v(" "),
              _c("span", { staticClass: "hidden-sm-and-down" }, [
                _vm._v(_vm._s(_vm.nama_sekolah))
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("v-spacer"),
          _vm._v(" "),
          _c(
            "code",
            {
              staticClass:
                "hidden-sm-and-down purple lighten-5  purple--text text--darken-3"
            },
            [_vm._v("Pustakawan")]
          ),
          _vm._v(" "),
          _c(
            "v-menu",
            {
              attrs: {
                "close-on-content-click": false,
                "nudge-width": 200,
                "offset-x": ""
              },
              scopedSlots: _vm._u([
                {
                  key: "activator",
                  fn: function(ref) {
                    var on = ref.on
                    return [
                      _c(
                        "v-btn",
                        _vm._g({ attrs: { icon: "", large: "" } }, on),
                        [_c("v-icon", [_vm._v("mdi-face")])],
                        1
                      )
                    ]
                  }
                }
              ]),
              model: {
                value: _vm.menu,
                callback: function($$v) {
                  _vm.menu = $$v
                },
                expression: "menu"
              }
            },
            [
              _vm._v(" "),
              _c(
                "v-card",
                { attrs: { "max-width": "300" } },
                [
                  _c(
                    "v-list",
                    [
                      _c(
                        "v-list-item",
                        [
                          _c(
                            "v-list-item-avatar",
                            [
                              _c("v-icon", { attrs: { size: "40" } }, [
                                _vm._v("mdi-face")
                              ])
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-list-item-content",
                            [
                              _c(
                                "v-list-item-title",
                                { staticClass: "text-truncate" },
                                [
                                  _vm._v(
                                    _vm._s(_vm.firstName) +
                                      " " +
                                      _vm._s(_vm.lastName)
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("v-list-item-subtitle", [_vm._v("Logged In")])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-divider"),
                  _vm._v(" "),
                  _c(
                    "v-list",
                    { attrs: { shaped: "", dense: "" } },
                    [
                      _c("v-subheader", [_vm._v("Account")]),
                      _vm._v(" "),
                      _c(
                        "v-list-item-group",
                        { attrs: { color: "primary" } },
                        _vm._l(_vm.itemsPopup, function(ip, i) {
                          return _c(
                            "v-list-item",
                            { key: i, attrs: { href: ip.url } },
                            [
                              _c(
                                "v-list-item-icon",
                                [
                                  _c("v-icon", {
                                    domProps: { textContent: _vm._s(ip.icon) }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-list-item-content",
                                [
                                  _c("v-list-item-title", {
                                    domProps: { textContent: _vm._s(ip.text) }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "v-card-actions",
                    [
                      _c("v-spacer"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "" },
                          on: {
                            click: function($event) {
                              _vm.menu = false
                            }
                          }
                        },
                        [_vm._v("Close")]
                      ),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          attrs: { text: "", color: "danger" },
                          on: { click: _vm.logout }
                        },
                        [_vm._v("Logout")]
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-main",
        { staticClass: "blue-grey lighten-5" },
        [_c("v-container", { attrs: { fluid: "" } }, [_c("router-view")], 1)],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/layouts/Dashboard-Pustakawan.vue":
/*!*******************************************************!*\
  !*** ./resources/js/layouts/Dashboard-Pustakawan.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_Pustakawan_vue_vue_type_template_id_830327e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard-Pustakawan.vue?vue&type=template&id=830327e0& */ "./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=template&id=830327e0&");
/* harmony import */ var _Dashboard_Pustakawan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard-Pustakawan.vue?vue&type=script&lang=js& */ "./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_Pustakawan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_Pustakawan_vue_vue_type_template_id_830327e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_Pustakawan_vue_vue_type_template_id_830327e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/layouts/Dashboard-Pustakawan.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Pustakawan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard-Pustakawan.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Pustakawan_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=template&id=830327e0&":
/*!**************************************************************************************!*\
  !*** ./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=template&id=830327e0& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Pustakawan_vue_vue_type_template_id_830327e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard-Pustakawan.vue?vue&type=template&id=830327e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/layouts/Dashboard-Pustakawan.vue?vue&type=template&id=830327e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Pustakawan_vue_vue_type_template_id_830327e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_Pustakawan_vue_vue_type_template_id_830327e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);