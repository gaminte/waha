import{s as u}from"./CUlMFryE.js";import{s as d}from"./DPnCzJas.js";import{a3 as y,t as a,v as r,Y as t,aa as l,P as c,ab as p,O as s,y as v}from"./B2dNgubA.js";import"./DrH3nAaK.js";var f={root:function(o){var i=o.props;return["p-chip p-component",{"p-chip-image":i.image!=null}]},icon:"p-chip-icon",label:"p-chip-text",removeIcon:"p-chip-remove-icon"},b=y.extend({name:"chip",classes:f}),h={name:"BaseChip",extends:d,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},removable:{type:Boolean,default:!1},removeIcon:{type:String,default:void 0}},style:b,provide:function(){return{$parentInstance:this}}},k={name:"Chip",extends:h,inheritAttrs:!1,emits:["remove"],data:function(){return{visible:!0}},methods:{onKeydown:function(o){(o.key==="Enter"||o.key==="Backspace")&&this.close(o)},close:function(o){this.visible=!1,this.$emit("remove",o)}},components:{TimesCircleIcon:u}},g=["aria-label"],C=["src"];function w(e,o,i,I,m,n){return m.visible?(a(),r("div",l({key:0,class:e.cx("root"),"aria-label":e.label},e.ptmi("root")),[t(e.$slots,"default",{},function(){return[e.image?(a(),r("img",l({key:0,src:e.image},e.ptm("image")),null,16,C)):e.$slots.icon?(a(),c(p(e.$slots.icon),l({key:1,class:e.cx("icon")},e.ptm("icon")),null,16,["class"])):e.icon?(a(),r("span",l({key:2,class:[e.cx("icon"),e.icon]},e.ptm("icon")),null,16)):s("",!0),e.label?(a(),r("div",l({key:3,class:e.cx("label")},e.ptm("label")),v(e.label),17)):s("",!0)]}),e.removable?t(e.$slots,"removeicon",{key:0,onClick:n.close,onKeydown:n.onKeydown,removeCallback:n.close,keydownCallback:n.onKeydown},function(){return[(a(),c(p(e.removeIcon?"span":"TimesCircleIcon"),l({tabindex:"0",class:[e.cx("removeIcon"),e.removeIcon],onClick:n.close,onKeydown:n.onKeydown},e.ptm("removeIcon")),null,16,["class","onClick","onKeydown"]))]}):s("",!0)],16,g)):s("",!0)}k.render=w;export{k as default};
