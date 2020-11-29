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
						height="110vh"
						dark
						class="deep-purple d-flex align-center"
						rounded="0"
					>

						<v-row>
							<v-col>
								<v-card-text class="text-center">
									<div class="text-h6">Welcome!</div>
									<div class="text-subtitle1 pb-3">Sign in to your account</div>
								</v-card-text>

								<v-card-text v-if="serverError" class="py-0">
									<error-alert class="mx-5" v-if="serverError" :serverError="serverError"/>
								</v-card-text>

								<v-card-text class="text-center">
									<v-form v-on:submit.prevent="login">
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

										<v-btn
											rounded
											color="white"
											width="300px"
											class="mb-3"
											type="submit"
										>
											<div class="font-weight-bold deep-purple--text">Sign In</div>
										</v-btn>
									</v-form>

									<a class="text-subtitle1 white--text" href="/forgot-password">Fogot Password?</a>
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
				serverError: "",
				snackbar: false,
				snackbarColor: "",
				snackbarText: "",
				overlay: false,
			}
		},

		methods: {
			login: function() {
			let currentObj = this	
			currentObj.serverError = ""
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
				currentObj.snackbar = true
				currentObj.snackbarColor = 'success'
				currentObj.snackbarText = "Sign In Successed, now redirecting to your dashboard..."
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
						} 
						if (userRole == 'pustakawan') {
							currentObj.$router.push('/perpus')
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
					currentObj.password = ""
				}
			})
		}, // end of login method
	} // end of methods
}
</script>
