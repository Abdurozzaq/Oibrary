<template>
  <v-app>
    <v-app-bar
      app
      dark
    >
      <v-toolbar-title
        style="width: 300px"
        class="ml-0 pl-4"
      >
        <span>OZZAQDEV</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn href="/login" text>
        LOGIN
      </v-btn>
      <v-btn href="/register" text>
        REGISTER
      </v-btn>
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content class="gradient">

      <!-- Provides the application the proper gutter -->
      <v-container fluid>

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

      }
    }
  }
</script>

<style>
  .font {
    font-family: 'Baloo Da 2', cursive;
  }
  .gradient {
    background: #BBD2C5;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #292E49, #536976, #BBD2C5);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #292E49, #536976, #BBD2C5); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
</style>