(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aa22f"],{1071:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-content",[t._l(t.urls,(function(e,r){return n("v-col",{key:r,attrs:{wrap:"",justify:"justify-space-around"}},[n("v-row",[n("v-text-field",{attrs:{label:t.nameText,maxLength:t.maxLenName,color:"primary"},on:{input:t.save},model:{value:t.urls[r].name,callback:function(e){t.$set(t.urls[r],"name",e)},expression:"urls[index].name"}})],1),n("v-row",[n("v-text-field",{attrs:{label:t.urlText,maxLength:t.maxLenUrl,color:"primary",solo:""},on:{input:t.save},model:{value:t.urls[r].url,callback:function(e){t.$set(t.urls[r],"url",e)},expression:"urls[index].url"}})],1),n("v-divider")],1)})),n("v-col",[n("v-row",{attrs:{justify:"end"}},[n("v-btn",{staticClass:"mx-2",attrs:{fab:"",dark:"",color:"primary"},on:{click:function(e){return t.addEmptyTextbox(t.urls)}}},[n("v-icon",{attrs:{dark:""}},[t._v("fas fa-plus")])],1)],1)],1)],2)},l=[],a={data(){return{nameText:"ページ名",urlText:"POG-PORTAL URL",maxLenName:20,maxLenUrl:255}},computed:{urls:{get(){let t=this.$store.getters.urls;return t.length||this.addEmptyTextbox(t),t},set(t){this.$store.commit("urls",t)}}},methods:{save(){let t=this.filterUrl(this.urls);this.urls=t,localStorage.setItem(this.$store.state.lsKey.url,JSON.stringify(t)),1===t.length&&this.$store.commit("setUrlFromName",t[0].name)},addEmptyTextbox(t){t.push({name:"",url:""})},filterUrl(t){return t.filter(t=>t.name||t.url)}}},s=a,o=n("2877"),u=n("6544"),i=n.n(u),c=n("8336"),d=(n("4b85"),n("2b0e")),f=n("d9f7"),p=n("80d2");const g=["sm","md","lg","xl"],m=(()=>{return g.reduce((t,e)=>{return t[e]={type:[Boolean,String,Number],default:!1},t},{})})(),y=(()=>{return g.reduce((t,e)=>{return t["offset"+Object(p["z"])(e)]={type:[String,Number],default:null},t},{})})(),b=(()=>{return g.reduce((t,e)=>{return t["order"+Object(p["z"])(e)]={type:[String,Number],default:null},t},{})})(),v={col:Object.keys(m),offset:Object.keys(y),order:Object.keys(b)};function h(t,e,n){let r=t;if(null!=n&&!1!==n){if(e){const n=e.replace(t,"");r+=`-${n}`}return"col"!==t||""!==n&&!0!==n?(r+=`-${n}`,r.toLowerCase()):r.toLowerCase()}}const x=new Map;var j=d["a"].extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...m,offset:{type:[String,Number],default:null},...y,order:{type:[String,Number],default:null},...b,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},justifySelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:n,children:r,parent:l}){let a="";for(const o in e)a+=String(e[o]);let s=x.get(a);if(!s){let t;for(t in s=[],v)v[t].forEach(n=>{const r=e[n],l=h(t,n,r);l&&s.push(l)});const n=s.some(t=>t.startsWith("col-"));s.push({col:!n||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf,[`justify-self-${e.justifySelf}`]:e.justifySelf}),x.set(a,s)}return t(e.tag,Object(f["a"])(n,{class:s}),r)}}),S=n("a75b"),w=n("ce7e"),$=n("132d");const k=["sm","md","lg","xl"],O=["start","end","center"];function C(t,e){return k.reduce((n,r)=>{return n[t+Object(p["z"])(r)]=e(),n},{})}const L=t=>[...O,"baseline","stretch"].includes(t),N=C("align",()=>({type:String,default:null,validator:L})),T=t=>[...O,"space-between","space-around"].includes(t),V=C("justify",()=>({type:String,default:null,validator:T})),E=t=>[...O,"space-between","space-around","stretch"].includes(t),U=C("alignContent",()=>({type:String,default:null,validator:E})),B={align:Object.keys(N),justify:Object.keys(V),alignContent:Object.keys(U)},_={align:"align",justify:"justify",alignContent:"align-content"};function z(t,e,n){let r=_[t];if(null!=n){if(e){const n=e.replace(t,"");r+=`-${n}`}return r+=`-${n}`,r.toLowerCase()}}const G=new Map;var J=d["a"].extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:L},...N,justify:{type:String,default:null,validator:T},...V,alignContent:{type:String,default:null,validator:E},...U},render(t,{props:e,data:n,children:r}){let l="";for(const s in e)l+=String(e[s]);let a=G.get(l);if(!a){let t;for(t in a=[],B)B[t].forEach(n=>{const r=e[n],l=z(t,n,r);l&&a.push(l)});a.push({"no-gutters":e.noGutters,"row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),G.set(l,a)}return t(e.tag,Object(f["a"])(n,{staticClass:"row",class:a}),r)}}),R=n("8654"),F=Object(o["a"])(s,r,l,!1,null,null,null);e["default"]=F.exports;i()(F,{VBtn:c["a"],VCol:j,VContent:S["a"],VDivider:w["a"],VIcon:$["a"],VRow:J,VTextField:R["a"]})}}]);
//# sourceMappingURL=chunk-2d0aa22f.61cc0f8d.js.map