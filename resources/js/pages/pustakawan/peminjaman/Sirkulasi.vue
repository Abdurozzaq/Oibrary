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
      Sirkulasi
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

      <v-data-table
        v-if="daftarPeminjaman && daftarPeminjamanFiltered == null"
        :headers="headers"
        :items="daftarPeminjaman"
        :items-per-page="5"
        class="elevation-1"
      >

        <template v-slot:[`item.tanggal_pinjam`]="{ item }">
          <span>{{ moment(item.tanggal_pinjam).format('DD-MM-YYYY') }}</span>
        </template>

        <template v-slot:[`item.tanggal_harus_kembali`]="{ item }">
          <span>{{ moment(item.tanggal_harus_kembali).format('DD-MM-YYYY') }}</span>
        </template>

        <template v-slot:[`item.action`]="props">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="green" @click.prevent="perpanjang(props.item)">
                <v-icon dark>mdi-autorenew</v-icon>
              </v-btn>
            </template>
            <span>Perpanjang</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="green" @click.prevent="kembalikan(props.item)">
                <v-icon dark>mdi-inbox-arrow-down</v-icon>
              </v-btn>
            </template>
            <span>Kembalikan</span>
          </v-tooltip>

        </template>

        <template v-slot:[`item.foto_buku`]="props">
          <v-img
            :src="props.item.foto_buku"
            aspect-ratio="1"
            max-width="500"
            max-height="300"
          >
          </v-img>
        </template>

      </v-data-table>

      <v-data-table
        v-if="daftarPeminjaman && daftarPeminjamanFiltered != null"
        :headers="headers"
        :items="daftarPeminjamanFiltered"
        :items-per-page="5"
        class="elevation-1"
      >

        <template v-slot:[`item.tanggal_pinjam`]="{ item }">
          <span>{{ moment(item.tanggal_pinjam).format('DD-MM-YYYY') }}</span>
        </template>

        <template v-slot:[`item.tanggal_harus_kembali`]="{ item }">
          <span>{{ moment(item.tanggal_harus_kembali).format('DD-MM-YYYY') }}</span>
        </template>

        <template v-slot:[`item.action`]="props">

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="green" @click.prevent="perpanjang(props.item)">
                <v-icon dark>mdi-autorenew</v-icon>
              </v-btn>
            </template>
            <span>Perpanjang</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="green" @click.prevent="kembalikan(props.item)">
                <v-icon dark>mdi-inbox-arrow-down</v-icon>
              </v-btn>
            </template>
            <span>Kembalikan</span>
          </v-tooltip>

        </template>

        <template v-slot:[`item.foto_buku`]="props">
          <v-img
            :src="props.item.foto_buku"
            aspect-ratio="1"
            max-width="500"
            max-height="300"
          >
          </v-img>
        </template>
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
            text: 'Kode Peminjaman',
            align: 'start',
            sortable: true,
            value: 'kode_peminjaman_full'
          },
          {
            text: 'Judul Buku',
            align: 'start',
            sortable: true,
            value: 'judul_buku',
          },
          {
            text: 'Pengarang',
            align: 'start',
            sortable: true,
            value: 'pengarang_buku',
          },
          {
            text: 'Tgl Pinjam',
            align: 'start',
            sortable: true,
            value: 'tanggal_pinjam',
          },
          {
            text: 'Tgl Harus Kembali',
            align: 'start',
            sortable: true,
            value: 'tanggal_harus_kembali',
          },
          {
            text: 'Denda',
            align: 'start',
            sortable: true,
            value: 'denda',
          },
          {
            text: 'Action',
            value: 'action',
            sortable: false
          }
        ],
      }
    }, // end of data()

    methods: {
      getData: function() {
        let currentObj = this

        currentObj.overlay = true
        axios.get('api/perpus/sikulasi/list')
          .then(function (response) {

            currentObj.daftarPeminjaman = response.data.data
            currentObj.overlay = false
          })
          .catch(function (error) {
            currentObj.snack = true
            currentObj.snackColor = 'error'
            currentObj.snackText = 'Tidak Bisa Mendapatkan Data Peminjaman'
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
            peminjaman.pengarang_buku.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.first_name.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.last_name.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.tanggal_pinjam.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            peminjaman.tanggal_harus_kembali.toLowerCase().includes(currentObj.search.toLowerCase())
          )

        } else {
          currentObj.daftarPeminjamanFiltered = null
        }

      },

    }, // End of Methods

    

    mounted: function() {
      let currentObj = this

      currentObj.getData()
    }
  }
</script>
