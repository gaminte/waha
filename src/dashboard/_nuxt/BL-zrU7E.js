import{l as L,u as A,a as J,_ as X}from"./Daj78bx2.js";import j from"./i8U0E51M.js";import Z from"./DYegjXM1.js";import W from"./Byr6sKjD.js";import ee from"./DGBMS6kh.js";import ne from"./Ba4Q5IHv.js";import{_ as oe,u as K,a as te}from"./CIRkOkCZ.js";import se from"./BTeIluME.js";import{c as N,t as r,v as $,Q as le,P as h,M as u,N as B,R as q,r as S,A as l,z as t,x as e,B as i,O as y,S as ie,T as re,U as ce,L as ae,V as ue,y as M,W as de}from"./B2dNgubA.js";import pe from"./C0OAlkKF.js";import ve from"./DLFgGfm1.js";import _e from"./DXVbZ-2I.js";import me from"./COj7VBUl.js";import fe from"./Dd8jkTTl.js";const he={__name:"ServerSessionSummary",props:{sessions:{required:!0}},setup(C){const b=C,n=N(()=>L.groupBy(b.sessions||[],"status"));return(w,g)=>{const a=oe;return r(!0),$(B,null,le(u(n),(d,p)=>(r(),h(a,{key:p+d.length,status:p,value:`${p}: ${d.length}`},null,8,["status","value"]))),128)}}},be={class:"mb-4"},ye=e("b",null,"browser's local storage",-1),ge=e("br",null,null,-1),ke={class:"field"},Se=e("label",{for:"name"},"Name",-1),$e={key:0,class:"p-invalid"},Ce={class:"field"},we=e("label",{for:"connection-url"},"API URL",-1),xe={key:0,class:"p-invalid"},Ve={key:1,class:"p-invalid"},Ie=e("b",null,"https://",-1),Me=e("b",null,"http://",-1),Ne=e("br",null,null,-1),Ue=e("a",{href:"https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content#developer_console",target:"_blank"}," Mixed Content ",-1),De=e("b",null,"http://",-1),Te=e("br",null,null,-1),Fe=e("br",null,null,-1),Be=e("a",{href:"https://waha.devlike.pro/docs/how-to/security/#https",target:"_blank"},"🔒 Security ->",-1),Pe={class:"field"},Re=e("label",{for:"connection-key"},"API Key (optional)",-1),qe={__name:"ServerDialog",props:{visible:{},visibleModifiers:{},server:{},serverModifiers:{}},emits:["update:visible","update:server"],setup(C){const b=q(C,"visible"),n=q(C,"server"),w=A(),g=K(),a=S(!1),d=N(()=>{var s;const v=(s=n.value.connection)==null?void 0:s.url;return v?v.startsWith("http://")||v.startsWith("https://"):!1});async function p(){a.value=!0,!(!n.value.name||!d.value)&&(n.value.id?await g(w.editServer(n.value.id,n.value),"Server updated","Failed to update server"):await g(w.addServer(n.value),"Connected to server","Failed to connect to server"),f(),n.value={connection:{}})}function f(){a.value=!1,b.value=!1}const V=N(()=>{var s;const v=(s=n.value.connection)==null?void 0:s.url;return v?v.startsWith("http://"):!1}),U=N(()=>location.protocol==="https:");return(v,s)=>{const k=_e,I=W,D=me,_=j,c=fe;return r(),h(c,{visible:b.value,"onUpdate:visible":s[3]||(s[3]=m=>b.value=m),header:"Server",modal:!0,class:"p-fluid"},{footer:l(()=>[t(_,{label:"Cancel",icon:"pi pi-times",text:"",onClick:f,severity:"secondary"}),t(_,{label:n.value.id?"Save":"Connect",icon:{"pi pi-check":!!n.value.id,"pi pi-link":!n.value.id},text:"",onClick:p},null,8,["label","icon"])]),default:l(()=>[e("div",be,[t(k,{severity:"info"},{default:l(()=>[i(" Servers data is saved in your "),ye,i(". "),ge,i(" It's safe to put server API and key here. ")]),_:1})]),e("div",ke,[Se,t(I,{id:"name",modelValue:n.value.name,"onUpdate:modelValue":s[0]||(s[0]=m=>n.value.name=m),modelModifiers:{trim:!0},required:"true",autofocus:"",invalid:a.value&&!n.value.name},null,8,["modelValue","invalid"]),a.value&&!n.value.name?(r(),$("small",$e,"Name is required.")):y("",!0)]),e("div",Ce,[we,t(I,{id:"connection-url",modelValue:n.value.connection.url,"onUpdate:modelValue":s[1]||(s[1]=m=>n.value.connection.url=m),modelModifiers:{trim:!0},required:"true",invalid:a.value&&!u(d)},null,8,["modelValue","invalid"]),a.value&&!n.value.connection.url?(r(),$("small",xe,"URL is required.")):y("",!0),a.value&&!u(d)?(r(),$("small",Ve,"URL is not correct.")):y("",!0),u(U)&&u(V)?(r(),h(k,{key:2,severity:"error",class:"mt-2"},{default:l(()=>[i(" You're using "),Ie,i(" connection but server is using "),Me,i(" connection. "),Ne,i(" It's not possible to use it due to "),Ue]),_:1})):y("",!0),u(V)?(r(),h(k,{key:3,severity:"warn",class:"mt-2"},{default:l(()=>[i(" You're using "),De,i(" connection which is not secure. "),Te,i(" Kindly configure HTTPS Connection. "),Fe,i(" Read more about "),Be]),_:1})):y("",!0)]),e("div",Pe,[Re,t(D,{id:"connection-key",modelValue:n.value.connection.key,"onUpdate:modelValue":s[2]||(s[2]=m=>n.value.connection.key=m),modelModifiers:{trim:!0},feedback:!1,toggleMask:""},null,8,["modelValue"])])]),_:1},8,["visible"])}}},Le={class:"flex justify-content-between"},Ae={class:"flex align-items-center gap-1"},je=e("i",{class:"pi pi-server"},null,-1),We=e("span",{class:"mr-1"}," Servers ",-1),Ke=["disabled"],ze=e("i",{class:"pi pi-refresh"},null,-1),Oe=[ze],Ye={class:"flex justify-content-between flex-column sm:flex-row gap-2 sm:gap-0"},He=["href"],Ee=e("code",null," (",-1),Ge=e("code",null,")",-1),Qe={class:"flex gap-1"},Je={class:"flex flex-row gap-2 justify-content-end"},vn={__name:"ServerTable",setup(C){const b=ie();re();const n=A(),w=K(),{servers:g,refreshing:a}=ce(n),d=S({connection:{}}),p=S(!1);S(null);const f=S({}),V=S(null);ae(()=>{U()});const U=()=>{f.value={global:{value:null,matchMode:ue.CONTAINS}}};function v(){d.value={connection:{}},p.value=!0}function s(_){k(_.data)}function k(_){d.value=L.cloneDeep(_),p.value=!0}function I(_,c){b.require({target:_.target,message:`Disconnect '${c.name}?'`,icon:"pi pi-exclamation-triangle",rejectClass:"p-button-secondary p-button-outlined p-button-sm",acceptClass:"p-button-warning p-button-sm",rejectLabel:"No",acceptLabel:"Yes, Disconnect",accept:()=>w(n.deleteServer(c.id),"Disconnected","Failed to disconnect server"),reject:()=>{}})}function D(){J("store",async()=>await n.refresh())}return(_,c)=>{const m=X,T=j,z=Z,O=W,Y=ee,x=ne,F=te,P=se,H=he,E=pe,G=ve,Q=qe;return r(),$(B,null,[e("div",Le,[e("div",null,[e("h5",Ae,[je,We,t(m,{refreshing:u(a)},null,8,["refreshing"])])]),e("div",null,[e("button",{onClick:D,class:"p-link layout-topbar-button",disabled:u(a)},Oe,8,Ke)])]),t(G,{value:u(g).length>0?u(g):[],paginator:!0,rows:10,dataKey:"id",rowHover:!0,filters:f.value,"onUpdate:filters":c[1]||(c[1]=o=>f.value=o),filterDisplay:"menu",loading:V.value,globalFilterFields:["name","id","connection.url"],showGridlines:"",onRowClick:s,class:"p-datatable--clickable",style:{"white-space":"nowrap"}},{header:l(()=>[e("div",Ye,[t(T,{label:"Connect",icon:"pi pi-link",severity:"success",onClick:v}),t(Y,{iconPosition:"left"},{default:l(()=>[t(z,{class:"pi pi-search"}),t(O,{modelValue:f.value.global.value,"onUpdate:modelValue":c[0]||(c[0]=o=>f.value.global.value=o),placeholder:"Keyword Search",style:{width:"100%"}},null,8,["modelValue"])]),_:1})])]),empty:l(()=>[i(" No servers found")]),loading:l(()=>[i(" Loading servers...")]),default:l(()=>[t(x,{field:"name",header:"Name"},{body:l(({data:o})=>[i(M(o.name),1)]),_:1}),t(x,{header:"API"},{body:l(({data:o})=>[e("div",null,[t(F,{connected:o.connected},null,8,["connected"]),e("a",{class:"ml-1",href:o.connection.url,target:"_blank"},M(o.connection.url),9,He)])]),_:1}),t(x,{header:"Info"},{body:l(({data:o})=>[o.connected===void 0?(r(),h(P,{key:0,width:"9rem"})):o.connected===!1?(r(),h(F,{key:1,connected:o.connected},null,8,["connected"])):(r(),$(B,{key:2},[e("code",null,M(o.version.engine),1),Ee,e("code",{class:de({"text-orange-400":o.version.version!==u(n).latestVersion})},M(o.version.version),3),Ge],64))]),_:1}),t(x,{header:"Sessions"},{body:l(({data:o})=>[e("div",Qe,[o.connected===void 0?(r(),h(P,{key:0,width:"10rem"})):y("",!0),o.connected===!1?(r(),h(F,{key:1,connected:o.connected},null,8,["connected"])):y("",!0),t(H,{sessions:u(n).sessions.get(o.id)},null,8,["sessions"])])]),_:1}),t(x,null,{body:l(({data:o})=>[e("div",Je,[t(T,{icon:"pi pi-pencil",severity:"success",rounded:"",outlined:"",onClick:R=>k(o)},null,8,["onClick"]),t(E),t(T,{icon:"pi pi-times",severity:"warning",rounded:"",outlined:"",onClick:R=>I(R,o)},null,8,["onClick"])])]),_:1})]),_:1},8,["value","filters","loading","globalFilterFields"]),t(Q,{visible:p.value,"onUpdate:visible":c[2]||(c[2]=o=>p.value=o),server:d.value,"onUpdate:server":c[3]||(c[3]=o=>d.value=o)},null,8,["visible","server"])],64)}}};export{vn as _};
