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
            <v-card-title class="purple darken-3">
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
                      label="First Name"
                      single-line
                      filled
                      
                      required
                      :error-messages="firstNameErrors"
                      v-model="first_name"
                      @input="$v.first_name.$touch()" 
                      @blur="$v.first_name.$touch()"
                    ></v-text-field>

                    <v-text-field
                      label="Last Name"
                      single-line
                      filled
                      
                      required
                      :error-messages="lastNameErrors"
                      v-model="last_name"
                      @input="$v.last_name.$touch()" 
                      @blur="$v.last_name.$touch()"
                    ></v-text-field>

                    <v-text-field
                      label="Email"
                      single-line
                      filled
                      
                      required
                      :error-messages="emailErrors"
                      v-model="email"
                      @input="$v.email.$touch()" 
                      @blur="$v.email.$touch()"
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
                    <v-btn class="purple white--text" type="submit" >Edit</v-btn>
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
                    axios.post('api/universal/profile/identity/edit', {
                        first_name: currentObj.first_name,
                        last_name: currentObj.last_name,
                        email: currentObj.email
                    })
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

                    currentObj.first_name = response.data.user.first_name
                    currentObj.last_name = response.data.user.last_name
                    currentObj.email = response.data.user.email
                    

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