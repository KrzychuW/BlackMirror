(function(t){function e(e){for(var a,r,o=e[0],c=e[1],u=e[2],d=0,p=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==s[c]&&(a=!1)}a&&(i.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},i=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"05a5":function(t,e,n){t.exports=n.p+"img/5.9f067ee4.svg"},"061a":function(t,e,n){},"068f":function(t,e,n){},"07ee":function(t,e,n){t.exports=n.p+"img/02n.e4785ce1.svg"},"08b2":function(t,e,n){},1550:function(t,e,n){t.exports=n.p+"img/3.3c0579ea.svg"},"1a34":function(t,e,n){t.exports=n.p+"img/calendar.0bd4507b.svg"},2395:function(t,e,n){},"27ca":function(t,e,n){t.exports=n.p+"img/50n.0f88ab0d.svg"},"29d8":function(t,e,n){t.exports=n.p+"img/04n.719fd565.svg"},"2d31":function(t,e,n){t.exports=n.p+"img/09d.9ab3a869.svg"},"31e8":function(t,e,n){var a={"./0.svg":"68ae","./01d.svg":"6b64","./01n.svg":"7fee","./02d.svg":"7c5a","./02n.svg":"07ee","./03d.svg":"469e","./03n.svg":"b655","./04d.svg":"fbc8","./04n.svg":"29d8","./09d.svg":"2d31","./09n.svg":"9917","./1.svg":"3e23","./10d.svg":"c7bb","./10n.svg":"3bb8","./11d.svg":"d043","./11n.svg":"d77a","./13d.svg":"60c6","./13n.svg":"c8de","./2.svg":"89b4","./3.svg":"1550","./4.svg":"4d8e","./5.svg":"05a5","./50d.svg":"b30d","./50n.svg":"27ca","./calendar.svg":"1a34","./star.svg":"42a8","./sundown.svg":"fec8","./sunup.svg":"fdeb","./wind.svg":"5b6d"};function s(t){var e=i(t);return n(e)}function i(t){if(!n.o(a,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return a[t]}s.keys=function(){return Object.keys(a)},s.resolve=i,t.exports=s,s.id="31e8"},"363b":function(t,e,n){"use strict";var a=n("08b2"),s=n.n(a);s.a},3885:function(t,e,n){"use strict";var a=n("a321"),s=n.n(a);s.a},"3bb8":function(t,e,n){t.exports=n.p+"img/10n.9ab3a869.svg"},"3e23":function(t,e,n){t.exports=n.p+"img/1.1be0904d.svg"},"3fc4":function(t,e,n){"use strict";var a=n("061a"),s=n.n(a);s.a},4031:function(t,e,n){},"42a8":function(t,e,n){t.exports=n.p+"img/star.c18fd9b2.svg"},"469e":function(t,e,n){t.exports=n.p+"img/03d.d6bec5b6.svg"},4736:function(t,e,n){"use strict";var a=n("f0e6"),s=n.n(a);s.a},"4d8e":function(t,e,n){t.exports=n.p+"img/4.c4134771.svg"},"56d7":function(t,e,n){"use strict";n.r(e);n("4de4"),n("07ac");var a=n("284c"),s=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2b0e")),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("div",{staticClass:"app__wrapper"},[n("div",{staticClass:"app__section"},[n("DateTime")],1),n("div",{staticClass:"app__section"},[n("Calendar")],1),n("div",{staticClass:"app__section"},[n("Tasks")],1)]),n("div",{staticClass:"app__wrapper app__wrapper--right"},[n("div",{staticClass:"app__section"},[n("Weather")],1),n("div",{staticClass:"app__section"},[n("Air")],1)]),n("div",{staticClass:"app__section app__section--news"},[n("News")],1),n("Loader")],1)},r=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade-right"}},[t.show&&t.temperature&&!t.prerender?a("div",{staticClass:"weather"},[a("div",[a("div",{staticClass:"weather__box"},[a("span",{staticClass:"weather__city"},[t._v(t._s(t.data.city))]),a("span",{staticClass:"weather__wind"},[a("img",{attrs:{src:n("5b6d"),alt:""}}),a("span",{staticClass:"weather__wind-text"},[t._v(t._s(t.data.wind_speed)+" m/s")])])]),a("div",{staticClass:"weather__box weather__box--start"},[a("img",{staticClass:"weather__icon",attrs:{src:t.prepareSvgUrl,alt:""}}),a("div",{staticClass:"weather__temperature-wrapper"},[t.temperature?a("span",{staticClass:"weather__temperature"},[t._v(t._s(t.temperature)+"℃")]):t._e(),a("span",{staticClass:"weather__description"},[t._v(t._s(t.data.description))])])])]),a("div",{staticClass:"weather__item-wrapper"},[a("div",{staticClass:"weather__item"},[a("span",{staticClass:"weather__item-label"},[a("img",{staticClass:"weather__sun",attrs:{src:n("fdeb"),alt:""}}),a("span",{staticClass:"weather__item-value weather__item-value--bigger"},[t._v(t._s(t.sunrise))])]),a("span",{staticClass:"weather__item-label"},[a("img",{staticClass:"weather__sun",attrs:{src:n("fec8"),alt:""}}),a("span",{staticClass:"weather__item-value weather__item-value--bigger"},[t._v(t._s(t.sunset))])])]),a("div",{staticClass:"weather__item"},[a("span",{staticClass:"weather__item-label"},[a("span",{staticClass:"weather__item-title"},[t._v("Ciśnienie:")]),a("span",{staticClass:"weather__item-value"},[t._v(t._s(t.data.pressure)+" hPa")])]),a("span",{staticClass:"weather__item-label"},[a("span",{staticClass:"weather__item-title"},[t._v("Wilgotność:")]),a("span",{staticClass:"weather__item-value"},[t._v(t._s(t.data.humidity)+"%")])])])])]):t._e()])},c=[],u=(n("99af"),n("0d03"),{name:"Weather",data:function(){return{data:[],show:!1,sunrise:!1,sunset:!1,temperature:!1,prerender:!0}},mounted:function(){this.$root.$on("configChange",this.handleConfig),this.$root.$on("current_weatherChange",this.handleData),this.$root.$on("loading",this.handlePrerender)},methods:{handlePrerender:function(t){this.prerender=t},handleConfig:function(t){this.show=t.weather},handleData:function(t){this.data=t,this.temperature=Math.round(t.temperature),this.sunrise=this.prepareSunData(t.sunrise),this.sunset=this.prepareSunData(t.sunset)},prepareSunData:function(t){var e=new Date(1e3*t).getHours(),n=e<10?"0".concat(e):e,a=new Date(1e3*t).getMinutes(),s=a<10?"0".concat(a):a;return"".concat(n,":").concat(s)}},computed:{prepareSvgUrl:function(){return n("31e8")("./".concat(this.data.icon,".svg"))}}}),l=u,d=(n("3fc4"),n("2877")),p=Object(d["a"])(l,o,c,!1,null,null,null),h=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade-right"}},[t.show&&t.data&&!t.prerender?n("div",{staticClass:"air"},[n("span",{staticClass:"air__title"},[t._v(t._s(t.title))]),n("div",{staticClass:"air__wrapper"},[!1!==t.quality_id?n("img",{attrs:{src:t.prepareIconUrl,alt:""}}):t._e(),n("span",{staticClass:"air__label"},[t._v(t._s(t.data.quality_message))])])]):t._e()])},_=[],v={name:"Air",data:function(){return{title:"Jakość powietrza",data:[],quality_id:!1,show:!1,prerender:!0}},mounted:function(){this.$root.$on("configChange",this.handleConfig),this.$root.$on("airChange",this.handleData),this.$root.$on("loading",this.handlePrerender)},methods:{handlePrerender:function(t){this.prerender=t},handleConfig:function(t){this.show=t.air},handleData:function(t){this.data=t.main,this.quality_id=this.data.quality_id}},computed:{prepareIconUrl:function(){return n("31e8")("./".concat(this.quality_id,".svg"))}}},g=v,m=(n("b223"),Object(d["a"])(g,f,_,!1,null,null,null)),b=m.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade-left"}},[t.show&&t.data&&!t.prerender?n("div",{staticClass:"tasks"},[n("span",{staticClass:"tasks__title"},[t._v(t._s(t.title))]),n("ul",t._l(t.data,(function(e){return n("li",{staticClass:"tasks__item",class:{star:"high"===e.priority}},[n("div",{staticClass:"tasks__item-content"},[n("div",{staticClass:"tasks__item-title"},[t._v(t._s(e.title))]),e.description?n("div",{staticClass:"tasks__item-description"},[t._v(t._s(e.description))]):t._e(),e.deadline?n("div",{staticClass:"tasks__deadline"},[n("span",{staticClass:"tasks__deadline-alert"},[t._v(t._s(e.deadline))])]):t._e()])])})),0)]):t._e()])},C=[],y=(n("a4d3"),n("4160"),n("d81d"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7"));function x(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?x(n,!0).forEach((function(e){Object(y["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):x(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var O={name:"Tasks",data:function(){return{title:"TODO",data:[],show:!1,prerender:!0}},mounted:function(){this.$root.$on("configChange",this.handleConfig),this.$root.$on("tasksChange",this.handleData),this.$root.$on("loading",this.handlePrerender)},methods:{handlePrerender:function(t){this.prerender=t},handleConfig:function(t){this.show=t.tasks},handleData:function(t){this.data=t.map((function(t){var e=t.deadline_at?new Date(t.deadline_at):null,n=e?e.toLocaleString("PL-pl",{weekday:"long",month:"long",day:"numeric"}):null;return $({},t,{deadline:n})}))}}},D=O,P=(n("cf92"),Object(d["a"])(D,w,C,!1,null,null,null)),j=P.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade-left"}},[t.prerender?t._e():n("div",{staticClass:"time"},[n("div",{staticClass:"time__wrapper"},[null!==t.hoursValue?n("span",{staticClass:"time__item"},[t._v(t._s(t.hours)+":")]):t._e(),null!==t.minutesValue?n("span",{staticClass:"time__item"},[t._v(t._s(t.minutes))]):t._e()]),n("div",{staticClass:"time__date"},[t._v(t._s(t.date))])])])},T=[],S={name:"DateTime",data:function(){return{hoursValue:null,minutesValue:null,date:null,weekday:null,prerender:!0}},mounted:function(){this.handleTimer(),this.$root.$on("loading",this.handlePrerender)},methods:{handlePrerender:function(t){this.prerender=t},handleTimer:function(){var t=this;setInterval((function(){var e=new Date;t.hoursValue=e.getHours(),t.minutesValue=e.getMinutes(),t.date=e.toLocaleString("PL-pl",{weekday:"long",month:"long",day:"numeric"})}),1e3)}},computed:{hours:function(){return this.hoursValue<10?"0".concat(this.hoursValue):this.hoursValue},minutes:function(){return this.minutesValue<10?"0".concat(this.minutesValue):this.minutesValue}}},E=S,V=(n("363b"),Object(d["a"])(E,k,T,!1,null,null,null)),M=V.exports,L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"fade-bottom"}},[t.show&&t.data&&!t.prerender?n("div",{staticClass:"news"},[n("transition",{attrs:{name:"expand"},on:{enter:t.enter,"after-enter":t.afterEnter,leave:t.leave}},[n("div",{key:t.currentTitle,staticClass:"news__wrapper"},[n("div",{staticClass:"news__item"},[t.currentHours?n("span",{staticClass:"news__item-date"},[t._v(" "+t._s(t.currentHours)+":"+t._s(t.currentMinutes)+" ")]):t._e(),n("div",{staticClass:"news__item-content"},[t.currentTitle?n("div",{staticClass:"news__item-title"},[t._v(t._s(t.currentTitle))]):t._e(),t.currentDescription?n("div",{staticClass:"news__item-description"},[t._v(t._s(t.currentDescription))]):t._e()])])])])],1):t._e()])},H=[],N=(n("e01a"),n("d3b7"),{name:"News",data:function(){return{data:[],show:!1,currentHours:!1,currentMinutes:!1,currentTitle:!1,currentDescription:!1,prerender:!0}},mounted:function(){this.$root.$on("configChange",this.handleConfig),this.$root.$on("newsChange",this.handleData),this.$root.$on("loading",this.handlePrerender),this.updateCurrentNews()},methods:{handlePrerender:function(t){this.prerender=t},enter:function(t){var e=getComputedStyle(t).width;t.style.width=e,t.style.position="absolute",t.style.visibility="hidden",t.style.height="auto";var n=getComputedStyle(t).height;t.style.width=null,t.style.position=null,t.style.visibility=null,t.style.height=0,getComputedStyle(t).height,setTimeout((function(){t.style.height=n}))},afterEnter:function(t){t.style.height="auto"},leave:function(t){var e=getComputedStyle(t).height;t.style.height=e,getComputedStyle(t).height,setTimeout((function(){t.style.height=0}))},handleConfig:function(t){this.show=t.news},handleData:function(t){var e=this;return new Promise((function(n){return e.data=t.items.map((function(t){var e=new Date(t.date).getHours(),n=e<10?"0".concat(e):e,a=new Date(t.date).getMinutes(),s=a<10?"0".concat(a):a;return{hours:n,minutes:s,title:t.title,description:t.description}})),n(e.data)})).then((function(){e.getInitialData()}))},getInitialData:function(){this.currentHours=this.data[0].hours,this.currentMinutes=this.data[0].minutes,this.currentTitle=this.data[0].title,this.currentDescription=this.data[0].description},updateCurrentNews:function(){var t=this,e=0;setInterval((function(){e===t.data.length&&(e=0),t.currentHours=t.data[e].hours,t.currentMinutes=t.data[e].minutes,t.currentTitle=t.data[e].title,t.currentDescription=t.data[e].description,e++}),15e3)}}}),q=N,I=(n("3885"),Object(d["a"])(q,L,H,!1,null,null,null)),U=I.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade-left"}},[t.show&&t.data&&!t.prerender?a("div",{staticClass:"calendar"},t._l(t.data,(function(e){return a("div",{staticClass:"calendar__item"},[a("img",{staticClass:"calendar__icon",attrs:{src:n("1a34"),alt:""}}),0!==e.start&&1!==e.start?a("p",{staticClass:"calendar__text"},[t._v(t._s(e.title)+" za "+t._s(e.start)+" "+t._s(t.dayTypo(e.start)))]):t._e(),0===e.start?a("p",{staticClass:"calendar__text"},[t._v(t._s(e.title)+" - Dzisiaj")]):t._e(),1===e.start?a("p",{staticClass:"calendar__text"},[t._v(t._s(e.title)+" - Jutro")]):t._e()])})),0):t._e()])},J=[],W={name:"Calendar",data:function(){return{data:[],show:!1,prerender:!0}},mounted:function(){this.$root.$on("configChange",this.handleConfig),this.$root.$on("calendarChange",this.handleData),this.$root.$on("loading",this.handlePrerender)},methods:{handlePrerender:function(t){this.prerender=t},handleConfig:function(t){this.show=t.calendar},handleData:function(t){this.data=t},dayTypo:function(t){return 1===t?"dzień":"dni"}}},A=W,F=(n("4736"),Object(d["a"])(A,z,J,!1,null,null,null)),B=F.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.loading?n("div",{staticClass:"loader__wrapper"},[t._m(0)]):t._e()},K=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"loader"},[n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div"),n("div")])}],Q={name:"Loader",data:function(){return{loading:!0}},mounted:function(){this.$root.$on("loading",this.handleLoader)},methods:{handleLoader:function(t){this.loading=t}}},R=Q,X=(n("c2c3"),Object(d["a"])(R,G,K,!1,null,null,null)),Y=X.exports,Z={name:"app",components:{Loader:Y,Calendar:B,News:U,Tasks:j,Weather:h,Air:b,DateTime:M}},tt=Z,et=(n("7c55"),Object(d["a"])(tt,i,r,!1,null,null,null)),nt=et.exports,at=n("5638");window.Pusher=n("782e");var st=0,it=0,rt=function(t){var e=Object.values(t.data);it=Object(a["a"])(e).filter((function(t){return!0===t})).length},ot=new at["a"]({broadcaster:"pusher",key:123456,cluster:"mt1",wsHost:"86.63.86.150",wsPort:6001});ot.channel("mirror").listen("Message",(function(t){console.log(t),"config"===t.type&&rt(t),window.Vue.$root.$emit("".concat(t.type,"Change"),t.data),st++,st===it&&setTimeout((function(){window.Vue.$root.$emit("loading",!1)}),500)})),s["a"].config.productionTip=!1,window.Vue=new s["a"]({render:function(t){return t(nt)}}).$mount("#app")},"5b6d":function(t,e,n){t.exports=n.p+"img/wind.990e6fd6.svg"},"60c6":function(t,e,n){t.exports=n.p+"img/13d.20ef2fa2.svg"},"68ae":function(t,e,n){t.exports=n.p+"img/0.63aaf4f2.svg"},"6b64":function(t,e,n){t.exports=n.p+"img/01d.fbe8839b.svg"},"7c55":function(t,e,n){"use strict";var a=n("2395"),s=n.n(a);s.a},"7c5a":function(t,e,n){t.exports=n.p+"img/02d.b282f647.svg"},"7fee":function(t,e,n){t.exports=n.p+"img/01n.9a752c06.svg"},"89b4":function(t,e,n){t.exports=n.p+"img/2.4521034f.svg"},9917:function(t,e,n){t.exports=n.p+"img/09n.9ab3a869.svg"},a321:function(t,e,n){},b223:function(t,e,n){"use strict";var a=n("068f"),s=n.n(a);s.a},b30d:function(t,e,n){t.exports=n.p+"img/50d.0f88ab0d.svg"},b655:function(t,e,n){t.exports=n.p+"img/03n.d6bec5b6.svg"},bb1b:function(t,e,n){},c2c3:function(t,e,n){"use strict";var a=n("bb1b"),s=n.n(a);s.a},c7bb:function(t,e,n){t.exports=n.p+"img/10d.0fca17eb.svg"},c8de:function(t,e,n){t.exports=n.p+"img/13n.20ef2fa2.svg"},cf92:function(t,e,n){"use strict";var a=n("4031"),s=n.n(a);s.a},d043:function(t,e,n){t.exports=n.p+"img/11d.971b929c.svg"},d77a:function(t,e,n){t.exports=n.p+"img/11n.971b929c.svg"},f0e6:function(t,e,n){},fbc8:function(t,e,n){t.exports=n.p+"img/04d.719fd565.svg"},fdeb:function(t,e,n){t.exports=n.p+"img/sunup.cbed1f7c.svg"},fec8:function(t,e,n){t.exports=n.p+"img/sundown.4ce50e8e.svg"}});
//# sourceMappingURL=app.6e66554a.js.map