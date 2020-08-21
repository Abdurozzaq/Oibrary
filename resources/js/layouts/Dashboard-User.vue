<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <v-list dense>
        <template v-for="sidebarItem in sidebar">
          <v-row
            v-if="sidebarItem.heading"
            :key="sidebarItem.heading"
            align="center"
          >
            <v-col cols="6">
              <v-subheader v-if="sidebarItem.heading">
                {{ sidebarItem.heading }}
              </v-subheader>
            </v-col>
            <v-col
              cols="6"
              class="text-center"
            >
              <a
                href="#!"
                class="body-2 black--text"
              >EDIT</a>
            </v-col>
          </v-row>
          <v-list-group
            v-else-if="sidebarItem.children"
            :key="sidebarItem.text"
            v-model="sidebarItem.model"
            :prepend-icon="sidebarItem.model ? sidebarItem.icon : sidebarItem['icon-alt']"
            append-icon=""
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>
                  {{ sidebarItem.text }}
                </v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="(child, i) in sidebarItem.children"
              :key="i"
              link
              :href="child.link"
            >
              <v-list-item-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>
                  {{ child.text }}
                </v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
          <v-list-item
            v-else
            :key="sidebarItem.text"
            link
            :href="sidebarItem.link"
          >
            <v-list-item-action>
              <v-icon>{{ sidebarItem.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                {{ sidebarItem.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Toolity</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-apps</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>mdi-bell</v-icon>
      </v-btn>
      

      <v-menu
        v-model="menu"
        :close-on-content-click="false"
        :nudge-width="200"
        offset-x
      >
        <template v-slot:activator="{ on }">
          <v-btn
            icon
            large
            v-on="on"
          >
            <v-avatar
              size="32px"
              item
            >
              <v-img
                src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
                alt="Vuetify"
              ></v-img></v-avatar>
          </v-btn>
        </template>

        <v-card>
          <v-list>
            <v-list-item>
              <v-list-item-avatar>
                <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John">
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title>John Leider</v-list-item-title>
                <v-list-item-subtitle>Founder of Vuetify.js</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list shaped dense>
            <v-subheader>REPORTS</v-subheader>
            <v-list-item-group v-model="itemPopup" color="primary">
              <v-list-item
                v-for="(ip, i) in itemsPopup"
                :key="i"
                :href="ip.url"
              >
                <v-list-item-icon>
                  <v-icon v-text="ip.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="ip.text"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
                 

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text @click="menu = false">Close</v-btn>
            <v-btn text @click="logout" color="danger">Logout</v-btn>
          </v-card-actions>
        </v-card>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-tooltip right>
            <template v-slot:activator="{ on }">
              <v-btn
                :href="source"
                icon
                large
                target="_blank"
                v-on="on"
              >
                <v-icon large>mdi-code-tags</v-icon>
              </v-btn>
            </template>
            <span>Source</span>
          </v-tooltip>
        </v-row>
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
    data: () => ({
      fav: true,
      menu: false,
      message: false,
      hints: true,
      dialog: false,
      drawer: null,

      itemPopup: 1,
      itemsPopup: [
        { text: 'Home', icon: 'mdi-view-dashboard', url: '/home' },
        { text: 'Settings', icon: 'mdi-account', url: '/settings' },
      ],

      sidebar: [
        { icon: 'mdi-view-dashboard', text: 'Home', link: '/' },
      ],
    }), // end of data

    methods: {
      logout: function() {
        let currentObj = this
        axios.get('/sanctum/csrf-cookie').then(response => {
          axios.post('/api/logout')
          .then(function (response) {
            localStorage.removeItem('userToken')
            currentObj.$router.push('/login')
          })
          .catch(function (error) {
            console.log(error);
          });
        });
      }
    }
  }
</script>