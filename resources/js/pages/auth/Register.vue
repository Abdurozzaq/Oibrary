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
						src="/statics/login.png"
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
									<div class="text-h6">Welcome! you're new, right?</div>
									<div class="text-subtitle1 pb-3">Let's Create An Account</div>
								</v-card-text>

								<v-card-text v-if="serverError" class="py-0">
									<error-alert class="mx-5" v-if="serverError" :serverError="serverError"/>
								</v-card-text>

								<v-card-text class="text-center">
									<v-form v-on:submit.prevent="register">
										<v-text-field
											label="First Name"
											filled
											dense
											class="mx-5"
											v-model="first_name"
											type="text"
										></v-text-field>

										<v-text-field
											label="last Name"
											filled
											dense
											class="mx-5"
											v-model="last_name"
											type="text"
										></v-text-field>

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
											<div class="font-weight-bold deep-purple--text">Register</div>
										</v-btn>
									</v-form>

									<a class="text-subtitle1 white--text" href="/">Already a member?</a>
									<a class="text-subtitle1 white--text" href="/resend-verification-mail">Resend Verification Mail?</a>
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
        first_name: "",
        last_name: "",
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
      register: function() {
        let currentObj = this
        currentObj.serverError = ""
        currentObj.overlay = true

          axios.post('api/auth/register', {
            first_name: currentObj.first_name,
            last_name: currentObj.last_name,
            email: currentObj.email,
            password: currentObj.password,
            password_confirmation: currentObj.password_confirmation
          })
          .then(function (response) {

						currentObj.first_name = ""
						currentObj.last_name = ""
						currentObj.email = ""
						currentObj.password = ""
						currentObj.password_confirmation = ""

            // after success show successSnackbar
            currentObj.snackbar = true
						currentObj.snackbarColor = 'success'
						currentObj.snackbarText = "Register successed, check your email for confirmation link..."

            currentObj.overlay = false


          })
          .catch(function (error) {
            localStorage.removeItem('userToken')
            currentObj.overlay = false
            if(error.response) {
              currentObj.serverError = error.response.data.errors
							currentObj.password = ""
							currentObj.password_confirmation = ""
            }
          })

      } // end of login method
    }
  }
</script>