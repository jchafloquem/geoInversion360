import{a as u}from"./chunk-6NTMQUAJ.js";import{a as d}from"./chunk-EB5RRWIA.js";import{a as y}from"./chunk-RWIKH4KN.js";import"./chunk-3JO3IXGW.js";import"./chunk-OOE2LCNP.js";import"./chunk-EK4W5QYS.js";import"./chunk-PSQRUING.js";import"./chunk-3JLZ7SFH.js";import"./chunk-5UCI4TUX.js";import"./chunk-PPFMRTTD.js";import"./chunk-IWJQ3PU6.js";import"./chunk-N566L3JG.js";import"./chunk-7S6PD5JC.js";import"./chunk-ZWI7LLTZ.js";import"./chunk-6NCXSKJD.js";import"./chunk-ATXTHXJA.js";import"./chunk-VFINLX57.js";import"./chunk-LM5MGO7W.js";import"./chunk-4HUAEW4D.js";import"./chunk-XWRPBDYS.js";import"./chunk-TCCAOREC.js";import"./chunk-BCREO4Q5.js";import"./chunk-SO6OJFOM.js";import"./chunk-DG5QI6E2.js";import"./chunk-TMZNSBQB.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import"./chunk-OFVMJORF.js";import"./chunk-K4GPNFIS.js";import"./chunk-VV7MGXTC.js";import"./chunk-IXNVQC76.js";import"./chunk-LYPZUCFI.js";import"./chunk-QYC4ILGT.js";import"./chunk-HFQFGALU.js";import"./chunk-5TSEU5EE.js";import"./chunk-VC35VCVT.js";import"./chunk-MT7BXRRQ.js";import"./chunk-NNKLK2DS.js";import"./chunk-BRGZVJPZ.js";import{I as s,r as l}from"./chunk-Z5NXR7SL.js";import{S as a}from"./chunk-7JLWSSXP.js";import{a as t}from"./chunk-W3WDPWBE.js";import"./chunk-JKP4I6UL.js";import"./chunk-TZHKPIVH.js";import"./chunk-JPDAKIWT.js";import"./chunk-W6LY37E4.js";import{s as n}from"./chunk-BRWS572J.js";import"./chunk-AKNRR36C.js";import"./chunk-JEGVIFEP.js";var o=class extends u(d(y)){constructor(e){super(e),this.resourceInfo=null,this.persistenceEnabled=!0,this.type="unsupported"}initialize(){this.addResolvingPromise(new Promise((e,i)=>{l(()=>{let r=this.resourceInfo&&(this.resourceInfo.layerType||this.resourceInfo.type),p="Unsupported layer type";r&&(p+=" "+r),i(new n("layer:unsupported-layer-type",p,{layerType:r}))})}))}read(e,i){let r={resourceInfo:e};e.id!=null&&(r.id=e.id),e.title!=null&&(r.title=e.title),super.read(r,i)}write(e,i){return Object.assign(e||{},this.resourceInfo,{id:this.id})}};t([s({readOnly:!0})],o.prototype,"resourceInfo",void 0),t([s({type:["show","hide"]})],o.prototype,"listMode",void 0),t([s({type:Boolean,readOnly:!1})],o.prototype,"persistenceEnabled",void 0),t([s({json:{read:!1},readOnly:!0,value:"unsupported"})],o.prototype,"type",void 0),o=t([a("esri.layers.UnsupportedLayer")],o);var M=o;export{M as default};
