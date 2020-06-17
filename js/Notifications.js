(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Notifications"],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/office-management/notifications/Mailbox.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/office-management/notifications/Mailbox.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      items: [{
        header: 'Today'
      }, {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
        title: 'Working this weekend?',
        isStarred: false,
        subtitle: '<span class=\'text--primary\'>Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to haresolve something?'
      }, {
        divider: true,
        inset: true
      }, {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
        title: 'Summer Checks <span class="grey--text text--lighten-1">4</span>',
        isStarred: false,
        subtitle: '<span class=\'text--primary\'>to Alex, Scott, Jennifer</span> &mdash; This week starts the checks for this summer.'
      }, {
        divider: true,
        inset: true
      }, {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
        title: 'Flour, milk powder or grain dusts',
        isStarred: false,
        subtitle: '<span class=\'text--primary\'>Sandra Adams</span> &mdash; Exposure to organic dusts can result in severe health impacts, including respiratory irritation and occupational asthma.'
      }, {
        divider: true,
        inset: true
      }, {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
        title: 'Use of display screen equipment',
        isStarred: false,
        subtitle: '<span class=\'text--primary\'>Trevor Hansen</span> &mdash; Prolonged use of poorly designed workstations can result in a range of ill-health effects'
      }, {
        divider: true,
        inset: true
      }, {
        avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
        title: 'Workplace aggression and abuse',
        isStarred: false,
        subtitle: '<span class=\'text--primary\'>Britta Holt</span> &mdash; Whether it’s from a colleague, client or someone else, workplace aggression and abuse can have serious effects on someone’s mental and physical health.'
      }]
    };
  },
  methods: {
    openDetail: function openDetail() {//// const vm = this;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/office-management/notifications/Mailbox.vue?vue&type=template&id=0970d730&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vuetify-loader/lib/loader.js??ref--18-0!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/office-management/notifications/Mailbox.vue?vue&type=template&id=0970d730& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { fluid: "", "grid-list-xl": "" } },
    [
      _c(
        "v-layout",
        { attrs: { row: "", wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { "d-flex": "", lg12: "", sm12: "", xs12: "" } },
            [
              _c(
                "v-card",
                { staticStyle: { "margin-bottom": "150px" } },
                [
                  _c(
                    "v-toolbar",
                    { attrs: { color: "cyan", dark: "" } },
                    [
                      _c("v-toolbar-side-icon"),
                      _c("v-toolbar-title", [_vm._v("Notification Inbox")]),
                      _c("v-spacer"),
                      _c(
                        "v-btn",
                        { attrs: { icon: "" } },
                        [_c("v-icon", [_vm._v("search")])],
                        1
                      )
                    ],
                    1
                  ),
                  _c(
                    "v-list",
                    { attrs: { "two-line": "" } },
                    [
                      _vm._l(_vm.items, function(item, index) {
                        return [
                          item.header
                            ? _c("v-subheader", { key: item.header }, [
                                _vm._v(" " + _vm._s(item.header) + " ")
                              ])
                            : item.divider
                            ? _c("v-divider", {
                                key: index,
                                attrs: { inset: item.inset }
                              })
                            : _c(
                                "v-list-tile",
                                {
                                  key: item.title,
                                  attrs: { avatar: "" },
                                  on: { click: _vm.openDetail }
                                },
                                [
                                  _c("v-list-tile-avatar", [
                                    _c("img", { attrs: { src: item.avatar } })
                                  ]),
                                  _c(
                                    "v-list-tile-content",
                                    [
                                      _c("v-list-tile-title", {
                                        domProps: {
                                          innerHTML: _vm._s(item.title)
                                        }
                                      }),
                                      _c("v-list-tile-sub-title", {
                                        domProps: {
                                          innerHTML: _vm._s(item.subtitle)
                                        }
                                      })
                                    ],
                                    1
                                  ),
                                  _c(
                                    "v-list-tile-action",
                                    [
                                      !item.isStarred
                                        ? _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                color: "grey lighten-1"
                                              },
                                              on: {
                                                click: function($event) {
                                                  item.isStarred = !item.isStarred
                                                }
                                              }
                                            },
                                            [_vm._v("star_border")]
                                          )
                                        : _c(
                                            "v-icon",
                                            {
                                              attrs: {
                                                color: "yellow darken-2"
                                              },
                                              on: {
                                                click: function($event) {
                                                  item.isStarred = !item.isStarred
                                                }
                                              }
                                            },
                                            [_vm._v("star")]
                                          )
                                    ],
                                    1
                                  )
                                ],
                                1
                              )
                        ]
                      })
                    ],
                    2
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./src/views/office-management/notifications/Mailbox.vue":
/*!***************************************************************!*\
  !*** ./src/views/office-management/notifications/Mailbox.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Mailbox_vue_vue_type_template_id_0970d730___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Mailbox.vue?vue&type=template&id=0970d730& */ "./src/views/office-management/notifications/Mailbox.vue?vue&type=template&id=0970d730&");
/* harmony import */ var _Mailbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mailbox.vue?vue&type=script&lang=js& */ "./src/views/office-management/notifications/Mailbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vuetify-loader/lib/runtime/installComponents.js */ "./node_modules/vuetify-loader/lib/runtime/installComponents.js");
/* harmony import */ var _node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuetify/lib/components/VBtn */ "./node_modules/vuetify/lib/components/VBtn/index.js");
/* harmony import */ var vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuetify/lib/components/VCard */ "./node_modules/vuetify/lib/components/VCard/index.js");
/* harmony import */ var vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vuetify/lib/components/VGrid */ "./node_modules/vuetify/lib/components/VGrid/index.js");
/* harmony import */ var vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuetify/lib/components/VDivider */ "./node_modules/vuetify/lib/components/VDivider/index.js");
/* harmony import */ var vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vuetify/lib/components/VIcon */ "./node_modules/vuetify/lib/components/VIcon/index.js");
/* harmony import */ var vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! vuetify/lib/components/VList */ "./node_modules/vuetify/lib/components/VList/index.js");
/* harmony import */ var vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vuetify/lib/components/VSubheader */ "./node_modules/vuetify/lib/components/VSubheader/index.js");
/* harmony import */ var vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! vuetify/lib/components/VToolbar */ "./node_modules/vuetify/lib/components/VToolbar/index.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Mailbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Mailbox_vue_vue_type_template_id_0970d730___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Mailbox_vue_vue_type_template_id_0970d730___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* vuetify-loader */




















_node_modules_vuetify_loader_lib_runtime_installComponents_js__WEBPACK_IMPORTED_MODULE_3___default()(component, {VBtn: vuetify_lib_components_VBtn__WEBPACK_IMPORTED_MODULE_4__["VBtn"],VCard: vuetify_lib_components_VCard__WEBPACK_IMPORTED_MODULE_5__["VCard"],VContainer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VContainer"],VDivider: vuetify_lib_components_VDivider__WEBPACK_IMPORTED_MODULE_7__["VDivider"],VFlex: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VFlex"],VIcon: vuetify_lib_components_VIcon__WEBPACK_IMPORTED_MODULE_8__["VIcon"],VLayout: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VLayout"],VList: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VList"],VListTile: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListTile"],VListTileAction: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListTileAction"],VListTileAvatar: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListTileAvatar"],VListTileContent: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListTileContent"],VListTileSubTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListTileSubTitle"],VListTileTitle: vuetify_lib_components_VList__WEBPACK_IMPORTED_MODULE_9__["VListTileTitle"],VSpacer: vuetify_lib_components_VGrid__WEBPACK_IMPORTED_MODULE_6__["VSpacer"],VSubheader: vuetify_lib_components_VSubheader__WEBPACK_IMPORTED_MODULE_10__["VSubheader"],VToolbar: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11__["VToolbar"],VToolbarSideIcon: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11__["VToolbarSideIcon"],VToolbarTitle: vuetify_lib_components_VToolbar__WEBPACK_IMPORTED_MODULE_11__["VToolbarTitle"]})


/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/office-management/notifications/Mailbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/office-management/notifications/Mailbox.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/views/office-management/notifications/Mailbox.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mailbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mailbox.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/office-management/notifications/Mailbox.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mailbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/office-management/notifications/Mailbox.vue?vue&type=template&id=0970d730&":
/*!**********************************************************************************************!*\
  !*** ./src/views/office-management/notifications/Mailbox.vue?vue&type=template&id=0970d730& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mailbox_vue_vue_type_template_id_0970d730___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"525a9f0d-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vuetify-loader/lib/loader.js??ref--18-0!../../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Mailbox.vue?vue&type=template&id=0970d730& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"525a9f0d-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vuetify-loader/lib/loader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/office-management/notifications/Mailbox.vue?vue&type=template&id=0970d730&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mailbox_vue_vue_type_template_id_0970d730___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_525a9f0d_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vuetify_loader_lib_loader_js_ref_18_0_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Mailbox_vue_vue_type_template_id_0970d730___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=Notifications.js.map