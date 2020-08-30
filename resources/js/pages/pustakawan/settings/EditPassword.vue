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
                mdi-account-key
              </v-icon>
              <span class="title white--text">Change Your Password</span>
            </v-card-title>
            
              <v-card-text class="headline font-weight-bold">
                <v-row>
                  <v-col cols="12">
                    <v-alert
                      v-model="errorAlert"
                      border="top"
                      color="red lighten-2"
                      dark
                      dismissible
                    >
                      <ul v-for="(error, index) in serverError" v-bind:key="index">
                        <li>
                          {{ error[0] }} 
                        </li>
                      </ul>
                    </v-alert>

                    <v-text-field
                      label="Your New Password"
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
                      single-line
                      filled
                      required
                      type="password"
                      :error-messages="passwordConfirmationErrors"
                      v-model="password_confirmation"
                      @input="$v.password_confirmation.$touch()" 
                      @blur="$v.password_confirmation.$touch()"
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
                    <v-btn class="purple white--text" type="submit" >Change</v-btn>
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
                password: null,
                password_confirmation: null,

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
            password: {
                required,
            },
            password_confirmation: {
                required,
            },
        }, // End of Validations

        computed: {
            passwordErrors () {
                let currentObj = this
                const errors = []
                if (!currentObj.$v.password.$dirty) return errors
                !currentObj.$v.password.required && errors.push('New Password is required.')
                return errors
            },
            passwordConfirmationErrors () {
                let currentObj = this
                const errors = []
                if (!currentObj.$v.password_confirmation.$dirty) return errors
                !currentObj.$v.password_confirmation.required && errors.push('Password Confirmation is required.')
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
                    axios.post('api/universal/profile/password/edit', {
                        password: currentObj.password,
                        password_confirmation: currentObj.password_confirmation,
                    })
                    .then(function (response) {
                        
                        currentObj.snack = true
                        currentObj.snackColor = 'success'
                        currentObj.snackText = 'Your Password Has Been Succesfully Changed'

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
    }
</script>