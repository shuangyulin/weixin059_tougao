(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"0b91":function(n,t,e){"use strict";e.r(t);var r=e("2f8c"),i=e.n(r);for(var a in r)"default"!==a&&function(n){e.d(t,n,(function(){return r[n]}))}(a);t["default"]=i.a},"1c8e":function(n,t,e){"use strict";e.r(t);var r=e("68be"),i=e("0b91");for(var a in i)"default"!==a&&function(n){e.d(t,n,(function(){return i[n]}))}(a);e("58c2");var o,u=e("f0c5"),c=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,null,null,!1,r["a"],o);t["default"]=c.exports},"2f8c":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(e("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function a(n,t){var e;if("undefined"===typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=o(n))||t&&n&&"number"===typeof n.length){e&&(n=e);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,c=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return u=n.done,n},e:function(n){c=!0,a=n},f:function(){try{u||null==e.return||e.return()}finally{if(c)throw a}}}}function o(n,t){if(n){if("string"===typeof n)return u(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?u(n,t):void 0}}function u(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function c(n,t,e,r,i,a,o){try{var u=n[a](o),c=u.value}catch(l){return void e(l)}u.done?t(c):Promise.resolve(c).then(r,i)}function l(n){return function(){var t=this,e=arguments;return new Promise((function(r,i){var a=n.apply(t,e);function o(n){c(a,r,i,o,u,"next",n)}function u(n){c(a,r,i,o,u,"throw",n)}o(void 0)}))}}e("f249");var s=function(){Promise.all([e.e("common/vendor"),e.e("components/uni-ui/lib/uni-icons/uni-icons")]).then(function(){return resolve(e("2bb0"))}.bind(null,e)).catch(e.oe)},f={components:{uniIcons:s},data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,swiperList:[],wenzhangzhanshilist:[],hometongzhigonggaolist:[],news:[]}},onShow:function(){var n=this;return l(r.default.mark((function t(){var e,i,o,u,c;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=[],t.next=3,n.$api.page("config",{page:1,limit:5});case 3:i=t.sent,o=a(i.data.list);try{for(o.s();!(u=o.n()).done;)c=u.value,c.name.indexOf("picture")>=0&&c.value&&""!=c.value&&null!=c.value&&e.push({img:c.value})}catch(r){o.e(r)}finally{o.f()}return e&&(n.swiperList=e),t.next=9,n.$api.recommend("wenzhangzhanshi",1,6);case 9:return i=t.sent,n.wenzhangzhanshilist=i.data.list,t.next=13,n.$api.list("tongzhigonggao",{page:1,limit:6});case 13:i=t.sent,n.hometongzhigonggaolist=i.data.list;case 15:case"end":return t.stop()}}),t)})))()},methods:{onSwiperTap:function(n){},onNewsDetailTap:function(n){this.$utils.jump("../news-detail/news-detail?id=".concat(n))},onDetailTap:function(n,t){this.$utils.jump("../".concat(n,"/detail?id=").concat(t))},onPageTap:function(t){n.navigateTo({url:"../".concat(t,"/list"),fail:function(){n.switchTab({url:"../".concat(t,"/list")})}})}}};t.default=f}).call(this,e("543d")["default"])},4930:function(n,t,e){"use strict";(function(n){e("56dd");r(e("66fd"));var t=r(e("1c8e"));function r(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"58c2":function(n,t,e){"use strict";var r=e("a290"),i=e.n(r);i.a},"68be":function(n,t,e){"use strict";var r;e.d(t,"b",(function(){return i})),e.d(t,"c",(function(){return a})),e.d(t,"a",(function(){return r}));var i=function(){var n=this,t=n.$createElement,e=(n._self._c,n.__map(n.wenzhangzhanshilist,(function(t,e){var r=n.__get_orig(t),i=t.fengmian?t.fengmian.split(","):null;return{$orig:r,g0:i}}))),r=null,i=n.__map(n.hometongzhigonggaolist,(function(t,e){var r=n.__get_orig(t),i=t.fengmian?t.fengmian.split(","):null;return{$orig:r,g2:i}})),a=null;n.$mp.data=Object.assign({},{$root:{l0:e,l1:r,l2:i,l3:a}})},a=[]},a290:function(n,t,e){}},[["4930","common/runtime","common/vendor"]]]);