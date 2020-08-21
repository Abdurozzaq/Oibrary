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
                <v-toolbar-title>Reset Password form</v-toolbar-title>
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

                <v-form v-on:submit.prevent="resetPass">

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

                  <v-btn type="submit" color="success">Reset</v-btn>
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
                <v-btn href="/register" outlined class="mr-2" color="white">Register</v-btn>
                <v-btn href="/login" outlined class="mr-2" color="white">Login</v-btn>
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
        Your password has been changed in successfully.
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
        password_confirmation: null,
        serverError: null,
        errorAlert: false,
        successSnackbar: false,
        overlay: false,
      }
    },

    methods: {
      resetPass: function() {
        let currentObj = this
        currentObj.errorAlert = false
        currentObj.overlay = true
          const token = this.$route.query.token;
          axios.post('/api/auth/password/reset', {
            email: currentObj.email,
            password: currentObj.password,
            password_confirmation: currentObj.password_confirmation,
            token: token
          })
          .then(function (response) {

            currentObj.email = null
            currentObj.password = null
            currentObj.password_confirmation = null

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
      } // end of login method
    } // end of methods
  }
</script>