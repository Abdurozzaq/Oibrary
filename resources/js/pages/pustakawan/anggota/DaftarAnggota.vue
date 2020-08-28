<template>
  <div class="ma-5">

    <v-card>
      <v-card-title>
      Daftar Anggota
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          hint="Cari Dengan Kode, Nama, NIS, NUPTK, Atau Email."
          persistent-hint
          single-line
          append-outer-icon="mdi-send"
          @click:append-outer="searchAnggota"
          class="mb-3"
        ></v-text-field>
      </v-card-title>

      <v-data-table
        v-if="daftarAnggota && daftarAnggotaFiltered == null"
        :headers="headers"
        :items="daftarAnggota"
        :items-per-page="5"
        class="elevation-1"
      >

        <template v-slot:[`item.action`]="props">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="green" @click.prevent="openEditDetails(props.item)">
                <v-icon dark>mdi-tooltip-edit</v-icon>
              </v-btn>
            </template>
            <span>Edit Anggota</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="red" @click.prevent="deleteAnggota(props.item)">
                <v-icon dark>mdi-trash-can-outline</v-icon>
              </v-btn>
            </template>
            <span>Delete Anggota</span>
          </v-tooltip>

        </template>

        <template v-slot:[`item.foto_user`]="props">
          <v-img
            v-if="props.item.foto_user"
            :src="props.item.foto_user"
            aspect-ratio="1"
            max-width="500"
            max-height="300"
          >
          </v-img>

          <v-avatar v-else color="purple">
            <span class="white--text headline">{{ props.item.first_name[0] }}</span>
          </v-avatar>
        </template>

      </v-data-table>

      <v-data-table
        v-if="daftarAnggota && daftarAnggotaFiltered != null"
        :headers="headers"
        :items="daftarAnggotaFiltered"
        :items-per-page="5"
        class="elevation-1"
      >

        <template v-slot:[`item.action`]="props">

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="green" @click.prevent="openEditDetails(props.item)">
                <v-icon dark>mdi-tooltip-edit</v-icon>
              </v-btn>
            </template>
            <span>Edit Anggota</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="ma-2" fab dark small color="red" @click.prevent="deleteAnggota(props.item)">
                <v-icon dark>mdi-trash-can-outline</v-icon>
              </v-btn>
            </template>
            <span>Delete Anggota</span>
          </v-tooltip>

        </template>

        <template v-slot:[`item.foto_user`]="props">
          <v-img
            v-if="props.item.foto_user"
            :src="props.item.foto_user"
            aspect-ratio="1"
            max-width="500"
            max-height="300"
          >
          </v-img>

          <v-avatar v-else  color="purple">
            <span class="white--text headline">{{ props.item.first_name[0] }}</span>
          </v-avatar>
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

    <v-dialog v-model="editAnggotaDialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card>
        <v-toolbar dark color="primary">
          <v-btn icon dark @click="editAnggotaDialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
          <v-toolbar-title>Edit Anggota</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn dark text @click="editAnggota()">Save</v-btn>
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
                  <li class="white--text">
                    {{ error[0] }} 
                  </li>
                </ul>
              </v-alert>

              <v-row>
                <v-col cols="12" lg="6" md="12" sm="12" xs="12">
                  <v-text-field
                    label="Nama Depan"
                    hint="Nama Depan | Required"
                    persistent-hint
                    single-line
                    filled
                    
                    required
                    :error-messages="editFirstNameErrors"
                    v-model="edit_first_name"
                    @input="$v.edit_first_name.$touch()" 
                    @blur="$v.edit_first_name.$touch()"
                  ></v-text-field>

                  <v-text-field
                    label="Nama Belakang"
                    hint="Nama Belakang | Required"
                    persistent-hint
                    single-line
                    filled
                    
                    required
                    :error-messages="editLastNameErrors"
                    v-model="edit_last_name"
                    @input="$v.edit_last_name.$touch()" 
                    @blur="$v.edit_last_name.$touch()"
                  ></v-text-field>

                  <v-text-field
                    label="NIS"
                    hint="Nomor Induk Siswa"
                    persistent-hint
                    single-line
                    filled
                    
                    required
                    v-model="edit_nis"
                  ></v-text-field>

                  <v-text-field
                    label="NUPTK"
                    hint="Nomor Unik Pendidik dan Tenaga Kependidikan"
                    persistent-hint
                    single-line
                    filled
                    
                    required
                    v-model="edit_nuptk"
                  ></v-text-field>

                  <v-text-field
                    label="Alamat"
                    hint="Alamat"
                    persistent-hint
                    single-line
                    filled
                    
                    required
                    v-model="edit_alamat"
                  ></v-text-field>

                  <v-text-field
                    label="No. Telp"
                    hint="No. Telp"
                    persistent-hint
                    single-line
                    filled
                    
                    required
                    v-model="edit_no_telp"
                  ></v-text-field>
                </v-col>

                <v-col cols="12" lg="6" md="12" sm="12" xs="12">
                  <v-text-field
                    label="Email"
                    hint="Email | Required"
                    persistent-hint
                    single-line
                    filled
                    
                    required
                    :error-messages="editEmailErrors"
                    v-model="edit_email"
                    @input="$v.edit_email.$touch()" 
                    @blur="$v.edit_email.$touch()"
                  ></v-text-field>

                  <v-file-input
                    label="Foto User"
                    filled
                    prepend-icon="mdi-camera"
                    v-model="edit_foto_user"
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
        editAnggotaDialog: false,
        overlayEditAnggota: false,
        total: null,

        // Form
        edit_id: null,
        edit_first_name: null,
        edit_last_name: null,
        edit_nis: null,
        edit_nuptk: null,
        edit_foto_user: null,
        edit_alamat: null,
        edit_no_telp: null,
        edit_email: null,

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
        
        daftarAnggota: null,
        daftarAnggotaFiltered: null,
        overlay: false,
        headers: [
          {
            text: 'Foto Anggota',
            align: 'start',
            sortable: true,
            value: 'foto_user'
          },
          {
            text: 'Kode User',
            align: 'start',
            sortable: true,
            value: 'kode_user_full',
          },
          {
            text: 'Nama',
            align: 'start',
            sortable: true,
            value: 'full_name',
          },
          {
            text: 'NIS',
            align: 'start',
            sortable: true,
            value: 'nis',
          },
          {
            text: 'NUPTK',
            align: 'start',
            sortable: true,
            value: 'nuptk',
          },
          {
            text: 'alamat',
            align: 'start',
            sortable: true,
            value: 'alamat',
          },
          {
            text: 'No. Telp',
            align: 'start',
            sortable: true,
            value: 'no_telp',
          },
          {
            text: 'Email',
            align: 'start',
            sortable: true,
            value: 'email',
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
      edit_first_name: {
        required,
      },
      edit_last_name: {
        required,
      },
      edit_email: {
        required,
        email
      },
    }, // end of validations

    computed: {
      editFirstNameErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.edit_first_name.$dirty) return errors
        !currentObj.$v.edit_first_name.required && errors.push('Nama Depan harus di isi.')
        return errors
      },

      editLastNameErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.edit_last_name.$dirty) return errors
        !currentObj.$v.ledit_ast_name.required && errors.push('Nama Belakang harus di isi.')
        return errors
      },

      editEmailErrors () {
        let currentObj = this
        const errors = []
        if (!currentObj.$v.edit_email.$dirty) return errors
        !currentObj.$v.edit_email.required && errors.push('Email harus di isi.')
        !currentObj.$v.edit_email.email && errors.push('Email harus valid.')
        return errors
      },

    }, // End of Computed

    methods: {
      getData: function() {
        let currentObj = this

        currentObj.overlay = true
        axios.get('api/perpus/users/member/list')
          .then(function (response) {

            currentObj.daftarAnggota = response.data.data
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

      searchAnggota: function() {
        let currentObj = this
        if (currentObj.search != null) {

          for (var anggota in currentObj.daftarAnggota) {
            if (anggota.nis != null) {
              currentObj.daftarAnggotaFiltered = currentObj.daftarAnggota.filter(
                anggota => 
                anggota.kode_user_full.toLowerCase().includes(currentObj.search.toLowerCase())
                ||
                anggota.full_name.toLowerCase().includes(currentObj.search.toLowerCase()) 
                ||
                anggota.nis.toLowerCase().includes(currentObj.search.toLowerCase())
                ||
                anggota.email.toLowerCase().includes(currentObj.search.toLowerCase())
              )
            } else if(anggota.nuptk != null) {
              currentObj.daftarAnggotaFiltered = currentObj.daftarAnggota.filter(
                anggota => 
                anggota.kode_user_full.toLowerCase().includes(currentObj.search.toLowerCase())
                ||
                anggota.full_name.toLowerCase().includes(currentObj.search.toLowerCase()) 
                ||
                anggota.nuptk.toLowerCase().includes(currentObj.search.toLowerCase())
                ||
                anggota.email.toLowerCase().includes(currentObj.search.toLowerCase())
              )
            } else {
              currentObj.daftarAnggotaFiltered = currentObj.daftarAnggota.filter(
                anggota => 
                anggota.kode_user_full.toLowerCase().includes(currentObj.search.toLowerCase())
                ||
                anggota.full_name.toLowerCase().includes(currentObj.search.toLowerCase()) 
                ||
                anggota.email.toLowerCase().includes(currentObj.search.toLowerCase())
              )
            }
          }
          

        } else {
          currentObj.daftarAnggotaFiltered = null
        }

      },

      openEditDetails: function(item) {
        let currentObj = this
        currentObj.editAnggotaDialog = true
        currentObj.edit_id = item.id
        currentObj.edit_first_name = item.first_name
        currentObj.edit_last_name = item.last_name
        currentObj.edit_nis = item.nis
        currentObj.edit_nuptk = item.nuptk
        currentObj.edit_alamat = item.alamat
        currentObj.edit_no_telp = item.no_telp
        currentObj.edit_email = item.email
      },

      closeAndResetVar: function () {
        let currentObj = this

        currentObj.editAnggotaDialog = false
        currentObj.edit_id = null
        currentObj.edit_first_name = null
        currentObj.edit_last_name = null
        currentObj.edit_nis = null
        currentObj.edit_nuptk = null
        currentObj.edit_alamat = null
        currentObj.edit_no_telp = null
        currentObj.edit_email = null
        currentObj.edit_foto_user = null
      },

      editAnggota: function () {
        let currentObj = this

        currentObj.overlayEditAnggota = true
        if (currentObj.$v.$invalid) {
          currentObj.snack = true
          currentObj.snackColor = 'error'
          currentObj.snackText = 'Please Enter The Valid Data'
          
        } else {

          let formData = new FormData();

          // Files
          formData.append("foto_user", currentObj.edit_foto_user)
          // Text
          formData.append("first_name", currentObj.edit_first_name)
          formData.append("last_name", currentObj.edit_last_name)
          formData.append("nis", currentObj.edit_nis)
          formData.append("nuptk", currentObj.edit_nuptk)
          formData.append("alamat", currentObj.edit_alamat)
          formData.append("no_telp", currentObj.edit_no_telp)
          formData.append("email", currentObj.edit_email)

          axios.post('api/perpus/users/member/edit/' + currentObj.edit_id, formData)
            .then(function (response) {
              currentObj.overlayEditAnggota = false
              currentObj.snack = true
              currentObj.snackColor = 'success'
              currentObj.snackText = 'Data Anggota telah berhasil diubah'
              currentObj.closeAndResetVar()
              currentObj.getData()
              currentObj.daftarAnggotaFiltered = null
              currentObj.search = null
            })
            .catch(function (error) {
              if(error.response) {
                currentObj.serverError = error.response.data.errors
                currentObj.errorAlert = true
              }
              currentObj.overlayEditAnggota = false
            })
        }
      },

      deleteAnggota: function (item) {
        let currentObj = this
        currentObj.overlay = true

        axios.post('api/perpus/users/member/delete/' + item.id)
          .then(function (response) {
            currentObj.overlay = false
            currentObj.snack = true
            currentObj.snackColor = 'success'
            currentObj.snackText = 'Anggota telah berhasil di hapus'
            currentObj.getData()
            currentObj.daftarAnggotaFiltered = null
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
