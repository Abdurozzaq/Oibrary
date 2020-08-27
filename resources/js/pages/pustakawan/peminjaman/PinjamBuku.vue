<template>
  <div>
    <v-card class="mb-5">
      <v-card-title>
        <v-icon
          large
          left
          color="grey"
        >
          mdi-book-multiple
        </v-icon>
        <span color="white" class="title grey--text">Pinjam Buku.</span>
      </v-card-title>
    </v-card>

    <v-card class="mb-4">
      <v-card-title>
       1. Pilih Anggota
      </v-card-title>
      <v-card-text>
        <v-autocomplete
          :items="daftarAnggota"
          hint="Harus Di Isi!"
          persistent-hint
          v-model="id_anggota"
          :item-text="item => item.kode_user_full + ' - ' + item.first_name + ' ' + item.last_name"
          item-value="id"
          label="Pilih Anggota"
        >
        </v-autocomplete>
      </v-card-text>
    </v-card>

    <v-card class="mb-4">
      <v-card-title>
      2. Pilih Buku
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Ketikan Sesuatu..."
          hint="Cari Buku"
          single-line
          persistent-hint
          append-outer-icon="mdi-send"
          @click:append-outer="searchBuku"
        ></v-text-field>
      </v-card-title>

      <v-sheet
        class="mx-auto"
      >
        <v-slide-group 
          show-arrows="always"
          v-if="daftarBuku && daftarBukuFiltered == null"
        >
          <v-slide-item
            
            v-for="(buku, index) in daftarBuku"
            :key="index"
            class="mx-lg-auto mx-md-5 mx-sm-5 mx-sm-5 mb-3"
          >

            <v-card
              class="mx-5 my-8 blue-grey lighten-5"
              width="200px"
            >
              <v-img
                v-if="buku.foto_buku"
                height="150"
                :src="buku.foto_buku"
              ></v-img>

              <v-img
                v-else
                height="150"
                src="/statics/buku-cover.jpg"
              ></v-img>

              <div class="mx-4 mt-3">
                <div class="text-h6">{{ buku.judul_buku }}</div>
              </div>

              <v-card-text>
                <div class="subtitle-1">
                  Pengarang: {{ buku.pengarang_buku }}
                </div>
                <div class="subtitle-1">
                  Penerbit: {{ buku.penerbit_buku }}
                </div>
                <div class="subtitle-1">
                  Tahun Terbit: {{ buku.tahun_terbit_buku }}
                </div>
                <div class="subtitle-1">
                  Banyak Halaman: {{ buku.jumlah_halaman_buku }}
                </div>
                <div class="subtitle-1">
                  {{ buku.stok_buku }} tersisa
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click.prevent="pilihBuku(buku)"
                  :disabled="buku.stok_buku == 0 || id_anggota == null"
                >
                  Pilih Buku
                </v-btn>
              </v-card-actions>
            </v-card>

          </v-slide-item>
        </v-slide-group>

        <v-slide-group
          show-arrows="always"
          v-if="daftarBuku && daftarBukuFiltered != null"
        >
          <v-slide-item
            v-for="(buku, index) in daftarBukuFiltered"
            :key="index"
            class="mx-lg-auto mx-md-5 mx-sm-5 mx-sm-5 mb-3"
          >

            <v-card
              class="mx-5 my-8 blue-grey lighten-5"
              width="200px"
            >
              <v-img
                v-if="buku.foto_buku"
                height="150"
                :src="buku.foto_buku"
              ></v-img>

              <v-img
                v-else
                height="150"
                src="/statics/buku-cover.jpg"
              ></v-img>

              <div class="mx-4 mt-3">
                <div class="text-h6">{{ buku.judul_buku }}</div>
              </div>

              <v-card-text>
                <div class="subtitle-1">
                  Pengarang: {{ buku.pengarang_buku }}
                </div>
                <div class="subtitle-1">
                  Penerbit: {{ buku.penerbit_buku }}
                </div>
                <div class="subtitle-1">
                  Tahun Terbit: {{ buku.tahun_terbit_buku }}
                </div>
                <div class="subtitle-1">
                  Banyak Halaman: {{ buku.jumlah_halaman_buku }}
                </div>
                <div class="subtitle-1">
                  {{ buku.stok_buku }} tersisa
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-actions>
                <v-btn
                  color="deep-purple lighten-2"
                  text
                  @click.prevent="pilihBuku(buku)"
                  :disabled="buku.stok_buku == 0 || id_anggota == null"
                >
                  Pilih Buku
                </v-btn>
              </v-card-actions>
            </v-card>

          </v-slide-item>

        </v-slide-group>
      </v-sheet>

      <div v-if="daftarBuku == null" class="text-h6 mb-10 text-center">Maaf Tidak Ada Data Buku Yang Ditemukan.</div>
    </v-card>

    <!-- TABEL BUKU YANG TELAH DI PILIH -->
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

    <v-card class="mb-3">
      <v-card-title>
        3. Buku Yang Terpilih:
        <v-spacer></v-spacer>
        <v-btn
          color="blue-grey"
          class="ma-2 white--text"
          :disabled="id_anggota == null"
          @click.prevent="pinjam()"
        >
          Pinjam
          <v-icon right dark>mdi-send</v-icon>
        </v-btn>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="bukuTerpilih"
        hide-default-footer
      >
        <template v-slot:[`item.jumlah_buku`]="props">
          <v-edit-dialog
            :return-value.sync="props.item.jumlah_buku"
            large
            persistent
            @save="save(props.item)"
            @cancel="cancel"
          >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <div 
                v-bind="attrs" 
                v-on="on"
              >
                {{ props.item.jumlah_buku }} 
                <v-icon>mdi-tooltip-edit-outline</v-icon>
              </div>
            </template>
            <span>Edit Jumlah Buku</span>
          </v-tooltip>
            
            <template v-slot:input>
              <div class="mt-4 title">Update Jumlah Buku</div>
            </template>
            <template v-slot:[`input`]>
              <v-slider
                class="mt-10"
                v-model="props.item.jumlah_buku"
                min="1"
                :max="props.item.stok_buku"
                :thumb-size="24"
                thumb-label="always"
              ></v-slider>
            </template>
          </v-edit-dialog>
        </template>


        <template v-slot:[`item.action`]="props">
  
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="mx-2" fab dark small color="red" @click.prevent="tidakJadiPilihBuku(props.item)">
                <v-icon dark>mdi-trash-can-outline</v-icon>
              </v-btn>
            </template>
            <span>Tidak Jadi</span>
          </v-tooltip>

        </template>

      </v-data-table>
      <v-overlay
        :absolute="true"
        :value="overlaybukuTerpilih"
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
import axios from 'axios'
export default {
  data () {
    return {
      // Buku
      daftarBuku: null,
      search: null,
      daftarBukuFiltered: null,
      bukuTerpilih: [],
      overlaybukuTerpilih: false,
      headers: [
        {
          text: 'Judul',
          sortable: false,
          value: 'judul_buku',
        },
        {
          text: 'Pengarang',
          sortable: false,
          value: 'pengarang_buku',
        },
        {
          text: 'Jumlah',
          sortable: false,
          value: 'jumlah_buku',
        },
        {
          text: 'Action',
          value: 'action',
          sortable: false
        }
      ],

      // Anggota
      daftarAnggota: null,
      id_anggota: null,
      array_id_anggota: null,

      // Response
      snack: false,
      snackColor: null,
      snackText: null,

      serverError: null,
      errorAlert: false,
    }
  }, // End of Data

  methods: {
    getBuku: function () {
      let currentObj = this
      
      axios.get('api/perpus/buku/list')
        .then(function (response) {
          
          if (response.data.data.length == 0) {
            currentObj.daftarBuku = null
          } else {
            currentObj.daftarBuku = response.data.data
          }
          
        })
        .catch(function (error) {
          currentObj.snack = true
          currentObj.snackColor = 'error'
          currentObj.snackText = 'Tidak Bisa Mendapatkan Data Buku!'
        })
    }, // getBuku()

    getAnggota: function () {
      let currentObj = this
      
      axios.get('api/perpus/users/member/list')
        .then(function (response) {
          
          currentObj.daftarAnggota = response.data.data
        })
        .catch(function (error) {
          currentObj.snack = true
          currentObj.snackColor = 'error'
          currentObj.snackText = 'Tidak Bisa Mendapatkan Data Buku!'
        })
    }, // getAnggota()

    searchBuku: function() {
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

      }, // searchBuku()

      pilihBuku: function(buku) {
        let currentObj = this

        if (currentObj.bukuTerpilih.length == 0) {
          currentObj.bukuTerpilih.push({
            'id_member': currentObj.id_anggota,
            'id_buku': buku.id,
            'judul_buku': buku.judul_buku,
            'pengarang_buku': buku.pengarang_buku,
            'jumlah_buku': 1,
            'stok_buku': buku.stok_buku
          })
        } else {
          var am = currentObj.bukuTerpilih.filter(am => am.id_buku == buku.id)
          
          if (am.length == 0) {
            currentObj.bukuTerpilih.push({
              'id_member': currentObj.id_anggota,
              'id_buku': buku.id,
              'judul_buku': buku.judul_buku,
              'pengarang_buku': buku.pengarang_buku,
              'jumlah_buku': 1,
              'stok_buku': buku.stok_buku
            })
          } else {
            currentObj.snack = true
            currentObj.snackColor = 'error'
            currentObj.snackText = 'Buku sudah ada di pilih!'
          }
          
        }
      },// End of pilihBuku()

      tidakJadiPilihBuku: function(buku) {
        let currentObj = this
        currentObj.bukuTerpilih.splice(currentObj.bukuTerpilih.indexOf(buku), 1);
      }, // End of tidakjadiPilihBuku()

      save (props) {
        let currentObj = this
        currentObj.snack = true
        currentObj.snackColor = 'success'
        currentObj.snackText = 'Jumlah Buku Diubah'
      },

      cancel () {
        let currentObj = this
        currentObj.snack = true
        currentObj.snackColor = 'error'
        currentObj.snackText = 'Tidak Jadi Ubah Jumlah Buku.'
      },

      pinjam: function () {
        let currentObj = this

        currentObj.overlaybukuTerpilih = true

        axios.post('api/perpus/pinjam-buku', currentObj.bukuTerpilih)
          .then(function (response) {
            currentObj.snack = true
            currentObj.snackColor = 'success'
            currentObj.snackText = 'Berhasil Pinjam Buku'

            currentObj.$router.push('/perpus/sirkulasi')
          })
          .catch(function (error) {
            currentObj.overlaybukuTerpilih = false
            if(error.response) {
                currentObj.serverError = error.response.data.errors
                currentObj.errorAlert = true
            }
          })
      }, // End of Pinjam()
  }, // End of Methods

  mounted: function() {
    let currentObj = this
    currentObj.getAnggota()
    currentObj.getBuku()
  }

}
</script>