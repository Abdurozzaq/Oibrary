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
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login form</v-toolbar-title>
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
                    <li>
                      {{ error[0] }} 
                    </li>
                  </ul>
                </v-alert>
                <v-form v-on:submit.prevent="login">
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="person"
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

                  <v-btn type="submit" color="primary">Login</v-btn>
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
                color="primary"
                dark
                flat
              >
                <v-btn href="/register" outlined class="mr-2" color="white">Register</v-btn>
                <v-btn href="/forgot-password" outlined class="mr-2" color="white">Forgot Password?</v-btn>
               
              </v-toolbar>
              <v-toolbar
                color="primary"
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
        You has been logged in successfully. Redirecting to Dashboard...
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
        email: null,
        password: null,
        serverError: null,
        errorAlert: false,
        successSnackbar: false,
        overlay: false,
        serverErrorCode: null,
      }
    },

    methods: {
      login: function() {
        let currentObj = this
        currentObj.errorAlert = false
        currentObj.overlay = true

          axios.post('api/auth/login', {
            email: currentObj.email,
            password: currentObj.password
          })
          .then(function (response) {
            const token = response.data.access_token
            console.log(token)
            // add bearer token to localstorage
            localStorage.setItem('userToken', token)

            if (token) {
              axios.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token
            }

            // after success show successSnackbar
            currentObj.successSnackbar = true

            currentObj.overlay = false

            // after all success redirect to home
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
                    currentObj.$router.push('/siAdmino')
                  } else {
                    currentObj.$router.push('/home')
                  }
              })
              .catch(function (error) {
                  // handle error
                  console.log(error);
              })


          })
          .catch(function (error) {
            localStorage.removeItem('userToken')
            currentObj.overlay = false
            if(error.response) {
              currentObj.serverError = error.response.data.errors
              currentObj.errorAlert = true
            }
          })
      }, // end of login method
    } // end of methods
  }
</script>