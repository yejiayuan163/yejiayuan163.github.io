(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-3b7e2ea4","chunk-74509dd1","chunk-2d21406a"],{"0069":function(t,e,r){"use strict";r.r(e);var n=r("ade3"),i=r("c7eb"),o=r("1da1"),a=(r("d9e2"),r("4de4"),r("a15b"),r("d81d"),r("b0c0"),r("a9e3"),r("d3b7"),r("25f0"),r("9d44")),s=r("2ef0"),c=r.n(s),l={props:{disabled:{type:Boolean,default:!1},value:{type:Array,default:function(){return[]}},countryId:{type:String,default:""},valueKey:{type:String,default:""},maxLevel:{type:Number,default:2}},computed:{districtFormatter:{get:function(){var t=this;return this.valueKey?this.tValue.map((function(e){return e[t.valueKey]})):[]},set:function(t){var e=t;this.valueKey&&e.length&&(e=this.getDistrictArr(this.$refs.districtCascader.getCheckedNodes(!1)[0])),this.tValue=e,this.$emit("input",e)}}},watch:{value:{immediate:!0,deep:!0,handler:function(t,e){var r=this;this.checkError(),this.valueIsEqual(this.tValue,t)||(this.tValue=t,this.refreshDistrict(),setTimeout((function(){r.valueKey&&0===t.filter((function(t){return t.value})).length&&(r.$refs.districtCascader.presentText=t.map((function(t){return t.label||""})).join(" / "))})))}},countryId:{immediate:!1,deep:!0,handler:function(t,e){this.refreshDistrict()}}},data:function(){var t=this;return{tValue:[],districtProps:{expandTrigger:"hover",lazy:!0,lazyLoad:function(){var e=Object(o.a)(Object(i.a)().mark((function e(r,n){var o,a,s,c;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=r.level,r.data,a=r.value,s=[],c=o,null!=a&&(t.provinceCode=a);case 5:if(!(c<t.maxLevel)){e.next=15;break}return e.next=8,t.api_getRegion(c,a,o);case 8:if(!((s=e.sent).length>0||2==c)){e.next=12;break}return n(s),e.abrupt("break",15);case 12:c++,e.next=5;break;case 15:case"end":return e.stop()}}),e)})));return function(t,r){return e.apply(this,arguments)}}()},regionLoading:!1,districtVisible:!0}},methods:{api_getRegion:function(t,e,r){var n=this;return Object(o.a)(Object(i.a)().mark((function e(){var o,s,c,l;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.regionLoading=!0,s={},1==t&&(s.provinceCode=n.provinceCode),e.prev=3,c=null,0!=t){e.next=11;break}return e.next=8,Object(a.e)();case 8:c=e.sent,e.next=15;break;case 11:if(1!=t){e.next=15;break}return e.next=14,Object(a.c)(s);case 14:c=e.sent;case 15:if(200!==c.code){e.next=20;break}l=c.data.map((function(e){var i={};return 0==t?i={label:e.provinceName,value:e.code}:1==t&&(i={label:e.name,value:e.code}),0==t?i.type="province":1==t?i.type="city":2==t&&(i.type="county"),t>=n.maxLevel-1&&(i.leaf=!0),n.tValue[r]&&!n.tValue[r+1]&&n.tValue[r].value===i.value&&(i.leaf=!0),i})),o=Promise.resolve(l),e.next=21;break;case 20:throw new Error(c.msg);case 21:e.next=27;break;case 23:e.prev=23,e.t0=e.catch(3),n.$message.error(e.t0.message),o=Promise.reject();case 27:return n.regionLoading=!1,e.abrupt("return",o);case 29:case"end":return e.stop()}}),e,null,[[3,23]])})))()},refreshDistrict:function(){var t=this;this.districtVisible=!1,this.$nextTick((function(){t.districtVisible=!0}))},getDistrictArr:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return e.unshift({label:t.label,value:t.value,type:t.data.type}),t.parent?this.getDistrictArr(t.parent,e):e},checkError:function(){if(this.tValue.length&&("[object Object]"!==Object.prototype.toString.call(this.tValue[0])||!this.tValue[0].hasOwnProperty(this.valueKey)))throw new Error("检测到v-model的是一个对象数组，必须指定 value-key 作为它的唯一性标识。")},valueIsEqual:function(t,e){var r=this;return c.a.isEqual(t.map((function(t){return Object(n.a)({},r.valueKey,t[r.valueKey])})),e.map((function(t){return Object(n.a)({},r.valueKey,t[r.valueKey])})))}},created:function(){this.checkError()}},u=l,d=r("2877"),m=Object(d.a)(u,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.districtVisible?r("el-cascader",{ref:"districtCascader",staticStyle:{width:"100%"},attrs:{props:t.districtProps,placeholder:3===t.maxLevel?"请选择省/市/区":"请选择省/市",clearable:"",disabled:t.disabled},model:{value:t.districtFormatter,callback:function(e){t.districtFormatter=e},expression:"districtFormatter"}}):t._e()],1)}),[],!1,null,"1558ba7e",null);e.default=m.exports},"0605":function(t,e,r){"use strict";r.r(e);var n=r("15fd"),i=r("b85c"),o=r("5530"),a=r("c7eb"),s=r("1da1"),c=(r("d9e2"),r("4de4"),r("7db0"),r("d81d"),r("14d9"),r("b0c0"),r("a9e3"),r("d3b7"),r("ac1f"),r("5319"),r("0069")),l=r("9d44"),u=r("4e9f"),d=r("aed4"),m=(r("d8ad"),r("ed08")),p=["oriProvinceCode","oriProvinceName","oriCityCode","oriCityName","destProvinceCode","destProvinceName","destCityCode","destCityName","imgSrc"],h={props:{cateNo:{type:String},id:{type:[String,Number]},type:{type:String,default:"add"}},components:{YCascader:c.default},data:function(){return{fuelListOptions:[],loading:!1,tForm:{fuelTypeItem:null,transportType:1,origin:null,oriProvinceCode:null,oriProvinceName:null,oriCityCode:null,oriCityName:null,oriCountry:"中国",dest:null,destProvinceCode:null,destProvinceName:null,destCityCode:null,destCityName:null,destCountry:"中国",transportWeight:null,nominalWeight:null,transportVolume:null,transportQty:null,vehicleType:null,powerType:null,fuelType:null,loadRate:null,factorProject:"122",actualEnergyConsumption:null,quickCal:!1},rules:{originFormatter:[{required:!0,validator:this.originFormatterValidator,trigger:["change","blur"]}],destFormatter:[{required:!0,validator:this.destFormatterValidator,trigger:["change","blur"]}],origin:[{required:!0,message:"始发地不能为空!",trigger:["blur","change"]}],dest:[{required:!0,message:"目的地不能为空!",trigger:["blur","change"]}],transportType:[{required:!0,message:"运输方式不能为空!",trigger:["blur","change"]}],transportWeight:[{required:!0,message:"运输重量不能为空!",trigger:["blur","change"]}]},vehicleTypeList:[],oriDisabled:!1,mutiTrans:!1,multimodalTransport:!1,mutiTransport:null,energyUnit:"L",energyUnitMap:{}}},computed:{getMutiTransport:function(){return this.$store.getters.getMutiTransport},originFormatter:{get:function(){var t=[];return(this.tForm.oriProvinceCode||this.tForm.oriProvinceName)&&t.push({label:this.tForm.oriProvinceName,value:this.tForm.oriProvinceCode}),(this.tForm.oriCityCode||this.tForm.oriCityName)&&t.push({label:this.tForm.oriCityName,value:this.tForm.oriCityCode}),t},set:function(t){var e={};t.map((function(t){return e[t.type]={value:t.value,label:t.label}})),this.tForm.oriProvinceCode="",this.tForm.oriProvinceName="",this.tForm.oriCityCode="",this.tForm.oriCityName="",this.tForm.oriLabel="",this.tForm.oriSubLabel="",e.province||e.city?(e.province&&(this.tForm.oriProvinceCode=e.province.value,this.tForm.oriProvinceName=e.province.label,this.tForm.oriSubLabel=e.province.label),e.city&&(this.tForm.oriCityCode=e.city.value,this.tForm.oriCityName=e.city.label,this.tForm.oriLabel=e.city.label)):(this.tForm.oriProvinceCode="",this.tForm.oriProvinceName="",this.tForm.oriCityCode="",this.tForm.oriCityName="",this.tForm.oriLabel="",this.tForm.oriSubLabel="")}},destFormatter:{get:function(){var t=[];return(this.tForm.destProvinceCode||this.tForm.destProvinceName)&&t.push({label:this.tForm.destProvinceName,value:this.tForm.destProvinceCode}),(this.tForm.destCityCode||this.tForm.destCityName)&&t.push({label:this.tForm.destCityName,value:this.tForm.destCityCode}),t},set:function(t){var e={};t.map((function(t){return e[t.type]={value:t.value,label:t.label}})),this.tForm.destProvinceCode="",this.tForm.destProvinceName="",this.tForm.destCityCode="",this.tForm.destCityName="",this.tForm.destLabel="",this.tForm.destSubLabel="",e.province||e.city?(e.province&&(this.tForm.destProvinceCode=e.province.value,this.tForm.destProvinceName=e.province.label,this.tForm.destSubLabel=e.province.label),e.city&&(this.tForm.destCityCode=e.city.value,this.tForm.destCityName=e.city.label,this.tForm.destLabel=e.city.label)):(this.tForm.destProvinceCode="",this.tForm.destProvinceName="",this.tForm.destCityCode="",this.tForm.destCityName="")}}},watch:{originFormatter:{handler:function(t,e){t&&(this.$store.commit("SET_ADDRESS_LIST",[{originLocation:(this.tForm.oriProvinceName||"")+(this.tForm.oriCityName||"")+(this.tForm.origin||""),destLocation:(this.tForm.destProvinceName||"")+(this.tForm.destCityName||"")+(this.tForm.dest||""),transportType:"car"}]),this.tForm.oriLabel=this.tForm.oriCityName,this.tForm.oriSubLabel=this.tForm.oriProvinceName)}},destFormatter:{handler:function(t,e){t&&this.$store.commit("SET_ADDRESS_LIST",[{originLocation:(this.tForm.oriProvinceName||"")+(this.tForm.oriCityName||"")+(this.tForm.origin||""),destLocation:(this.tForm.destProvinceName||"")+(this.tForm.destCityName||"")+(this.tForm.dest||""),transportType:"car"}])}},"tForm.origin":{handler:function(t,e){if(t){var r=[{originLocation:(this.tForm.oriProvinceName||"")+(this.tForm.oriCityName||"")+t,destLocation:(this.tForm.destProvinceName||"")+(this.tForm.destCityName||"")+(this.tForm.dest||""),transportType:"car"}];this.$store.commit("SET_ADDRESS_LIST",r)}}},"tForm.dest":{handler:function(t,e){t&&this.$store.commit("SET_ADDRESS_LIST",[{originLocation:(this.tForm.oriProvinceName||"")+(this.tForm.oriCityName||"")+(this.tForm.origin||""),destLocation:(this.tForm.destProvinceName||"")+(this.tForm.destCityName||"")+t,transportType:"car"}])}}},mounted:function(){var t=this;return Object(s.a)(Object(a.a)().mark((function e(){var r,n,i,o,s;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getEnergyUnitMap();case 2:t.id?(t.$store.commit("SET_RESULT_INFO",t.id),r=t.$store.getters.getResultItem,t.$set(t,"tForm",r),t.energyUnit=t.energyUnitMap[t.tForm.fuelType],t.$store.commit("SET_ADDRESS_LIST",t.setMapPoint())):"add"===t.type&&((n=t.$store.getters.getResultList).length>0&&("glys"==(i=n[n.length-1]).cateNo?(t.tForm.oriCityCode=i.destCityCode,t.tForm.oriCityName=i.destCityName,t.tForm.oriProvinceCode=i.destProvinceCode,t.tForm.oriProvinceName=i.destProvinceName,t.tForm.origin=i.dest):(t.getProvinceCode(i),"syys"==i.cateNo?t.tForm.origin=i.desOptionItem.label:"cksy"==i.cateNo?t.tForm.origin=i.storageName:t.tForm.origin=i.dest),t.multimodalTransport=!0),o=t.$store.getters.getGoodsInfo||{},t.tForm.transportWeight=o.weight,t.tForm.transportVolume=o.volume,t.tForm.transportQty=o.quantity),(s=t.$route.params||{}).destProvinceCode&&s.destCityCode&&(t.tForm.dest=s.dest,t.tForm.destProvinceCode=s.destProvinceCode,t.tForm.destProvinceName=s.destProvinceName,t.tForm.destCityCode=s.destCityCode,t.tForm.destCityName=s.destCityName,t.oriDisabled=!0),t.getVehicleTypeList();case 6:case"end":return e.stop()}}),e)})))()},methods:{valKgToTWithDecimals:m.j,unitKgToT:m.i,formatNumberDeci:d.formatNumberDeci,handleChange:function(){var t=this;this.tForm.powerType=this.tForm.fuelTypeItem[0],this.tForm.fuelType=this.tForm.fuelTypeItem[1];var e=this.fuelListOptions.find((function(e){return e.value==t.tForm.powerType})),r=e.label,n=e.children.find((function(e){return e.value==t.tForm.fuelType})).label;this.tForm.powerOrFuelName=r+"/"+n,this.energyUnit=this.energyUnitMap[this.tForm.fuelType]},getEnergyUnitMap:function(){var t=this;return Object(s.a)(Object(a.a)().mark((function e(){var r,n,s,c,l,d,m;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.g)();case 2:r=e.sent,t.fuelListOptions=r.data.map((function(t){return Object(o.a)({children:t.subFuelVOList},t)})),n=Object(i.a)(t.fuelListOptions);try{for(n.s();!(s=n.n()).done;){c=s.value,l=Object(i.a)(c.children);try{for(l.s();!(d=l.n()).done;)m=d.value,t.energyUnitMap[m.value]=m.unit}catch(t){l.e(t)}finally{l.f()}}}catch(t){n.e(t)}finally{n.f()}case 7:case"end":return e.stop()}}),e)})))()},getPowerAndFuel:function(){var t=this;return Object(s.a)(Object(a.a)().mark((function e(){var r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(u.g)();case 2:r=e.sent,t.fuelListOptions=r.data.map((function(t){return Object(o.a)({children:t.subFuelVOList},t)})),t.tForm.quickCal||(t.fuelListOptions=t.fuelListOptions.filter((function(t){return 3!=t.value})));case 6:case"end":return e.stop()}}),e)})))()},getVehicleTypeList:function(){var t=this;Object(u.i)().then((function(e){t.vehicleTypeList=e.data}))},setMapPoint:function(){return Object(d.initPoints)([this.tForm])},originFormatterValidator:function(t,e,r){if(this.originFormatter&&this.originFormatter.length>0)return r();r(new Error("始发地省市不能为空!"))},destFormatterValidator:function(t,e,r){if(this.destFormatter&&this.destFormatter.length>0)return r();r(new Error("目的地省市不能为空!"))},submit:function(){var t=this;return Object(s.a)(Object(a.a)().mark((function e(){var r,i,s,c,u,d,m,h,f,b,y;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.loading=!0,e.next=4,t.$refs.tForm.validate();case 4:if((r=t.tForm).oriProvinceCode,i=r.oriProvinceName,r.oriCityCode,s=r.oriCityName,r.destProvinceCode,c=r.destProvinceName,r.destCityCode,u=r.destCityName,r.imgSrc,d=Object(n.a)(r,p),delete(m=Object(o.a)(Object(o.a)({},d),{},{origin:i+s+d.origin,dest:c+u+d.dest})).fuelTypeItem,t.tForm.quickCal&&(h={transportType:4,powerType:t.tForm.powerType,fuelType:t.tForm.fuelType,actualEnergyConsumption:t.tForm.actualEnergyConsumption,factorProject:t.tForm.factorProject}),f=null,!t.tForm.quickCal){e.next=16;break}return e.next=13,Object(l.h)(h);case 13:f=e.sent,e.next=19;break;case 16:return e.next=18,Object(l.b)(m);case 18:f=e.sent;case 19:if(200!==f.code){e.next=28;break}return b=Object(o.a)(Object(o.a)({},t.tForm),{},{id:f.data.id,distance:f.data.distance,carbonEmissionQty:f.data.carbonEmissionQty,cateNo:t.cateNo}),e.next=23,new Promise((function(e,r){t.$emit("saveMap2Image",e,r)}));case 23:(y=e.sent)&&(b.imgSrc=y),"add"===t.type?t.$store.commit("SET_RESULT_LIST",b):"edit"===t.type&&t.$store.commit("EDIT_RESULT_LIST",{data:b,originId:t.id}),t.$router.replace({name:"carbonResult"});case 28:t.loading=!1,e.next=34;break;case 31:e.prev=31,e.t0=e.catch(0),t.loading=!1;case 34:case"end":return e.stop()}}),e,null,[[0,31]])})))()},reset:function(){Object.assign(this.tForm,{transportType:1,origin:null,oriProvinceCode:null,oriProvinceName:null,oriCityCode:null,oriCityName:null,dest:null,destProvinceCode:null,destProvinceName:null,destCityCode:null,destCityName:null,nominalWeight:null,vehicleType:null,fuelTypeItem:null,powerType:null,fuelType:null,loadRate:null,actualEnergyConsumption:null}),this.energyUnit="L"},changeVehicleType:function(t){this.vehicleTypeList.find((function(e){return e.value===t}))&&(this.tForm.vehicleTypeLabel=t.label)},checkBoxChange:function(){this.tForm.quickCal&&(this.tForm.origin=null,this.tForm.oriProvinceCode=null,this.tForm.oriProvinceName=null,this.tForm.oriCityCode=null,this.tForm.oriCityName=null,this.tForm.oriCountry="中国",this.tForm.dest=null,this.tForm.destProvinceCode=null,this.tForm.destProvinceName=null,this.tForm.destCityCode=null,this.tForm.destCityName=null,this.tForm.destCountry="中国",this.tForm.nominalWeight=null,this.$store.commit("INIT_FINAL_IMG")),this.getPowerAndFuel()},getProvinceCode:function(t){var e=this;return Object(s.a)(Object(a.a)().mark((function r(){var n,i;return Object(a.a)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,Object(l.e)();case 2:return n=r.sent,i={},200==n.code&&(i=n.data.find((function(e){return t.destProvinceName==e.provinceName}))),r.next=7,e.getCityCode(i.code,t.destCityName);case 7:e.tForm.oriProvinceCode=i.code,e.tForm.oriProvinceName=i.provinceName;case 9:case"end":return r.stop()}}),r)})))()},getCityCode:function(t,e){var r=this;return Object(s.a)(Object(a.a)().mark((function n(){var i,o,s,c;return Object(a.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i={provinceCode:t},n.next=3,Object(l.c)(i);case 3:o=n.sent,s=o.data.find((function(t){return e==t.name})).code,c=o.data.find((function(t){return e==t.name})).name,r.tForm.oriCityCode=s,r.tForm.oriCityName=c;case 8:case"end":return n.stop()}}),n)})))()}}},f=h,b=(r("c712"),r("2877")),y=Object(b.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"road-transport"},[r("el-form",{ref:"tForm",attrs:{model:t.tForm,rules:t.rules,inline:!0,"show-message":!1}},["read"===t.type?r("div",{staticClass:"carbon-info"},[r("div",{staticClass:"carbon-title-box"},[r("div",{staticClass:"left"},[r("p",[t._v(" 里程："),r("em",[t._v(t._s(t.formatNumberDeci(t.tForm.distance,3)))]),r("span",{staticClass:"unit"},[t._v("km")])])]),r("div",{staticClass:"right"},[r("p",[t._v(" 温室气体排放:"),r("em",[t._v(t._s(t.valKgToTWithDecimals(t.tForm.carbonEmissionQty,5)))]),r("span",{staticClass:"unit"},[t._v(t._s(t.unitKgToT(t.tForm.carbonEmissionQty,5)))])])])]),r("el-divider")],1):t._e(),r("el-form-item",{attrs:{label:"运输方式",prop:t.tForm.quickCal?"":"transportType"}},[r("el-select",{attrs:{placeholder:"请选择运输方式",disabled:"read"===t.type||t.tForm.quickCal},model:{value:t.tForm.transportType,callback:function(e){t.$set(t.tForm,"transportType",e)},expression:"tForm.transportType"}},[r("el-option",{attrs:{label:"整车运输",value:1}}),r("el-option",{attrs:{label:"零担运输",value:2}})],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"始发地",prop:t.tForm.quickCal?"":"originFormatter"}},[r("y-cascader",{staticStyle:{width:"100%"},attrs:{"max-level":2,"value-key":"value",disabled:"read"===t.type||t.oriDisabled||t.mutiTrans||t.multimodalTransport||t.tForm.quickCal},model:{value:t.originFormatter,callback:function(e){t.originFormatter=e},expression:"originFormatter"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"目的地",prop:t.tForm.quickCal?"":"destFormatter"}},[r("y-cascader",{staticStyle:{width:"100%"},attrs:{"max-level":2,"value-key":"value",disabled:"read"===t.type||t.tForm.quickCal},model:{value:t.destFormatter,callback:function(e){t.destFormatter=e},expression:"destFormatter"}})],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"始发地详细地址",prop:t.tForm.quickCal?"":"origin"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入始发地详细地址",disabled:"read"===t.type||t.oriDisabled||t.mutiTrans||t.tForm.quickCal},model:{value:t.tForm.origin,callback:function(e){t.$set(t.tForm,"origin",e)},expression:"tForm.origin"}})],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"目的地详细地址",prop:t.tForm.quickCal?"":"dest"}},[r("el-input",{attrs:{type:"textarea",placeholder:"请输入目的地详细地址",disabled:"read"===t.type||t.tForm.quickCal},model:{value:t.tForm.dest,callback:function(e){t.$set(t.tForm,"dest",e)},expression:"tForm.dest"}})],1)],1)],1),r("el-divider"),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"货物重量",prop:t.tForm.quickCal?"":"transportWeight"}},[r("el-input",{attrs:{type:"input",placeholder:"请输入货物重量",disabled:""},model:{value:t.tForm.transportWeight,callback:function(e){t.$set(t.tForm,"transportWeight",e)},expression:"tForm.transportWeight"}},[r("template",{slot:"append"},[t._v("kg")])],2)],1)],1),r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"车辆核定载重",prop:"nominalWeight"}},[r("el-input",{attrs:{type:"number",placeholder:"请输入车辆核定载重",disabled:"read"===t.type||t.tForm.quickCal},model:{value:t.tForm.nominalWeight,callback:function(e){t.$set(t.tForm,"nominalWeight",e)},expression:"tForm.nominalWeight"}},[r("template",{slot:"append"},[t._v("t")])],2)],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:12}},[r("el-form-item",{attrs:{label:"货物体积",prop:"transportVolume"}},[r("el-input",{attrs:{type:"input",placeholder:"请输入货物体积",disabled:""},model:{value:t.tForm.transportVolume,callback:function(e){t.$set(t.tForm,"transportVolume",e)},expression:"tForm.transportVolume"}},[r("template",{slot:"append"},[t._v("m³")])],2)],1)],1)],1),r("el-divider"),t.getMutiTransport?t._e():r("el-form-item",{attrs:{label:""}},[r("el-checkbox",{staticClass:"speed",attrs:{disabled:"read"===t.type},on:{change:t.checkBoxChange},model:{value:t.tForm.quickCal,callback:function(e){t.$set(t.tForm,"quickCal",e)},expression:"tForm.quickCal"}},[t._v("采取能耗速算")])],1),t.tForm.quickCal?t._e():r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"车型",prop:"vehicleType"}},[r("el-select",{attrs:{placeholder:"请选择车型",disabled:"read"===t.type},on:{change:t.changeVehicleType},model:{value:t.tForm.vehicleType,callback:function(e){t.$set(t.tForm,"vehicleType",e)},expression:"tForm.vehicleType"}},t._l(t.vehicleTypeList,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1)],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:24}},[r("el-form-item",{attrs:{label:"动力/燃料类型",prop:"fuelTypeItem"}},[r("el-cascader",{attrs:{options:t.fuelListOptions,props:{expandTrigger:"hover"},disabled:"read"===t.type},on:{change:t.handleChange},model:{value:t.tForm.fuelTypeItem,callback:function(e){t.$set(t.tForm,"fuelTypeItem",e)},expression:"tForm.fuelTypeItem"}})],1)],1)],1),t.tForm.quickCal?t._e():r("el-form-item",{attrs:{label:"平均装载率",prop:"loadRate"}},[r("el-input",{attrs:{type:"number",step:"0.01",placeholder:"请输入平均装载率",disabled:"read"===t.type},model:{value:t.tForm.loadRate,callback:function(e){t.$set(t.tForm,"loadRate",e)},expression:"tForm.loadRate"}})],1),t.tForm.quickCal?r("el-form-item",{attrs:{label:"实际能耗",prop:"actualEnergyConsumption"}},[r("el-input",{attrs:{type:"input",placeholder:"请输入实际能耗",disabled:"read"===t.type},model:{value:t.tForm.actualEnergyConsumption,callback:function(e){t.$set(t.tForm,"actualEnergyConsumption",e)},expression:"tForm.actualEnergyConsumption"}},[r("template",{slot:"append"},[t._v(t._s(t.energyUnit))])],2)],1):t._e()],1),"read"!==t.type?r("div",{staticClass:"footer-btns"},[r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:16}},[r("el-button",{attrs:{type:"primary",loading:t.loading},on:{click:t.submit}},[t._v("提交并测算")])],1),r("el-col",{attrs:{span:8}},[r("el-button",{attrs:{type:"pain"},on:{click:t.reset}},[t._v("重置")])],1)],1)],1):t._e()],1)}),[],!1,null,"4e1fe898",null);e.default=y.exports},"4afb":function(t,e,r){},"4e9f":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o})),r.d(e,"i",(function(){return a})),r.d(e,"g",(function(){return s})),r.d(e,"d",(function(){return c})),r.d(e,"c",(function(){return l})),r.d(e,"f",(function(){return u})),r.d(e,"e",(function(){return d})),r.d(e,"h",(function(){return m}));var n=r("b775");function i(t){return Object(n.a)({url:"/carbon/airport/getAirportByCityName/"+t,method:"get"})}function o(t){return Object(n.a)({url:"/carbon/airport/getAirportPageByNameLike",method:"post",data:t})}function a(){return Object(n.a)({url:"/carbon/calc/getVehicleTypeList",method:"get"})}function s(){return Object(n.a)({url:"/carbon/power/fuel/getPowerAndFuelList",method:"get"})}function c(){return Object(n.a)({url:"/carbon/calc/getFactorProjectList",method:"get"})}function l(t){return Object(n.a)({url:"/dict/data/type/"+t,method:"get"})}function u(t){return Object(n.a)({url:"/carbon/port/getPortPageByPortName",method:"post",data:t})}function d(t){return Object(n.a)({url:"/carbon/port/getPortPageByCityName",method:"post",data:t})}function m(t){return Object(n.a)({url:"/carbon/railwayStation/getRailwayStationPageByName",method:"post",data:t})}},"9d44":function(t,e,r){"use strict";r.d(e,"a",(function(){return i})),r.d(e,"b",(function(){return o})),r.d(e,"j",(function(){return a})),r.d(e,"h",(function(){return s})),r.d(e,"i",(function(){return c})),r.d(e,"f",(function(){return l})),r.d(e,"e",(function(){return u})),r.d(e,"c",(function(){return d})),r.d(e,"d",(function(){return m})),r.d(e,"g",(function(){return p}));var n=r("b775");function i(t){return Object(n.a)({url:"/carbon/calc/airTransportCEmission",method:"post",data:t})}function o(t){return Object(n.a)({url:"/carbon/calc/automobileTransportCEmission",method:"post",data:t})}function a(t){return Object(n.a)({url:"/carbon/calc/transportCEmissionSeaCalc",method:"post",data:t})}function s(t){return Object(n.a)({url:"/carbon/calc/transportCEmissionFastCalc",method:"post",data:t})}function c(t){return Object(n.a)({url:"/carbon/calc/transportCEmissionRailwayCalc",method:"post",data:t})}function l(t){return Object(n.a)({url:"/carbon/calc/logisticsStationCEmissionCalc",method:"post",data:t})}function u(){return Object(n.a)({url:"/carbon/province/city/getProvinceListByLike/",method:"get"})}function d(t){return Object(n.a)({url:"/carbon/province/city/getCityListByLikeAndPCode",method:"post",data:t})}function m(t){return Object(n.a)({url:"/carbon/addressLocate/getLocationMessageByAddress",method:"post",data:t})}function p(t){return Object(n.a)({url:"/carbon/calcOrg/organizationalCarbonCalculate",method:"post",data:t})}},aed4:function(t,e,r){"use strict";r.r(e),r.d(e,"cateNoList",(function(){return o})),r.d(e,"getTransportIcon",(function(){return a})),r.d(e,"initPoints",(function(){return s})),r.d(e,"formatNumberDeci",(function(){return c})),r.d(e,"getPreTransportItem",(function(){return l})),r("c740"),r("14d9"),r("a9e3"),r("d3b7"),r("159b");var n=r("2ef0"),i=r.n(n),o=[{icon:"goodsTrain",name:"道路运输",cateNo:"glys"},{icon:"railway",name:"铁路运输",cateNo:"tlys"},{icon:"ship",name:"水路运输",cateNo:"syys"},{icon:"airplane",name:"航空运输",cateNo:"kyys"},{icon:"shopStore",name:"仓库",cateNo:"cksy"},{icon:"site",name:"集装箱场站",cateNo:"czsy"},{icon:"wharf",name:"码头",cateNo:"mtsy"},{icon:"help",name:"配送",cateNo:"ps",open:!1},{icon:"port",name:"港口",cateNo:"gk",open:!1},{icon:"inlandPort",name:"内陆港",cateNo:"nlg",open:!1},{icon:"airPort",name:"航空港",cateNo:"hkg",open:!1},{icon:"package",name:"包装",cateNo:"bz",open:!1}];function a(t){var e="";switch(t){case"syys":e="boat";break;case"kyys":e="plant";break;case"tlys":e="train";break;case"glys":e="car";break;case"mtsy":e="wharf";break;case"czsy":e="site";break;case"cksy":e="shop"}return e}var s=function(t){var e=[];return(t||[]).forEach((function(t){var r={};"glys"===t.cateNo?(r.originLocation=t.oriProvinceName+t.oriCityName,r.destLocation=t.destProvinceName+t.destCityName):t.oriLatAndLng&&t.destLatAndLng&&(r.originLng=t.oriLatAndLng.lng,r.originLat=t.oriLatAndLng.lat,r.destLng=t.destLatAndLng.lng,r.destLat=t.destLatAndLng.lat),r.transportType=a(t.cateNo),e.push(r)})),e},c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return i.a.round(Number(t),e)},l=function(t,e,r){var n=null;if("edit"===r&&e){var i=t.findIndex((function(t){return t.id===e}));i>0&&(n=t[i-1])}else n=t[t.length-1];return n}},c712:function(t,e,r){"use strict";r("4afb")},d8ad:function(t,e,r){"use strict";var n=new(r("2b0e").default);e.a=n},ed08:function(t,e,r){"use strict";r.d(e,"b",(function(){return o})),r.d(e,"g",(function(){return a})),r.d(e,"c",(function(){return s})),r.d(e,"a",(function(){return c})),r.d(e,"h",(function(){return l})),r.d(e,"f",(function(){return u})),r.d(e,"d",(function(){return d})),r.d(e,"e",(function(){return m})),r.d(e,"j",(function(){return p})),r.d(e,"i",(function(){return f})),r("53ca"),r("d9e2"),r("7db0"),r("a630"),r("a15b"),r("d81d"),r("14d9"),r("fb6a"),r("c19f"),r("ace4"),r("a9e3"),r("b64b"),r("d3b7"),r("4d63"),r("c607"),r("ac1f"),r("2c3e"),r("00b4"),r("25f0"),r("6062"),r("3ca3"),r("466d"),r("5319"),r("5cc6"),r("907a"),r("9a8c"),r("a975"),r("735e"),r("c1ac"),r("d139"),r("3a7b"),r("986a"),r("1d02"),r("d5d6"),r("82f8"),r("e91f"),r("60bd"),r("5f96"),r("3280"),r("3fcc"),r("ca91"),r("25a1"),r("cd26"),r("3c5d"),r("2954"),r("649e"),r("219c"),r("170b"),r("b39a"),r("72f7"),r("1b3b"),r("3d71"),r("c6e3"),r("81b2"),r("159b"),r("ddb0"),r("0eb6"),r("b7ef"),r("8bd4"),r("2b3d"),r("bf19"),r("9861"),r("c38a");var n=r("2ef0"),i=r.n(n);function o(t,e,r){var n,i,o,a,s,c=function(){var l=+new Date-a;l<e&&l>0?n=setTimeout(c,e-l):(n=null,r||(s=t.apply(o,i),n||(o=i=null)))};return function(){for(var i=arguments.length,l=new Array(i),u=0;u<i;u++)l[u]=arguments[u];o=this,a=+new Date;var d=r&&!n;return n||(n=setTimeout(c,e)),d&&(s=t.apply(o,l),o=l=null),s}}function a(t,e){for(var r=Object.create(null),n=t.split(","),i=0;i<n.length;i++)r[n[i]]=!0;return e?function(t){return r[t.toLowerCase()]}:function(t){return r[t]}}var s="export default ",c={html:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"separate",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!1,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0},js:{indent_size:"2",indent_char:" ",max_preserve_newlines:"-1",preserve_newlines:!1,keep_array_indentation:!1,break_chained_methods:!1,indent_scripts:"normal",brace_style:"end-expand",space_before_conditional:!0,unescape_strings:!1,jslint_happy:!0,end_with_newline:!0,wrap_line_length:"110",indent_inner_html:!0,comma_first:!1,e4x:!0,indent_empty_lines:!0}};function l(t){return t.replace(/( |^)[a-z]/g,(function(t){return t.toUpperCase()}))}function u(t){return/^[+-]?(0|([1-9]\d*))(\.\d+)?$/g.test(t)}function d(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"id",n=NaN;return!t.length||t.length<=0?{hasObj:!1,location:n}:{hasObj:t.find((function(t,i){return!(t[r]!=e[r]||!e[r]||(n=i,0))})),location:n}}function m(t){if("city"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"city"))return t.destCityName||t.destProvinceName}function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return String(t).split(".")[0].length>e?h(Number(t)/1e3):h(Number(t))}function h(t){return i.a.round(Number(t),3)}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;return String(t).split(".")[0].length>e?"t":"kg"}}}]);