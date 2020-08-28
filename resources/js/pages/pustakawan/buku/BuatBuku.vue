<template>
    <div class="ma-3">

    <v-row justify="start" class="mx-auto">
      <v-col
        cols="12"
        
      >
        <v-form @submit.prevent="tambah">
          <v-card
            class=" mx-auto"
            elevation="8"
          >
            <v-card-title class="purple darken-3">
              <v-icon
                large
                left
                color="white"
              >
                mdi-book-plus
              </v-icon>
              <span color="white" class="title white--text">Tambah Buku</span>
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

                    <v-row>
                      <v-col cols="12" lg="6" md="12" sm="12" xs="12">
                        <v-text-field
                          label="Judul Buku"
                          hint="Judul Buku | Required"
                          persistent-hint
                          single-line
                          filled
                          required
                          :error-messages="judulBukuErrors"
                          v-model="judul_buku"
                          @input="$v.judul_buku.$touch()" 
                          @blur="$v.judul_buku.$touch()"
                        ></v-text-field>

                        <v-text-field
                          label="Pengarang Buku"
                          hint="Pengarang Buku | Required"
                          persistent-hint
                          single-line
                          filled
                          required
                          :error-messages="pengarangBukuErrors"
                          v-model="pengarang_buku"
                          @input="$v.pengarang_buku.$touch()" 
                          @blur="$v.pengarang_buku.$touch()"
                        ></v-text-field>

                        <v-text-field
                          label="Penerbit Buku"
                          hint="Penerbit Buku | Required"
                          persistent-hint
                          single-line
                          filled
                          required
                          :error-messages="penerbitBukuErrors"
                          v-model="penerbit_buku"
                          @input="$v.penerbit_buku.$touch()" 
                          @blur="$v.penerbit_buku.$touch()"
                        ></v-text-field>

                        <v-text-field
                          label="Tahun Terbit Buku"
                          hint="Tahun Terbit Buku | Required"
                          persistent-hint
                          single-line
                          filled
                          required
                          :error-messages="tahunTerbitBukuErrors"
                          v-model="tahun_terbit_buku"
                          @input="$v.tahun_terbit_buku.$touch()" 
                          @blur="$v.tahun_terbit_buku.$touch()"
                        ></v-text-field>

                      </v-col>

                      <v-col cols="12" lg="6" md="12" sm="12" xs="12">
                        <v-text-field
                          label="Jumlah Halaman Buku"
                          hint="Jumlah Halaman Buku | Required"
                          persistent-hint
                          single-line
                          filled
                          required
                          :error-messages="jumlahHalamanBukuErrors"
                          v-model="jumlah_halaman_buku"
                          @input="$v.jumlah_halaman_buku.$touch()" 
                          @blur="$v.jumlah_halaman_buku.$touch()"
                        ></v-text-field>

                        <v-text-field
                          label="Stok Buku"
                          hint="Stok Buku | Required"
                          persistent-hint
                          single-line
                          filled
                          required
                          :error-messages="stokBukuErrors"
                          v-model="stok_buku"
                          @input="$v.stok_buku.$touch()" 
                          @blur="$v.stok_buku.$touch()"
                        ></v-text-field>

                        <v-text-field
                          label="Nama Rak"
                          hint="Nama Rak | Required"
                          persistent-hint
                          single-line
                          filled
                          required
                          :error-messages="namaRakErrors"
                          v-model="nama_rak"
                          @input="$v.nama_rak.$touch()" 
                          @blur="$v.nama_rak.$touch()"
                        ></v-text-field>
                        
                        <v-text-field
                          label="Lokasi Rak"
                          hint="Lokasi Rak | Required"
                          persistent-hint
                          single-line
                          filled
                          required
                          :error-messages="lokasiRakErrors"
                          v-model="lokasi_rak"
                          @input="$v.lokasi_rak.$touch()" 
                          @blur="$v.lokasi_rak.$touch()"
                        ></v-text-field>
                      </v-col>
                    </v-row>
                    
                  <v-row justify="start">
                    <v-col cols="12" lg="6" md="12" sm="12" xs="12">
                      <v-file-input
                          label="Foto Buku"
                          filled
                          prepend-icon="mdi-camera"
                          v-model="foto_buku"
                        ></v-file-input>
                    </v-col>
                  </v-row>
                    
                  </v-col>
                </v-row>
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-row
                    align="center"
                    justify="end"
                  >
                    <v-btn class="purple darken-3 white--text" type="submit" >Tambah Buku</v-btn>
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

    <v-snackbar bottom v-model="snack" :timeout="3000" :color="snackColor">
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
                judul_buku: '',
                pengarang_buku: '',
                penerbit_buku: '',
                tahun_terbit_buku: '',
                foto_buku: '',
                jumlah_halaman_buku: '',
                stok_buku: '',
                nama_rak: '',
                lokasi_rak: '',

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
            judul_buku: {
              required,
            },
            pengarang_buku: {
              required,
            },
            penerbit_buku: {
              required,
            },
            tahun_terbit_buku: {
              required,
            },
            jumlah_halaman_buku: {
              required,
            },
            stok_buku: {
              required,
            },
            nama_rak: {
              required,
            },
            lokasi_rak: {
              required,
            },
            
            
        }, // End of Validations

        computed: {
          judulBukuErrors () {
              let currentObj = this
              const errors = []
              if (!currentObj.$v.judul_buku.$dirty) return errors
              !currentObj.$v.judul_buku.required && errors.push('Judul Buku harus di isi.')
              return errors
          },
          pengarangBukuErrors () {
              let currentObj = this
              const errors = []
              if (!currentObj.$v.pengarang_buku.$dirty) return errors
              !currentObj.$v.pengarang_buku.required && errors.push('Pengarang Buku harus di isi.')
              return errors
          },
          penerbitBukuErrors () {
              let currentObj = this
              const errors = []
              if (!currentObj.$v.penerbit_buku.$dirty) return errors
              !currentObj.$v.penerbit_buku.required && errors.push('Penerbit Buku harus di isi.')
              return errors
          },
          tahunTerbitBukuErrors () {
              let currentObj = this
              const errors = []
              if (!currentObj.$v.tahun_terbit_buku.$dirty) return errors
              !currentObj.$v.tahun_terbit_buku.required && errors.push('Tahun Terbit harus di isi.')
              return errors
          },
          jumlahHalamanBukuErrors () {
              let currentObj = this
              const errors = []
              if (!currentObj.$v.jumlah_halaman_buku.$dirty) return errors
              !currentObj.$v.jumlah_halaman_buku.required && errors.push('Jumlah Halaman Buku harus di isi.')
              return errors
          },
          stokBukuErrors () {
              let currentObj = this
              const errors = []
              if (!currentObj.$v.stok_buku.$dirty) return errors
              !currentObj.$v.stok_buku.required && errors.push('Stok Buku harus di isi.')
              return errors
          },
          namaRakErrors () {
              let currentObj = this
              const errors = []
              if (!currentObj.$v.nama_rak.$dirty) return errors
              !currentObj.$v.nama_rak.required && errors.push('Nama Rak harus di isi.')
              return errors
          },
          lokasiRakErrors () {
              let currentObj = this
              const errors = []
              if (!currentObj.$v.lokasi_rak.$dirty) return errors
              !currentObj.$v.lokasi_rak.required && errors.push('Lokasi Rak harus di isi.')
              return errors
          },

          
        }, // End of Computed

        methods: {  
            tambah: function() {
                let currentObj = this
                
                currentObj.overlay = true

                if (currentObj.$v.$invalid) {
                    currentObj.snack = true
                    currentObj.snackColor = 'error'
                    currentObj.snackText = 'Input Data Invalid'
                    currentObj.overlay = false
                } else {

                  let formData = new FormData();

                  // Files
                  formData.append("foto_buku", currentObj.foto_buku)
                  // Text
                  formData.append("judul_buku", currentObj.judul_buku)
                  formData.append("pengarang_buku", currentObj.pengarang_buku)
                  formData.append("penerbit_buku", currentObj.penerbit_buku)
                  formData.append("tahun_terbit_buku", currentObj.tahun_terbit_buku)
                  formData.append("jumlah_halaman_buku", currentObj.jumlah_halaman_buku)
                  formData.append("stok_buku", currentObj.stok_buku)
                  formData.append("nama_rak", currentObj.nama_rak)
                  formData.append("lokasi_rak", currentObj.lokasi_rak)

                  axios.post('api/perpus/buku/create', formData)
                    .then(function (response) {
                        
                        currentObj.snack = true
                        currentObj.snackColor = 'success'
                        currentObj.snackText = 'Buku telah berhasil dibuat.'

                        currentObj.overlay = false


                        currentObj.$router.push('/perpus/buku/list')

                    })
                    .catch(function (error) {
                        currentObj.overlay = false
                        if(error.response) {
                            currentObj.serverError = error.response.data.errors
                            currentObj.errorAlert = true
                        }
                    })
                }
            }, // End of tambah Method

    
        }, // End of Methods

        mounted: function() {
            let currentObj = this
        }, // End of Mounted
    }
</script>