(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[1],{"37c5":function(e,t,i){"use strict";var a=i("fe86"),s=i.n(a);s.a},"38f1":function(e,t,i){"use strict";var a=i("3db5"),s=i.n(a);s.a},"3db5":function(e,t,i){},"713b":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-layout",{attrs:{view:"lHr LpR fFf"}},[a("q-header",{staticClass:"bg-blue-grey-10 text-white",attrs:{bordered:""}},[a("q-toolbar",[a("q-toolbar-title",[a("q-img",{staticClass:"logo q-mx-sm",attrs:{src:i("a8e5")}}),a("span",{staticClass:"text-h5 q-my-none q-mr-md text-yellow-5"},[e._v("Free SaaS Monster")]),a("span",{staticClass:"text-subtitle1 q-mt-none text-italic gt-xs"},[e._v("Services that offer a plan with no monthly fee.")])],1),a("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"add_box"},on:{click:e.addService}}),a("q-btn",{attrs:{dense:"",flat:"",round:"",icon:"eco"},on:{click:function(t){e.right=!e.right}}})],1)],1),a("q-drawer",{attrs:{side:"right",bordered:""},model:{value:e.right,callback:function(t){e.right=t},expression:"right"}},[a("q-list",[a("q-item-label",{attrs:{header:""}},[a("div",{staticClass:"text-subtitle1"},[e._v("This website is running completely for free, using the following services")])]),e._l(e.services,(function(t){return[a("q-separator",{key:"SERVICE."+t.name,attrs:{inset:""}}),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],key:t.name,attrs:{clickable:""}},[a("q-item-section",[a("q-item-label",{attrs:{lines:"1"}},[e._v(e._s(t.name))]),a("q-item-label",{attrs:{caption:""}},[e._v(e._s(t.category))])],1)],1)]}))],2)],1),a("q-page-container",[a("router-view")],1)],1)},s=[],n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("q-dialog",{ref:"dialog",on:{hide:e.onDialogHide}},[i("q-card",{staticClass:"bg-white add-service-card"},[i("q-card-section",[i("div",{staticClass:"text-h6 q-my-md"},[e._v("Feed the monster. Add a service.")]),i("blockquote",{staticClass:"text-overtext q-my-md text-blue-6 text-weight-medium"},[e._v("Qualified services are those that are offered in Software-as-a-Service model, have a free tier (and not just free trial), and are useful for more than just development phase")]),i("q-form",{ref:"addServiceForm",attrs:{action:"https://www.form-data.com/_functions/submit/ptcsz435k2rqatafroapc",method:"post",autocomplete:"off"},on:{submit:e.submitForm}},[i("q-input",{attrs:{name:"serviceName",label:"Service Name","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.serviceName,callback:function(t){e.serviceName=t},expression:"serviceName"}}),i("q-input",{attrs:{type:"url",name:"url",label:"Service home page",placeholder:"https://example.com","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.url,callback:function(t){e.url=t},expression:"url"}}),i("q-input",{attrs:{type:"url",name:"pricingUrl",label:"Service pricing page",placeholder:"https://example.com/pricing","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.pricingUrl,callback:function(t){e.pricingUrl=t},expression:"pricingUrl"}}),i("q-input",{attrs:{name:"description",label:"Short description",hint:"You can copy the tag line from the website","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.description,callback:function(t){e.description=t},expression:"description"}}),i("q-input",{attrs:{name:"freeplan",label:"Main benefits of free plan",hint:"Copy the main benefits from the free-plan benefits page","lazy-rules":"",rules:[function(e){return e&&e.length>0||"Please type something"}]},model:{value:e.freeplan,callback:function(t){e.freeplan=t},expression:"freeplan"}}),i("div",{staticClass:"q-mt-md"},[i("q-btn",{attrs:{label:"Submit",type:"submit",color:"primary"}}),i("q-btn",{staticClass:"q-ml-sm",attrs:{label:"Reset",type:"reset",color:"primary",flat:""}})],1)],1)],1)],1)],1)},r=[],o={name:"AddService",props:{},data:function(){return{serviceName:"",url:"",pricingUrl:"",description:"",freeplan:""}},methods:{show:function(){this.$refs.dialog.show()},hide:function(){this.$refs.dialog.hide()},onDialogHide:function(){this.$emit("hide")},onOKClick:function(){this.$emit("ok"),this.hide()},onCancelClick:function(){this.hide()},submitForm:function(e){e.target.submit()}}},l=o,c=(i("37c5"),i("2877")),w=i("eebe"),u=i.n(w),m=i("24e8"),M=i("f09f"),d=i("a370"),p=i("0378"),h=i("27f9"),g=i("9c40"),f=Object(c["a"])(l,n,r,!1,null,"56ad5065",null),b=f.exports;u()(f,"components",{QDialog:m["a"],QCard:M["a"],QCardSection:d["a"],QForm:p["a"],QInput:h["a"],QBtn:g["a"]});var D={data:function(){return{searching:!1,left:!0,right:!1,search:"",services:[{name:"Google analytics",category:"Web analytics",slug:"google-analytics"},{name:"Form-Data",category:"Forms backend",slug:"form-data"},{name:"FlatIcon",category:"SVG Logo",slug:"flaticon"},{name:"Github pages",category:"Web hosting",slug:"github-pages"},{name:"Github",category:"Code version control",slug:"github"}]}},computed:{searchbar:function(){return{width:this.searching?"250px":"150px"}}},methods:{addService:function(){this.$q.dialog({component:b,parent:this}).onOk((function(){console.log("OK")})).onCancel((function(){console.log("Cancel")})).onDismiss((function(){console.log("Called on OK or Cancel")}))}}},I=D,L=(i("38f1"),i("4d5a")),y=i("e359"),C=i("65c6"),v=i("6ac5"),N=i("068f"),S=i("0016"),x=i("9404"),G=i("1c1c"),A=i("0170"),k=i("eb85"),z=i("66e5"),q=i("4074"),j=i("09e3"),Q=i("714f"),Y=Object(c["a"])(I,a,s,!1,null,"4c736492",null);t["default"]=Y.exports;u()(Y,"components",{QLayout:L["a"],QHeader:y["a"],QToolbar:C["a"],QToolbarTitle:v["a"],QImg:N["a"],QInput:h["a"],QIcon:S["a"],QBtn:g["a"],QDrawer:x["a"],QList:G["a"],QItemLabel:A["a"],QSeparator:k["a"],QItem:z["a"],QItemSection:q["a"],QPageContainer:j["a"]}),u()(Y,"directives",{Ripple:Q["a"]})},a8e5:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgNjQgNjQiIHdpZHRoPSI1MTJweCIgaGVpZ2h0PSI1MTJweCIgY2xhc3M9IiI+PGc+PGcgaWQ9Im1vbnN0ZXItNiIgZGF0YS1uYW1lPSJtb25zdGVyIj48cGF0aCBkPSJNNDUsNThhMywzLDAsMCwxLTYsMGMwLTEuNjYsMy01LDMtNVM0NSw1Ni4zNCw0NSw1OFoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMzksMTRhMi45OTEsMi45OTEsMCwwLDAtMi44MTcsMS45ODRBMi44MTcsMi44MTcsMCwwLDAsMzYsMTdhMywzLDAsMCwwLDMsMywyLjk2MywyLjk2MywwLDAsMCwxLjM3My0uMzM0QTMsMywwLDAsMCwzOSwxNFoiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIGNsYXNzPSJhY3RpdmUtcGF0aCIgZGF0YS1vbGRfY29sb3I9IiMwMDAwMDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJNMzksMjJhNC45LDQuOSwwLDAsMS00Ljk0My01LjY1M0E4Ljc2Niw4Ljc2NiwwLDAsMCwzMiwxNi4xYTguOTIyLDguOTIyLDAsMSwwLDguMzA2LDUuNzIxQTUuMDI0LDUuMDI0LDAsMCwxLDM5LDIyWm0tNyw1YTIsMiwwLDEsMSwyLTJBMiwyLDAsMCwxLDMyLDI3WiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgY2xhc3M9ImFjdGl2ZS1wYXRoIiBkYXRhLW9sZF9jb2xvcj0iIzAwMDAwMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Ik00OC4wNjEsNDAuM2ExLDEsMCwwLDEtLjIyNS0xLjUwNywyMSwyMSwwLDEsMC0yNi4zMzYsNC40LDEsMSwwLDAsMSwuNS44NjZWNDdhMiwyLDAsMCwwLDQsMCwxLDEsMCwwLDEsMiwwdjZhMiwyLDAsMCwwLDQsMFY0OWExLDEsMCwwLDEsMiwwLDIsMiwwLDAsMCw0LDBWNDZhMSwxLDAsMCwxLDIsMCwyLDIsMCwwLDAsNCwwVjQ1YTEsMSwwLDAsMSwxLTFoMmEyLDIsMCwwLDAsMS4wNjEtMy43Wk00Mi4wODksMjAuOTE3YTEwLjg3OSwxMC44NzksMCwxLDEtNy4zNzQtNi40NzIsNC45OTEsNC45OTEsMCwxLDEsNy4zNzQsNi40NzJaIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBjbGFzcz0iYWN0aXZlLXBhdGgiIGRhdGEtb2xkX2NvbG9yPSIjMDAwMDAwIiBmaWxsPSIjRkZGRkZGIi8+PC9nPjwvZz4gPC9zdmc+Cg=="},fe86:function(e,t,i){}}]);