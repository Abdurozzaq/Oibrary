<template>
    <div class="ma-10">

    <v-row justify="start" class="mx-auto">
      <v-col
        cols="12"
        
      >
        <v-form @submit.prevent="edit">
          <v-card
            class=" mx-auto"
            elevation="8"
          >
            <v-card-title class="red lighten-1">
              <v-icon
                large
                left
                color="white"
              >
                mdi-school
              </v-icon>
              <span color="white" class="title white--text">Ubah Data Sekolah</span>
            </v-card-title>
            
              <v-card-text class="headline font-weight-bold">
                <v-row>
                  <v-col cols="12">
                    <v-alert
                      v-model="errorAlert"
                      border="top"
                      color="red lighten-2"
                      dismissible
                    >
                      <ul v-for="(error, index) in serverError" v-bind:key="index">
                        <li>
                          {{ error[0] }} 
                        </li>
                      </ul>
                    </v-alert>

                    <v-text-field
                      label="Nama Sekolah"
                      hint="Nama Sekolah | Required"
                      persistent-hint
                      single-line
                      filled
                      required
                      :error-messages="namaSekolahErrors"
                      v-model="nama_sekolah"
                      @input="$v.nama_sekolah.$touch()" 
                      @blur="$v.nama_sekolah.$touch()"
                    ></v-text-field>

                    <v-text-field
                      label="NPSN Sekolah"
                      hint="NPSN Sekolah | Required"
                      persistent-hint
                      single-line
                      filled
                      required
                      :error-messages="npsnSekolahErrors"
                      v-model="npsn_sekolah"
                      @input="$v.npsn_sekolah.$touch()" 
                      @blur="$v.npsn_sekolah.$touch()"
                    ></v-text-field>

                    <v-text-field
                      label="Alamat Sekolah"
                      hint="Alamat Sekolah | Required"
                      persistent-hint
                      single-line
                      filled
                      required
                      :error-messages="alamatSekolahErrors"
                      v-model="alamat_sekolah"
                      @input="$v.alamat_sekolah.$touch()" 
                      @blur="$v.alamat_sekolah.$touch()"
                    ></v-text-field>

                    <v-text-field
                      label="Status Sekolah"
                      hint="Status Sekolah | Required"
                      persistent-hint
                      single-line
                      filled
                      required
                      :error-messages="statusErrors"
                      v-model="status"
                      @input="$v.status.$touch()" 
                      @blur="$v.status.$touch()"
                    ></v-text-field>

                    <v-text-field
                      label="Bentuk Pendidikan"
                      hint="Bentuk Pendidikan | Required | Contoh: SD, SMP, SMA"
                      persistent-hint
                      single-line
                      filled
                      required
                      :error-messages="bentukPendidikanErrors"
                      v-model="bentuk_pendidikan"
                      @input="$v.bentuk_pendidikan.$touch()" 
                      @blur="$v.bentuk_pendidikan.$touch()"
                    ></v-text-field>
                    
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-row
                    align="center"
                    justify="end"
                  >
                    <v-btn type="submit" >Ubah</v-btn>
                  </v-row>
                </v-list-item>
              </v-card-actions>

              <v-overlay
                :absolute="true"
                :value="overlay"
              >
                <v-progress-circular
                  :size="50"
                  color="white"
                  indeterminate
                ></v-progress-circular>
              </v-overlay>
          </v-card>
        </v-form>
      </v-col>
    </v-row>

    <v-snackbar top v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false">Close</v-btn>
      </template>
    </v-snackbar>

  </div>
</template>

<script>
    import { required } from 'vuelidate/lib/validators'
    import axios from 'axios'
    export default {
        data () {
            return {
                // v-model
                judul_buku: null,
                nama_pengarang: null,
                penerbit: null,
                tebal_buku: null,
                jumlah_halaman: null,

                // For Form Exception
                errorAlert: false,
                serverError: null,

                // Loading Overlay - Form
                overlay: false,
                
                // Response
                snack: false,
                snackText: null,
                snackColor: null,
            }
        }, // End of Data

        validations: {
            nama_sekolah: {
                required,
            },
            npsn_sekolah: {
                required,
            },
            alamat_sekolah: {
                required,
            },
            status: {
                required,
            },
            bentuk_pendidikan: {
                required,
            },
            
        }, // End of Validations

        computed: {
            namaSekolahErrors () {
                let currentObj = this
                const errors = []
                if (!currentObj.$v.nama_sekolah.$dirty) return errors
                !currentObj.$v.nama_sekolah.required && errors.push('Nama sekolah harus di isi.')
                return errors
            },
            npsnSekolahErrors () {
                let currentObj = this
                const errors = []
                if (!currentObj.$v.npsn_sekolah.$dirty) return errors
                !currentObj.$v.npsn_sekolah.required && errors.push('NPSN sekolah harus di isi.')
                return errors
            },
            alamatSekolahErrors () {
                let currentObj = this
                const errors = []
                if (!currentObj.$v.alamat_sekolah.$dirty) return errors
                !currentObj.$v.alamat_sekolah.required && errors.push('Alamat sekolah harus di isi.')
                return errors
            },
            statusErrors () {
                let currentObj = this
                const errors = []
                if (!currentObj.$v.status.$dirty) return errors
                !currentObj.$v.status.required && errors.push('Status sekolah harus di isi.')
                return errors
            },
            bentukPendidikanErrors () {
                let currentObj = this
                const errors = []
                if (!currentObj.$v.bentuk_pendidikan.$dirty) return errors
                !currentObj.$v.bentuk_pendidikan.required && errors.push('Bentuk pendidikan sekolah harus di isi.')
                return errors
            },
        }, // End of Computed

        methods: {  
            edit: function() {
                let currentObj = this
                
                currentObj.overlay = true

                if (currentObj.$v.$invalid) {
                    currentObj.snack = true
                    currentObj.snackColor = 'error'
                    currentObj.snackText = 'Input Data Invalid'
                    currentObj.overlay = false
                } else {
                    axios.post('api/auth/profile/identity/edit', {
                        first_name: currentObj.first_name,
                        last_name: currentObj.last_name,
                        restaurant_name: currentObj.restaurant_name
                    })
                    .then(function (response) {
                        
                        currentObj.snack = true
                        currentObj.snackColor = 'success'
                        currentObj.snackText = 'Data baru berhasil di ubah.'

                        currentObj.overlay = false

                    })
                    .catch(function (error) {
                        currentObj.overlay = false
                        if(error.response) {
                            currentObj.serverError = error.response.data.errors
                            currentObj.errorAlert = true
                        }
                    })
                }
            }, // End of Edit Method

    
        }, // End of Methods

        mounted: function() {
            let currentObj = this
        }, // End of Mounted
    }
</script>