(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-4e4f82b8","chunk-2d21406a"],{"15ca":function(t,e,a){"use strict";a.r(e);var s=(a("7db0"),a("d81d"),a("b0c0"),a("d3b7"),a("2ac3")),i=a("2ef0"),n=a.n(i),o=a("aed4"),r=a("ed08"),c={components:{pdfCard:s.default},data:function(){return{detailList:this.$store.getters.getResultList,reList:[],transportMap:o.cateNoList}},created:function(){this.formatList()},methods:{valKgToTWithDecimals:r.j,unitKgToT:r.i,formatList:function(){this.reList=this.detailList.map((function(t){return"kyys"===t.cateNo?{oriSubLabel:t.oriSubLabel,oriLabel:t.oriLabel,cateNo:t.cateNo,destSubLabel:t.destSubLabel,destLabel:t.destLabel,src:a("2f92"),carbonEmissionQty:t.carbonEmissionQty,distance:t.distance,destCountry:t.destCountry,originCountry:t.originCountry}:"glys"===t.cateNo?{oriSubLabel:t.oriSubLabel,oriLabel:t.oriLabel,cateNo:t.cateNo,destSubLabel:t.destSubLabel,destLabel:t.destLabel,src:a("7a67"),nominalWeight:t.nominalWeight,vehicleType:t.vehicleType,powerType:t.powerType,loadRate:t.loadRate,carbonEmissionQty:t.carbonEmissionQty,distance:t.distance,powerOrFuelName:t.powerOrFuelName}:"syys"===t.cateNo?{oriSubLabel:t.oriSubLabel,oriLabel:t.oriLabel,cateNo:t.cateNo,destSubLabel:t.destSubLabel,destLabel:t.destLabel,src:a("1cf2"),carbonEmissionQty:t.carbonEmissionQty,distance:t.distance,destCountry:t.destCountry,originCountry:t.originCountry}:"tlys"===t.cateNo?{oriSubLabel:t.oriSubLabel,oriLabel:t.oriLabel,cateNo:t.cateNo,destSubLabel:t.destSubLabel,destLabel:t.destLabel,src:a("3154"),carbonEmissionQty:t.carbonEmissionQty,distance:t.distance,destCountry:t.destCountry,originCountry:t.originCountry}:"mtsy"===t.cateNo?{oriSubLabel:t.oriProvinceName,oriLabel:t.oriCityName,cateNo:t.cateNo,destSubLabel:t.destProvinceName,destLabel:t.destCityName,carbonEmissionQty:t.carbonEmissionQty,distance:t.distance,logisticsStageLabel:t.logisticsStageLabel}:"cksy"===t.cateNo?{oriSubLabel:t.oriProvinceName,oriLabel:t.oriCityName,cateNo:t.cateNo,destSubLabel:t.destProvinceName,destLabel:t.destCityName,carbonEmissionQty:t.carbonEmissionQty,distance:t.distance,storageTypeLabel:t.storageTypeLabel,destCountry:t.destCountry,originCountry:t.originCountry}:"czsy"===t.cateNo?{oriSubLabel:t.oriProvinceName,oriLabel:t.oriCityName,cateNo:t.cateNo,destSubLabel:t.destProvinceName,destLabel:t.destCityName,carbonEmissionQty:t.carbonEmissionQty,distance:t.distance,logisticsStageLabel:t.logisticsStageLabel,destCountry:t.destCountry,originCountry:t.originCountry}:"wharf"===t.cateNo?{oriSubLabel:t.oriSubLabel,oriLabel:t.oriLabel,cateNo:t.cateNo,destSubLabel:t.destSubLabel,destLabel:t.destLabel,carbonEmissionQty:t.carbonEmissionQty,distance:t.distance,destCountry:t.destCountry,originCountry:t.originCountry}:void 0}))},toThreeDecimals:function(t){return n.a.round(t,3)},transportNameFilter:function(t){var e="国内";(t.oriSubLabel&&"中国"!==t.oriSubLabel||t.destSubLabel&&"中国"!==t.destSubLabel)&&(e="国际");var a="";switch(t.cateNo){case"kyys":a="".concat(e,"空运");break;case"syys":a="".concat(e,"水运");break;case"tlys":a="".concat(e,"铁运");break;case"mtsy":case"czsy":a=t.logisticsStageLabel;break;case"cksy":a=t.storageTypeLabel}return a},setNameIcon:function(t,e){var a={name:null},s=this.transportMap.find((function(e){return e.cateNo===t}))||{};return s&&Object.assign(a,s),e&&s&&("glys"==t&&1==e?a.name="道路整车运输":"glys"==t&&2==e&&(a.name="道路零担运输")),a||{}}}},l=c,d=(a("e3ec"),a("2877")),u=Object(d.a)(l,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"pdf-content"},[s("pdfCard",{attrs:{title:"路线分段详情"}}),t._l(t.reList,(function(e,i){return s("div",{key:i,staticClass:"pdf-list"},[s("div",{staticClass:"pdf-detail"},[s("div",{staticClass:"detail-one"},[s("div",{staticClass:"one-car"},[s("div",{staticClass:"one-text"},[t._v("始")]),s("div",{staticClass:"one-adr"},[s("div",{staticClass:"one-ch"},[s("span",[t._v(t._s(e.oriLabel))]),s("span",[t._v(t._s(e.oriSubLabel))])])])]),["cksy","czsy","mtsy"].indexOf(e.cateNo)<0?s("div",{staticClass:"flex-box"},["glys"===e.cateNo?s("div",{staticClass:"text-car"},[s("span",{staticClass:"font-car"},[t._v(t._s(t.setNameIcon(e.cateNo,e.transportType).name))])]):s("div",{staticClass:"text-car"},[s("span",{staticClass:"font-car"},[t._v(t._s(t.transportNameFilter(e)))])]),s("img",{staticClass:"bluecar",attrs:{src:e.src}}),s("div",{staticClass:"image-text flex-col justify-between"},[s("img",{staticClass:"blueArrow",attrs:{src:a("38e8")}}),s("span",{staticClass:"text-group"},[t._v(t._s(t.toThreeDecimals(e.distance))+" km")])])]):s("div",{staticClass:"text-other"},[t._v(" "+t._s(t.transportNameFilter(e))+" ")]),["cksy","czsy","mtsy"].indexOf(e.cateNo)<0?s("div",{staticClass:"one-car"},[s("div",{staticClass:"two-text"},[t._v("终")]),s("div",{staticClass:"two-adr"},[s("div",{staticClass:"one-ch"},[s("span",[t._v(t._s(e.destLabel))]),s("span",[t._v(t._s(e.destSubLabel))])])])]):t._e()]),"glys"===e.cateNo?s("div",{staticClass:"detail-two"},[s("div",[s("span",{staticClass:"two-label"},[t._v("车辆核定载重")]),s("sapn",{staticClass:"two-value"},[t._v(t._s(e.nominalWeight)+"吨")])],1),s("div",{staticClass:"label-flex"},[s("div",{staticClass:"two-label"},[t._v("车型")]),s("div",{staticClass:"two-value"},[t._v(t._s(e.vehicleType)+"m 厢式/高栏/平板")])]),e.powerType?s("div",[s("span",{staticClass:"two-label"},[t._v("动力/燃料类型")]),s("span",{staticClass:"two-value"},[t._v(t._s(e.powerOrFuelName))])]):t._e(),s("div",[s("span",{staticClass:"two-label"},[t._v("平均装载率")]),s("span",{staticClass:"two-value"},[t._v(t._s(e.loadRate)+"%")])])]):t._e(),s("div",{staticClass:"detail-three"},[s("span",{staticClass:"three-lable"},[t._v("温室气体排放量:")]),s("span",{staticClass:"three-value1"},[t._v(t._s(t.valKgToTWithDecimals(e.carbonEmissionQty)))]),s("span",{staticClass:"three-value2"},[t._v(t._s(t.unitKgToT(e.carbonEmissionQty)))])])])])}))],2)}),[],!1,null,"64722665",null);e.default=u.exports},"1c82":function(t,e,a){},"275e":function(t,e,a){"use strict";a.r(e);var s=(a("ed08"),{components:{},props:{title:{type:String,default:""}},data:function(){return{}},mounted:function(){},methods:{}}),i=(a("7e24"),a("2877")),n=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pdf-top"},[a("div",{staticClass:"pdf-title"},[t._v(t._s(t.title))]),a("div",{staticClass:"pdf-time"},[t._v("测评日期："+t._s(t.parseTime((new Date).getTime(),"{y}-{m}-{d}")))])])}),[],!1,null,"c69b10a0",null);e.default=n.exports},"4b16":function(t,e,a){},"7e24":function(t,e,a){"use strict";a("c7a7")},8602:function(t,e,a){"use strict";a("4b16")},a18d:function(t,e,a){"use strict";a.r(e);var s=(a("7db0"),a("b0c0"),a("d3b7"),a("275e")),i=a("c8da"),n=a("15ca"),o=a("aed4"),r={components:{pdfTitle:s.default,pdfResult:i.default,pdfDetail:n.default},data:function(){return{titleMap:o.cateNoList,title:"多式联运"}},mounted:function(){var t=this;if(1===this.$store.getters.getResultList.length){var e;e=this.titleMap.find((function(e){return e.cateNo===t.$store.getters.getResultList[0].cateNo}))||{},this.title=e.name}},methods:{}},c=r,l=(a("8602"),a("2877")),d=Object(l.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"pdf-wrap",attrs:{id:"pdfDom"}},[a("pdf-title",{attrs:{title:t.title+"碳排自测"}}),a("pdfResult"),a("pdfDetail")],1)}),[],!1,null,"40c354c4",null);e.default=d.exports},aed4:function(t,e,a){"use strict";a.r(e),a.d(e,"cateNoList",(function(){return n})),a.d(e,"getTransportIcon",(function(){return o})),a.d(e,"initPoints",(function(){return r})),a.d(e,"formatNumberDeci",(function(){return c})),a.d(e,"getPreTransportItem",(function(){return l})),a("c740"),a("14d9"),a("a9e3"),a("d3b7"),a("159b");var s=a("2ef0"),i=a.n(s),n=[{icon:"goodsTrain",name:"道路运输",cateNo:"glys"},{icon:"railway",name:"铁路运输",cateNo:"tlys"},{icon:"ship",name:"水路运输",cateNo:"syys"},{icon:"airplane",name:"航空运输",cateNo:"kyys"},{icon:"shopStore",name:"仓库",cateNo:"cksy"},{icon:"site",name:"集装箱场站",cateNo:"czsy"},{icon:"wharf",name:"码头",cateNo:"mtsy"},{icon:"help",name:"配送",cateNo:"ps",open:!1},{icon:"port",name:"港口",cateNo:"gk",open:!1},{icon:"inlandPort",name:"内陆港",cateNo:"nlg",open:!1},{icon:"airPort",name:"航空港",cateNo:"hkg",open:!1},{icon:"package",name:"包装",cateNo:"bz",open:!1}];function o(t){var e="";switch(t){case"syys":e="boat";break;case"kyys":e="plant";break;case"tlys":e="train";break;case"glys":e="car";break;case"mtsy":e="wharf";break;case"czsy":e="site";break;case"cksy":e="shop"}return e}var r=function(t){var e=[];return(t||[]).forEach((function(t){var a={};"glys"===t.cateNo?(a.originLocation=t.oriProvinceName+t.oriCityName,a.destLocation=t.destProvinceName+t.destCityName):t.oriLatAndLng&&t.destLatAndLng&&(a.originLng=t.oriLatAndLng.lng,a.originLat=t.oriLatAndLng.lat,a.destLng=t.destLatAndLng.lng,a.destLat=t.destLatAndLng.lat),a.transportType=o(t.cateNo),e.push(a)})),e},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return i.a.round(Number(t),e)},l=function(t,e,a){var s=null;if("edit"===a&&e){var i=t.findIndex((function(t){return t.id===e}));i>0&&(s=t[i-1])}else s=t[t.length-1];return s}},c7a7:function(t,e,a){},e3ec:function(t,e,a){"use strict";a("1c82")}}]);