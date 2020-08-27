<template>
  <div class="ma-5">

    <v-alert
      v-model="errorAlert"
      border="top"
      color="red lighten-2"
      dark
      dismissible
    >
      <ul v-for="(error, index) in serverError" v-bind:key="index">
        <li>
          {{ error[0] }}
        </li>
      </ul>
    </v-alert>

    <v-card>
      <v-card-title>
      Log Data Peminjaman
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Masukan Sesuatu..."
          hint="Search"
          persistent-hint
          single-line
          append-outer-icon="mdi-send"
          @click:append-outer="searchPeminjaman"
          class="mb-3"
        ></v-text-field>
      </v-card-title>

      <v-btn
        :disabled="daftarPeminjaman == null"
        color="blue-grey"
        class="ma-2 white--text"
        @click.prevent="exportExcel"
      >
        Export EXCEL
        <v-icon right dark>mdi-cloud-download</v-icon>
      </v-btn>

      <v-data-table
        v-if="daftarPeminjaman && daftarPeminjamanFiltered == null"
        :headers="headers"
        :items="daftarPeminjaman"
        :items-per-page="5"
        class="elevation-1"
      >

      </v-data-table>

      <v-data-table
        v-if="daftarPeminjaman && daftarPeminjamanFiltered != null"
        :headers="headers"
        :items="daftarPeminjamanFiltered"
        :items-per-page="5"
        class="elevation-1"
      >

      </v-data-table>

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

    <v-snackbar top v-model="snack" :timeout="3000" :color="snackColor">
      {{ snackText }}

      <template v-slot:action="{ attrs }">
        <v-btn v-bind="attrs" text @click="snack = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
  import { required, email } from 'vuelidate/lib/validators'
  import axios from 'axios'
  import moment from 'moment'
  export default {
    data() {
      return {
        // plugin
        moment: moment,

        // Form Response
        serverError: null,
        errorAlert: false,

        snack: false,
        snackColor: null,
        snackText: null,

        // Data Table
        search: null,
        
        daftarPeminjaman: null,
        daftarPeminjamanFiltered: null,
        overlay: false,
        headers: [
          {
            text: 'Kode Buku',
            align: 'start',
            sortable: true,
            value: 'kode_buku_full',
          },
          {
            text: 'Judul Buku',
            align: 'start',
            sortable: true,
            value: 'judul_buku',
          },
          {
            text: 'Kode Peminjaman',
            align: 'start',
            sortable: true,
            value: 'kode_peminjaman_full'
          },
          {
            text: 'Tgl Pinjam',
            align: 'start',
            sortable: true,
            value: 'tanggal_pinjam',
          },
          {
            text: 'Kode Peminjam',
            align: 'start',
            sortable: true,
            value: 'kode_user_full',
          },
          {
            text: 'Nama Peminjam',
            align: 'start',
            sortable: true,
            value: 'full_name',
          },
        ],
      }
    }, // end of data()

    methods: {
      getData: function() {
        let currentObj = this

        currentObj.overlay = true
        axios.get('api/perpus/log-data/peminjaman')
          .then(function (response) {

            currentObj.daftarPeminjaman = response.data.data
            currentObj.overlay = false
          })
          .catch(function (error) {
            currentObj.snack = true
            currentObj.snackColor = 'error'
            currentObj.snackText = 'Tidak Bisa Mendapatkan Data Peminjaman'
            currentObj.overlay = false
          })
      },

      searchPeminjaman: function() {
        let currentObj = this
        if (currentObj.search != null) {
          currentObj.daftarPeminjamanFiltered = currentObj.daftarPeminjaman.filter(
            peminjaman => 
            peminjaman.kode_peminjaman_full.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.judul_buku.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.kode_user_full.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.full_name.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.tanggal_pinjam.toLowerCase().includes(currentObj.search.toLowerCase())
          )

        } else {
          currentObj.daftarPeminjamanFiltered = null
        }

      }, // searchPeminjaman()

      exportExcel: function() {
        let currentObj = this

        currentObj.overlay = true
        axios.get('api/perpus/log-data/peminjaman/export', {
          responseType: 'blob'
        })
          .then(function (response) {
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement('a');

            fileLink.href = fileURL;
            fileLink.setAttribute('download', 'LogPeminjaman.xlsx');
            document.body.appendChild(fileLink);

            fileLink.click();
              
            currentObj.snack = true
            currentObj.snackColor = 'success'
            currentObj.snackText = 'Berhasil Export Log Peminjaman'
            currentObj.overlay = false
          })
          .catch(function (error) {
            currentObj.snack = true
            currentObj.snackColor = 'error'
            currentObj.snackText = 'Tidak Bisa Export Log Peminjaman'
            currentObj.overlay = false
          })
      }

    }, // End of Methods

    

    mounted: function() {
      let currentObj = this

      currentObj.getData()
    }
  }
</script>
