webpackJsonp([4],{"Llw/":function(t,i,a){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={name:"Product",data:function(){return{id:this.$route.params.id,detail:[]}},created:function(){this.builddetail()},methods:{builddetail:function(){var t=this;this.axios.get("/api/builddetail").then(function(i){t.detail=i.data.data}).catch(function(t){console.log(t)})}},components:{"app-header":a("zhAi").default},computed:{}},s={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("el-col",{attrs:{span:24}},[e("app-header"),t._v(" "),e("div",[e("img",{attrs:{src:a("vEGq"),width:"100%"}})]),t._v(" "),t._l(t.detail,function(i,a){return e("div",{key:a},[e("aside",{staticClass:"Banner"},[e("img",{attrs:{src:i.bannerimg,width:"100%"}})]),t._v(" "),e("div",{staticClass:"contain Pro_info"},[e("div",{staticClass:"boxd box1d"},[e("div",{staticClass:"text"},[e("h2",{staticClass:"h2"},[t._v(t._s(i.detailtitle))]),t._v(" "),e("router-link",{attrs:{to:""}},[t._v("立即购买")]),t._v(" "),e("p",{staticClass:"p"},[t._v(t._s(i.detaildsc))])],1)])]),t._v(" "),t._l(i.detailimg,function(t,i){return e("div",{staticClass:"boxd box2d"},[e("img",{attrs:{src:t.detailsimg,alt:"",width:"100%"}})])})],2)})],2)},staticRenderFns:[]};var n=a("C7Lr")(e,s,!1,function(t){a("wntj")},"data-v-4d96e281",null);i.default=n.exports},vEGq:function(t,i,a){t.exports=a.p+"static/img/white_bg.c892235.jpg"},wntj:function(t,i){}});