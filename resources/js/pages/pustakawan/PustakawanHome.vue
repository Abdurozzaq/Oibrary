<template>
  <div class="ma-8">

    <v-row justify="start">
      <v-col
        cols="12"
        
      >
        <v-card
          class="d-flex align-center"
          color="purple accent-4"
          dark
          elevation="8"
          height="200"
        >

          <v-card-text class="text-h3 font-weight-bold" style="text-align: center;">
            Welcome To Your Dashboard
          </v-card-text>

        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: 'HomePage',
    data() {
      return {
        dialog: false,
      }
    }, // End of Data

    methods: {

    }, // End of Methods
    mounted: function () {
      let currentObj = this

    }, // End of Mounted
  }
</script>