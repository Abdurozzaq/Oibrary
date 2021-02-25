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

        <div v-if="$vuetify.breakpoint.smAndDown" class="text-center">
					<v-menu offset-y>
						<template v-slot:activator="{ on, attrs }">
							<v-btn
								icon
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
								:to="item.link"
							>
								<v-list-item-title>{{ item.title }}</v-list-item-title>
							</v-list-item>
						</v-list>
					</v-menu>
				</div>

        <v-avatar
          v-if="logo_sekolah && $vuetify.breakpoint.smAndUp"
          size="48"
        >
          <img
            :src="logo_sekolah"
            alt="Logo"
          >
        </v-avatar>

        <v-toolbar-title
					style="width: 200px"
					class="ml-0 pl-4"
        >
          <div class="my-auto text-caption text-sm-caption text-md-subtitle-2 text-lg-h6">SMKN 12 KABTA</div>
        </v-toolbar-title>

        <v-spacer></v-spacer>

				<div v-if="$vuetify.breakpoint.mdAndUp">
					<v-btn to="/" class="white--text mr-2" outlined rounded>
            			LOGIN
					</v-btn>
					<v-btn to="/forgot-password" class="white--text" outlined rounded>
						FORGOT PASSWORD?
					</v-btn>
					<!-- <v-btn to="/register" class="white--text" outlined rounded>
						REGISTER
					</v-btn> -->
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
				title: "Forgot Password",
				link: "/forgot-password"
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
