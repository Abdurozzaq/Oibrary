<template>
  <v-content class="pt-0">
		<v-container
			fluid
			class="fill-height py-0"
		>
			<v-row
				align="center"
				justify="center"
			>
				<v-col
					cols="12"
					sm="12"
					md="7"
					lg="7"
				>
					<v-img
						src="/statics/reset-password.png"
						max-width="400"
						class="mx-auto"
					>
					</v-img>
				</v-col>

				<v-col
					cols="12"
					sm="12"
					md="5"
					lg="5"
					class="pa-0"
				>
					<v-card
						height="130vh"
						dark
						class="deep-purple d-flex align-center"
						rounded="0"
					>

						<v-row>
							<v-col>
								<v-card-text class="text-center">
									<div class="text-h6">Reset Password!</div>
									<div class="text-subtitle1 pb-3">Please, keep your new password safe</div>
								</v-card-text>

								<v-card-text v-if="serverError" class="py-0">
									<error-alert class="mx-5" v-if="serverError" :serverError="serverError"/>
								</v-card-text>

								<v-card-text class="text-center">
									<v-form v-on:submit.prevent="resetPass">

										<v-text-field
											label="Email"
											filled
											dense
											class="mx-5"
											v-model="email"
											type="email"
										></v-text-field>

										<v-text-field
											label="Password"
											filled
											dense
											class="mx-5"
											v-model="password"
											type="password"
										></v-text-field>

										<v-text-field
											label="Password"
											filled
											dense
											class="mx-5"
											v-model="password_confirmation"
											type="password"
										></v-text-field>

										<v-btn
											rounded
											color="white"
											width="300px"
											class="mb-3"
											type="submit"
										>
											<div class="font-weight-bold deep-purple--text">Reset Password</div>
										</v-btn>
									</v-form>

									<a class="text-subtitle1 white--text" href="/">Login?</a>
									<!-- <a class="text-subtitle1 white--text" href="/resend-verification-mail">Resend Verification Mail?</a> -->
								</v-card-text>
							</v-col>
						</v-row>

						<!-- Loading -->
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
</template>

<script>
  import ErrorAlert from "../../components/ErrorAlert.vue"
  import axios from 'axios'
  export default {
		components: {
			ErrorAlert,
		},

    data() {
      return {
        email: "",
        password: "",
        password_confirmation: "",
        serverError: "",
        snackbar: false,
				snackbarColor: "",
				snackbarText: "",
        overlay: false,
      }
    },

    methods: {
      resetPass: function() {
        let currentObj = this
        currentObj.serverError = ""
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
            currentObj.snackbar = true
						currentObj.snackbarColor = 'success'
						currentObj.snackbarText = "Password has been changed sucessfully, now redirecting to login page..."
						currentObj.overlay = false

						setTimeout(function() 
						{ 
							currentObj.$router.push('/')
						}, 3000);

          })
          .catch(function (error) {
            currentObj.overlay = false
            if(error.response) {
              currentObj.serverError = error.response.data.errors
							currentObj.password = ""
							currentObj.password_confirmation = ""
            }
          })
      } // end of login method
    } // end of methods
  }
</script>