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
                color="grey darken-4"
                dark
                flat
              >
                <v-toolbar-title>Unverified Email Address!</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-avatar
                    class="d-block mx-auto"
                    size="200"
                    tile
                >
                    <v-img src="/statics/email-error-icon.png"></v-img>
                </v-avatar>
                <br>
                <div class="text-center">Please, Verifiy Your Email Before Continuing Using This App...</div>
              </v-card-text>
              <v-toolbar
                color="grey darken-4"
                dark
                flat
              >
                <v-btn href="/resend-verification-mail" outlined class="mr-2" color="white">Resend Verification Mail?</v-btn>
              </v-toolbar>
              <v-toolbar
                color="grey darken-4"
                dark
                flat
              >
                <v-btn @click.prevent="logout()" outlined class="mr-2" color="white">Logout / Change Account</v-btn>
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
        Redirecting to Resend Verification Email...
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
        successSnackbar: false,
      }
    },

    methods: {
      logout: function() {
        let currentObj = this
          axios.post('/api/auth/logout')
          .then(function (response) {
            localStorage.removeItem('userToken')
            currentObj.$router.push('/login')
          })
          .catch(function (error) {
            console.log(error);
          });
      },
    } // end of methods
  }
</script>