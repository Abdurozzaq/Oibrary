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
						lg="4"
						class="text-center"
          >
            <v-img
							class="mb-4"
							src="/statics/activation.png"
						></v-img>

						<br>

						<div>Thank You, Now Your Account is Activated!</div>

						<br>

						<v-btn
							rounded
							color="deep-purple"
							dark
							@click.prevent="redirectToLogin"
							class="mx-auto"
						>
							Back To Login Page
						</v-btn>
          </v-col>
        </v-row>
      </v-container>

      <v-snackbar
        v-model="snackbar"
        :timeout="5000"
        :color="snackbarColor"
      >
        {{ snackbarText }}
        <v-btn
          color="white"
          text
          @click="snackbar = false"
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
    data() {
      return {
        snackbar: false,
				snackbarColor: "",
				snackbarText: "",
      }
    },

    methods: {
			redirectToLogin: function() {
				let currentObj = this

				currentObj.snackbar = true
				currentObj.snackbarColor = "success"
				currentObj.snackbarText = "Redirecting to login page..."

				currentObj.$router.push('/')
			}
    } // end of methods
  }
</script>