(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"0925":function(e,t,a){},"3d71":function(e,t,a){},"42cd":function(e,t,a){"use strict";var i=a("0925"),o=a.n(i);o.a},"483b":function(e,t,a){"use strict";var i=a("b23c"),o=a.n(i);o.a},"8b24":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page",{staticClass:"bg-grey-2"},[a("q-toolbar",{staticClass:"bg-blue-grey-7"},[a("q-btn",{attrs:{icon:"filter_list",flat:"",round:"",color:"white"},on:{click:e.showFilter}}),e.tag?a("q-separator",{staticClass:"q-mx-md",attrs:{dark:"",vertical:"",inset:""}}):e._e(),e.tag?a("q-breadcrumbs",{staticClass:"text-yellow-4",attrs:{"active-color":"white"}},[a("q-breadcrumbs-el",{attrs:{label:"Home",icon:"home",to:"/"}}),a("q-breadcrumbs-el",{attrs:{label:e.tag}})],1):e._e(),e.relatedTags.length&&e.tag?a("q-separator",{staticClass:"q-mx-md gt-sm",attrs:{dark:"",vertical:"",inset:""}}):e._e(),e.relatedTags.length?a("div",{staticClass:"gt-sm"},[a("span",{staticClass:"text-caption text-white"},[e._v("Related:")]),e._l(e.relatedTags,(function(t){return a("q-btn",{key:"related-"+t,staticClass:"q-px-sm service-label",attrs:{rounded:"",outlined:"",dense:"",clickable:"",color:"white",size:"sm",outline:"",to:"/tags/"+t}},[e._v(e._s(t))])}))],2):e._e()],1),a("list-view",{attrs:{services:e.services}})],1)},o=[],s=(a("ac6a"),a("cadf"),a("06db"),a("456d"),a("4db1")),n=a.n(s),r=(a("6762"),a("2fdb"),a("b0f1")),l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-dialog",{ref:"dialog",attrs:{position:"left","full-height":""},on:{hide:e.onDialogHide}},[a("q-card",[a("q-list",[a("q-item-label",{attrs:{header:""}},[e._v("Filter")]),e._l(e.tags,(function(t,i){return a("q-item",{key:"sidebar-filter-"+i,attrs:{dense:""}},[a("q-btn",{attrs:{flat:"",label:i,to:"All"===i?"/":"/tags/"+i}},[a("q-badge",{staticClass:"q-ml-sm"},[e._v(e._s(t))])],1)],1)}))],2)],1)],1)},c=[],p={name:"FilterPanel",props:{},computed:{tags:function(){var e={};r.forEach((function(t){(t.labels||[]).forEach((function(t){e[t]?e[t]++:e[t]=1}))}));var t=Object.keys(e).sort(),a={All:r.length};return t.forEach((function(t){a[t]=e[t]})),a}},methods:{show:function(){this.$refs.dialog.show()},hide:function(){this.$refs.dialog.hide()},onDialogHide:function(){this.$emit("hide")},onOKClick:function(){this.$emit("ok"),this.hide()},onCancelClick:function(){this.hide()}}},d=p,u=(a("42cd"),a("2877")),m=a("eebe"),g=a.n(m),h=a("24e8"),f=a("f09f"),b=a("1c1c"),w=a("0170"),y=a("66e5"),v=a("9c40"),x=a("58a8"),k=Object(u["a"])(d,l,c,!1,null,"166a495a",null),T=k.exports;g()(k,"components",{QDialog:h["a"],QCard:f["a"],QList:b["a"],QItemLabel:w["a"],QItem:y["a"],QBtn:v["a"],QBadge:x["a"]});var q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"masonry",rawName:"v-masonry"}],staticClass:"masonry-container list-container",attrs:{"transition-duration":"0.3s","item-selector":".service-card"}},[a("div",{staticClass:"row"},e._l(e.services,(function(t){return a("q-card",{directives:[{name:"masonry-tile",rawName:"v-masonry-tile"}],key:t.slug,staticClass:"service-card q-ma-md"},[a("q-card-section",{attrs:{horizontal:""}},[a("q-btn",{attrs:{flat:"",unelevated:"",to:"/services/"+t.slug}},[a("img",{staticClass:"logo q-ma-sm",attrs:{src:"statics/logos/"+t.logo}})]),a("div",{staticClass:"text-h6 card-main-wrapper"},[e._v("\n          "+e._s(t.name)+"\n        ")]),a("q-space"),a("q-card-actions",{staticClass:"actions-section"},[e.$q.screen.gt.sm?a("q-btn",{staticClass:"bg-primary q-px-sm",attrs:{flat:"",rounded:"",color:"white",label:"Visit","icon-right":"open_in_new"},on:{click:function(a){return e.visit(t.url)}}},[a("q-tooltip",[e._v("Visit website")])],1):e._e(),!e.$q.screen.lt.md?e._e():a("q-btn",{staticClass:"bg-primary",attrs:{flat:"",round:"",color:"white",icon:"open_in_new"},on:{click:function(a){return e.visit(t.url)}}})],1)],1),a("q-card-section",[a("div",{staticClass:"q-ml-sm"},[a("div",{staticClass:"text-subtitle1"},e._l(t.labels,(function(t){return a("q-btn",{key:t,staticClass:"q-px-sm service-label",attrs:{rounded:"",outlined:"",dense:"",clickable:"",color:"grey",size:"sm",outline:"",to:"/tags/"+t}},[e._v(e._s(t))])})),1)]),a("q-space")],1),a("q-separator"),a("q-card-section",{staticClass:"text-body1"},[e._v("\n        "+e._s(t.description)+"\n      ")]),t.freeplan||t.nexttier?a("q-separator",{attrs:{inset:""}}):e._e(),t.freeplan||t.nexttier?a("q-card-section",[t.freeplan?a("div",[a("span",{staticClass:"text-bold"},[e._v("Free tier:")]),e._v("\n          "+e._s(t.freeplan)+"\n        ")]):e._e(),t.nexttier?a("div",[a("span",{staticClass:"text-bold"},[e._v("Next tier:")]),e._v("\n          "+e._s(t.nexttier)+"\n        ")]):e._e()]):e._e()],1)})),1)])},_=[],C={name:"ListView",props:{services:Array},data:function(){return{}},methods:{visit:function(e){window.open(e+"?ref=free-saas","_blank")},formattedDate:function(e){var t=new Date(e),a=new Intl.DateTimeFormat("en",{year:"numeric"}).format(t),i=new Intl.DateTimeFormat("en",{month:"long"}).format(t),o=new Intl.DateTimeFormat("en",{day:"2-digit"}).format(t);return"".concat(i," ").concat(o,", ").concat(a)}}},$=C,Z=(a("483b"),a("a370")),S=a("2c91"),j=a("4b7e"),B=a("05c0"),Q=a("eb85"),A=Object(u["a"])($,q,_,!1,null,"a21dbc5a",null),D=A.exports;g()(A,"components",{QCard:f["a"],QCardSection:Z["a"],QBtn:v["a"],QSpace:S["a"],QCardActions:j["a"],QTooltip:B["a"],QSeparator:Q["a"]});var F={name:"PageIndex",components:{ListView:D},data:function(){return{viewModel:"list"}},computed:{services:function(){var e=this;return this.tag?r.filter((function(t){return t.labels&&t.labels.includes(e.tag)})):r},tag:function(){return this.$route.params.tag},relatedTags:function(){var e=this;if(!this.tag)return[];var t=[];this.services.map((function(e){return e.labels})).forEach((function(e){return t.push.apply(t,n()(e))}));var a={};return t.forEach((function(t){t!==e.tag&&(a[t]=t)})),Object.keys(a).sort()}},methods:{showFilter:function(){this.$q.dialog({component:T,parent:this}).onOk((function(){console.log("OK")})).onCancel((function(){console.log("Cancel")})).onDismiss((function(){console.log("Called on OK or Cancel")}))}}},O=F,E=(a("c929"),a("9989")),z=a("65c6"),G=a("6a67"),N=a("ead5"),U=a("079e"),M=Object(u["a"])(O,i,o,!1,null,"349cfa76",null);t["default"]=M.exports;g()(M,"components",{QPage:E["a"],QToolbar:z["a"],QBtn:v["a"],QSeparator:Q["a"],QBtnToggle:G["a"],QBreadcrumbs:N["a"],QBreadcrumbsEl:U["a"]})},b0f1:function(e){e.exports=JSON.parse('[{"name":"Form-Data","slug":"form-data","url":"https://www.form-data.com","pricing":"https://www.form-data.com/pricing-plans","labels":["forms","nocode"],"description":"No-code backend for your forms. You create your website forms, and we handle the submissions","logo":"form-data.png","freeplan":"2 forms, 100 submissions/month","nexttier":"$5/month - 5 forms, unlimited submissions","added":"2020-02-19T00:00:00Z"},{"name":"Algolia","slug":"algolia","url":"https://www.algolia.com","pricing":"https://www.algolia.com/pricing","labels":["search"],"description":"A powerful hosted search API that provides product teams with the resources & tools they need to create fast, relevant search","freeplan":"Free hacker plan up to 10,000 documents and 100,000 operations. Bigger free plans available for community/Open Source projects.","logo":"algolia.png","nexttier":"$29/month","added":"2020-02-19T00:00:00Z"},{"name":"Auth0","slug":"auth0","url":"https://auth0.com","pricing":"https://auth0.com/pricing","labels":["authentication","identity","authorization"],"description":"Rapidly integrate authentication and authorization for web, mobile, and legacy applications so you can focus on your core business","freeplan":"Hosted free for development SSO. Up to 2 social identity providers for closed-source projects.","logo":"auth0.jpeg","nexttier":"$23/month","added":"2020-02-19T00:00:00Z"},{"name":"Google Analytics","slug":"google-analytics","url":"https://analytics.google.com","pricing":"https://marketingplatform.google.com/about/analytics/compare/","labels":["analytics"],"description":"Collect, configure, and analyze your data to reach the right audience","logo":"google-analytics.png","nexttier":"Analytics 360 - talk to sales","added":"2020-02-19T00:00:00Z"},{"name":"Mailjet","slug":"mailjet","url":"https://www.mailjet.com","pricing":"https://www.mailjet.com/pricing","labels":["email"],"description":"Streamline your emailing and boost your sales with Mailjet. We serve all your email and SMS needs with one simple and powerful service","freeplan":"6,000 emails/month","logo":"mailjet.png","nexttier":"$9.65/month - 30,000 mails/month","added":"2020-02-19T00:00:00Z"},{"name":"UptimeRobot","slug":"uptime-robot","url":"https://www.uptimerobot.com","pricing":"https://www.uptimerobot.com/pricing","labels":["monitoring","alerts","status"],"description":"Downtime Happens. Get Notified! Verifies downtime from multiple locations","freeplan":"50 monitors","logo":"uptime-robot.png","nexttier":"$7.9/month","added":"2020-02-19T00:00:00Z"},{"name":"Freshping","slug":"freshping","url":"https://www.freshworks.com/website-monitoring/","pricing":"https://www.freshworks.com/website-monitoring/pricing","labels":["monitoring","alerts","status"],"description":"Reliable website uptime monitoring. Monitor 50 URLs • 1-minute interval • 10 Global locations • 5 Public status pages","freeplan":"50 URLs at 1-minute interval with 10 Global locations and 5 Public status pages","logo":"freshping.png","nexttier":"$11/month","added":"2020-02-20T00:00:00Z"},{"name":"ChartMogul","slug":"chart-mogul","url":"https://www.chartmogul.com","pricing":"https://www.chartmogul.com/pricing","labels":["analytics","data","subscription"],"description":"Become a subscription leader. The best teams use ChartMogul to drive subscription business growth and turn their companies into industry leaders.","freeplan":"","logo":"chartmogul.png","nexttier":"$100/month","added":"2020-02-19T00:00:00Z"},{"name":"Fauna","slug":"fauna","url":"https://www.fauna.com","pricing":"https://www.fauna.com/pricing","labels":["database","data","serverless"],"description":"The database built for serverless, featuring native GraphQL","freeplan":"daily limits and up to 5GB","logo":"fauna.png","nexttier":"Pay for what you use. Storage $0.18/GB/month, $0.05/100K reads, $0.2/100K writes, transfer out $0.10/GB/month","added":"2020-02-22T00:00:00Z"},{"name":"Spectrum","slug":"spectrum","url":"https://www.spectrum.chat","pricing":"https://www.spectrum.com","labels":["community","chat"],"description":"The community platform for the future. Spectrum makes it easy to grow safe, successful online communities that are built to last.","freeplan":"All free","logo":"spectrum.png","nexttier":"No paid tier","added":"2020-02-22T00:00:00Z"},{"name":"Netlify","slug":"netlify","url":"https://www.netlify.com","pricing":"https://www.netlify.com/pricing/","labels":["hosting","websites","serverless"],"description":"Netlify is everything you need to build fast, modern websites: continuous deployment, serverless functions, and so much more","freeplan":"100 GB data and 100 GB/month bandwidth","logo":"netlify.png","nexttier":"45/month","added":"2020-02-25T00:00:00Z"},{"name":"Zeit","slug":"zeit","url":"https://zeit.co","pricing":"https://zeit.co/pricing","labels":["hosting","websites","serverless"],"description":"ZEIT Now is the perfect fit for deploying static sites and serverless functions.","freeplan":"SSL, 20GB bandwidth, 100 deployments","logo":"zeit.png","nexttier":"20/month","added":"2020-02-25T00:00:00Z"},{"name":"Stackery","slug":"stackery","url":"https://www.stackery.io","pricing":"https://www.stackery.io/pricing/","labels":["serverless"],"description":"Supercharge Development, Delivery and Management of Serverless Applications","freeplan":"","logo":"stackery.png","nexttier":"$10/month","added":"2020-02-25T00:00:00Z"},{"name":"Loggly","slug":"loggly","url":"https://www.loggly.com","pricing":"https://www.loggly.com/plans-and-pricing","labels":["logs"],"description":"Fast, powerful searching over massive volumes of log data. Fix problems before they become critical.","freeplan":"single user, up to 250MB/day","logo":"loggly.png","nexttier":"$79/month","added":"2020-02-25T00:00:00Z"},{"name":"logDNA","slug":"logdna","url":"https://www.logdna.com","pricing":"https://www.logdna.com/pricing","labels":["logs"],"description":"Log Management for the Kubernetes Age. Make Your Logs Work for You.logdna","freeplan":"","logo":"logdna.svg","nexttier":"$1.5/GB/month","added":"2020-02-25T00:00:00Z"},{"name":"Bitrix24","slug":"bitrix24","url":"https://www.bitrix24.com","pricing":"https://www.bitrix24.com/prices","labels":["crm","websites","tasks","projects"],"description":"Your company. United. Free. Unlimited. Online.","freeplan":"","logo":"bitrix24.svg","nexttier":"$19/month","added":"2020-02-29T00:00:00Z"},{"name":"Unsplash","slug":"unsplash","url":"https://unsplash.com","pricing":"https://unsplash.com","labels":["images","stockphoto"],"description":"The internet’s source of freely usable images. Powered by creators everywhere.","freeplan":"do-whatever-you-want license","logo":"unsplash.png","nexttier":"No paid tier","added":"2020-02-29T00:00:00Z"},{"name":"Databox","slug":"databox","url":"https://databox.com","pricing":"https://databox.com/pricing","labels":["data","analytics"],"description":"Databox pulls all your data into one place, so you can track performance and discover insights in real-time.","freeplan":"","logo":"databox.png","nexttier":"$49/month","added":"2020-02-29T00:00:00Z"},{"name":"Trello","slug":"trello","url":"https://trello.com","pricing":"https://trello.com/pricing","labels":["projects","tasks","todo"],"description":"Trello’s boards, lists, and cards enable you to organize and prioritize your projects in a fun, flexible, and rewarding way.","freeplan":"Unlimited Personal Boards, 10 Team Boards","logo":"trello.png","nexttier":"$9.99/user/month","added":"2020-02-29T00:00:00Z"},{"name":"Sumo","slug":"sumo","url":"https://sumo.com","pricing":"https://sumo.com/pricing","labels":["email","marketing","newsletter"],"description":"The #1 FREE email capture tool","freeplan":"","logo":"sumo.jpg","nexttier":"$39/month","added":"2020-02-29T00:00:00Z"},{"name":"HubSpot","slug":"hubspot","url":"https://www.hubspot.com","pricing":"https://www.hubspot.com/pricing/crm","labels":["crm","marketing","forms","chat","tickets"],"description":"The Free CRM With Something for Everyonehubspoty","freeplan":"","logo":"hubspot.svg","nexttier":"$50/month","added":"2020-02-29T00:00:00Z"},{"name":"Pipedream","slug":"pipedream","url":"https://www.pipedream.com","pricing":"https://www.pipedream.com","labels":["integrations","workflow"],"description":"Develop any workflow, based on any trigger. Workflows are code, which you can run for free. No server or cloud resources to manage.","freeplan":"Acceptable use policy, some rate limits, the workflows are public (data is private).","logo":"pipedream.jpg","nexttier":"No paid tier for now","added":"2020-02-29T00:00:00Z"},{"name":"ZipBooks","slug":"zipbooks","url":"https://zipbooks.com","pricing":"https://zipbooks.com/pricing/","labels":["invoicing","billing","accounting"],"description":"Simple accounting software that makes you even smarter.","freeplan":"Unlimited invoice, unlimited vendors & customers, accept payments, basic reports, 1 bank account","logo":"zipbooks.png","nexttier":"$15/month","added":"2020-03-01T00:00:00Z"},{"name":"Freshdesk","slug":"freshdesk","url":"https://freshdesk.com","pricing":"https://freshdesk.com/pricing","labels":["support","email","chat","tickets"],"description":"Affordable and Elegant Omnichannel Helpdesk. Email, chat, phone, social — Be there for your customers, wherever they are!","freeplan":"Unlimited agents, ticketing, knowledgebase, social ticketing","logo":"freshdesk.png","nexttier":"$15/agent/month","added":"2020-03-01T00:00:00Z"},{"name":"Quickmetrics","slug":"quickmetrics","url":"https://quickmetrics.io","pricing":"https://quickmetrics.io/#pricing","labels":["data","analytics","database"],"description":"Custom metric collection with powerful charting.","freeplan":"Up to 10,000 events/day and total of 5 metrics","logo":"quickmetrics.svg","nexttier":"$19/month","added":"2020-03-01T00:00:00Z"},{"name":"FlatIcon","slug":"flaticon","url":"https://www.flaticon.com/","pricing":"https://www.flaticon.com/profile/preagreement/getstarted","labels":["icons","design"],"description":"Access more than 2,535,000 icons","freeplan":"Attribution required. Not all icons are available.","logo":"flaticon.svg","nexttier":"€7.5/month","added":"2020-03-01T00:00:00Z"},{"name":"Github","slug":"github","url":"https://www.github.com/","pricing":"https://github.com/pricing","labels":["code","git"],"description":"Development platform where you can host and review code, manage projects, and build software","freeplan":"Unlimited repositories, 3 collaborators per private repo, 500MB storage","logo":"github.png","nexttier":"$7/month","added":"2020-03-03T00:00:00Z"},{"name":"Github Pages","slug":"github-pages","url":"https://pages.github.com/","pricing":"https://github.com/pricing","labels":["hosting","websites"],"description":"Websites for you and your projects. Hosted directly from your GitHub repository. Just edit, push, and your changes are live","freeplan":"One per user, and one per open source project.","logo":"github.png","added":"2020-03-03T00:00:00Z"},{"name":"Uploadcare","slug":"uploadcare","url":"https://uploadcare.com","pricing":"https://uploadcare.com/pricing","labels":["images","upload"],"description":"Serve ultimate UX with better images on any website. One script to rule them all.","freeplan":"1GB traffic/month, unlimited transformations, image CDN, uploader widget","logo":"uploadcare.png","nexttier":"$45/month","added":"2020-03-03T00:00:00Z"},{"name":"Begin","slug":"begin","url":"https://begin.com","pricing":"https://begin.com","labels":["hosting","serverless","database","apps"],"description":"Begin is a ridiculously quick platform for building modern web apps, sites, & APIs.","freeplan":"5 apps, shared resources, 1 developer, limited usage (according to AWS free tier)","logo":"begin.png","nexttier":"$25/month + AWS fees","added":"2020-03-03T00:00:00Z"},{"name":"Hexometer","slug":"hexometer","url":"https://hexometer.com","pricing":"https://hexometer.com/pricing","labels":["monitoring","alerts","status"],"description":"All-in-one Tool that Continuously Monitors & Reports 2800+ Data Points","freeplan":"1 website, 10,000 URLs, 5 min scan frequency","logo":"hexometer.png","nexttier":"$1/month","added":"2020-03-04T00:00:00Z"},{"name":"Orsolo","slug":"orsolo","url":"https://orsolo.com","pricing":"https://orsolo.com/pricing","labels":["project","tasks","todo","budget","notes"],"description":"Organise projects with all the tools an individual needs","freeplan":"1 project","logo":"orsolo.svg","nexttier":"$35/year","added":"2020-03-06T00:00:00Z"},{"name":"TidyData","slug":"tidy-data","url":"https://www.tidydata.io","pricing":"https://www.tidydata.io","labels":["project","tasks","todo","budget","notes"],"description":"TidyData checks for failures in your data pipeline, ETL\'s and data processes. Built by engineers for engineers.","freeplan":"1 data source, 1 integration, 5 checks, unlimited notifications, 30 min frequency check","logo":"tidydata.png","nexttier":"$299/month","added":"2020-03-06T00:00:00Z"},{"name":"Stonly","slug":"stonly","url":"https://stonly.com/","pricing":"https://stonly.com/pricing","labels":["guides","help"],"description":"Easily create interactive step-by-step guides and put them exactly where your customers need help most","freeplan":"5 guides, 1 user, 5000 interactions/month","logo":"stonly.png","nexttier":"$29/month","added":"2020-03-06T00:00:00Z"},{"name":"Sanity","slug":"sanity","url":"https://sanity.io","pricing":"https://www.sanity.io/pricing","labels":["cms"],"description":"Sanity is the fastest, most flexible platform for delivering content to digital devices and products","freeplan":"3 users, 100K api requests/month, 2 datasets, 10K documents","logo":"sanity.png","nexttier":"$199/project/month","added":"2020-03-06T00:00:00Z"}]')},b23c:function(e,t,a){},c929:function(e,t,a){"use strict";var i=a("3d71"),o=a.n(i);o.a}}]);