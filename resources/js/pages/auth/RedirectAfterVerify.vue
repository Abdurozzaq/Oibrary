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
            <v-card
                class="mx-auto"
                color="success"
                dark
                max-width="400"
            >
                <v-card-title>
                <v-icon
                    large
                    left
                >
                    mdi-account-check
                </v-icon>
                <span class="title font-weight-light">Verification Success</span>
                </v-card-title>

                <v-card-text class="headline font-weight-bold">
                You've successfully verify your email. Thank You.
                </v-card-text>

                <v-card-actions>
                  <v-btn @click="redirect">Redirect To Login Page</v-btn>
                </v-card-actions>
                

            </v-card>
          </v-col>
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

    methods: {
      redirect: function() {
        let currentObj = this
        currentObj.$router.push('/login')
      }
    }, // end of methods

    mounted: function() {
        let currentObj = this
    }
}

  
</script>