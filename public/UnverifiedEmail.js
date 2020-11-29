(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["UnverifiedEmail"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      snackbar: false,
      snackbarColor: "",
      snackbarText: "",
      redirecting: false
    };
  },
  methods: {
    redirectToResendMail: function redirectToResendMail() {
      var currentObj = this;
      currentObj.redirecting = true;
      currentObj.snackbar = true;
      currentObj.snackbarColor = "success";
      currentObj.snackbarText = "Redirecting to resend verification mail page...";
      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/api/auth/logout').then(function (response) {
        localStorage.removeItem('userToken');
        currentObj.$router.push('/resend-verification-mail');
      })["catch"](function (error) {
        console.log(error);
      });
      currentObj.redirecting = false;
    }
  } // end of methods

});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=template&id=01a2381d&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=template&id=01a2381d& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "v-app",
    { attrs: { id: "inspire" } },
    [
      _c(
        "v-content",
        [
          _c(
            "v-container",
            { staticClass: "fill-height", attrs: { fluid: "" } },
            [
              _c(
                "v-row",
                { attrs: { align: "center", justify: "center" } },
                [
                  _c(
                    "v-col",
                    {
                      staticClass: "text-center",
                      attrs: { cols: "12", sm: "8", md: "4", lg: "4" }
                    },
                    [
                      _c("v-img", {
                        staticClass: "mb-4",
                        attrs: { src: "/statics/403.png" }
                      }),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c("div", [
                        _vm._v("Stop! Please verify your email first...")
                      ]),
                      _vm._v(" "),
                      _c("br"),
                      _vm._v(" "),
                      _c(
                        "v-btn",
                        {
                          staticClass: "mx-auto",
                          attrs: {
                            rounded: "",
                            color: "deep-purple",
                            dark: "",
                            loading: _vm.redirecting,
                            disabled: _vm.redirecting
                          },
                          on: {
                            click: function($event) {
                              $event.preventDefault()
                              return _vm.redirectToResendMail($event)
                            }
                          }
                        },
                        [
                          _vm._v(
                            "\n\t\t\t\t\t\t\tResend Verification Mail?\n\t\t\t\t\t\t"
                          )
                        ]
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
              _vm._v("\n        " + _vm._s(_vm.snackbarText) + "\n        "),
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
                [_vm._v("\n          Close\n        ")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/pages/auth/UnverifiedEmail.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/auth/UnverifiedEmail.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UnverifiedEmail_vue_vue_type_template_id_01a2381d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UnverifiedEmail.vue?vue&type=template&id=01a2381d& */ "./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=template&id=01a2381d&");
/* harmony import */ var _UnverifiedEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UnverifiedEmail.vue?vue&type=script&lang=js& */ "./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UnverifiedEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UnverifiedEmail_vue_vue_type_template_id_01a2381d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UnverifiedEmail_vue_vue_type_template_id_01a2381d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/auth/UnverifiedEmail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnverifiedEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnverifiedEmail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UnverifiedEmail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=template&id=01a2381d&":
/*!************************************************************************************!*\
  !*** ./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=template&id=01a2381d& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnverifiedEmail_vue_vue_type_template_id_01a2381d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UnverifiedEmail.vue?vue&type=template&id=01a2381d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/pages/auth/UnverifiedEmail.vue?vue&type=template&id=01a2381d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnverifiedEmail_vue_vue_type_template_id_01a2381d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UnverifiedEmail_vue_vue_type_template_id_01a2381d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);