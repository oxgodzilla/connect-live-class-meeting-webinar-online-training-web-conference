(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{"5Xmu":function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"a",(function(){return u}));var i=n("wd/R"),o=n.n(i),r={DAY_OF_MONTH:{code:"%DAY_OF_MONTH%",example:"Ex. 1-31",outputFormat:"moment",output:"DD"},DAY_OF_YEAR:{code:"%DAY_OF_YEAR%",example:"Ex. 1-365",outputFormat:"moment",output:"DDDD"},YEAR:{code:"%YEAR%",example:"Ex. 2020",outputFormat:"moment",output:"YYYY"},YEAR_SHORT:{code:"%YEAR_SHORT%",example:"Ex. 20",outputFormat:"moment",output:"YY"},MONTH:{code:"%MONTH%",example:"Ex. JANUARY",outputFormat:"moment",output:"MMMM"},MONTH_SHORT:{code:"%MONTH_SHORT%",example:"Ex. JAN",outputFormat:"moment",output:"MMM"},MONTH_NUMBER:{code:"%MONTH_NUMBER%",example:"Ex. 1 - 12",outputFormat:"moment",output:"MM"},DAY:{code:"%DAY%",example:"Ex. MONDAY",outputFormat:"moment",output:"dddd"},DAY_SHORT:{code:"%DAY_SHORT%",example:"Ex. MON",outputFormat:"moment",output:"ddd"},DAY_NUMBER:{code:"%DAY_NUMBER%",example:"Ex. 1 - 7",outputFormat:"moment",output:"E"},DATE:{code:"%DATE%",example:"Ex. 31-08-1987",outputFormat:"moment",output:"YYYY"},TIME:{code:"%DATE%",example:"Ex. 23:59",outputFormat:"moment",output:"mm"}},a=/%(.*?)%/g;function u(t){t.match(a);return r.objForEach((function(e,n){var i=new RegExp(e.code,"g");if("moment"===e.outputFormat){var r=o()().format(e.output);t=t.replace(i,r)}})),t}},"TBq+":function(t,e,n){"use strict";n.d(e,"k",(function(){return c})),n.d(e,"j",(function(){return d})),n.d(e,"i",(function(){return l})),n.d(e,"a",(function(){return p})),n.d(e,"g",(function(){return m})),n.d(e,"h",(function(){return g})),n.d(e,"l",(function(){return E})),n.d(e,"c",(function(){return _})),n.d(e,"m",(function(){return x})),n.d(e,"e",(function(){return A})),n.d(e,"f",(function(){return k})),n.d(e,"d",(function(){return T})),n.d(e,"b",(function(){return F}));n("nFxi");function i(t){return function(t){if(Array.isArray(t))return o(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){u(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(t){var e=t.label,n=t.icon,i=t.tooltip,o=t.design,r=void 0===o?{color:"white",size:"md"}:o;return{label:e,icon:n,tooltip:i,design:r&&r.color||"white",size:r&&r.size||"md"}},c=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{};return a(a({},s({label:t,icon:e,tooltip:i,design:o})),{},{action:function(t){t.push({name:n,params:r,query:u})}})},d=function(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:{},s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:{};return a(a({},c(t,e,n,o,r,u,s)),{},{permissions:[i]})},l=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return a(a({},s({label:t,icon:e,tooltip:i,design:o})),{},{action:n})},f=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return l(t,e,(function(t,e){e.$emit(n.event,n.options)}),i,o)},p=function(t,e){return d($t("general.add_new"),"fas fa-plus",t,e)},m=function(){return f($t("general.filter"),"fas fa-filter",{event:"TOGGLE_FILTER"})},h={storeName:"common",design:"white"},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return a(a(a({},h),t),{},{options:[{label:$t("general.default"),dispatch:{sortBy:"created_at"}}].concat(i(e))})},b=function(t){return{label:t.label,icon:t.icon}},v=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{};return a(a({},b({label:t,icon:e})),{},{to:{name:n,params:i,query:o}})},D=function(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{};return a(a({},v(t,e,n,o,r)),{},{permissions:[i]})},y=function(t,e,n){return a(a({},b({label:t,icon:e})),{},{action:n})},O=function(t,e,n){return y(t,e,(function(t,e){e.$emit(n.event,n.options)}))},E=function(t,e){return D($t("general.import"),"fas fa-file-import",t,e)},_=function(t,e){return D($t("general.config"),"fas fa-cog",t,e)},x=function(){return O($t("general.print"),"fas fa-print",{event:"EXPORT",options:{type:"print"}})},A=function(){return O($t("general.export_pdf"),"fas fa-file-pdf",{event:"EXPORT",options:{type:"pdf"}})},k=function(){return O($t("general.export_xls"),"fas fa-file-excel",{event:"EXPORT",options:{type:"xls"}})},T=function(){return O($t("general.export_csv"),"fas fa-file-csv",{event:"EXPORT",options:{type:"csv"}})},w={key_p:{type:"event",emit:"EXPORT",payload:{type:"print"}}},R={key_e:{type:"event",emit:"EXPORT",payload:{type:"pdf"}}},F=a(a(a({},{key_f:{type:"event",emit:"TOGGLE_FILTER"}}),w),R)},brkl:function(t,e,n){"use strict";n.r(e);var i=n("hR8K"),o=n("BcCH"),r={components:{CommonForm:i.a},beforeRouteLeave:function(t,e,n){o.a.$emit("ROUTE_LEAVING",n)}},a=n("KHd+"),u=Object(a.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("base-container",{attrs:{boxed:""}},[e("common-form")],1)}),[],!1,null,null,null);e.default=u.exports},"g+26":function(t,e,n){"use strict";var i=n("o0o1"),o=n.n(i),r=n("TBq+"),a=n("OjY7"),u=n("V0LQ"),s=n("5Xmu"),c=n("L2JU"),d=n("BcCH");function l(t,e,n,i,o,r,a){try{var u=t[r](a),s=u.value}catch(t){return void n(t)}u.done?e(s):Promise.resolve(s).then(i,o)}function f(t){return function(){var e=this,n=arguments;return new Promise((function(i,o){var r=t.apply(e,n);function a(t){l(r,i,o,a,u,"next",t)}function u(t){l(r,i,o,a,u,"throw",t)}a(void 0)}))}}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){h(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function h(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}e.a={components:{FileUploader:a.a},props:{editData:{type:Object},isFetching:{type:Boolean,default:!1},duplicate:{type:Boolean,default:!1}},data:function(){return{uuid:null,subUuid:null,formData:{},formErrors:{},formLabels:{},customFilters:{},initianLength:0,initialFormData:null,emptyFormData:null,preRequisite:{},keepAdding:!1,keepAddingOption:"clear_all",keepAddingSelectedFields:null,keepAddingFields:[],isLoading:!0,getInitialDataCalled:!1,doInitBeforeGetInitialData:!1,initUrl:"",initSubUrl:null,dataType:null,uploaderConfig:{module:"",token:"",allowedExtensions:"",maxNoOfFiles:5,uuid:uuid()},headerButtons:null}},computed:m(m({},Object(c.c)("config",["configs","vars"])),{},{showKeepAdding:function(){return!this.editData||this.duplicate},codePrefix:function(){return this.formData.codePrefix},lastCodeObj:function(){var t=this;return this.preRequisite.codes.find((function(e){return e.codePrefix===t.formData.codePrefix}))}}),watch:{editData:function(t){t&&(this.formData=Object.assign({},this.formData,_.cloneDeep(t)),this.uuid=this.formData.uuid,this.uploaderConfig.token=this.formData.token,"function"==typeof this.addNewRow&&"function"==typeof this.addNewRowIfNone&&this.addNewRowIfNone(),this.initialFormData=_.cloneDeep(this.formData),"function"==typeof this.afterEditData&&this.afterEditData(),this.duplicate&&this.computeCodeNumber(this.formData.codePrefix))},codePrefix:function(){this.computeCodeNumber()}},methods:m(m(m({},Object(c.b)("common",["Init","InitSub","Get","Store","Update","GetPreRequisite","Destroy","Custom"])),Object(c.b)("config",["SetUiConfig","SetConfig"])),{},{computeCodeNumber:function(){if(this.preRequisite.codes&&this.showKeepAdding){this.lastCodeObj;var t=this.configs[this.dataType].codeDigit;this.lastCodeObj?this.formData.codeNumber=this.numberPadding(this.lastCodeObj.codeNumber+1,t):this.formData.codeNumber=this.numberPadding(1,t)}},numberPadding:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,e=arguments.length>1?arguments[1]:void 0;return Object(u.b)(t,e||this.configs[this.dataType].codeDigit)},doNothing:function(){},submit:function(){var t=this;if(formUtil.isUnchanged(this.initialFormData,this.formData))return this.$toasted.info(this.$t("general.nothing_changed"),this.$toastConfig.info),!1;this.doInit(),this.doInitSub(),this.isLoading=!0,this.duplicate&&(this.formData.uuid=null),(this.formData.uuid?this.Update:this.Store)(this.formData).then((function(e){t.$toasted.success(e.message,t.$toastConfig),"function"==typeof t.afterSubmit?t.afterSubmit(e):t.keepAdding?(t.uploaderConfig.uuid=uuid(),t.formData=formUtil.clearFormConditionally(t.formData,t.initialFormData,t.keepAddingOption,t.keepAddingSelectedFields),t.getInitialDataCalled&&t.getInitialData()):(t.initialFormData=_.cloneDeep(t.formData),t.$router.back()),t.isLoading=!1})).catch((function(e){t.isLoading=!1,t.formErrors=formUtil.handleErrors(e)}))},reset:function(){var t=this;formUtil.confirmAction().then((function(e){e.value&&(t.formData=Object.assign({},t.formData,_.cloneDeep(t.initialFormData)))}))},unsavedCheck:function(t){formUtil.unsavedCheckAlert(this.initialFormData,this.formData,t)},fillPreRequisite:function(t){var e=this;this.preRequisite.objForEach((function(n,i){e.preRequisite[i]=t[i]||n}))},setUploaderConfig:function(t){var e=this;this.uploaderConfig.objForEach((function(n,i){e.uploaderConfig[i]=t[i]||n}))},getInitialData:function(t){var e=this;return f(o.a.mark((function n(){var i;return o.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.isLoading=!0,e.getInitialDataCalled=!0,n.prev=2,e.doInitBeforeGetInitialData&&e.doInit(),n.next=6,e.GetPreRequisite(e.customFilters);case 6:return i=n.sent,e.doInitBeforeGetInitialData&&e.doInitSub(),e.fillPreRequisite(i),i.uploadConfig&&e.setUploaderConfig(i.uploadConfig),"function"==typeof e.addNewRow&&"function"==typeof e.addNewRowIfNone&&e.$nextTick((function(){e.addNewRowIfNone()})),e.configs[e.dataType]&&e.$nextTick((function(){e.formData.codePrefix=s.a(e.configs[e.dataType].codePrefix)})),t&&e.$nextTick((function(){t()})),e.isLoading=!1,n.abrupt("return",i);case 17:throw n.prev=17,n.t0=n.catch(2),e.isLoading=!1,formUtil.handleErrors(n.t0),n.t0;case 22:case"end":return n.stop()}}),n,null,[[2,17]])})))()},getEntityData:function(){var t=this;this.isLoading=!0,this.Get(this.formData.uuid).then((function(e){t.formData.objForEach((function(n,i){t.formData[i]=e[i]||null})),t.initialFormData=_.cloneDeep(t.formData),t.isLoading=!1})).catch((function(e){t.isLoading=!1,formUtil.handleErrors(e)}))},addTag:function(t){var e={name:t,slug:formUtil.generateSlug(t)};this.preRequisite.tags.push(e),this.formData.tags.push(e)},newModalClose:function(t){var e=this;if(this.doInit(),this.doInitSub(),t){var n=function(){var n=function(n){t.push?e.formData[t.dataTypeArr].push(n):e.formData[t.dataType]=n};e.isLoading=!0,t.dataType&&(t.dontMatch?n(t):t.dataTypeArr&&t.propertyToMatch&&n(e.preRequisite[t.dataTypeArr].find((function(e){return e[t.propertyToMatch]===t[t.propertyToMatch]}))||null)),e.isLoading=!1};this.getInitialDataCalled?this.getInitialData(n):n()}},getHeaderOptions:function(){var t=[];this.headerButtons&&(t=t.concat(this.headerButtons));var e=[];return e.push(r.m()),e.push(r.e()),{hideLinks:this.hideHeaderLinks||!1,buttons:t,links:e,title:this.pageTitle||"",subTitle:this.pageTitle&&this.subTitle||""}},getKeyBindingOptions:function(){return m({},r.b)},applyPageHeader:function(){var t=Object.assign({},this.getHeaderOptions(),this.header||{}),e=Object.assign({},this.getKeyBindingOptions(),this.keyBindings||{});this.SetUiConfig({pageHeader:t}),this.SetConfig({keyBindings:e})},export:function(t){var e=this;return f(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e.isLoading=!0,e.$printComponent("printable",{title:"Printing ".concat(e.dataTitle||"")}),e.isLoading=!1;case 3:case"end":return t.stop()}}),t)})))()},doInitSub:function(){this.initSubUrl&&this.InitSub({url:(this.subUuid?this.subUuid+"/":"")+this.initSubUrl})},doInit:function(){this.Init({url:this.initUrl})}}),mounted:function(){d.a.$off("ROUTE_LEAVING",this.unsavedCheck),d.a.$on("ROUTE_LEAVING",this.unsavedCheck),this.$route.params.subUuid&&(this.subUuid=this.$route.params.subUuid),this.doInit(),this.doInitSub(),this.uploaderConfig.token=this.formData.token,this.initialFormData=_.cloneDeep(this.formData)},created:function(){var t=this;this.formLabels&&this.formLabels.objForEach((function(e,n){t.keepAddingFields.push({uuid:n,value:e})}))},beforeDestroy:function(){delete this.formData,delete this.formErrors,delete this.formLabels,delete this.preRequisite,delete this.keepAddingFields},destroyed:function(){d.a.$off("ROUTE_LEAVING",this.unsavedCheck)}}},hR8K:function(t,e,n){"use strict";var i={extends:n("g+26").a,data:function(){return{formData:{uuid:null,name:"",description:""},formLabels:{name:$t("contact.segment.props.name"),description:$t("contact.segment.props.description")},initUrl:"segments"}},mounted:function(){this.isLoading=!1}},o=n("KHd+"),r=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{on:{submit:function(e){return e.preventDefault(),t.submit(e)}}},[n("animated-loader",{attrs:{"is-loading":t.isLoading||t.isFetching,"loader-color":t.vars.loaderColor}}),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("base-input",{attrs:{"auto-focus":"",label:t.formLabels.name,type:"text",error:t.formErrors.name,required:""},on:{"update:error":function(e){return t.$set(t.formErrors,"name",e)}},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),t._v(" "),n("div",{staticClass:"col-12 col-md-6 mb-3"},[n("base-input",{attrs:{label:t.formLabels.description,type:"text",error:t.formErrors.description},on:{"update:error":function(e){return t.$set(t.formErrors,"description",e)}},model:{value:t.formData.description,callback:function(e){t.$set(t.formData,"description",e)},expression:"formData.description"}})],1)]),t._v(" "),n("div",{staticClass:"form-footer mt-3"},[n("div",{staticClass:"left-side"},[n("base-button",{attrs:{type:"button",design:"light",tabindex:"-1"},on:{click:function(e){return t.$router.back()}}},[n("i",{staticClass:"fas fa-chevron-left"}),t._v(" "+t._s(t.$t("general.cancel")))]),t._v(" "),t.showKeepAdding?n("base-checkbox",{staticClass:"ml-3 mt-2",model:{value:t.keepAdding,callback:function(e){t.keepAdding=e},expression:"keepAdding"}},[t._v("\n                "+t._s(t.$t("general.keep_adding"))+"\n            ")]):t._e()],1),t._v(" "),n("div",{staticClass:"right-side"},[n("base-button",{attrs:{type:"button",design:"light"},on:{click:t.reset}},[t._v(t._s(t.$t("general.reset")))]),t._v(" "),n("base-button",{attrs:{type:"submit",design:"primary"}},[n("i",{staticClass:"fas fa-save"}),t._v(" "+t._s(t.$t("global.save",{attribute:t.$t("contact.segment.segment")})))])],1)]),t._v(" "),t.showKeepAdding&&t.keepAdding?[n("keep-adding-form",{attrs:{"keep-adding-fields":t.keepAddingFields,"keep-adding-option":t.keepAddingOption,"keep-adding-selected-fields":t.keepAddingSelectedFields,"is-loading":t.isLoading},on:{optionUpdated:function(e){t.keepAddingOption=e},fieldsUpdated:function(e){t.keepAddingSelectedFields=e}}})]:t._e()],2)}),[],!1,null,null,null);e.a=r.exports}}]);
//# sourceMappingURL=add.js.map?id=d2a8bc40acf20cb2252e