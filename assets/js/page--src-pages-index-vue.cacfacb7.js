(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3V+Q":function(t,e,s){"use strict";s("X44A")},DQNa:function(t,e,s){var a=s("busE"),i=Date.prototype,r=i.toString,n=i.getTime;new Date(NaN)+""!="Invalid Date"&&a(i,"toString",(function(){var t=n.call(this);return t==t?r.call(this):"Invalid Date"}))},K93e:function(t,e,s){},Wn3x:function(t,e,s){"use strict";var a={props:["projectSlug"]},i=s("KHd+"),r=s("Kw5r"),n=r.a.config.optionMergeStrategies.computed,o={strapi:{projects:[{title:"Localio",slug:"localio",url_thumbnail:"/project/localio/localio-home.png",description:"Plateforme de mise en relation entre commerçants et clients. Elle permet de retrouver les commerces qui correspondent à vos besoins et votre situation géographique.\n",priority:1},{title:"AG7-Project",slug:"ag7-project",url_thumbnail:"/project/ag7-project/ag7-project-home.png",description:"Application web de gestion de projet suivant la méthode Kanban. Elle permet au utilisateur de s'inscrire, gérer leurs projets et partager leur accès à d'autres utilisateurs.",priority:2},{title:"Weather Map",slug:"weather-map",url_thumbnail:"/project/weather-map/weather-map-home.png",description:"Application web permettant de consulter les données météorologiques collectées dans le monde entier grâce aux stations météo Netatmo qui partagent leurs données.",priority:3},{title:"AG7-GeoAPI",slug:"ag7-geoapi",url_thumbnail:"/project/ag7-geoapi/home.png",description:"API publique permettant d'obtenir des données géographique, tel que la liste des communes. Les utilisateurs peuvent obtenir une clé d'API pour utiliser l'API dans leur projet.",priority:4},{title:"Portfolio",slug:"portfolio",url_thumbnail:"/project/portfolio/home.png",description:"Il s'agit de mon portfolio de développeur web présentant certains projets sur lesquels j'ai apprécié travailler ainsi que mes différentes expériences. Ce portfolio a été créé selon l'architecture de la JAMStack.",priority:5},{title:"AG7-Chat",slug:"ag7-chat",url_thumbnail:"/project/ag7-chat/chat.png",description:"Application web inspiré fortement de Messenger permettant d'envoyer des messages à d'autres utilisateurs. Les utilisateurs peuvent aussi ajouter des contacts et modifier leur photo de profil.",priority:6},{title:"AG7-JobHunt",slug:"ag-7-job-hunt",url_thumbnail:"/project/ag7-jobhunt/search.png",description:"Application web qui permet de gérer des offres d'emploi pour les développeurs. Les utilisateurs peuvent avoir différents rôles par exemple un manager pourra ajouter des offres d'emploi.",priority:7},{title:"MIW Classroom",slug:"miw-classroom",url_thumbnail:"/project/classroom/home-light.png",description:"Project d'intégration d'une page web sans pouvoir modifier le HTML. Tous les étudiants sont partis de la même page avec aucun style et ont carte blanche pour la personnaliser comme on le voulait.",priority:8}]}},c=function(t){var e=t.options;e.__staticData?e.__staticData.data=o:(e.__staticData=r.a.observable({data:o}),e.computed=n({$static:function(){return e.__staticData.data}},e.computed))},l=Object(i.a)(a,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-sm-6 p-0 pr-sm-10"},[s("div",{staticClass:"card p-0 mx-auto w-400 mw-full overflow-hidden mt-10",attrs:{set:t.project=t.$static.strapi.projects[t.$static.strapi.projects.map((function(t){return t.slug})).indexOf(t.projectSlug)-1>=0?t.$static.strapi.projects.map((function(t){return t.slug})).indexOf(t.projectSlug)-1:t.$static.strapi.projects.length-1]}},[s("g-image",{staticClass:"img-fluid pointer-events-none",attrs:{src:t.project.url_thumbnail}}),s("div",{staticClass:"content mt-10"},[s("h2",{staticClass:"content-title"},[t._v("\n          "+t._s(t.project.title)+"\n        ")]),s("p",{staticClass:"text-muted"},[t._v("\n          "+t._s(t.project.description)+"\n        ")]),s("div",{staticClass:"text-right"},[s("g-link",{staticClass:"btn btn-primary",attrs:{to:"project/"+t.project.slug}},[t._v("Découvrir le project\n          ")])],1)])],1)]),s("div",{staticClass:"col-sm-6 p-0 pl-sm-10"},[s("div",{staticClass:"card p-0 mx-auto w-400 mw-full overflow-hidden mt-10",attrs:{set:t.project=t.$static.strapi.projects[t.$static.strapi.projects.map((function(t){return t.slug})).indexOf(t.projectSlug)+1<t.$static.strapi.projects.length?t.$static.strapi.projects.map((function(t){return t.slug})).indexOf(t.projectSlug)+1:0]}},[s("g-image",{staticClass:"img-fluid pointer-events-none",attrs:{src:t.project.url_thumbnail}}),s("div",{staticClass:"content mt-10"},[s("h2",{staticClass:"content-title"},[t._v("\n          "+t._s(t.project.title)+"\n        ")]),s("p",{staticClass:"text-muted"},[t._v("\n          "+t._s(t.project.description)+"\n        ")]),s("div",{staticClass:"text-right"},[s("g-link",{staticClass:"btn btn-primary",attrs:{to:"project/"+t.project.slug}},[t._v("Découvrir le project\n          ")])],1)])],1)])])}),[],!1,null,"3385873c",null);"function"==typeof c&&c(l);e.a=l.exports},X44A:function(t,e,s){},dJ54:function(t,e,s){"use strict";s("K93e")},iyQ6:function(t,e,s){"use strict";s.r(e);var a=s("nOak"),i=s.n(a),r=s("Wn3x"),n=(s("DQNa"),s("oVuX"),{methods:{convertDate:function(t){function e(t){return t<10?"0"+t:t}var s=new Date(t);return[e(s.getDate()),e(s.getMonth()+1),s.getFullYear()].join("/")}}}),o=s("KHd+"),c=s("Kw5r"),l=c.a.config.optionMergeStrategies.computed,p={strapi:{educations:[{name:"BTS Services Informatiques aux Organisations",school:"Lycée algoud laffemas",description:"Développement de solutions logicielles et d'applications métier.",city:"Valence",date_start:"2018-01-08",date_end:"2020-06-29"},{name:"Licence Professionnelle Mobilité, Internet et Web",school:"Université Aix-Marseille",description:"Développement de sites web et d'applications mobiles.",city:"Gap",date_start:"2020-09-14",date_end:"2021-06-26"}]}},u=function(t){var e=t.options;e.__staticData?e.__staticData.data=p:(e.__staticData=c.a.observable({data:p}),e.computed=l({$static:function(){return e.__staticData.data}},e.computed))},d=Object(o.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row justify-content-around align-items-center"},t._l(t.$static.strapi.educations,(function(e){return s("div",{key:e.name,staticClass:"col-md-6"},[s("div",{staticClass:"card card-primary d-flex p-0 mt-20"},[t._m(0,!0),s("div",{staticClass:"py-10 w-995"},[s("h4",{staticClass:"card-title"},[t._v(t._s(e.name))]),s("p",{staticClass:"text-muted"},[s("span",{staticClass:"d-block d-xl-inline-block"},[t._v(t._s(e.school)+", "+t._s(e.city))]),s("span",{staticClass:"badge mx-5"},[t._v(t._s(t.convertDate(e.date_start)))]),s("span",{staticClass:"badge"},[t._v(t._s(t.convertDate(e.date_end)))])]),s("p",{staticClass:"font-size-16"},[t._v("\n          "+t._s(e.description)+"\n        ")])])])])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress w-005 h-auto mr-10"},[e("div",{staticClass:"progress-bar",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})])}],!1,null,null,null);"function"==typeof u&&u(d);var m=d.exports,g={methods:{convertDate:function(t){function e(t){return t<10?"0"+t:t}var s=new Date(t);return[e(s.getDate()),e(s.getMonth()+1),s.getFullYear()].join("/")}}},v=(s("mxsV"),c.a.config.optionMergeStrategies.computed),f={strapi:{experiences:[{title:"Stage - Développeur PHP",company:"Simplifia",description:"Participation à l'évolution de produits basés sur des stack PHP ainsi que Wordpress et création d’outils à usage interne pour améliorer la productivité des équipes.",city:"Lyon",date_start:"2021-03-29",date_end:"2021-09-29"},{title:"Stage - Développeur Web",company:"Square Info",description:"Création d'un plugin Wordpress pour les agences immobilières.\n",city:"Montélimar",date_start:"2020-01-06",date_end:"2020-02-21"},{title:"Stage - Développeur Web",company:"Square Info",description:"Création d'un thème Wordpress.",city:"Montélimar",date_start:"2019-05-06",date_end:"2019-06-28"}]}},_=function(t){var e=t.options;e.__staticData?e.__staticData.data=f:(e.__staticData=c.a.observable({data:f}),e.computed=v({$static:function(){return e.__staticData.data}},e.computed))},h=Object(o.a)(g,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"d-flex flex-column"},t._l(t.$static.strapi.experiences,(function(e){return s("div",{key:e.date_start,staticClass:"card card-primary d-flex p-0 my-20"},[t._m(0,!0),s("div",{staticClass:"py-10 w-995"},[s("h4",{staticClass:"card-title"},[t._v(t._s(e.title))]),s("p",{staticClass:"text-muted"},[s("span",{staticClass:"d-block d-sm-inline-block"},[t._v(t._s(e.company)+", "+t._s(e.city))]),s("span",{staticClass:"badge mx-5"},[t._v(t._s(t.convertDate(e.date_start)))]),s("span",{staticClass:"badge"},[t._v(t._s(t.convertDate(e.date_end)))])]),s("p",{staticClass:"font-size-16"},[t._v("\n        "+t._s(e.description)+"\n      ")])])])})),0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"progress w-005 h-auto mr-10"},[e("div",{staticClass:"progress-bar",staticStyle:{width:"100%"},attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}})])}],!1,null,null,null);"function"==typeof _&&_(h);var b=h.exports,j=s("sjqi"),C={components:{ProjectsSuggestion:r.a,Educations:m,Experiences:b,Technologies:j.a,Markdown:i.a}},w=(s("3V+Q"),null),y=Object(o.a)(C,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("Layout",[s("div",{staticClass:"content mt-0"},[s("h1",{staticClass:"mt-0 pt-20 font-weight-semi-bold"},[t._v("\n      "+t._s(t.$page.strapi.homePage.title)+"\n    ")]),s("div",{staticClass:"card p-0 overflow-hidden mx-0"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-4 bg-primary d-flex justify-content-center align-items-end"},[s("g-image",{staticClass:"img-fluid profile-picture pointer-events-none",attrs:{src:"/profil.png"}})],1),s("div",{staticClass:"col-lg-8 p-10 p-md-20"},[s("Markdown",{staticClass:"font-size-18",attrs:{source:t.$page.strapi.homePage.intro}})],1)])])]),s("div",{staticClass:"content pt-20"},[s("h2",{staticClass:"mb-0 content-title font-size-24"},[t._v("\n      Mes expériences professionnelles\n    ")]),s("Experiences")],1),s("div",{staticClass:"content pt-20"},[s("h2",{staticClass:"content-title font-size-24"},[t._v("Mes Technologies favorites")]),s("Technologies",{attrs:{technologies:t.$page.strapi.technologies}}),s("Markdown",{staticClass:"font-size-16",attrs:{source:t.$page.strapi.homePage.techsText}})],1),s("div",{staticClass:"content pt-20"},[s("h2",{staticClass:"content-title font-size-24 mb-0"},[t._v("Mes études")]),s("Educations")],1),s("div",{staticClass:"content pt-20"},[s("h2",{staticClass:"content-title font-size-24 mb-0"},[t._v("Exemples de projets")]),s("ProjectsSuggestion",{attrs:{projectSlug:"ag7-project"}})],1)])}),[],!1,null,"45eb4d15",null);"function"==typeof w&&w(y);e.default=y.exports},mxsV:function(t,e,s){"use strict";s("wjGY")},sjqi:function(t,e,s){"use strict";var a={props:["technologies"]},i=(s("dJ54"),s("KHd+")),r=Object(i.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"row justify-content-around align-items-center"},this._l(this.technologies,(function(t){return e("div",{key:t.slug,staticClass:"col d-flex justify-content-center"},[e("g-image",{staticClass:"img-fluid pointer-events-none",attrs:{src:t.url_logo,width:"100",alt:"Logo de "+t.name}})],1)})),0)}),[],!1,null,"a4b9f13c",null);e.a=r.exports},wjGY:function(t,e,s){}}]);