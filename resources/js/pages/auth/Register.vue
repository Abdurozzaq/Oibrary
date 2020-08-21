<template>
  <v-app id="inspire">
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="success"
                dark
                flat
              >
                <v-toolbar-title>Register form</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-alert
                  v-model="errorAlert"
                  border="top"
                  color="red lighten-2"
                  dark
                  dismissible
                >
                  <ul v-for="(error, index) in serverError" v-bind:key="index">
                    <li>{{ error[0] }}</li>
                  </ul>
                </v-alert>

                <v-form v-on:submit.prevent="register">
                  <v-text-field
                    label="First Name"
                    name="first_name"
                    prepend-icon="person"
                    type="text"
                    v-model="first_name"
                  ></v-text-field>

                  <v-text-field
                    label="Last Name"
                    name="last_name"
                    prepend-icon="person"
                    type="text"
                    v-model="last_name"
                  ></v-text-field>

                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="mail"
                    type="text"
                    v-model="email"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  ></v-text-field>

                  <v-text-field
                    id="password"
                    label="Confirm Password"
                    name="password-confirmation"
                    prepend-icon="lock"
                    type="password"
                    v-model="password_confirmation"
                  ></v-text-field>

                  <v-btn type="submit" color="success">Register</v-btn>
                </v-form>

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

              </v-card-text>
              <v-toolbar
                color="success"
                dark
                flat
              >
                <v-btn href="/login" outlined class="mr-2" color="white">Login</v-btn>
                <v-btn href="/forgot-password" outlined class="mr-2" color="white">Forgot Password?</v-btn>
              </v-toolbar>
              <v-toolbar
                color="success"
                dark
                flat
               
              >
                <v-btn href="/resend-verification-mail" outlined class="mr-2" color="white">Resend Verification Mail?</v-btn>
              </v-toolbar>
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <v-snackbar
        v-model="successSnackbar"
        :timeout="5000"
        color="success"
      >
        You has been registered successfully. Please check your email for verify your email.
        <v-btn
          color="white"
          text
          @click="successSnackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>

    </v-content>
  </v-app>
</template>

<script>
  import axios from 'axios'
  export default {
    props: {
      source: String,
    },

    data() {
      return {
        first_name: null,
        last_name: null,
        email: null,
        password: null,
        password_confirmation: null,
        serverError: null,
        errorAlert: false,
        successSnackbar: false,
        overlay: false,
      }
    },

    methods: {
      register: function() {
        let currentObj = this
        currentObj.errorAlert = false
        currentObj.overlay = true

          axios.post('api/auth/register', {
            first_name: currentObj.first_name,
            last_name: currentObj.last_name,
            email: currentObj.email,
            password: currentObj.password,
            password_confirmation: currentObj.password_confirmation
          })
          .then(function (response) {
          
            // after success show successSnackbar
            currentObj.successSnackbar = true

            currentObj.overlay = false


          })
          .catch(function (error) {
            localStorage.removeItem('userToken')
            currentObj.overlay = false
            if(error.response) {
              currentObj.serverError = error.response.data.errors
              currentObj.errorAlert = true
            }
          })

      } // end of login method
    }
  }
</script>