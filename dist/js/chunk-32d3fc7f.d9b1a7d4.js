(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-32d3fc7f"],{"50ad":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.headers,"background-color":"primary",items:t.items,"items-per-page":1e3,loading:!t.items.length,"hide-default-footer":"","mobile-breakpoint":200}})],1)},r=[],o={computed:{headers:{get(){return this.$store.state.table.Horse.header||[]}},items:{get(){let t=[];try{t=this.$store.state.table.Horse.tbody.map((t,e)=>{return t.order=e+1,t})}catch{return t}return t}}},mounted(){this.fetch(),this.watch=this.$store.watch(t=>t.url,()=>{this.$store.commit("delTable","Horse"),this.fetch()})},destroyed(){this.watch()},methods:{fetch(){this.$store.dispatch("pogHorse",this.$store.state.url)}}},n=o,i=(a("d33a"),a("2877")),c=a("6544"),h=a.n(c),d=a("a75b"),l=a("8fea"),u=Object(i["a"])(n,s,r,!1,null,null,null);e["default"]=u.exports;h()(u,{VContent:d["a"],VDataTable:l["a"]})},"910a":function(t,e,a){},d33a:function(t,e,a){"use strict";var s=a("910a"),r=a.n(s);r.a}}]);
//# sourceMappingURL=chunk-32d3fc7f.d9b1a7d4.js.map