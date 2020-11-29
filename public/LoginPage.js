(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LoginPage"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ErrorAlert.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ErrorAlert.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
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
  props: ['serverError']
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_ErrorAlert_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/ErrorAlert.vue */ "./resources/js/components/ErrorAlert.vue");
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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    ErrorAlert: _components_ErrorAlert_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      email: "",
      password: "",
      serverError: "",
      snackbar: false,
      snackbarColor: "",
      snackbarText: "",
      overlay: false
    };
  },
  methods: {
    login: function login() {
      var currentObj = this;
      currentObj.serverError = "";
      currentObj.overlay = true;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('api/auth/login', {
        email: currentObj.email,
        password: currentObj.password
      }).then(function (response) {
        var token = response.data.access_token;
        console.log(token); // add bearer token to localstorage

        localStorage.setItem('userToken', token);

        if (token) {
          axios__WEBPACK_IMPORTED_MODULE_1___default.a.defaults.headers.common['Authorization'] = 'Bearer' + ' ' + token;
        } // after success show successSnackbar


        currentObj.snackbar = true;
        currentObj.snackbarColor = 'success';
        currentObj.snackbarText = "Sign In Successed, now redirecting to your dashboard...";
        currentObj.overlay = false; // after all success redirect to home

        axios__WEBPACK_IMPORTED_MODULE_1___default.a.get('api/auth/me', {
          headers: {
            Authorization: 'Bearer ' + token,
            withCredentials: true //the token is a variable which holds the token

          }
        }).then(function (response) {
          // handle success
          var userRole = response.data.role;

          if (userRole == "admin") {
            currentObj.$router.push('/siAdmino');
          }

          if (userRole == 'pustakawan') {
            currentObj.$router.push('/perpus');
          }
        })["catch"](function (error) {
          // handle error
          console.log(error);
        });
      })["catch"](function (error) {
        localStorage.removeItem('userToken');
        currentObj.overlay = false;

        if (error.response) {
          currentObj.serverError = error.response.data.errors;
          currentObj.password = "";
        }
      });
    } // end of login method

  } // end of methods

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ErrorAlert.vue?vue&type=template&id=78878242&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/ErrorAlert.vue?vue&type=template&id=78878242& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    "v-alert",
    {
      attrs: {
        border: "top",
        color: "red lighten-2",
        dark: "",
        dismissible: ""
      }
    },
    _vm._l(_vm.serverError, function(error, index) {
      return _c("ul", { key: index }, [_c("li", [_vm._v(_vm._s(error[0]))])])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a& ***!
  \********************************************************************************************************************************************************************************************************/
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
    "v-content",
    { staticClass: "pt-0" },
    [
      _c(
        "v-container",
        { staticClass: "fill-height py-0", attrs: { fluid: "" } },
        [
          _c(
            "v-row",
            { attrs: { align: "center", justify: "center" } },
            [
              _c(
                "v-col",
                { attrs: { cols: "12", sm: "12", md: "7", lg: "7" } },
                [
                  _c("v-img", {
                    staticClass: "mx-auto",
                    attrs: { src: "/statics/login.png", "max-width": "400" }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "v-col",
                {
                  staticClass: "pa-0",
                  attrs: { cols: "12", sm: "12", md: "5", lg: "5" }
                },
                [
                  _c(
                    "v-card",
                    {
                      staticClass: "deep-purple d-flex align-center",
                      attrs: { height: "110vh", dark: "", rounded: "0" }
                    },
                    [
                      _c(
                        "v-row",
                        [
                          _c(
                            "v-col",
                            [
                              _c(
                                "v-card-text",
                                { staticClass: "text-center" },
                                [
                                  _c("div", { staticClass: "text-h6" }, [
                                    _vm._v("Welcome!")
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    { staticClass: "text-subtitle1 pb-3" },
                                    [_vm._v("Sign in to your account")]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _vm.serverError
                                ? _c(
                                    "v-card-text",
                                    { staticClass: "py-0" },
                                    [
                                      _vm.serverError
                                        ? _c("error-alert", {
                                            staticClass: "mx-5",
                                            attrs: {
                                              serverError: _vm.serverError
                                            }
                                          })
                                        : _vm._e()
                                    ],
                                    1
                                  )
                                : _vm._e(),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                { staticClass: "text-center" },
                                [
                                  _c(
                                    "v-form",
                                    {
                                      on: {
                                        submit: function($event) {
                                          $event.preventDefault()
                                          return _vm.login($event)
                                        }
                                      }
                                    },
                                    [
                                      _c("v-text-field", {
                                        staticClass: "mx-5",
                                        attrs: {
                                          label: "Email",
                                          filled: "",
                                          dense: "",
                                          type: "email"
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
                                      _c("v-text-field", {
                                        staticClass: "mx-5",
                                        attrs: {
                                          label: "Password",
                                          filled: "",
                                          dense: "",
                                          type: "password"
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
                                      _c(
                                        "v-btn",
                                        {
                                          staticClass: "mb-3",
                                          attrs: {
                                            rounded: "",
                                            color: "white",
                                            width: "300px",
                                            type: "submit"
                                          }
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "font-weight-bold deep-purple--text"
                                            },
                                            [_vm._v("Sign In")]
                                          )
                                        ]
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "text-subtitle1 white--text",
                                      attrs: { href: "/forgot-password" }
                                    },
                                    [_vm._v("Fogot Password?")]
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
          attrs: { timeout: 5000, color: _vm.snackbarColor },
          model: {
            value: _vm.snackbar,
            callback: function($$v) {
              _vm.snackbar = $$v
            },
            expression: "snackbar"
          }
        },
        [
          _vm._v("\n\t\t" + _vm._s(_vm.snackbarText) + "\n\t\t"),
          _c(
            "v-btn",
            {
              attrs: { color: "white", text: "" },
              on: {
                click: function($event) {
                  _vm.snackbar = false
                }
              }
            },
            [_vm._v("\n\t\t\tClose\n\t\t")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/ErrorAlert.vue":
/*!************************************************!*\
  !*** ./resources/js/components/ErrorAlert.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ErrorAlert_vue_vue_type_template_id_78878242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ErrorAlert.vue?vue&type=template&id=78878242& */ "./resources/js/components/ErrorAlert.vue?vue&type=template&id=78878242&");
/* harmony import */ var _ErrorAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ErrorAlert.vue?vue&type=script&lang=js& */ "./resources/js/components/ErrorAlert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ErrorAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ErrorAlert_vue_vue_type_template_id_78878242___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ErrorAlert_vue_vue_type_template_id_78878242___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/ErrorAlert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/ErrorAlert.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/ErrorAlert.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorAlert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ErrorAlert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorAlert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/ErrorAlert.vue?vue&type=template&id=78878242&":
/*!*******************************************************************************!*\
  !*** ./resources/js/components/ErrorAlert.vue?vue&type=template&id=78878242& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorAlert_vue_vue_type_template_id_78878242___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./ErrorAlert.vue?vue&type=template&id=78878242& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/ErrorAlert.vue?vue&type=template&id=78878242&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorAlert_vue_vue_type_template_id_78878242___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ErrorAlert_vue_vue_type_template_id_78878242___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/pages/auth/Login.vue":
/*!*******************************************!*\
  !*** ./resources/js/pages/auth/Login.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=42c42d6a& */ "./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&":
/*!**************************************************************************!*\
  !*** ./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=42c42d6a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/Login.vue?vue&type=template&id=42c42d6a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_42c42d6a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);