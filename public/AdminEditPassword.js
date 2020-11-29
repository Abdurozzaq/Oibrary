(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AdminEditPassword"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/settings/EditPassword.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/settings/EditPassword.vue?vue&type=script&lang=js& ***!
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


/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      // v-model
      password: null,
      password_confirmation: null,
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
    password: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    },
    password_confirmation: {
      required: vuelidate_lib_validators__WEBPACK_IMPORTED_MODULE_0__["required"]
    }
  },
  // End of Validations
  computed: {
    passwordErrors: function passwordErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.password.$dirty) return errors;
      !currentObj.$v.password.required && errors.push('New Password is required.');
      return errors;
    },
    passwordConfirmationErrors: function passwordConfirmationErrors() {
      var currentObj = this;
      var errors = [];
      if (!currentObj.$v.password_confirmation.$dirty) return errors;
      !currentObj.$v.password_confirmation.required && errors.push('Password Confirmation is required.');
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
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/universal/profile/password/edit', {
          password: currentObj.password,
          password_confirmation: currentObj.password_confirmation
        }).then(function (response) {
          currentObj.snack = true;
          currentObj.snackColor = 'success';
          currentObj.snackText = 'Your Password Has Been Succesfully Changed';
          currentObj.overlay = false;
        })["catch"](function (error) {
          currentObj.overlay = false;

          if (error.response) {
            currentObj.serverError = error.response.data.errors;
            currentObj.errorAlert = true;
          }
        });
      }
    } // End of Edit Method

  } // End of Methods

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/settings/EditPassword.vue?vue&type=template&id=6e039d90&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/admin/settings/EditPassword.vue?vue&type=template&id=6e039d90& ***!
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
                        { staticClass: "red lighten-1" },
                        [
                          _c(
                            "v-icon",
                            { attrs: { large: "", left: "", color: "white" } },
                            [
                              _vm._v(
                                "\n              mdi-account-key\n            "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c("span", { staticClass: "title white--text" }, [
                            _vm._v("Change Your Password")
                          ])
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
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Your New Password",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      type: "password",
                                      "error-messages": _vm.passwordErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.password.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.password.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.password,
                                      callback: function($$v) {
                                        _vm.password = $$v
                                      },
                                      expression: "password"
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c("v-text-field", {
                                    attrs: {
                                      label: "Confirm Your Password",
                                      "single-line": "",
                                      filled: "",
                                      required: "",
                                      type: "password",
                                      "error-messages":
                                        _vm.passwordConfirmationErrors
                                    },
                                    on: {
                                      input: function($event) {
                                        return _vm.$v.password_confirmation.$touch()
                                      },
                                      blur: function($event) {
                                        return _vm.$v.password_confirmation.$touch()
                                      }
                                    },
                                    model: {
                                      value: _vm.password_confirmation,
                                      callback: function($$v) {
                                        _vm.password_confirmation = $$v
                                      },
                                      expression: "password_confirmation"
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
                                    [_vm._v("Change")]
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

/***/ "./resources/js/pages/admin/settings/EditPassword.vue":
/*!************************************************************!*\
  !*** ./resources/js/pages/admin/settings/EditPassword.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EditPassword_vue_vue_type_template_id_6e039d90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EditPassword.vue?vue&type=template&id=6e039d90& */ "./resources/js/pages/admin/settings/EditPassword.vue?vue&type=template&id=6e039d90&");
/* harmony import */ var _EditPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EditPassword.vue?vue&type=script&lang=js& */ "./resources/js/pages/admin/settings/EditPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _EditPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _EditPassword_vue_vue_type_template_id_6e039d90___WEBPACK_IMPORTED_MODULE_0__["render"],
  _EditPassword_vue_vue_type_template_id_6e039d90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/admin/settings/EditPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/admin/settings/EditPassword.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/pages/admin/settings/EditPassword.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/settings/EditPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/admin/settings/EditPassword.vue?vue&type=template&id=6e039d90&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/pages/admin/settings/EditPassword.vue?vue&type=template&id=6e039d90& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPassword_vue_vue_type_template_id_6e039d90___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./EditPassword.vue?vue&type=template&id=6e039d90& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/admin/settings/EditPassword.vue?vue&type=template&id=6e039d90&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPassword_vue_vue_type_template_id_6e039d90___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_EditPassword_vue_vue_type_template_id_6e039d90___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);