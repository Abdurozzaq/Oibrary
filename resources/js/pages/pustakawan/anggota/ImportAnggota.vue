<template>
  <div class="ma-5">

    <v-row>
      <v-col cols="12">
        <v-card>
          <v-card-text>
            <v-btn
              color="blue-grey"
              class="ma-2 white--text d-block mx-auto"
              @click="downloadSample"
            >
              Download Sample
              <v-icon right dark>mdi-cloud-download</v-icon>
            </v-btn>

            <div class="text-caption">*Format File Excel Untuk Import:</div>
            <v-simple-table>
              <template v-slot:default>
                <thead>
                  <tr>
                    <th class="text-left">No</th>
                    <th class="text-left">Nama Depan</th>
                    <th class="text-left">Nama Belakang</th>
                    <th class="text-left">Email</th>
                    <th class="text-left">NIS (opsional)</th>
                    <th class="text-left">NUPTK (opsional)</th>
                    <th class="text-left">Alamat (opsional)</th>
                    <th class="text-left">No Telp (opsional)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Abdurozzaq</td>
                    <td>Nurul Hadi</td>
                    <td>Abdurozzaq@outlook.net</td>
                    <td>10032332</td>
                    <td>-</td>
                    <td>Jl. Sentul No. 57, Curug.</td>
                    <td>089603363136</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
            <div class="text-caption">*Kolom (opsional) boleh diisi atau dikosongkan.</div>
            <div class="text-caption">*Baris judul pada sample jangan dihapus.</div>
          </v-card-text>
        </v-card>

        <br>

        <v-alert
          v-model="errorAlert"
          border="top"
          color="red lighten-2"
          
          dismissible
        >
          <ul v-for="(error, index) in serverError" v-bind:key="index">
            <li>
              {{ error[0] }} 
            </li>
          </ul>
        </v-alert>

        <br>

        <v-card>
          <v-card-text>

            <div class="text-h6 text-center mb-4">Import Data Anggota Dengan File Excel</div>
            <v-file-input
              label="File input"
              v-model="file"
              filled
              prepend-icon="mdi-camera"
            ></v-file-input>

            <div class="text-caption">*Ekstensi File Yang Disupport: csv, xls dan xlsx.</div>

            <v-btn
              color="blue-grey"
              class="ma-2 white--text d-block mx-auto"
              @click="importFile"
              :disabled="file.length == '0'"
            >
              Upload Data
              <v-icon right dark>mdi-cloud-upload</v-icon>
            </v-btn>
          </v-card-text>

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
    <v-snackbar top v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      file: [],

      // Response
      snack: false,
      snackColor: null,
      snackText: null,

      errorAlert: false,
      serverError: null,

      overlay: false,
    }
  }, // End of Data()

  methods: {
    downloadSample: function() {
      let currentObj = this

      currentObj.overlay = true
      try {
        let routeData = this.$router.resolve('/sample/importAnggotaSample.xlsx');
        window.open(routeData.href, '_blank');
        
        currentObj.overlay = false
        currentObj.snack = true
        currentObj.snackColor = 'success'
        currentObj.snackText = 'Berhasil Download Sample'
      } catch (error) {
        currentObj.overlay = false
        currentObj.snack = true
        currentObj.snackColor = 'error'
        currentObj.snackText = 'Tidak Bisa Download Sample'
        currentObj.overlay = false
      }
      
    }, // End of Download Sample ()

    importFile: function () {
      let currentObj = this

      currentObj.errorAlert = false
      currentObj.overlay = true

      let formData = new FormData();

      // Files
      formData.append("file", currentObj.file)

      axios.post('api/perpus/users/member/import', formData)
        .then(function (response) {

          // after success show successSnackbar
          currentObj.snack = true
          currentObj.snackColor = 'success'
          currentObj.snackText = 'Data Anggota telah berhasil di tambahkan!'

          currentObj.overlay = false

          currentObj.$v.$reset()
          currentObj.$router.push('/perpus/anggota/list')
          

        })
        .catch(function (error) {
          currentObj.overlay = false
          if(error.response) {
            currentObj.serverError = error.response.data.errors
            currentObj.errorAlert = true
            console.log(error.response.data)
          }
        })
    }
  }
}
</script>