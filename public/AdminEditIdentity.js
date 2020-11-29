(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AdminEditIdentity"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // v-model
      first_name: '',
      last_name: '',
      email: '',
      no_telp: '',
      alamat: '',
      foto_user: [],
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
    first_name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    last_name: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    email: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"],
      email: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["email"]
    }
  },
  // End of Validations
  computed: {
    firstNameErrors: function firstNameErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.first_name.$dirty) return errors;
      !currentObj.$v.first_name.required && errors.push('First Name is required.');
      return errors;
    },
    lastNameErrors: function lastNameErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.last_name.$dirty) return errors;
      !currentObj.$v.last_name.required && errors.push('Last Name is required.');
      return errors;
    },
    emailErrors: function emailErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.email.$dirty) return errors;
      !currentObj.$v.email.required && errors.push('Restaurant Name is required.');
      return errors;
    }
  },
  // End of Computed
  methods: {
    edit: function edit() {
      var currentObj = this;
      currentObj.overlay = true;

      if (currentObj.$v.$invalid) {
        currentObj.snack = true;
        currentObj.snackColor = 'error';
        currentObj.snackText = 'Input Data Invalid';
        currentObj.overlay = false;
      } else {
        var formData = new FormData(); // Files

        formData.append("foto_user", currentObj.foto_user); // Text

        formData.append("first_name", currentObj.first_name);
        formData.append("last_name", currentObj.last_name);
        formData.append("alamat", currentObj.alamat);
        formData.append("no_telp", currentObj.no_telp);
        formData.append("email", currentObj.email);
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/universal/profile/identity/edit', formData).then(function (response) {
          currentObj.snack = true;
          currentObj.snackColor = 'success';
          currentObj.snackText = 'Your Identity Has Been Succesfully Changed';
          currentObj.overlay = false;
        })["catch"](function (error) {
          currentObj.overlay = false;

          if (error.response) {
            currentObj.serverError = error.response.data.errors;
            currentObj.errorAlert = true;
          }
        });
      }
    },
    // End of Edit Method
    getIdentity: function getIdentity() {
      var currentObj = this;
      currentObj.overlay = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/auth/me').then(function (response) {
        currentObj.first_name = response.data.user.first_name || '';
        currentObj.last_name = response.data.user.last_name || '';
        currentObj.email = response.data.user.email || '';
        currentObj.alamat = response.data.user.alamat || '';
        currentObj.no_telp = response.data.user.no_telp || '';
        currentObj.foto_user = response.data.user.foto_user || [];
        currentObj.overlay = false;
      })["catch"](function (error) {
        currentObj.overlay = false;

        if (error.response) {
          currentObj.serverError = error.response.data.errors;
          currentObj.errorAlert = true;
          currentObj.snack = true;
          currentObj.snackColor = 'error';
          currentObj.snackText = 'Cannot Get Old Identity';
        }
      });
    }
  },
  // End of Methods
  mounted: function mounted() {
    var currentObj = this;
    currentObj.getIdentity();
  } // End of Mounted

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=template&id=c001c44a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=template&id=c001c44a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "ma-10" },
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
                      return _vm.edit($event)
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
                        { staticClass: "red lighten-2" },
                        [
                          _c(
                            "v-icon",
                            { attrs: { large: "", left: "", color: "white" } },
                            [
                              _vm._v(
                                "\n              mdi-account\n            "
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
                            [_vm._v("Edit Your Identity")]
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
                                      label: "Nama Depan",
                                      hint: "Nama Depan | Required",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      "error-messages": _vm.firstNameErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.first_name.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.first_name.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.first_name,
                                      callback: function($$v) {
                                        _vm.first_name = $$v
                                      },
                                      expression: "first_name"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Nama Belakang",
                                      hint: "Nama Belakang | Required",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      "error-messages": _vm.lastNameErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.last_name.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.last_name.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.last_name,
                                      callback: function($$v) {
                                        _vm.last_name = $$v
                                      },
                                      expression: "last_name"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Alamat",
                                      hint: "Alamat",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.alamat,
                                      callback: function($$v) {
                                        _vm.alamat = $$v
                                      },
                                      expression: "alamat"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "No. Telp",
                                      hint: "No. Telp",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: ""
                                    },
                                    model: {
                                      value: _vm.no_telp,
                                      callback: function($$v) {
                                        _vm.no_telp = $$v
                                      },
                                      expression: "no_telp"
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
                                      label: "Email",
                                      hint: "Email | Required",
                                      "persistent-hint": "",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      "error-messages": _vm.emailErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.email.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.email.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.email,
                                      callback: function($$v) {
                                        _vm.email = $$v
                                      },
                                      expression: "email"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-file-input", {
                                    attrs: {
                                      label: "Foto User",
                                      filled: "",
                                      "prepend-icon": "mdi-camera"
                                    },
                                    model: {
                                      value: _vm.foto_user,
                                      callback: function($$v) {
                                        _vm.foto_user = $$v
                                      },
                                      expression: "foto_user"
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
                                      staticClass: "red white--text",
                                      attrs: { type: "submit" }
                                    },
                                    [_vm._v("Edit")]
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

/***/ "./resources/js/pages/admin/settings/EditIdentity.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/admin/settings/EditIdentity.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditIdentity_vue_vue_type_template_id_c001c44a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditIdentity.vue?vue&type=template&id=c001c44a& */ "./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=template&id=c001c44a&");
/* harmony import */ var _EditIdentity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditIdentity.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditIdentity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditIdentity_vue_vue_type_template_id_c001c44a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditIdentity_vue_vue_type_template_id_c001c44a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/settings/EditIdentity.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditIdentity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditIdentity.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditIdentity_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=template&id=c001c44a&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=template&id=c001c44a& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditIdentity_vue_vue_type_template_id_c001c44a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditIdentity.vue?vue&type=template&id=c001c44a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/settings/EditIdentity.vue?vue&type=template&id=c001c44a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditIdentity_vue_vue_type_template_id_c001c44a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditIdentity_vue_vue_type_template_id_c001c44a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);