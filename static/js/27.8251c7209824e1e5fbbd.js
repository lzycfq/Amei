webpackJsonp([27],{"1AXr":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={name:"app",data:function(){return{searchtoggel:!1,ruleForm:{searchcontent:""},rules:{searchcontent:[{required:!0,message:"请输入搜索内容",trigger:"blur"}]},index:0,seen:!1,current:0,seens:!1,currents:0}},created:function(){this.buildpcontent()},methods:{buildpcontent:function(){var t=this;this.axios.get("/api/buildpcontent").then(function(e){t.pcontent=e.data.data}).catch(function(t){console.log(t)})},enter:function(t){this.seen=!0,this.current=t},leave:function(){this.seen=!1,this.current=index},enters:function(t){this.seens=!0,this.currents=null},leaves:function(){this.seens=!1,this.currents=null},getdown:function(){document.body.scrollTop=950,document.documentElement.scrollTop=950},toggle:function(){this.searchtoggel=!this.searchtoggel},seachbtn:function(t){var e=this;this.$refs[t].validate(function(t){if(!t)return console.log("error submit!!"),!1;e.axios.get("",{params:{}}).then(function(t){t.data.success&&(e.house_consultation=!1),alert(t.data.message)}).catch(function(t){console.log(t)})})}}},r={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("el-col",{attrs:{span:24}},[i("div",{staticClass:"Indexall"},[i("div",{staticClass:"indexbanner"},[i("el-col",{attrs:{span:24}},[i("div",{staticClass:"navbar"},[i("el-col",{attrs:{span:14}},[i("img",{attrs:{src:s("ZAxZ"),height:"29px"}})]),t._v(" "),i("el-col",{attrs:{span:10}},[i("ul",{staticClass:"navul"},[i("li",[i("router-link",{staticClass:"nav_a",attrs:{to:"/"}},[t._v("首页")])],1),t._v(" "),i("li",{on:{mouseenter:function(e){return t.enter(t.index)}}},[i("router-link",{staticClass:"nav_a",attrs:{to:"/product"}},[t._v("产品")])],1),t._v(" "),i("li",{on:{mouseenter:function(e){return t.enters(t.index)}}},[i("router-link",{staticClass:"nav_a",attrs:{to:"/serve"}},[t._v("服务")])],1),t._v(" "),i("li",[i("router-link",{staticClass:"nav_a",attrs:{to:"/shoping"}},[t._v("网上商城")])],1),t._v(" "),i("li",[i("img",{staticClass:"nav_img",attrs:{src:s("GvTj"),width:"32px",height:"32px"},on:{click:function(e){return t.toggle()}}})])])]),t._v(" "),i("div",{staticStyle:{clear:"both"}}),t._v(" "),i("div",{staticClass:"cengji"},[i("router-link",{attrs:{to:"shouserve"}},[t._v("关于艾美特")]),t._v(" > "),i("span",[t._v("公司简介")])],1)],1),t._v(" "),t.seen&&t.index==t.current?i("div",{staticClass:"productcontent"},[i("div",{staticClass:"pcontent"},[i("img",{attrs:{src:s("fxpM"),width:"100%"}}),t._v(" "),i("ul",{staticClass:"pcontent_ul"},t._l(t.pcontent,function(e,s){return i("router-link",{key:s,staticClass:"lia",attrs:{to:""}},[i("img",{staticClass:"imgblock",attrs:{src:e.pcontentimg1,height:"55px"}}),i("span",{staticClass:"pcontent_ul_wenzi"},[t._v(t._s(e.pcontentc))])])}),1)])]):t._e(),t._v(" "),t.seens&&t.index==t.currents?i("div",{staticClass:"productcontents"},[i("div",{staticClass:"pcontent"},[i("img",{attrs:{src:s("2tUv"),width:"100%"}}),t._v(" "),i("div",{staticClass:"tableform"},[i("router-link",{staticStyle:{color:"#111111"},attrs:{to:"/index_5",href:"/fwln/index_5.aspx"}},[t._v("售后服务")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_6"}},[t._v("服务理念")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_7"}},[t._v("服务政策")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_8"}},[t._v("上门服务公告")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_9"}},[t._v("[金卡]服务介绍")])],1),t._v(" "),i("div",{staticClass:"tableform"},[i("router-link",{staticStyle:{color:"#111111"},attrs:{to:"/index_5",href:"/fwln/index_5.aspx"}},[t._v("服务网点")])],1),t._v(" "),i("div",{staticClass:"tableform"},[i("router-link",{staticStyle:{color:"#111111"},attrs:{to:"/index_5",href:"/fwln/index_5.aspx"}},[t._v("常见问题")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_6"}},[t._v("电风扇")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_7"}},[t._v("电暖气")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_8"}},[t._v("小家电")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_9"}},[t._v("住宅电器")])],1),t._v(" "),i("div",{staticClass:"tableform"},[i("router-link",{staticStyle:{color:"#111111"},attrs:{to:"/index_5",href:"/fwln/index_5.aspx"}},[t._v("客服联系")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_6"}},[t._v("联系我们")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_7"}},[t._v("商用服务")])],1),t._v(" "),i("div",{staticClass:"tableform"},[i("router-link",{staticStyle:{color:"#111111"},attrs:{to:"/index_5",href:"/fwln/index_5.aspx"}},[t._v("下载中心")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_6"}},[t._v("软件下载")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_7"}},[t._v("智能产品专区")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_6"}},[t._v("专卖网络")]),t._v(" "),i("router-link",{staticStyle:{color:"#555555"},attrs:{to:"/index_7"}},[t._v("海报下载")])],1),t._v(" "),i("div",{staticClass:"tableform"},[i("router-link",{staticStyle:{color:"#111111"},attrs:{to:"/index_5",href:"/fwln/index_5.aspx"}},[t._v("在线留言")])],1)])]):t._e(),t._v(" "),t.searchtoggel?i("div",{staticClass:"searchtoggel"},[i("div",{staticClass:"searchcontent"},[i("el-form",{ref:"ruleForm",staticClass:"serachruleForm",attrs:{model:t.ruleForm,rules:t.rules,"label-width":"100px"}},[i("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入搜索内容"}},[i("el-button",{staticClass:"seachbtn",attrs:{slot:"append"},on:{click:function(e){return t.seachbtn()}},slot:"append",model:{value:t.ruleForm.searchcontent,callback:function(e){t.$set(t.ruleForm,"searchcontent",e)},expression:"ruleForm.searchcontent"}},[t._v("搜索")])],1)],1),t._v(" "),i("i",{staticClass:"elform_close",on:{click:function(e){return t.toggle()}}})],1)]):t._e()])],1),t._v(" "),i("img",{staticStyle:{position:"relative",top:"150px"},attrs:{src:"http://www.airmate-china.com/uploadfiles/image/banner_about.jpg",width:"100%",height:"500px"},on:{mouseleave:function(e){return t.leave(t.index)},mouseout:function(e){return t.leaves(t.index)}}}),t._v(" "),i("div",{staticStyle:{clear:"both"}})]),t._v(" "),i("section",{staticClass:"Honor"},[i("div",{staticClass:"N_title"},[t._v("企业荣誉")]),t._v(" "),i("div",{staticClass:"auto auto_1300"},[i("ul",{staticClass:"ul"},[i("li",[i("time",[i("i"),t._v("2014")]),t._v(" "),i("pre",[t._v("2月成功签约九江产业园项目")])]),t._v(" "),i("li",[i("time",[i("i"),t._v("2013")]),t._v(" "),i("pre",[t._v("在台湾挂牌上市，台湾股票代号：1626（F-艾美）")])]),t._v(" "),i("li",[i("time",[i("i"),t._v("2011")]),t._v(" "),i("pre",[t._v("领先行业推出第一台直流变频风扇S35108R，创下52天1度电的记录")])]),t._v(" "),i("li",[i("time",[i("i"),t._v("2010")]),t._v(" "),i("pre",[t._v("推出行业内第一台蓝牙遥控落地扇FS4033DR")])]),t._v(" "),i("li",[i("time",[i("i"),t._v("2009")]),t._v(" "),i("pre",[t._v("中共中央政治局常委、国务院副总理李克强莅临艾美特参观考察，并对艾美特在自主创新、自有品牌建设中取得的成绩及在促进社会就业等方面做出的贡献给予高度评价")])]),t._v(" "),i("li",[i("time",[i("i"),t._v("2000")]),t._v(" "),i("pre",[t._v("建立全球五大洲60余国销售网络；成为日本家用电扇最大供应厂")])]),t._v(" "),i("li",[i("time",[i("i"),t._v("1997")]),t._v(" "),i("pre",[t._v("艾美特品牌正式进入中国市场，开辟国内市场格局")])]),t._v(" "),i("li",[i("time",[i("i"),t._v("1994")]),t._v(" "),i("pre",[t._v("成为第一家取得中国小家电CCEE安全认证的外资企业")])]),t._v(" "),i("li",[i("time",[i("i"),t._v("1994")]),t._v(" "),i("pre",[t._v("开始与日本三洋电机公司合作生产三洋专用风扇马达")])]),t._v(" "),i("li",[i("time",[i("i"),t._v("1991")]),t._v(" "),i("pre",[t._v("艾美特电器在深圳建立主要生产基地，开展全球布局")])]),t._v(" "),i("li",[i("time",[i("i"),t._v("1973")]),t._v(" "),i("pre",[t._v("艾美特母厂在台湾创立")])])])])])])},staticRenderFns:[]};var n=s("C7Lr")(i,r,!1,function(t){s("bvR9")},"data-v-12c14b72",null);e.default=n.exports},bvR9:function(t,e){}});