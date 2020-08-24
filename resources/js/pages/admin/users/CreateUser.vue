<template>
  <div class="ma-2">

    <v-row justify="start" class="mx-auto">
      <v-col
        cols="12"
        
      >
        <v-form @submit.prevent="createUser">
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
                mdi-food-fork-drink
              </v-icon>
              <span class="title white--text">Create User</span>
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
                          v-if="role == 'member'"
                          label="NIS"
                          hint="Nomor Induk Siswa"
                          persistent-hint
                          single-line
                          filled
                          
                          required
                          v-model="nis"
                        ></v-text-field>

                        <v-text-field
                          v-if="role == 'member'"
                          label="NUPTK"
                          hint="Nomor Unik Pendidik dan Tenaga Kependidikan"
                          persistent-hint
                          single-line
                          filled
                          
                          required
                          v-model="nuptk"
                        ></v-text-field>

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
                      </v-col>

                      <v-col cols="12" lg="6" md="12" sm="12" xs="12">
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

                        <v-text-field
                          label="Your Password"
                          hint="Password | Required"
                          persistent-hint
                          single-line
                          filled
                          required
                          type="password"
                          :error-messages="passwordErrors"
                          v-model="password"
                          @input="$v.password.$touch()" 
                          @blur="$v.password.$touch()"
                        ></v-text-field>

                        <v-text-field
                          label="Confirm Your Password"
                          hint="Confirm Password | Required"
                          persistent-hint
                          single-line
                          filled
                          required
                          type="password"
                          :error-messages="passwordConfirmationErrors"
                          v-model="password_confirmation"
                          @input="$v.password_confirmation.$touch()" 
                          @blur="$v.password_confirmation.$touch()"
                        ></v-text-field>
                        
                        <v-select
                          :items="roles"
                          v-model="role"
                          filled
                          
                          label="User Role"
                          hint="User Role"
                          persistent-hint
                        ></v-select>
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
                    <v-btn color="red darken-1 white--text" type="submit" >Create</v-btn>
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
  import { required, numeric } from 'vuelidate/lib/validators'
  import axios from 'axios'
  export default {
    name: 'createUserPage',
    data() {
      return {
        dialog: false,

        // Form
        first_name: null,
        last_name: null,
        nis: null,
        nuptk: null,
        alamat: null,
        no_telp: null,
        email: null,
        address: null,
        password: null,
        password_confirmation: null,
        role: 'member',
        roles: [
          'admin',
          'pustakawan',
          'member'
        ],

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
        required 
      },
      password: {
        required,
      },
      password_confirmation: {
        required,
      },
    }, // end of validations

    computed: {
      firstNameErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.first_name.$dirty) return errors
        !currentObj.$v.first_name.required && errors.push('First Name is required.')
        return errors
      },

      lastNameErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.last_name.$dirty) return errors
        !currentObj.$v.last_name.required && errors.push('Last Name is required.')
        return errors
      },

      emailErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.email.$dirty) return errors
        !currentObj.$v.email.required && errors.push('Email is required.')
        return errors
      },

      passwordErrors () {
          let currentObj = this
          const errors = []
          if (!currentObj.$v.password.$dirty) return errors
          !currentObj.$v.password.required && errors.push('Password is required.')
          return errors
      },
      passwordConfirmationErrors () {
          let currentObj = this
          const errors = []
          if (!currentObj.$v.password_confirmation.$dirty) return errors
          !currentObj.$v.password_confirmation.required && errors.push('Password Confirmation is required.')
          return errors
      },
  
    }, //End of Computed

    methods: {

      createUser: function() {

        let currentObj = this

        currentObj.$v.$touch()

        if (currentObj.$v.$invalid) {
          currentObj.snack = true
          currentObj.snackColor = 'error'
          currentObj.snackText = 'Ada data yang tidak valid.'
        } else {
          currentObj.errorAlert = false
          currentObj.overlay = true

          axios.post('api/siAdmino/users/create', {
            first_name: currentObj.first_name,
            last_name: currentObj.last_name,
            nis: currentObj.nis,
            nuptk: currentObj.nuptk,
            alamat: currentObj.alamat,
            no_telp: currentObj.no_telp,
            email: currentObj.email,
            password: currentObj.password,
            password_confirmation: currentObj.password_confirmation,
            role: currentObj.role
          })
            .then(function (response) {

              // after success show successSnackbar
              currentObj.snack = true
              currentObj.snackColor = 'success'
              currentObj.snackText = 'User telah berhasil di buat!'

              currentObj.overlay = false

              currentObj.$v.$reset()
              
              if(currentObj.role == 'admin') {
                currentObj.$router.push('/siAdmino/users/admin/list')
              } else if(currentObj.role == 'pustakawan') {
                currentObj.$router.push('/siAdmino/users/pustakawan/list')
              } else {
                currentObj.$router.push('/siAdmino/users/member/list')
              }
              

            })
            .catch(function (error) {
              currentObj.overlay = false
              if(error.response) {
                currentObj.serverError = error.response.data.errors
                currentObj.errorAlert = true
              }
            })
        }
      },
    },



  }
</script>