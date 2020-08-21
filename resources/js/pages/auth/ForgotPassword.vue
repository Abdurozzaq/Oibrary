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
                color="warning"
                dark
                flat
              >
                <v-toolbar-title>Forgot Password Form</v-toolbar-title>
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

                <v-form v-on:submit.prevent="forgotPass">
                  <v-text-field
                    label="Email"
                    name="email"
                    prepend-icon="person"
                    type="text"
                    v-model="email"
                  ></v-text-field>

                  <v-btn type="submit" color="warning">Send Reset Email</v-btn>
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
                color="warning"
                dark
                flat
              >
                <v-btn href="/register" outlined class="mr-2" color="white">Register</v-btn>
                <v-btn href="/login" outlined class="mr-2" color="white">Login</v-btn>
              </v-toolbar>
              <v-toolbar
                color="warning"
                dark
                flat
              >
                <v-btn href="/resend-verification-mail" outlined class="mr-2" color="white">Resend Verification Mail?</v-btn>
              </v-toolbar>
            </v-card>
          </v-col>
        </v-row>

        <v-snackbar
        v-model="successSnackbar"
        :timeout="5000"
        color="success"
      >
        Reset link has been sent successfully.
        <v-btn
          color="white"
          text
          @click="successSnackbar = false"
        >
          Close
        </v-btn>
      </v-snackbar>

      </v-container>
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
        serverError: null,
        errorAlert: false,
        successSnackbar: false,
        overlay: false,
      }
    },

    methods: {
      forgotPass: function() {
        let currentObj = this
        currentObj.errorAlert = false
        currentObj.overlay = true
        
          axios.post('/api/auth/password/forgot', {
            email: currentObj.email,
          })
          .then(function (response) {

            // after success show successSnackbar
            currentObj.successSnackbar = true

            currentObj.overlay = false


          })
          .catch(function (error) {
            currentObj.overlay = false
            if(error.response) {
              currentObj.serverError = error.response.data.errors
              currentObj.errorAlert = true
            }
          })
      } // end of forgot password method
    } // end of methods
  }
</script>