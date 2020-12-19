<template>
  <div class="ma-2">

    <v-row justify="start" class="mx-auto">
      <v-col
        cols="12"
        
      >
        <v-form @submit.prevent="createAnggota">
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
                mdi-account-plus
              </v-icon>
              <span class="title white--text">Tambah Anggota Baru</span>
            </v-card-title>
            
              <v-card-text class="headline font-weight-bold">
                <v-row>
                  
                  <v-col cols="12" sm="12">

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
                          label="Nama Depan"
                          hint="Nama Depan | Required"
                          persistent-hint
                          single-line
                          filled
                          
                          required
                          :error-messages="firstNameErrors"
                          v-model="first_name"
                          @input="$v.first_name.$touch()" 
                          @blur="$v.first_name.$touch()"
                        ></v-text-field>

                        <v-text-field
                          label="Nama Belakang"
                          hint="Nama Belakang | Required"
                          persistent-hint
                          single-line
                          filled
                          
                          required
                          :error-messages="lastNameErrors"
                          v-model="last_name"
                          @input="$v.last_name.$touch()" 
                          @blur="$v.last_name.$touch()"
                        ></v-text-field>

                        <v-text-field
                          label="NIS"
                          hint="Nomor Induk Siswa"
                          persistent-hint
                          single-line
                          filled
                          
                          required
                          v-model="nis"
                        ></v-text-field>

                        <v-text-field
                          label="NUPTK"
                          hint="Nomor Unik Pendidik dan Tenaga Kependidikan"
                          persistent-hint
                          single-line
                          filled
                          
                          required
                          v-model="nuptk"
                        ></v-text-field>

                        
                      </v-col>

                      <v-col cols="12" lg="6" md="12" sm="12" xs="12">

                        <v-text-field
                          label="Alamat"
                          hint="Alamat"
                          persistent-hint
                          single-line
                          filled
                          
                          required
                          v-model="alamat"
                        ></v-text-field>

                        <v-text-field
                          label="No. Telp"
                          hint="No. Telp"
                          persistent-hint
                          single-line
                          filled
                          
                          required
                          v-model="no_telp"
                        ></v-text-field>
                        
                        <v-text-field
                          label="Email"
                          hint="Email | Required"
                          persistent-hint
                          single-line
                          filled
                          
                          required
                          :error-messages="emailErrors"
                          v-model="email"
                          @input="$v.email.$touch()" 
                          @blur="$v.email.$touch()"
                        ></v-text-field>

                        <v-file-input
                          label="Foto User"
                          filled
                          prepend-icon="mdi-camera"
                          v-model="foto_user"
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
                    <v-btn color="red darken-1 white--text" type="submit" >Tambah</v-btn>
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
  import { required, email } from 'vuelidate/lib/validators'
  import axios from 'axios'
  export default {
    name: 'createAnggotaPage',
    data() {
      return {
        dialog: false,

        // Form
        foto_user: [],
        first_name: '',
        last_name: '',
        nis: '',
        nuptk: '',
        alamat: '',
        no_telp: '',
        email: '',
        role: 'member',

        // Response
        errorAlert: false,
        overlay: false,
        serverErrorCode: null,
        serverError: null,
        snack: false,
        snackText: null,
        snackColor: null,

      }
    }, // end of data()

    validations: {
      first_name: {
        required,
      },
      last_name: {
        required,
      },
      email: { 
        required,
        email
      },
    }, // end of validations

    computed: {
      firstNameErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.first_name.$dirty) return errors
        !currentObj.$v.first_name.required && errors.push('Nama Depan harus di isi.')
        return errors
      },

      lastNameErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.last_name.$dirty) return errors
        !currentObj.$v.last_name.required && errors.push('Nama Belakang harus di isi.')
        return errors
      },

      emailErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.email.$dirty) return errors
        !currentObj.$v.email.required && errors.push('Email harus di isi.')
        !currentObj.$v.email.email && errors.push('Email harus valid.')
        return errors
      },
  
    }, //End of Computed

    methods: {

      createAnggota: function() {

        let currentObj = this

        currentObj.$v.$touch()

        if (currentObj.$v.$invalid) {
          currentObj.snack = true
          currentObj.snackColor = 'error'
          currentObj.snackText = 'Ada data yang tidak valid.'
        } else {
          currentObj.errorAlert = false
          currentObj.overlay = true

          let formData = new FormData();

          // Files
          formData.append("foto_user", currentObj.foto_user)
          // Text
          formData.append("first_name", currentObj.first_name)
          formData.append("last_name", currentObj.last_name)
          formData.append("nis", currentObj.nis)
          formData.append("nuptk", currentObj.nuptk)
          formData.append("alamat", currentObj.alamat)
          formData.append("no_telp", currentObj.no_telp)
          formData.append("email", currentObj.email)
          formData.append("role", currentObj.role)

          axios.post('api/perpus/users/member/create', formData)
            .then(function (response) {

              // after success show successSnackbar
              currentObj.snack = true
              currentObj.snackColor = 'success'
              currentObj.snackText = 'Anggota telah berhasil di tambahkan!'

              currentObj.overlay = false

              currentObj.$v.$reset()
              currentObj.$router.push('/perpus/anggota/list')
              

            })
            .catch(function (error) {
              currentObj.overlay = false
              if(error.response) {
                currentObj.serverError = error.response.data.errors
                currentObj.errorAlert = true
              }
            })
        }
      }, // End of createAnggota()

    }, // End of Methods
  }
</script>