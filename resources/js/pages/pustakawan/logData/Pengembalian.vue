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
      Log Data Pengembalian Buku
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Masukan Sesuatu..."
          hint="Search"
          persistent-hint
          single-line
          append-outer-icon="mdi-send"
          @click:append-outer="serachPengembalian"
          class="mb-3"
        ></v-text-field>
      </v-card-title>

      <v-btn
        :disabled="daftarPengembalian == null"
        color="blue-grey"
        class="ma-2 white--text"
        @click.prevent="exportExcel"
      >
        Export EXCEL
        <v-icon right dark>mdi-cloud-download</v-icon>
      </v-btn>

      <v-data-table
        v-if="daftarPengembalian && daftarPengembalianFiltered == null"
        :headers="headers"
        :items="daftarPengembalian"
        :items-per-page="5"
        class="elevation-1"
      >

      </v-data-table>

      <v-data-table
        v-if="daftarPengembalian && daftarPengembalianFiltered != null"
        :headers="headers"
        :items="daftarPengembalianFiltered"
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
  export default {
    data() {
      return {

        // Form Response
        serverError: null,
        errorAlert: false,

        snack: false,
        snackColor: null,
        snackText: null,

        // Data Table
        search: null,
        
        daftarPengembalian: null,
        daftarPengembalianFiltered: null,
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
            text: 'Jumlah Buku',
            align: 'start',
            sortable: true,
            value: 'jumlah_buku',
          },
          {
            text: 'Kode Peminjaman',
            align: 'start',
            sortable: true,
            value: 'kode_peminjaman_full'
          },
          {
            text: 'Tgl Kembali',
            align: 'start',
            sortable: true,
            value: 'tanggal_pengembalian',
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
        axios.get('api/perpus/log-data/pengembalian')
          .then(function (response) {

            currentObj.daftarPengembalian = response.data.data
            currentObj.overlay = false
          })
          .catch(function (error) {
            currentObj.snack = true
            currentObj.snackColor = 'error'
            currentObj.snackText = 'Tidak Bisa Mendapatkan Data Peminjaman'
            currentObj.overlay = false
          })
      },

      serachPengembalian: function() {
        let currentObj = this
        if (currentObj.search != null) {
          currentObj.daftarPengembalianFiltered = currentObj.daftarPengembalian.filter(
            peminjaman => 
            peminjaman.kode_peminjaman_full.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.judul_buku.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.kode_user_full.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.full_name.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.tanggal_pengembalian.toLowerCase().includes(currentObj.search.toLowerCase())
          )

        } else {
          currentObj.daftarPengembalianFiltered = null
        }

      }, // serachPengembalian()

      exportExcel: function() {
        let currentObj = this

        currentObj.overlay = true
        axios.get('api/perpus/log-data/pengembalian/export', {
          responseType: 'blob'
        })
          .then(function (response) {
            var fileURL = window.URL.createObjectURL(new Blob([response.data]));
            var fileLink = document.createElement('a');

            fileLink.href = fileURL;
            fileLink.setAttribute('download', 'LogPengembalian.xlsx');
            document.body.appendChild(fileLink);

            fileLink.click();
              
            currentObj.snack = true
            currentObj.snackColor = 'success'
            currentObj.snackText = 'Berhasil Export Log Pengembalian'
            currentObj.overlay = false
          })
          .catch(function (error) {
            currentObj.snack = true
            currentObj.snackColor = 'error'
            currentObj.snackText = 'Tidak Bisa Export Log Pengembalian'
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
