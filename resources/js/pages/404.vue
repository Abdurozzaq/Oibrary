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
                <v-toolbar-title>404</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-avatar
                    class="d-block mx-auto"
                    size="200"
                    tile
                >
                    <v-img src="/statics/404-error.png"></v-img>
                </v-avatar>
                <br>
                <div class="text-center">Route Tidak di Temukan! Nah lo...</div>
              </v-card-text>
              <v-toolbar
                color="grey darken-4"
                dark
                flat
              >
                <v-btn @click.prevent="redirect()" outlined class="mr-2" color="white">Go Back To Dashboard</v-btn>
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
      redirect: function() {
        let currentObj = this
          axios.get('api/auth/me')
            .then(function (response) {
                let userRole = response.data.role
                if (userRole == "admin") {
                  currentObj.$router.push('/siAdmino')
                } 
                if (userRole == 'pustakawan') {
                  currentObj.$router.push('/perpus')
                }
                if(userRole.length == 0) {
                  currentObj.$router.push('/')
                }
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

      },
    } // end of methods
  }
</script>