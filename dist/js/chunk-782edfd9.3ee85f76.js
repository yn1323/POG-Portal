(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-782edfd9"],{"64ef":function(t,e,a){},7413:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-content",[a("v-data-table",{staticClass:"elevation-2",attrs:{headers:t.headers,"background-color":"primary",items:t.items,"items-per-page":1e3,loading:t.loading,"hide-default-footer":""}})],1)},n=[],r={computed:{loading:{get(){return!!this.$store.state.cnt}},headers:{get(){return this.$store.state.table.Recent.header||[]}},items:{get(){return this.$store.state.table.Recent.tbody||[]}}},mounted(){this.fetch(),this.watch=this.$store.watch(t=>t.url,()=>{this.$store.commit("delTable","Recent"),this.fetch()})},destroyed(){this.watch()},methods:{fetch(){this.$store.dispatch("pogRace",this.$store.state.url)}}},o=r,i=(a("f895"),a("2877")),c=a("6544"),h=a.n(c),d=a("a75b"),l=a("8fea"),u=Object(i["a"])(o,s,n,!1,null,null,null);e["default"]=u.exports;h()(u,{VContent:d["a"],VDataTable:l["a"]})},f895:function(t,e,a){"use strict";var s=a("64ef"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-782edfd9.3ee85f76.js.map