import{a as _}from"./chunk-6NTMQUAJ.js";import{a as b}from"./chunk-APGKXN3F.js";import{c as v}from"./chunk-PHCUTV4M.js";import"./chunk-7C77LBCZ.js";import"./chunk-LK52GLIE.js";import{a as C}from"./chunk-GHKFJTCN.js";import{a as E}from"./chunk-IZF35GKA.js";import{e as w,f as L,l as k}from"./chunk-KS53OQGV.js";import{a as g}from"./chunk-EB5RRWIA.js";import{a as F}from"./chunk-RWIKH4KN.js";import"./chunk-3JO3IXGW.js";import"./chunk-OOE2LCNP.js";import{o as R}from"./chunk-ESBNO4XM.js";import"./chunk-3A7OIH4J.js";import"./chunk-RMS5474O.js";import{f as a,i as G,k as x,m as P}from"./chunk-2SHNUN5D.js";import"./chunk-IFCRPPYQ.js";import"./chunk-FDQ4JKC5.js";import"./chunk-NAV5L5PJ.js";import"./chunk-EK4W5QYS.js";import"./chunk-PJQZD5QI.js";import"./chunk-IEUNGS56.js";import"./chunk-BYQI7UDX.js";import"./chunk-7WFRJSY3.js";import"./chunk-PSQRUING.js";import"./chunk-3JLZ7SFH.js";import"./chunk-FUBITVJ7.js";import"./chunk-VOH7XGOR.js";import"./chunk-Y6HWUWZ3.js";import"./chunk-AQ74ANSJ.js";import"./chunk-5UCI4TUX.js";import"./chunk-SAOUSUZE.js";import"./chunk-PPFMRTTD.js";import"./chunk-IWJQ3PU6.js";import"./chunk-TTN7UOJS.js";import"./chunk-5QLB7ZJ7.js";import"./chunk-N566L3JG.js";import"./chunk-7S6PD5JC.js";import"./chunk-ZWI7LLTZ.js";import"./chunk-6NCXSKJD.js";import"./chunk-ATXTHXJA.js";import"./chunk-VFINLX57.js";import"./chunk-LM5MGO7W.js";import"./chunk-4HUAEW4D.js";import"./chunk-XWRPBDYS.js";import"./chunk-TCCAOREC.js";import"./chunk-BCREO4Q5.js";import{a as c,v as S}from"./chunk-SO6OJFOM.js";import"./chunk-DG5QI6E2.js";import"./chunk-TMZNSBQB.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import{v as h}from"./chunk-OFVMJORF.js";import"./chunk-2FYXACXP.js";import"./chunk-XGVKSCMM.js";import"./chunk-FX2VBPAM.js";import"./chunk-K4GPNFIS.js";import"./chunk-RP7XSKHE.js";import"./chunk-VV7MGXTC.js";import"./chunk-IXNVQC76.js";import"./chunk-LYPZUCFI.js";import"./chunk-QYC4ILGT.js";import"./chunk-HFQFGALU.js";import"./chunk-5TSEU5EE.js";import"./chunk-VC35VCVT.js";import"./chunk-MT7BXRRQ.js";import"./chunk-NNKLK2DS.js";import"./chunk-VU5W7W6Y.js";import{I as d,aa as f}from"./chunk-BRGZVJPZ.js";import{I as o}from"./chunk-Z5NXR7SL.js";import{S as u}from"./chunk-7JLWSSXP.js";import{a as r}from"./chunk-W3WDPWBE.js";import{k as y}from"./chunk-JKP4I6UL.js";import"./chunk-TZHKPIVH.js";import"./chunk-JPDAKIWT.js";import"./chunk-W6LY37E4.js";import{k as m}from"./chunk-BRWS572J.js";import"./chunk-AKNRR36C.js";import{a as p,g as n}from"./chunk-JEGVIFEP.js";var j=["atom","xml"],M={base:a,key:"type",typeMap:{"simple-line":G},errorContext:"symbol"},O={base:a,key:"type",typeMap:{"picture-marker":R,"simple-marker":P},errorContext:"symbol"},T={base:a,key:"type",typeMap:{"simple-fill":x},errorContext:"symbol"},t=class extends v(b(E(_(C(g(F)))))){constructor(...e){super(...e),this.description=null,this.fullExtent=null,this.legendEnabled=!0,this.lineSymbol=null,this.pointSymbol=null,this.polygonSymbol=null,this.operationalLayerType="GeoRSS",this.url=null,this.type="geo-rss"}normalizeCtorArgs(e,i){return typeof e=="string"?p({url:e},i):e}readFeatureCollections(e,i){return i.featureCollection.layers.forEach(s=>{let l=s.layerDefinition.drawingInfo.renderer.symbol;l&&l.type==="esriSFS"&&l.outline?.style.includes("esriSFS")&&(l.outline.style="esriSLSSolid")}),i.featureCollection.layers}get hasPoints(){return this._hasGeometry("esriGeometryPoint")}get hasPolylines(){return this._hasGeometry("esriGeometryPolyline")}get hasPolygons(){return this._hasGeometry("esriGeometryPolygon")}get title(){let e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?d(this.url,j)||"GeoRSS":e}set title(e){this._set("title",e)}load(e){let i=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service","Feature Service","Feature Collection","Scene Service"]},e).catch(y).then(()=>this._fetchService(i)).then(s=>{this.read(s,{origin:"service"})})),Promise.resolve(this)}hasDataChanged(){return n(this,null,function*(){let e=yield this._fetchService();return this.read(e,{origin:"service",ignoreDefaults:!0}),!0})}_fetchService(e){return n(this,null,function*(){let i=this.spatialReference,{data:s}=yield f(m.geoRSSServiceUrl,{query:{url:this.url,refresh:!!this.loaded||void 0,outSR:h(i)?void 0:i.wkid??JSON.stringify(i)},signal:e});return s})}_hasGeometry(e){return this.featureCollections?.some(i=>i.featureSet?.geometryType===e&&i.featureSet.features?.length>0)??!1}};r([o()],t.prototype,"description",void 0),r([o()],t.prototype,"featureCollections",void 0),r([c("service","featureCollections",["featureCollection.layers"])],t.prototype,"readFeatureCollections",null),r([o({type:S,json:{name:"lookAtExtent"}})],t.prototype,"fullExtent",void 0),r([o(k)],t.prototype,"id",void 0),r([o(L)],t.prototype,"legendEnabled",void 0),r([o({types:M,json:{write:!0}})],t.prototype,"lineSymbol",void 0),r([o({type:["show","hide"]})],t.prototype,"listMode",void 0),r([o({types:O,json:{write:!0}})],t.prototype,"pointSymbol",void 0),r([o({types:T,json:{write:!0}})],t.prototype,"polygonSymbol",void 0),r([o({type:["GeoRSS"]})],t.prototype,"operationalLayerType",void 0),r([o(w)],t.prototype,"url",void 0),r([o({json:{origins:{service:{read:{source:"name",reader:e=>e||void 0}}}}})],t.prototype,"title",null),r([o({readOnly:!0,json:{read:!1},value:"geo-rss"})],t.prototype,"type",void 0),t=r([u("esri.layers.GeoRSSLayer")],t);var pe=t;export{pe as default};
