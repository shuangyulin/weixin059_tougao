(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"07c0":function(n,t,e){"use strict";(function(n){e("b69f"),e("921b");i(e("66fd"));var t=i(e("ba00"));function i(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"6f0f":function(n,t,e){"use strict";var i=e("9850"),a=e.n(i);a.a},"80f1":function(n,t,e){"use strict";var i,a=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.wenzhangzhanshilist,(function(t,e){var i=t.fengmian.split(",");return{$orig:n.__get_orig(t),g0:i}}))),i=n.__map(n.wenzhangzhanshilist,(function(t,e){var i=t.fengmian.split(",");return{$orig:n.__get_orig(t),g1:i}})),a=n.__map(n.hometongzhigonggaolist,(function(t,e){var i=t.fengmian.split(",");return{$orig:n.__get_orig(t),g2:i}})),r=n.__map(n.hometongzhigonggaolist,(function(t,e){var i=t.fengmian.split(",");return{$orig:n.__get_orig(t),g3:i}}));n.$mp.data=Object.assign({},{$root:{l0:e,l1:i,l2:a,l3:r}})},r=[];e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return i}))},8399:function(n,t,e){"use strict";e.r(t);var i=e("8e55"),a=e.n(i);for(var r in i)"default"!==r&&function(n){e.d(t,n,(function(){return i[n]}))}(r);t["default"]=a.a},"8e55":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,i,a,r,o){try{var u=n[r](o),c=u.value}catch(s){return void e(s)}u.done?t(c):Promise.resolve(c).then(i,a)}function o(n){return function(){var t=this,e=arguments;return new Promise((function(i,a){var o=n.apply(t,e);function u(n){r(o,i,a,u,c,"next",n)}function c(n){r(o,i,a,u,c,"throw",n)}u(void 0)}))}}e("baaf");var u=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("9c61"))}.bind(null,e)).catch(e.oe)},c={components:{uniIcons:u},data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],wenzhangzhanshilist:[],hometongzhigonggaolist:[],news:[]}},onShow:function(){var n=o(i.default.mark((function n(){var t,e,a,r,o,u,c,s;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=[],n.next=3,this.$api.page("config",{page:1,limit:5});case 3:for(e=n.sent,a=!0,r=!1,o=void 0,n.prev=7,u=e.data.list[Symbol.iterator]();!(a=(c=u.next()).done);a=!0)s=c.value,s.name.indexOf("picture")>=0&&s.value&&""!=s.value&&null!=s.value&&t.push({img:s.value});n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](7),r=!0,o=n.t0;case 15:n.prev=15,n.prev=16,a||null==u.return||u.return();case 18:if(n.prev=18,!r){n.next=21;break}throw o;case 21:return n.finish(18);case 22:return n.finish(15);case 23:return t&&(this.swiperList=t),n.next=26,this.$api.recommend("wenzhangzhanshi",1,6);case 26:return e=n.sent,this.wenzhangzhanshilist=e.data.list,n.next=30,this.$api.list("tongzhigonggao",{page:1,limit:6});case 30:e=n.sent,this.hometongzhigonggaolist=e.data.list;case 32:case"end":return n.stop()}}),n,this,[[7,11,15,23],[16,,18,22]])})));function t(){return n.apply(this,arguments)}return t}(),methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=c}).call(this,e("543d")["default"])},9850:function(n,t,e){},ba00:function(n,t,e){"use strict";e.r(t);var i=e("80f1"),a=e("8399");for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);e("6f0f");var o,u=e("f0c5"),c=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);t["default"]=c.exports}},[["07c0","common/runtime","common/vendor"]]]);