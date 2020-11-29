<template>
  <v-app>
    <v-app-bar
      app
      color="transparent"
      elevation="0"
      flat
      hide-on-scroll
    >
      <v-container class="py-0 fill-height">
        <v-toolbar-title
					style="width: 300px"
					class="ml-0 pl-4"
        >
					<v-avatar
						size="48"
						v-if="logo_sekolah"
					>
						<img
							class="hidden-sm-and-down"
							:src="logo_sekolah"
							alt="Logo"
						>
					</v-avatar>
          <span>{{ nama_sekolah }}</span>
        </v-toolbar-title>

        <v-spacer></v-spacer>

				<div v-if="$vuetify.breakpoint.mdAndUp">
					<v-btn href="/" class="white--text mr-2" outlined rounded>
            			LOGIN
					</v-btn>
					<v-btn href="/forgot-password" class="white--text" outlined rounded>
						FORGOT PASSWORD?
					</v-btn>
					<!-- <v-btn href="/register" class="white--text" outlined rounded>
						REGISTER
					</v-btn> -->
				</div>

				<div v-if="$vuetify.breakpoint.smAndDown" class="text-center">
					<v-menu offset-y>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								class="mx-2"
								fab
								text
								v-bind="attrs"
								v-on="on"
							>
								<v-icon dark>
									mdi-format-list-bulleted-square
								</v-icon>
							</v-btn>
						</template>
						<v-list>
							<v-list-item
								v-for="(item, index) in menus"
								:key="index"
								:href="item.link"
							>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</div>
        
      </v-container>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content class="pt-0">
      <!-- Provides the application the proper gutter -->
      <v-container class="pa-0" fluid>

        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    name: 'LandingPage',
    data() {
      return {
		menus: [
			{
				title: "Login",
				link: "/login"
			},
			{
				title: "Register",
				link: "/register"
			}
		],
		app_name: process.env.MIX_APP_NAME
      }
	}, // end of data
	
	computed: {
      nama_sekolah: function () {
        return process.env.MIX_NAMA_SEKOLAH;
      },
      alamat_sekolah: function () {
        return process.env.MIX_ALAMAT_SEKOLAH;
      },
      logo_sekolah: function () {
        return process.env.MIX_LOGO_URL;
      }
    }, // End of Computed
  }
</script>

<style>
  .font {
    font-family: 'Baloo Da 2', cursive;
  }
</style>
