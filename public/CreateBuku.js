(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CreateBuku"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // v-model
      judul_buku: '',
      pengarang_buku: '',
      penerbit_buku: '',
      tahun_terbit_buku: '',
      foto_buku: [],
      jumlah_halaman_buku: '',
      stok_buku: '',
      nama_rak: '',
      lokasi_rak: '',
      // For Form Exception
      errorAlert: false,
      serverError: null,
      // Loading Overlay - Form
      overlay: false,
      // Response
      snack: false,
      snackText: null,
      snackColor: null
    };
  },
  // End of Data
  validations: {
    judul_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    pengarang_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    penerbit_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    tahun_terbit_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    jumlah_halaman_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    stok_buku: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    nama_rak: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    lokasi_rak: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    }
  },
  // End of Validations
  computed: {
    judulBukuErrors: function judulBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.judul_buku.$dirty) return errors;
      !currentObj.$v.judul_buku.required && errors.push('Judul Buku harus di isi.');
      return errors;
    },
    pengarangBukuErrors: function pengarangBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.pengarang_buku.$dirty) return errors;
      !currentObj.$v.pengarang_buku.required && errors.push('Pengarang Buku harus di isi.');
      return errors;
    },
    penerbitBukuErrors: function penerbitBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.penerbit_buku.$dirty) return errors;
      !currentObj.$v.penerbit_buku.required && errors.push('Penerbit Buku harus di isi.');
      return errors;
    },
    tahunTerbitBukuErrors: function tahunTerbitBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.tahun_terbit_buku.$dirty) return errors;
      !currentObj.$v.tahun_terbit_buku.required && errors.push('Tahun Terbit harus di isi.');
      return errors;
    },
    jumlahHalamanBukuErrors: function jumlahHalamanBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.jumlah_halaman_buku.$dirty) return errors;
      !currentObj.$v.jumlah_halaman_buku.required && errors.push('Jumlah Halaman Buku harus di isi.');
      return errors;
    },
    stokBukuErrors: function stokBukuErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.stok_buku.$dirty) return errors;
      !currentObj.$v.stok_buku.required && errors.push('Stok Buku harus di isi.');
      return errors;
    },
    namaRakErrors: function namaRakErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.nama_rak.$dirty) return errors;
      !currentObj.$v.nama_rak.required && errors.push('Nama Rak harus di isi.');
      return errors;
    },
    lokasiRakErrors: function lokasiRakErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.lokasi_rak.$dirty) return errors;
      !currentObj.$v.lokasi_rak.required && errors.push('Lokasi Rak harus di isi.');
      return errors;
    }
  },
  // End of Computed
  methods: {
    tambah: function tambah() {
      var currentObj = this;
      currentObj.overlay = true;

      if (currentObj.$v.$invalid) {
        currentObj.snack = true;
        currentObj.snackColor = 'error';
        currentObj.snackText = 'Input Data Invalid';
        currentObj.overlay = false;
      } else {
        var formData = new FormData(); // Files

        formData.append("foto_buku", currentObj.foto_buku); // Text

        formData.append("judul_buku", currentObj.judul_buku);
        formData.append("pengarang_buku", currentObj.pengarang_buku);
        formData.append("penerbit_buku", currentObj.penerbit_buku);
        formData.append("tahun_terbit_buku", currentObj.tahun_terbit_buku);
        formData.append("jumlah_halaman_buku", currentObj.jumlah_halaman_buku);
        formData.append("stok_buku", currentObj.stok_buku);
        formData.append("nama_rak", currentObj.nama_rak);
        formData.append("lokasi_rak", currentObj.lokasi_rak);
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/perpus/buku/create', formData).then(function (response) {
          currentObj.snack = true;
          currentObj.snackColor = 'success';
          currentObj.snackText = 'Buku telah berhasil dibuat.';
          currentObj.overlay = false;
          currentObj.$router.push('/perpus/buku/list');
        })["catch"](function (error) {
          currentObj.overlay = false;

          if (error.response) {
            currentObj.serverError = error.response.data.errors;
            currentObj.errorAlert = true;
          }
        });
      }
    } // End of tambah Method

  },
  // End of Methods
  mounted: function mounted() {
    var currentObj = this;
  } // End of Mounted

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=template&id=516d6662&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=template&id=516d6662& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    { staticClass: "ma-3" },
    [
      _c(
        "v-row",
        { staticClass: "mx-auto", attrs: { justify: "start" } },
        [
          _c(
            "v-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "v-form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.tambah($event)
                    }
                  }
                },
                [
                  _c(
                    "v-card",
                    { staticClass: " mx-auto", attrs: { elevation: "8" } },
                    [
                      _c(
                        "v-card-title",
                        { staticClass: "purple darken-3" },
                        [
                          _c(
                            "v-icon",
                            { attrs: { large: "", left: "", color: "white" } },
                            [
                              _vm._v(
                                "\n              mdi-book-plus\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "title white--text",
                              attrs: { color: "white" }
                            },
                            [_vm._v("Tambah Buku")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-text",
                        { staticClass: "headline font-weight-bold" },
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
                                    _vm._l(_vm.serverError, function(
                                      error,
                                      index
                                    ) {
                                      return _c("ul", { key: index }, [
                                        _c("li", [
                                          _vm._v(
                                            "\n                        " +
                                              _vm._s(error[0]) +
                                              " \n                      "
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
                                              "error-messages":
                                                _vm.judulBukuErrors
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.$v.judul_buku.$touch()
                                              },
                                              blur: function($event) {
                                                return _vm.$v.judul_buku.$touch()
                                              }
                                            },
                                            model: {
                                              value: _vm.judul_buku,
                                              callback: function($$v) {
                                                _vm.judul_buku = $$v
                                              },
                                              expression: "judul_buku"
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
                                              "error-messages":
                                                _vm.pengarangBukuErrors
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.$v.pengarang_buku.$touch()
                                              },
                                              blur: function($event) {
                                                return _vm.$v.pengarang_buku.$touch()
                                              }
                                            },
                                            model: {
                                              value: _vm.pengarang_buku,
                                              callback: function($$v) {
                                                _vm.pengarang_buku = $$v
                                              },
                                              expression: "pengarang_buku"
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
                                              "error-messages":
                                                _vm.penerbitBukuErrors
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.$v.penerbit_buku.$touch()
                                              },
                                              blur: function($event) {
                                                return _vm.$v.penerbit_buku.$touch()
                                              }
                                            },
                                            model: {
                                              value: _vm.penerbit_buku,
                                              callback: function($$v) {
                                                _vm.penerbit_buku = $$v
                                              },
                                              expression: "penerbit_buku"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("v-text-field", {
                                            attrs: {
                                              label: "Tahun Terbit Buku",
                                              hint:
                                                "Tahun Terbit Buku | Required",
                                              "persistent-hint": "",
                                              "single-line": "",
                                              filled: "",
                                              required: "",
                                              "error-messages":
                                                _vm.tahunTerbitBukuErrors
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.$v.tahun_terbit_buku.$touch()
                                              },
                                              blur: function($event) {
                                                return _vm.$v.tahun_terbit_buku.$touch()
                                              }
                                            },
                                            model: {
                                              value: _vm.tahun_terbit_buku,
                                              callback: function($$v) {
                                                _vm.tahun_terbit_buku = $$v
                                              },
                                              expression: "tahun_terbit_buku"
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
                                              hint:
                                                "Jumlah Halaman Buku | Required",
                                              "persistent-hint": "",
                                              "single-line": "",
                                              filled: "",
                                              required: "",
                                              "error-messages":
                                                _vm.jumlahHalamanBukuErrors
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.$v.jumlah_halaman_buku.$touch()
                                              },
                                              blur: function($event) {
                                                return _vm.$v.jumlah_halaman_buku.$touch()
                                              }
                                            },
                                            model: {
                                              value: _vm.jumlah_halaman_buku,
                                              callback: function($$v) {
                                                _vm.jumlah_halaman_buku = $$v
                                              },
                                              expression: "jumlah_halaman_buku"
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
                                              "error-messages":
                                                _vm.stokBukuErrors
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.$v.stok_buku.$touch()
                                              },
                                              blur: function($event) {
                                                return _vm.$v.stok_buku.$touch()
                                              }
                                            },
                                            model: {
                                              value: _vm.stok_buku,
                                              callback: function($$v) {
                                                _vm.stok_buku = $$v
                                              },
                                              expression: "stok_buku"
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
                                              "error-messages":
                                                _vm.namaRakErrors
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.$v.nama_rak.$touch()
                                              },
                                              blur: function($event) {
                                                return _vm.$v.nama_rak.$touch()
                                              }
                                            },
                                            model: {
                                              value: _vm.nama_rak,
                                              callback: function($$v) {
                                                _vm.nama_rak = $$v
                                              },
                                              expression: "nama_rak"
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
                                              "error-messages":
                                                _vm.lokasiRakErrors
                                            },
                                            on: {
                                              input: function($event) {
                                                return _vm.$v.lokasi_rak.$touch()
                                              },
                                              blur: function($event) {
                                                return _vm.$v.lokasi_rak.$touch()
                                              }
                                            },
                                            model: {
                                              value: _vm.lokasi_rak,
                                              callback: function($$v) {
                                                _vm.lokasi_rak = $$v
                                              },
                                              expression: "lokasi_rak"
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
                                              value: _vm.foto_buku,
                                              callback: function($$v) {
                                                _vm.foto_buku = $$v
                                              },
                                              expression: "foto_buku"
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
                      ),
                      _vm._v(" "),
                      _c(
                        "v-card-actions",
                        [
                          _c(
                            "v-list-item",
                            { staticClass: "grow" },
                            [
                              _c(
                                "v-row",
                                { attrs: { align: "center", justify: "end" } },
                                [
                                  _c(
                                    "v-btn",
                                    {
                                      staticClass:
                                        "purple darken-3 white--text",
                                      attrs: { type: "submit" }
                                    },
                                    [_vm._v("Tambah Buku")]
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
                        "v-overlay",
                        { attrs: { absolute: true, value: _vm.overlay } },
                        [
                          _c("v-progress-circular", {
                            attrs: {
                              size: 50,
                              color: "white",
                              indeterminate: ""
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
      ),
      _vm._v(" "),
      _c(
        "v-snackbar",
        {
          attrs: { bottom: "", timeout: 3000, color: _vm.snackColor },
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

/***/ "./resources/js/pages/pustakawan/buku/BuatBuku.vue":
/*!*********************************************************!*\
  !*** ./resources/js/pages/pustakawan/buku/BuatBuku.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BuatBuku_vue_vue_type_template_id_516d6662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BuatBuku.vue?vue&type=template&id=516d6662& */ "./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=template&id=516d6662&");
/* harmony import */ var _BuatBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BuatBuku.vue?vue&type=script&lang=js& */ "./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BuatBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BuatBuku_vue_vue_type_template_id_516d6662___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BuatBuku_vue_vue_type_template_id_516d6662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/pustakawan/buku/BuatBuku.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuatBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BuatBuku.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BuatBuku_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=template&id=516d6662&":
/*!****************************************************************************************!*\
  !*** ./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=template&id=516d6662& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuatBuku_vue_vue_type_template_id_516d6662___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./BuatBuku.vue?vue&type=template&id=516d6662& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/pustakawan/buku/BuatBuku.vue?vue&type=template&id=516d6662&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuatBuku_vue_vue_type_template_id_516d6662___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BuatBuku_vue_vue_type_template_id_516d6662___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);