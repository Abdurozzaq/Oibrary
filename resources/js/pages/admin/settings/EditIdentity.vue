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
            <v-card-title class="red lighten-2">
              <v-icon
                large
                left
                color="white"
              >
                mdi-account
              </v-icon>
              <span color="white" class="title white--text">Edit Your Identity</span>
            </v-card-title>
            
              <v-card-text class="headline font-weight-bold">
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

                    <v-file-input
                      label="Foto User"
                      filled
                      prepend-icon="mdi-camera"
                      v-model="foto_user"
                    ></v-file-input>
                  </v-col>
                </v-row>  
                  
              </v-card-text>

              <v-card-actions>
                <v-list-item class="grow">
                  <v-row
                    align="center"
                    justify="end"
                  >
                    <v-btn class="red white--text" type="submit" >Edit</v-btn>
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
        data () {
            return {
                // v-model
                first_name: '',
                last_name: '',
                email: '',
                no_telp: '',
                alamat: '',
                foto_user: [],
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
        }, // End of Validations

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
                !currentObj.$v.email.required && errors.push('Restaurant Name is required.')
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

                  let formData = new FormData();

                  // Files
                  formData.append("foto_user", currentObj.foto_user)
                  // Text
                  formData.append("first_name", currentObj.first_name)
                  formData.append("last_name", currentObj.last_name)
                  formData.append("alamat", currentObj.alamat)
                  formData.append("no_telp", currentObj.no_telp)
                  formData.append("email", currentObj.email)

                    axios.post('api/universal/profile/identity/edit', formData)
                    .then(function (response) {
                        
                        currentObj.snack = true
                        currentObj.snackColor = 'success'
                        currentObj.snackText = 'Your Identity Has Been Succesfully Changed'

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

            getIdentity: function() {
                let currentObj = this
                
                currentObj.overlay = true

                axios.get('api/auth/me')
                .then(function (response) {

                    currentObj.first_name = response.data.user.first_name || ''
                    currentObj.last_name = response.data.user.last_name || ''
                    currentObj.email = response.data.user.email || ''
                    currentObj.alamat = response.data.user.alamat || ''
                    currentObj.no_telp = response.data.user.no_telp || ''
                    currentObj.foto_user = response.data.user.foto_user || []

                    currentObj.overlay = false

                })
                .catch(function (error) {
                    currentObj.overlay = false
                    if(error.response) {
                        currentObj.serverError = error.response.data.errors
                        currentObj.errorAlert = true
                 
                        currentObj.snack = true
                        currentObj.snackColor = 'error'
                        currentObj.snackText = 'Cannot Get Old Identity'
                    }
                })
            }
        }, // End of Methods

        mounted: function() {
            let currentObj = this
            currentObj.getIdentity()
        }, // End of Mounted
    }
</script>