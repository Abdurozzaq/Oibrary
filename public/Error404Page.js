(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{114:function(t,n,a){"use strict";a.r(n);a(0);var s={data:function(){return{snackbar:!1,snackbarColor:"",snackbarText:""}},methods:{redirectToLogin:function(){this.snackbar=!0,this.snackbarColor="success",this.snackbarText="Redirecting to login page...",this.$router.push("/")}}},r=a(2),e=Object(r.a)(s,(function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("v-app",{attrs:{id:"inspire"}},[a("v-content",[a("v-container",{staticClass:"fill-height",attrs:{fluid:""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{staticClass:"text-center",attrs:{cols:"12",sm:"8",md:"4",lg:"4"}},[a("v-img",{staticClass:"mb-4",attrs:{src:"/statics/404.png"}}),t._v(" "),a("br"),t._v(" "),a("v-btn",{staticClass:"mx-auto",attrs:{rounded:"",color:"deep-purple",dark:""},on:{click:function(n){return n.preventDefault(),t.redirectToLogin(n)}}},[t._v("\n\t\t\t\t\t\t\tBack To Login Page\n\t\t\t\t\t\t")])],1)],1)],1),t._v(" "),a("v-snackbar",{attrs:{timeout:5e3,color:t.snackbarColor},model:{value:t.snackbar,callback:function(n){t.snackbar=n},expression:"snackbar"}},[t._v("\n        "+t._s(t.snackbarText)+"\n        "),a("v-btn",{attrs:{color:"white",text:""},on:{click:function(n){t.snackbar=!1}}},[t._v("\n          Close\n        ")])],1)],1)],1)}),[],!1,null,null,null);n.default=e.exports}}]);