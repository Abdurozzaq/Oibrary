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
      Your Cashier Users List
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Masukan Sesuatu..."
          hint="Search"
          persistent-hint
          single-line
          append-outer-icon="mdi-send"
          @click:append-outer="searchOrder"
          class="mb-3"
        ></v-text-field>
      </v-card-title>

      <v-data-table
        v-if="daftarBuku && daftarBukuFiltered == null"
        :headers="headers"
        :items="daftarBuku"
        :items-per-page="5"
        class="elevation-1"
      >

        <template v-slot:[`item.created_at`]="{ item }">
          <span>{{ new Date(item.created_at).toLocaleString() }}</span>
        </template>

        <template v-slot:[`item.action`]="props">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="green" @click.prevent="openEditDetails(props.item)">
                <v-icon dark>mdi-account-edit</v-icon>
              </v-btn>
            </template>
            <span>Edit User</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="red" @click.prevent="deleteUser(props.item)">
                <v-icon dark>mdi-account-remove</v-icon>
              </v-btn>
            </template>
            <span>Delete User</span>
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
        v-if="daftarBuku && daftarBukuFiltered != null"
        :headers="headers"
        :items="daftarBukuFiltered"
        :items-per-page="5"
        class="elevation-1"
      >

        <template v-slot:[`item.created_at`]="{ item }">
          <span>{{ new Date(item.created_at).toLocaleString() }}</span>
        </template>

        <template v-slot:[`item.action`]="props">

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="green" @click.prevent="openEditDetails(props.item)">
                <v-icon dark>mdi-account-edit</v-icon>
              </v-btn>
            </template>
            <span>Edit User</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="red" @click.prevent="deleteUser(props.item)">
                <v-icon dark>mdi-account-remove</v-icon>
              </v-btn>
            </template>
            <span>Delete User</span>
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

    <v-dialog v-model="editBukuDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="editBukuDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Edit Buku</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="editBuku()">Save</v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-card-text>
          <v-row>
            <v-col cols="12">
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

              <v-row>
                <v-col cols="12" lg="6" md="12" sm="12" xs="12">
                  <v-text-field
                    label="Judul Buku"
                    hint="Judul Buku | Required"
                    persistent-hint
                    single-line
                    filled
                    required
                    :error-messages="judulBukuErrors"
                    v-model="edit_judul_buku"
                    @input="$v.edit_judul_buku.$touch()" 
                    @blur="$v.edit_judul_buku.$touch()"
                  ></v-text-field>

                  <v-text-field
                    label="Pengarang Buku"
                    hint="Pengarang Buku | Required"
                    persistent-hint
                    single-line
                    filled
                    required
                    :error-messages="pengarangBukuErrors"
                    v-model="edit_pengarang_buku"
                    @input="$v.edit_pengarang_buku.$touch()" 
                    @blur="$v.edit_pengarang_buku.$touch()"
                  ></v-text-field>

                  <v-text-field
                    label="Penerbit Buku"
                    hint="Penerbit Buku | Required"
                    persistent-hint
                    single-line
                    filled
                    required
                    :error-messages="penerbitBukuErrors"
                    v-model="edit_penerbit_buku"
                    @input="$v.edit_penerbit_buku.$touch()" 
                    @blur="$v.edit_penerbit_buku.$touch()"
                  ></v-text-field>

                  <v-text-field
                    label="Tahun Terbit Buku"
                    hint="Tahun Terbit Buku | Required"
                    persistent-hint
                    single-line
                    filled
                    required
                    :error-messages="tahunTerbitBukuErrors"
                    v-model="edit_tahun_terbit_buku"
                    @input="$v.edit_tahun_terbit_buku.$touch()" 
                    @blur="$v.edit_tahun_terbit_buku.$touch()"
                  ></v-text-field>

                </v-col>

                <v-col cols="12" lg="6" md="12" sm="12" xs="12">
                  <v-text-field
                    label="Jumlah Halaman Buku"
                    hint="Jumlah Halaman Buku | Required"
                    persistent-hint
                    single-line
                    filled
                    required
                    :error-messages="jumlahHalamanBukuErrors"
                    v-model="edit_jumlah_halaman_buku"
                    @input="$v.edit_jumlah_halaman_buku.$touch()" 
                    @blur="$v.edit_jumlah_halaman_buku.$touch()"
                  ></v-text-field>

                  <v-text-field
                    label="Stok Buku"
                    hint="Stok Buku | Required"
                    persistent-hint
                    single-line
                    filled
                    required
                    :error-messages="stokBukuErrors"
                    v-model="edit_stok_buku"
                    @input="$v.edit_stok_buku.$touch()" 
                    @blur="$v.edit_stok_buku.$touch()"
                  ></v-text-field>

                  <v-text-field
                    label="Nama Rak"
                    hint="Nama Rak | Required"
                    persistent-hint
                    single-line
                    filled
                    required
                    :error-messages="namaRakErrors"
                    v-model="edit_nama_rak"
                    @input="$v.edit_nama_rak.$touch()" 
                    @blur="$v.edit_nama_rak.$touch()"
                  ></v-text-field>
                  
                  <v-text-field
                    label="Lokasi Rak"
                    hint="Lokasi Rak | Required"
                    persistent-hint
                    single-line
                    filled
                    required
                    :error-messages="lokasiRakErrors"
                    v-model="edit_lokasi_rak"
                    @input="$v.edit_lokasi_rak.$touch()" 
                    @blur="$v.edit_lokasi_rak.$touch()"
                  ></v-text-field>
                </v-col>
              </v-row>
              
            <v-row justify="start">
              <v-col cols="12" lg="6" md="12" sm="12" xs="12">
                <v-file-input
                    label="Foto Buku"
                    filled
                    prepend-icon="mdi-camera"
                    v-model="edit_foto_buku"
                  ></v-file-input>
              </v-col>
            </v-row>
              
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

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

        // User List
        editBukuDialog: false,
        overlayEditBuku: false,
        total: null,

        // Form
        edit_id: null,
        edit_judul_buku: null,
        edit_pengarang_buku: null,
        edit_penerbit_buku: null,
        edit_tahun_terbit_buku: null,
        edit_foto_buku: null,
        edit_jumlah_halaman_buku: null,
        edit_stok_buku: null,
        edit_nama_rak: null,
        edit_lokasi_rak: null,

        // Form Response
        editErrorAlert: false,
        editServerError: null,

        serverError: null,
        errorAlert: false,

        snack: false,
        snackColor: null,
        snackText: null,

        // Data Table
        search: null,
        
        daftarBuku: null,
        daftarBukuFiltered: null,
        overlay: false,
        headers: [
          {
            text: 'Foto Buku',
            align: 'start',
            sortable: true,
            value: 'foto_buku'
          },
          {
            text: 'Kode Buku',
            align: 'start',
            sortable: true,
            value: 'kode_buku_full',
          },
          {
            text: 'Judul',
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
            text: 'Penerbit',
            align: 'start',
            sortable: true,
            value: 'penerbit_buku',
          },
          {
            text: 'Tahun Terbit',
            align: 'start',
            sortable: true,
            value: 'tahun_terbit_buku',
          },
          {
            text: 'Jumlah Halaman',
            align: 'start',
            sortable: true,
            value: 'jumlah_halaman_buku',
          },
          {
            text: 'Stok',
            align: 'start',
            sortable: true,
            value: 'stok_buku',
          },
          {
            text: 'Nama Rak',
            align: 'start',
            sortable: true,
            value: 'nama_rak',
          },
          {
            text: 'Lokasi Rak',
            align: 'start',
            sortable: true,
            value: 'lokasi_rak',
          },
          {
            text: 'Action',
            value: 'action',
            sortable: false
          }
        ],
      }
    }, // end of data()

    validations: {
      edit_judul_buku: {
        required,
      },
      edit_pengarang_buku: {
        required,
      },
      edit_penerbit_buku: {
        required,
      },
      edit_tahun_terbit_buku: {
        required,
      },
      edit_jumlah_halaman_buku: {
        required,
      },
      edit_stok_buku: {
        required,
      },
      edit_nama_rak: {
        required,
      },
      edit_lokasi_rak: {
        required,
      },
    }, // end of validations

    computed: {
      judulBukuErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.edit_judul_buku.$dirty) return errors
        !currentObj.$v.edit_judul_buku.required && errors.push('Judul Buku harus di isi.')
        return errors
      },
      pengarangBukuErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.edit_pengarang_buku.$dirty) return errors
        !currentObj.$v.edit_pengarang_buku.required && errors.push('Pengarang Buku harus di isi.')
        return errors
      },
      penerbitBukuErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.edit_penerbit_buku.$dirty) return errors
        !currentObj.$v.edit_penerbit_buku.required && errors.push('Penerbit Buku harus di isi.')
        return errors
      },
      tahunTerbitBukuErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.edit_tahun_terbit_buku.$dirty) return errors
        !currentObj.$v.edit_tahun_terbit_buku.required && errors.push('Tahun Terbit harus di isi.')
        return errors
      },
      jumlahHalamanBukuErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.edit_jumlah_halaman_buku.$dirty) return errors
        !currentObj.$v.edit_jumlah_halaman_buku.required && errors.push('Jumlah Halaman Buku harus di isi.')
        return errors
      },
      stokBukuErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.edit_stok_buku.$dirty) return errors
        !currentObj.$v.edit_stok_buku.required && errors.push('Stok Buku harus di isi.')
        return errors
      },
      namaRakErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.edit_nama_rak.$dirty) return errors
        !currentObj.$v.edit_nama_rak.required && errors.push('Nama Rak harus di isi.')
        return errors
      },
      lokasiRakErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.edit_lokasi_rak.$dirty) return errors
        !currentObj.$v.edit_lokasi_rak.required && errors.push('Lokasi Rak harus di isi.')
        return errors
      },
    }, // End of Computed

    methods: {
      getData: function() {
        let currentObj = this

        currentObj.overlay = true
        axios.get('api/perpus/buku/list')
          .then(function (response) {

            currentObj.daftarBuku = response.data.data
            currentObj.overlay = false
          })
          .catch(function (error) {
            if(error.response) {
              currentObj.serverError = error.response.data.errors
              currentObj.errorAlert = true
            }
            currentObj.overlay = false
          })
      },

      searchOrder: function() {
        let currentObj = this
        if (currentObj.search != null) {
          currentObj.daftarBukuFiltered = currentObj.daftarBuku.filter(
            buku => 
            buku.kode_buku_full.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            buku.judul_buku.toLowerCase().includes(currentObj.search.toLowerCase()) 
            ||
            buku.penerbit_buku.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            buku.pengarang_buku.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            buku.tahun_terbit_buku.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            buku.lokasi_rak.toLowerCase().includes(currentObj.search.toLowerCase())
            ||
            buku.nama_rak.toLowerCase().includes(currentObj.search.toLowerCase())
          )

        } else {
          currentObj.daftarBukuFiltered = null
        }

      },

      openEditDetails: function(item) {
        let currentObj = this
        currentObj.editBukuDialog = true
        currentObj.edit_id = item.id
        currentObj.edit_judul_buku = item.judul_buku
        currentObj.edit_pengarang_buku = item.pengarang_buku
        currentObj.edit_penerbit_buku = item.penerbit_buku
        currentObj.edit_tahun_terbit_buku = item.tahun_terbit_buku
        currentObj.edit_jumlah_halaman_buku = item.jumlah_halaman_buku
        currentObj.edit_stok_buku = item.stok_buku
        currentObj.edit_nama_rak = item.nama_rak
        currentObj.edit_lokasi_rak = item.lokasi_rak
      },

      closeAndResetVar: function () {
        let currentObj = this

        currentObj.editBukuDialog = false
        currentObj.edit_id = null
        currentObj.edit_judul_buku = null
        currentObj.edit_pengarang_buku = null
        currentObj.edit_penerbit_buku = null
        currentObj.edit_tahun_terbit_buku = null
        currentObj.edit_foto_buku = null
        currentObj.edit_jumlah_halaman_buku = null
        currentObj.edit_stok_buku = null
        currentObj.edit_nama_rak = null
        currentObj.edit_lokasi_rak = null
      },

      editBuku: function () {
        let currentObj = this

        currentObj.overlayEditBuku = true
        if (currentObj.$v.$invalid) {
          currentObj.snack = true
          currentObj.snackColor = 'error'
          currentObj.snackText = 'Please Enter The Valid Data'
        } else {

          let formData = new FormData();

          // Files
          formData.append("foto_buku", currentObj.edit_foto_buku)
          // Text
          formData.append("judul_buku", currentObj.edit_judul_buku)
          formData.append("pengarang_buku", currentObj.edit_pengarang_buku)
          formData.append("penerbit_buku", currentObj.edit_penerbit_buku)
          formData.append("tahun_terbit_buku", currentObj.edit_tahun_terbit_buku)
          formData.append("jumlah_halaman_buku", currentObj.edit_jumlah_halaman_buku)
          formData.append("stok_buku", currentObj.edit_stok_buku)
          formData.append("nama_rak", currentObj.edit_nama_rak)
          formData.append("lokasi_rak", currentObj.edit_lokasi_rak)

          axios.post('api/perpus/buku/edit/' + currentObj.edit_id, formData)
            .then(function (response) {
              currentObj.overlayEditBuku = false
              currentObj.snack = true
              currentObj.snackColor = 'success'
              currentObj.snackText = 'Data buku telah berhasil diubah'
              currentObj.closeAndResetVar()
              currentObj.getData()
              currentObj.daftarBukuFiltered = null
              currentObj.search = null
            })
            .catch(function (error) {
              if(error.response) {
                currentObj.editServerError = error.response.data.errors
                currentObj.editErrorAlert = true
              }
              currentObj.overlayEditBuku = false
            })
        }
      },

      deleteUser: function (item) {
        let currentObj = this
        currentObj.overlay = true

        axios.post('api/perpus/buku/delete/' + item.id)
          .then(function (response) {
            currentObj.overlay = false
            currentObj.snack = true
            currentObj.snackColor = 'success'
            currentObj.snackText = 'Buku telah berhasil di hapus'
            currentObj.getData()
            currentObj.daftarBukuFiltered = null
            currentObj.search = null
          })
          .catch(function (error) {
            if(error.response) {
              currentObj.serverError = error.response.data.errors
              currentObj.errorAlert = true
            }
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
