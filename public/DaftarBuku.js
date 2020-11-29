(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DaftarBuku"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuelidate/lib/validators */ "./node_modules/vuelidate/lib/validators/index.js");
/* harmony import */ var vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // User List
      editBukuDialog: false,
      overlayEditBuku: false,
      total: null,
      // Form
      edit_id: '',
      edit_judul_buku: '',
      edit_pengarang_buku: '',
      edit_penerbit_buku: '',
      edit_tahun_terbit_buku: '',
      edit_foto_buku: [],
      edit_jumlah_halaman_buku: '',
      edit_stok_buku: '',
      edit_nama_rak: '',
      edit_lokasi_rak: '',
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
      headers: [{
        text: 'Foto Buku',
        align: 'start',
        sortable: true,
        value: 'foto_buku'
      }, {
        text: 'Kode Buku',
        align: 'start',
        sortable: true,
        value: 'kode_buku_full'
      }, {
        text: 'Judul',
        align: 'start',
        sortable: true,
        value: 'judul_buku'
      }, {
        text: 'Pengarang',
        align: 'start',
        sortable: true,
        value: 'pengarang_buku'
      }, {
        text: 'Penerbit',
        align: 'start',
        sortable: true,
        value: 'penerbit_buku'
      }, {
        text: 'Tahun Terbit',
        align: 'start',
        sortable: true,
        value: 'tahun_terbit_buku'
      }, {
        text: 'Jumlah Halaman',
        align: 'start',
        sortable: true,
        value: 'jumlah_halaman_buku'
      }, {
        text: 'Stok',
        align: 'start',
        sortable: true,
        value: 'stok_buku'
      }, {
        text: 'Nama Rak',
        align: 'start',
        sortable: true,
        value: 'nama_rak'
      }, {
        text: 'Lokasi Rak',
        align: 'start',
        sortable: true,
        value: 'lokasi_rak'
      }, {
        text: 'Action',
        value: 'action',
        sortable: false
      }]
    };
  },
  // end of data()
  validations: {
    edit_judul_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    edit_pengarang_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    edit_penerbit_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    edit_tahun_terbit_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    edit_jumlah_halaman_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    edit_stok_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    edit_nama_rak: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    edit_lokasi_rak: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    }
  },
  // end of validations
  computed: {
    judulBukuErrors: function judulBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.edit_judul_buku.$dirty) return errors;
      !currentObj.$v.edit_judul_buku.required && errors.push('Judul Buku harus di isi.');
      return errors;
    },
    pengarangBukuErrors: function pengarangBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.edit_pengarang_buku.$dirty) return errors;
      !currentObj.$v.edit_pengarang_buku.required && errors.push('Pengarang Buku harus di isi.');
      return errors;
    },
    penerbitBukuErrors: function penerbitBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.edit_penerbit_buku.$dirty) return errors;
      !currentObj.$v.edit_penerbit_buku.required && errors.push('Penerbit Buku harus di isi.');
      return errors;
    },
    tahunTerbitBukuErrors: function tahunTerbitBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.edit_tahun_terbit_buku.$dirty) return errors;
      !currentObj.$v.edit_tahun_terbit_buku.required && errors.push('Tahun Terbit harus di isi.');
      return errors;
    },
    jumlahHalamanBukuErrors: function jumlahHalamanBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.edit_jumlah_halaman_buku.$dirty) return errors;
      !currentObj.$v.edit_jumlah_halaman_buku.required && errors.push('Jumlah Halaman Buku harus di isi.');
      return errors;
    },
    stokBukuErrors: function stokBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.edit_stok_buku.$dirty) return errors;
      !currentObj.$v.edit_stok_buku.required && errors.push('Stok Buku harus di isi.');
      return errors;
    },
    namaRakErrors: function namaRakErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.edit_nama_rak.$dirty) return errors;
      !currentObj.$v.edit_nama_rak.required && errors.push('Nama Rak harus di isi.');
      return errors;
    },
    lokasiRakErrors: function lokasiRakErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.edit_lokasi_rak.$dirty) return errors;
      !currentObj.$v.edit_lokasi_rak.required && errors.push('Lokasi Rak harus di isi.');
      return errors;
    }
  },
  // End of Computed
  methods: {
    getData: function getData() {
      var currentObj = this;
      currentObj.overlay = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/perpus/buku/list').then(function (response) {
        currentObj.daftarBuku = response.data.data;
        currentObj.overlay = false;
      })["catch"](function (error) {
        if (error.response) {
          currentObj.serverError = error.response.data.errors;
          currentObj.errorAlert = true;
        }

        currentObj.overlay = false;
      });
    },
    searchBuku: function searchBuku() {
      var currentObj = this;

      if (currentObj.search != null) {
        currentObj.daftarBukuFiltered = currentObj.daftarBuku.filter(function (buku) {
          return buku.kode_buku_full.toLowerCase().includes(currentObj.search.toLowerCase()) || buku.judul_buku.toLowerCase().includes(currentObj.search.toLowerCase()) || buku.penerbit_buku.toLowerCase().includes(currentObj.search.toLowerCase()) || buku.pengarang_buku.toLowerCase().includes(currentObj.search.toLowerCase()) || buku.tahun_terbit_buku.toLowerCase().includes(currentObj.search.toLowerCase()) || buku.lokasi_rak.toLowerCase().includes(currentObj.search.toLowerCase()) || buku.nama_rak.toLowerCase().includes(currentObj.search.toLowerCase());
        });
      } else {
        currentObj.daftarBukuFiltered = null;
      }
    },
    openEditDetails: function openEditDetails(item) {
      var currentObj = this;
      currentObj.editBukuDialog = true;
      currentObj.edit_id = item.id || '';
      currentObj.edit_judul_buku = item.judul_buku || '';
      currentObj.edit_pengarang_buku = item.pengarang_buku || '';
      currentObj.edit_penerbit_buku = item.penerbit_buku || '';
      currentObj.edit_tahun_terbit_buku = item.tahun_terbit_buku || '';
      currentObj.edit_jumlah_halaman_buku = item.jumlah_halaman_buku || '';
      currentObj.edit_stok_buku = item.stok_buku || '';
      currentObj.edit_nama_rak = item.nama_rak || '';
      currentObj.edit_lokasi_rak = item.lokasi_rak || '';
    },
    closeAndResetVar: function closeAndResetVar() {
      var currentObj = this;
      currentObj.editBukuDialog = false;
      currentObj.edit_id = '';
      currentObj.edit_judul_buku = '';
      currentObj.edit_pengarang_buku = '';
      currentObj.edit_penerbit_buku = '';
      currentObj.edit_tahun_terbit_buku = '';
      currentObj.edit_foto_buku = '';
      currentObj.edit_jumlah_halaman_buku = '';
      currentObj.edit_stok_buku = '';
      currentObj.edit_nama_rak = '';
      currentObj.edit_lokasi_rak = '';
    },
    editBuku: function editBuku() {
      var currentObj = this;
      currentObj.overlayEditBuku = true;

      if (currentObj.$v.$invalid) {
        currentObj.snack = true;
        currentObj.snackColor = 'error';
        currentObj.snackText = 'Please Enter The Valid Data';
      } else {
        var formData = new FormData(); // Files

        formData.append("foto_buku", currentObj.edit_foto_buku); // Text

        formData.append("judul_buku", currentObj.edit_judul_buku);
        formData.append("pengarang_buku", currentObj.edit_pengarang_buku);
        formData.append("penerbit_buku", currentObj.edit_penerbit_buku);
        formData.append("tahun_terbit_buku", currentObj.edit_tahun_terbit_buku);
        formData.append("jumlah_halaman_buku", currentObj.edit_jumlah_halaman_buku);
        formData.append("stok_buku", currentObj.edit_stok_buku);
        formData.append("nama_rak", currentObj.edit_nama_rak);
        formData.append("lokasi_rak", currentObj.edit_lokasi_rak);
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/perpus/buku/edit/' + currentObj.edit_id, formData).then(function (response) {
          currentObj.overlayEditBuku = false;
          currentObj.snack = true;
          currentObj.snackColor = 'success';
          currentObj.snackText = 'Data buku telah berhasil diubah';
          currentObj.closeAndResetVar();
          currentObj.getData();
          currentObj.daftarBukuFiltered = null;
          currentObj.search = null;
        })["catch"](function (error) {
          if (error.response) {
            currentObj.editServerError = error.response.data.errors;
            currentObj.editErrorAlert = true;
          }

          currentObj.overlayEditBuku = false;
        });
      }
    },
    deleteUser: function deleteUser(item) {
      var currentObj = this;
      currentObj.overlay = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/perpus/buku/delete/' + item.id).then(function (response) {
        currentObj.overlay = false;
        currentObj.snack = true;
        currentObj.snackColor = 'success';
        currentObj.snackText = 'Buku telah berhasil di hapus';
        currentObj.getData();
        currentObj.daftarBukuFiltered = null;
        currentObj.search = null;
      })["catch"](function (error) {
        if (error.response) {
          currentObj.serverError = error.response.data.errors;
          currentObj.errorAlert = true;
        }

        currentObj.overlay = false;
      });
    }
  },
  // End of Methods
  mounted: function mounted() {
    var currentObj = this;
    currentObj.getData();
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=template&id=ded53350&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=template&id=ded53350& ***!
  \************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "ma-5" },
    [
      _c(
        "v-alert",
        {
          attrs: {
            border: "top",
            color: "red lighten-2",
            dark: "",
            dismissible: ""
          },
          model: {
            value: _vm.errorAlert,
            callback: function($$v) {
              _vm.errorAlert = $$v
            },
            expression: "errorAlert"
          }
        },
        _vm._l(_vm.serverError, function(error, index) {
          return _c("ul", { key: index }, [
            _c("li", [_vm._v("\n        " + _vm._s(error[0]) + "\n      ")])
          ])
        }),
        0
      ),
      _vm._v(" "),
      _c(
        "v-card",
        [
          _c(
            "v-card-title",
            [
              _vm._v("\n    Daftar Buku\n      "),
              _c("v-spacer"),
              _vm._v(" "),
              _c("v-text-field", {
                staticClass: "mb-3",
                attrs: {
                  "append-icon": "mdi-magnify",
                  label: "Masukan Sesuatu...",
                  hint: "Search",
                  "persistent-hint": "",
                  "single-line": "",
                  "append-outer-icon": "mdi-send"
                },
                on: { "click:append-outer": _vm.searchBuku },
                model: {
                  value: _vm.search,
                  callback: function($$v) {
                    _vm.search = $$v
                  },
                  expression: "search"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _vm.daftarBuku && _vm.daftarBukuFiltered == null
            ? _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.daftarBuku,
                  "items-per-page": 5
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "item.created_at",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c("span", [
                            _vm._v(
                              _vm._s(new Date(item.created_at).toLocaleString())
                            )
                          ])
                        ]
                      }
                    },
                    {
                      key: "item.action",
                      fn: function(props) {
                        return [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass: "ma-2",
                                                attrs: {
                                                  fab: "",
                                                  dark: "",
                                                  small: "",
                                                  color: "green"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.openEditDetails(
                                                      props.item
                                                    )
                                                  }
                                                }
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { dark: "" } },
                                              [_vm._v("mdi-tooltip-edit")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Edit Buku")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass: "ma-2",
                                                attrs: {
                                                  fab: "",
                                                  dark: "",
                                                  small: "",
                                                  color: "red"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.deleteUser(
                                                      props.item
                                                    )
                                                  }
                                                }
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { dark: "" } },
                                              [_vm._v("mdi-trash-can-outline")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Delete Buku")])]
                          )
                        ]
                      }
                    },
                    {
                      key: "item.foto_buku",
                      fn: function(props) {
                        return [
                          props.item.foto_buku
                            ? _c("v-img", {
                                attrs: {
                                  src: props.item.foto_buku,
                                  "aspect-ratio": "1",
                                  "max-width": "500",
                                  "max-height": "300"
                                }
                              })
                            : _c("v-img", {
                                attrs: {
                                  src: "/statics/buku-cover.jpg",
                                  "aspect-ratio": "1",
                                  "max-width": "500",
                                  "max-height": "300"
                                }
                              })
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.daftarBuku && _vm.daftarBukuFiltered != null
            ? _c("v-data-table", {
                staticClass: "elevation-1",
                attrs: {
                  headers: _vm.headers,
                  items: _vm.daftarBukuFiltered,
                  "items-per-page": 5
                },
                scopedSlots: _vm._u(
                  [
                    {
                      key: "item.created_at",
                      fn: function(ref) {
                        var item = ref.item
                        return [
                          _c("span", [
                            _vm._v(
                              _vm._s(new Date(item.created_at).toLocaleString())
                            )
                          ])
                        ]
                      }
                    },
                    {
                      key: "item.action",
                      fn: function(props) {
                        return [
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass: "ma-2",
                                                attrs: {
                                                  fab: "",
                                                  dark: "",
                                                  small: "",
                                                  color: "green"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.openEditDetails(
                                                      props.item
                                                    )
                                                  }
                                                }
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { dark: "" } },
                                              [_vm._v("mdi-tooltip-edit")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Edit Buku")])]
                          ),
                          _vm._v(" "),
                          _c(
                            "v-tooltip",
                            {
                              attrs: { bottom: "" },
                              scopedSlots: _vm._u(
                                [
                                  {
                                    key: "activator",
                                    fn: function(ref) {
                                      var on = ref.on
                                      var attrs = ref.attrs
                                      return [
                                        _c(
                                          "v-btn",
                                          _vm._g(
                                            _vm._b(
                                              {
                                                staticClass: "ma-2",
                                                attrs: {
                                                  fab: "",
                                                  dark: "",
                                                  small: "",
                                                  color: "red"
                                                },
                                                on: {
                                                  click: function($event) {
                                                    $event.preventDefault()
                                                    return _vm.deleteUser(
                                                      props.item
                                                    )
                                                  }
                                                }
                                              },
                                              "v-btn",
                                              attrs,
                                              false
                                            ),
                                            on
                                          ),
                                          [
                                            _c(
                                              "v-icon",
                                              { attrs: { dark: "" } },
                                              [_vm._v("mdi-trash-can-outline")]
                                            )
                                          ],
                                          1
                                        )
                                      ]
                                    }
                                  }
                                ],
                                null,
                                true
                              )
                            },
                            [_vm._v(" "), _c("span", [_vm._v("Delete Buku")])]
                          )
                        ]
                      }
                    },
                    {
                      key: "item.foto_buku",
                      fn: function(props) {
                        return [
                          props.item.foto_buku
                            ? _c("v-img", {
                                attrs: {
                                  src: props.item.foto_buku,
                                  "aspect-ratio": "1",
                                  "max-width": "500",
                                  "max-height": "300"
                                }
                              })
                            : _c("v-img", {
                                attrs: {
                                  src: "/statics/buku-cover.jpg",
                                  "aspect-ratio": "1",
                                  "max-width": "500",
                                  "max-height": "300"
                                }
                              })
                        ]
                      }
                    }
                  ],
                  null,
                  true
                )
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "v-overlay",
            { attrs: { absolute: true, value: _vm.overlay } },
            [
              _c("v-progress-circular", {
                attrs: { size: 50, color: "white", indeterminate: "" }
              })
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          model: {
            value: _vm.editBukuDialog,
            callback: function($$v) {
              _vm.editBukuDialog = $$v
            },
            expression: "editBukuDialog"
          }
        },
        [
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.editBukuDialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [_vm._v("Edit Buku")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { dark: "", text: "" },
                          on: {
                            click: function($event) {
                              return _vm.editBuku()
                            }
                          }
                        },
                        [_vm._v("Save")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-card-text",
                [
                  _c(
                    "v-row",
                    [
                      _c(
                        "v-col",
                        { attrs: { cols: "12" } },
                        [
                          _c(
                            "v-alert",
                            {
                              attrs: {
                                border: "top",
                                color: "red lighten-2",
                                dismissible: ""
                              },
                              model: {
                                value: _vm.errorAlert,
                                callback: function($$v) {
                                  _vm.errorAlert = $$v
                                },
                                expression: "errorAlert"
                              }
                            },
                            _vm._l(_vm.serverError, function(error, index) {
                              return _c("ul", { key: index }, [
                                _c("li", [
                                  _vm._v(
                                    "\n                  " +
                                      _vm._s(error[0]) +
                                      " \n                "
                                  )
                                ])
                              ])
                            }),
                            0
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            [
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "12",
                                    sm: "12",
                                    xs: "12"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Judul Buku",
                                      hint: "Judul Buku | Required",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      "error-messages": _vm.judulBukuErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.edit_judul_buku.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.edit_judul_buku.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.edit_judul_buku,
                                      callback: function($$v) {
                                        _vm.edit_judul_buku = $$v
                                      },
                                      expression: "edit_judul_buku"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Pengarang Buku",
                                      hint: "Pengarang Buku | Required",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      "error-messages": _vm.pengarangBukuErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.edit_pengarang_buku.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.edit_pengarang_buku.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.edit_pengarang_buku,
                                      callback: function($$v) {
                                        _vm.edit_pengarang_buku = $$v
                                      },
                                      expression: "edit_pengarang_buku"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Penerbit Buku",
                                      hint: "Penerbit Buku | Required",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      "error-messages": _vm.penerbitBukuErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.edit_penerbit_buku.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.edit_penerbit_buku.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.edit_penerbit_buku,
                                      callback: function($$v) {
                                        _vm.edit_penerbit_buku = $$v
                                      },
                                      expression: "edit_penerbit_buku"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Tahun Terbit Buku",
                                      hint: "Tahun Terbit Buku | Required",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      "error-messages":
                                        _vm.tahunTerbitBukuErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.edit_tahun_terbit_buku.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.edit_tahun_terbit_buku.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.edit_tahun_terbit_buku,
                                      callback: function($$v) {
                                        _vm.edit_tahun_terbit_buku = $$v
                                      },
                                      expression: "edit_tahun_terbit_buku"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "12",
                                    sm: "12",
                                    xs: "12"
                                  }
                                },
                                [
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Jumlah Halaman Buku",
                                      hint: "Jumlah Halaman Buku | Required",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      "error-messages":
                                        _vm.jumlahHalamanBukuErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.edit_jumlah_halaman_buku.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.edit_jumlah_halaman_buku.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.edit_jumlah_halaman_buku,
                                      callback: function($$v) {
                                        _vm.edit_jumlah_halaman_buku = $$v
                                      },
                                      expression: "edit_jumlah_halaman_buku"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Stok Buku",
                                      hint: "Stok Buku | Required",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      "error-messages": _vm.stokBukuErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.edit_stok_buku.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.edit_stok_buku.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.edit_stok_buku,
                                      callback: function($$v) {
                                        _vm.edit_stok_buku = $$v
                                      },
                                      expression: "edit_stok_buku"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Nama Rak",
                                      hint: "Nama Rak | Required",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      "error-messages": _vm.namaRakErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.edit_nama_rak.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.edit_nama_rak.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.edit_nama_rak,
                                      callback: function($$v) {
                                        _vm.edit_nama_rak = $$v
                                      },
                                      expression: "edit_nama_rak"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Lokasi Rak",
                                      hint: "Lokasi Rak | Required",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      "error-messages": _vm.lokasiRakErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.edit_lokasi_rak.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.edit_lokasi_rak.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.edit_lokasi_rak,
                                      callback: function($$v) {
                                        _vm.edit_lokasi_rak = $$v
                                      },
                                      expression: "edit_lokasi_rak"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-row",
                            { attrs: { justify: "start" } },
                            [
                              _c(
                                "v-col",
                                {
                                  attrs: {
                                    cols: "12",
                                    lg: "6",
                                    md: "12",
                                    sm: "12",
                                    xs: "12"
                                  }
                                },
                                [
                                  _c("v-file-input", {
                                    attrs: {
                                      label: "Foto Buku",
                                      filled: "",
                                      "prepend-icon": "mdi-camera"
                                    },
                                    model: {
                                      value: _vm.edit_foto_buku,
                                      callback: function($$v) {
                                        _vm.edit_foto_buku = $$v
                                      },
                                      expression: "edit_foto_buku"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { top: "", timeout: 3000, color: _vm.snackColor },
          scopedSlots: _vm._u([
            {
              key: "action",
              fn: function(ref) {
                var attrs = ref.attrs
                return [
                  _c(
                    "v-btn",
                    _vm._b(
                      {
                        attrs: { text: "" },
                        on: {
                          click: function($event) {
                            _vm.snack = false
                          }
                        }
                      },
                      "v-btn",
                      attrs,
                      false
                    ),
                    [_vm._v("Close")]
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.snack,
            callback: function($$v) {
              _vm.snack = $$v
            },
            expression: "snack"
          }
        },
        [_vm._v("\n    " + _vm._s(_vm.snackText) + "\n\n    ")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/pustakawan/buku/DaftarBuku.vue":
/*!***********************************************************!*\
  !*** ./resources/js/pages/pustakawan/buku/DaftarBuku.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DaftarBuku_vue_vue_type_template_id_ded53350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DaftarBuku.vue?vue&type=template&id=ded53350& */ "./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=template&id=ded53350&");
/* harmony import */ var _DaftarBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DaftarBuku.vue?vue&type=script&lang=js& */ "./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DaftarBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DaftarBuku_vue_vue_type_template_id_ded53350___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DaftarBuku_vue_vue_type_template_id_ded53350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/pustakawan/buku/DaftarBuku.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DaftarBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DaftarBuku.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DaftarBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=template&id=ded53350&":
/*!******************************************************************************************!*\
  !*** ./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=template&id=ded53350& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaftarBuku_vue_vue_type_template_id_ded53350___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./DaftarBuku.vue?vue&type=template&id=ded53350& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pustakawan/buku/DaftarBuku.vue?vue&type=template&id=ded53350&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaftarBuku_vue_vue_type_template_id_ded53350___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DaftarBuku_vue_vue_type_template_id_ded53350___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);