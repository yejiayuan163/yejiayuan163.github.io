(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-20bebd4a","chunk-2d21406a"],{"47b5":function(t,a,e){},a8a3:function(t,a,e){"use strict";e("47b5")},aa94:function(t,a,e){"use strict";e.r(a);var s=(e("7db0"),e("14d9"),e("b0c0"),e("a9e3"),e("b680"),e("d3b7"),e("aed4")),n=e("2ef0"),i=e.n(n),c={name:"carbonResultList",props:{list:{type:Array,default:function(){return[]}}},data:function(){return{vehicleTypeList:[{label:"2.6m厢式（额定载重<0.8t）",value:"VT_260_08"},{label:"3.2m厢式/平板（额定载重<1.5t）",value:"VT_320_15"},{label:"3.8m厢式/平板（额定载重<2t）",value:"VT_380_20"},{label:"4.2m厢式/⾼栏/平板（额定载重<3.5t）",value:"VT_420_35"},{label:"6.8m厢式/⾼栏/平板（额定载重<10t）",value:"VT_680_10"},{label:"7.6m厢式/⾼栏/平板（额定载重<13t）",value:"VT_760_13"},{label:"9.6m厢式/⾼栏/平板（额定载重<18t）",value:"VT_960_18"},{label:"12.5m厢式/⾼栏/平板（额定载重<32t）",value:"VT_125_32"},{label:"16.5m厢式/平板（额定载重<31t）",value:"VT_165_31"},{label:"17.5m厢式/平板（额定载重<30t）",value:"VT_175_30"}],carbonList:[],transportMap:s.cateNoList}},watch:{list:{handler:function(t,a){t&&this.$set(this,"list",t)}}},methods:{vehicleTypeListFilter:function(t){var a=this.vehicleTypeList.find((function(a){return a.value===t}));return a?a.label:""},goDetail:function(t,a){this.$router.push({name:"mapCalculator",query:{cateNo:a,id:t,type:"read"}})},editCarbon:function(t,a){this.$router.push({name:"mapCalculator",query:{cateNo:a,id:t,type:"edit"}})},delCarbon:function(t){var a=this;this.$confirm("是否确定删除此项碳排项计算?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.$store.commit("DELETE_RESULT_LIST",t),a.$emit("getList"),a.$message({type:"success",message:"删除成功!"})})).catch((function(){}))},exportReport:function(){},addItem:function(){},setNameIcon:function(t,a){var e={name:null},s=this.transportMap.find((function(a){return a.cateNo===t}))||{};return s&&Object.assign(e,s),a&&s&&("glys"==t&&1==a?e.name="道路整车运输":"glys"==t&&2==a&&(e.name="道路零担运输")),e||{}},valKgToT:function(t){return String(t).split(".")[0].length>6?Number(t)/1e3:Number(t)},unitKgToT:function(t){return String(t).split(".")[0].length>6?"t":"kg"},twoDecimals:function(t){return i.a.round(Number(t),3).toFixed(3)},transportNameFilter:function(t){var a="国内";(t.oriSubLabel&&"中国"!==t.oriSubLabel||t.destSubLabel&&"中国"!==t.destSubLabel)&&(a="国际");var e="";switch(t.cateNo){case"kyys":e="".concat(a,"空运");break;case"syys":e="".concat(a,"水运");break;case"tlys":e="".concat(a,"铁运");break;case"mtsy":case"czsy":e=t.logisticsStageLabel;break;case"cksy":e=t.storageTypeLabel}return e}}},o=c,r=(e("a8a3"),e("2877")),l=Object(r.a)(o,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",t._l(t.list,(function(a,s){return e("div",{key:s,staticClass:"item-wrap"},[e("img",{staticClass:"left",attrs:{src:a.imgSrc?a.imgSrc.src:"",alt:"网络出错啦"}}),e("div",{staticClass:"right"},[e("div",{staticClass:"top"},[e("div",{staticClass:"title"},[t._v(t._s(t.setNameIcon(a.cateNo,a.transportType).name+"碳排计算"))]),e("div",[e("el-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){return t.goDetail(a.id,a.cateNo)}}},[t._v("查看")]),e("el-button",{attrs:{type:"pain",size:"mini"},on:{click:function(e){return t.editCarbon(a.id,a.cateNo)}}},[t._v("编辑")]),e("el-button",{attrs:{type:"danger",plain:"",size:"mini"},on:{click:function(e){return t.delCarbon(a.id)}}},[t._v("删除")])],1)]),e("div",{staticClass:"bottom"},[e("div",{staticClass:"b-l"},[["kyys","syys","tlys","glys"].indexOf(a.cateNo)>-1?[e("div",{staticClass:"start"},[e("div",{staticClass:"s-top"},[e("span",{staticClass:"s-icon"},[t._v("始")]),e("span",{staticClass:"s-name"},[t._v(t._s(a.oriLabel))]),e("span",{staticClass:"s-sub"},[t._v(t._s(a.oriSubLabel))])])]),e("div",{staticClass:"line"},[e("div",{staticClass:"l-icon"},[e("svg-icon",{attrs:{"icon-class":t.setNameIcon(a.cateNo).icon}})],1),e("div",{staticClass:"l-m"},[e("svg-icon",{staticClass:"turn-right-line",attrs:{"icon-class":"turnRight"}})],1),a.quickCal?t._e():e("div",{staticClass:"l-distance"},[t._v(t._s(a.distance)+" km")])]),e("div",{staticClass:"end"},[e("div",{staticClass:"e-top"},[e("span",{staticClass:"e-icon"},[t._v("终")]),e("span",{staticClass:"e-name"},[t._v(t._s(a.destLabel))]),e("span",{staticClass:"e-sub"},[t._v(t._s(a.destSubLabel))])])])]:[e("div",{staticClass:"start"},[e("div",{staticClass:"s-top"},[e("span",{staticClass:"s-icon"},[e("svg-icon",{attrs:{"icon-class":t.setNameIcon(a.cateNo).icon}})],1),e("span",{staticClass:"s-name"},[t._v(t._s(a.oriCityName))]),e("span",{staticClass:"s-sub"},[t._v(t._s(a.oriProvinceName))])])])],"glys"===a.cateNo?e("div",{staticClass:"transport-i-cart"},[e("span",[t._v("车型")]),t._v(":"+t._s(t.vehicleTypeListFilter(a.vehicleType))+" ")]):e("div",{staticClass:"transport-i-plant"},[t._v(t._s(t.transportNameFilter(a)))])],2),e("div",{staticClass:"b-r"},[e("span",{staticClass:"b-r-title"},[t._v("温室气体排放:")]),e("span",{staticClass:"active1"},[t._v(t._s(t.twoDecimals(t.valKgToT(a.carbonEmissionQty))))]),e("span",{staticClass:"active2"},[t._v(t._s(t.unitKgToT(a.carbonEmissionQty)))])])])])])})),0)}),[],!1,null,"55c96f34",null);a.default=l.exports},aed4:function(t,a,e){"use strict";e.r(a),e.d(a,"cateNoList",(function(){return i})),e.d(a,"getTransportIcon",(function(){return c})),e.d(a,"initPoints",(function(){return o})),e.d(a,"formatNumberDeci",(function(){return r})),e.d(a,"getPreTransportItem",(function(){return l})),e("c740"),e("14d9"),e("a9e3"),e("d3b7"),e("159b");var s=e("2ef0"),n=e.n(s),i=[{icon:"goodsTrain",name:"道路运输",cateNo:"glys"},{icon:"railway",name:"铁路运输",cateNo:"tlys"},{icon:"ship",name:"水路运输",cateNo:"syys"},{icon:"airplane",name:"航空运输",cateNo:"kyys"},{icon:"shopStore",name:"仓库",cateNo:"cksy"},{icon:"site",name:"集装箱场站",cateNo:"czsy"},{icon:"wharf",name:"码头",cateNo:"mtsy"},{icon:"help",name:"配送",cateNo:"ps",open:!1},{icon:"port",name:"港口",cateNo:"gk",open:!1},{icon:"inlandPort",name:"内陆港",cateNo:"nlg",open:!1},{icon:"airPort",name:"航空港",cateNo:"hkg",open:!1},{icon:"package",name:"包装",cateNo:"bz",open:!1}];function c(t){var a="";switch(t){case"syys":a="boat";break;case"kyys":a="plant";break;case"tlys":a="train";break;case"glys":a="car";break;case"mtsy":a="wharf";break;case"czsy":a="site";break;case"cksy":a="shop"}return a}var o=function(t){var a=[];return(t||[]).forEach((function(t){var e={};"glys"===t.cateNo?(e.originLocation=t.oriProvinceName+t.oriCityName,e.destLocation=t.destProvinceName+t.destCityName):t.oriLatAndLng&&t.destLatAndLng&&(e.originLng=t.oriLatAndLng.lng,e.originLat=t.oriLatAndLng.lat,e.destLng=t.destLatAndLng.lng,e.destLat=t.destLatAndLng.lat),e.transportType=c(t.cateNo),a.push(e)})),a},r=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return n.a.round(Number(t),a)},l=function(t,a,e){var s=null;if("edit"===e&&a){var n=t.findIndex((function(t){return t.id===a}));n>0&&(s=t[n-1])}else s=t[t.length-1];return s}}}]);