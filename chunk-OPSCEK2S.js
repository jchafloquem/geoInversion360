import{b as T}from"./chunk-CWT573MQ.js";import{a as P}from"./chunk-APGKXN3F.js";import{c as w}from"./chunk-PHCUTV4M.js";import"./chunk-7C77LBCZ.js";import"./chunk-LK52GLIE.js";import{a as k}from"./chunk-GHKFJTCN.js";import{a as _}from"./chunk-IZF35GKA.js";import"./chunk-KS53OQGV.js";import{a as U}from"./chunk-EB5RRWIA.js";import{a as I}from"./chunk-RWIKH4KN.js";import"./chunk-OOE2LCNP.js";import"./chunk-RMS5474O.js";import"./chunk-FDQ4JKC5.js";import"./chunk-NAV5L5PJ.js";import{a,b as y}from"./chunk-V34KIKJR.js";import{a as O}from"./chunk-V2JYXY4D.js";import"./chunk-EK4W5QYS.js";import"./chunk-PJQZD5QI.js";import"./chunk-7WFRJSY3.js";import"./chunk-PSQRUING.js";import"./chunk-VOH7XGOR.js";import"./chunk-Y6HWUWZ3.js";import"./chunk-AQ74ANSJ.js";import"./chunk-5UCI4TUX.js";import"./chunk-SAOUSUZE.js";import"./chunk-PPFMRTTD.js";import"./chunk-IWJQ3PU6.js";import"./chunk-5QLB7ZJ7.js";import"./chunk-ZWI7LLTZ.js";import"./chunk-6NCXSKJD.js";import"./chunk-4HUAEW4D.js";import"./chunk-XWRPBDYS.js";import{a as L}from"./chunk-TCCAOREC.js";import"./chunk-BCREO4Q5.js";import{l as j,v as R}from"./chunk-SO6OJFOM.js";import{b as g}from"./chunk-DG5QI6E2.js";import"./chunk-TMZNSBQB.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import"./chunk-OFVMJORF.js";import"./chunk-XGVKSCMM.js";import"./chunk-FX2VBPAM.js";import"./chunk-K4GPNFIS.js";import"./chunk-RP7XSKHE.js";import"./chunk-VV7MGXTC.js";import"./chunk-IXNVQC76.js";import"./chunk-LYPZUCFI.js";import"./chunk-QYC4ILGT.js";import"./chunk-HFQFGALU.js";import"./chunk-5TSEU5EE.js";import"./chunk-VC35VCVT.js";import{a as B}from"./chunk-MT7BXRRQ.js";import"./chunk-NNKLK2DS.js";import"./chunk-VU5W7W6Y.js";import{aa as d}from"./chunk-BRGZVJPZ.js";import{I as o}from"./chunk-Z5NXR7SL.js";import{S as v}from"./chunk-7JLWSSXP.js";import{a as r}from"./chunk-W3WDPWBE.js";import"./chunk-JKP4I6UL.js";import"./chunk-TZHKPIVH.js";import"./chunk-JPDAKIWT.js";import"./chunk-W6LY37E4.js";import{s as p}from"./chunk-BRWS572J.js";import"./chunk-AKNRR36C.js";import{a as M,g as f}from"./chunk-JEGVIFEP.js";var S,c=new O("0/0/0",0,0,0,void 0),u=S=class extends w(k(P(I))){constructor(){super(...arguments),this.tileInfo=y.create({spatialReference:g.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new R(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,g.WebMercator),this.spatialReference=g.WebMercator}getTileBounds(e,t,i,n){let l=n||L();return c.level=e,c.row=t,c.col=i,c.extent=l,this.tileInfo.updateTileInfo(c),c.extent=void 0,l}fetchTile(e,t,i,n={}){let{signal:l}=n,m=this.getTileUrl(e,t,i),b={responseType:"image",signal:l,query:M({},this.refreshParameters)};return d(m??"",b).then(h=>h.data)}fetchImageBitmapTile(l,m,b){return f(this,arguments,function*(e,t,i,n={}){let{signal:h}=n;if(this.fetchTile!==S.prototype.fetchTile){let W=yield this.fetchTile(e,t,i,n);return T(W,e,t,i,h)}let K=this.getTileUrl(e,t,i)??"",z={responseType:"blob",signal:h,query:M({},this.refreshParameters)},{data:D}=yield d(K,z);return T(D,e,t,i,h)})}getTileUrl(){throw new p("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};r([o({type:y})],u.prototype,"tileInfo",void 0),r([o({type:["show","hide"]})],u.prototype,"listMode",void 0),r([o({readOnly:!0,value:"base-tile"})],u.prototype,"type",void 0),r([o({nonNullable:!0})],u.prototype,"fullExtent",void 0),r([o()],u.prototype,"spatialReference",void 0),u=S=r([v("esri.layers.BaseTileLayer")],u);var A=u;var x=new B({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),q="https://dev.virtualearth.net",s=class extends w(_(U(A))){constructor(e){super(e),this.type="bing-maps",this.tileInfo=new y({size:[256,256],dpi:96,origin:new j({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:g.WebMercator}),spatialReference:g.WebMercator,lods:[new a({level:1,resolution:78271.5169639999,scale:295828763795777e-6}),new a({level:2,resolution:39135.7584820001,scale:147914381897889e-6}),new a({level:3,resolution:19567.8792409999,scale:73957190948944e-6}),new a({level:4,resolution:9783.93962049996,scale:36978595474472e-6}),new a({level:5,resolution:4891.96981024998,scale:18489297737236e-6}),new a({level:6,resolution:2445.98490512499,scale:9244648868618e-6}),new a({level:7,resolution:1222.99245256249,scale:4622324434309e-6}),new a({level:8,resolution:611.49622628138,scale:2311162217155e-6}),new a({level:9,resolution:305.748113140558,scale:1155581108577e-6}),new a({level:10,resolution:152.874056570411,scale:577790.554289}),new a({level:11,resolution:76.4370282850732,scale:288895.277144}),new a({level:12,resolution:38.2185141425366,scale:144447.638572}),new a({level:13,resolution:19.1092570712683,scale:72223.819286}),new a({level:14,resolution:9.55462853563415,scale:36111.909643}),new a({level:15,resolution:4.77731426794937,scale:18055.954822}),new a({level:16,resolution:2.38865713397468,scale:9027.977411}),new a({level:17,resolution:1.19432856685505,scale:4513.988705}),new a({level:18,resolution:.597164283559817,scale:2256.994353}),new a({level:19,resolution:.298582141647617,scale:1128.497176}),new a({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(e){this._set("bingMetadata",e)}get copyright(){return this.bingMetadata!=null?this.bingMetadata.copyright:null}get operationalLayerType(){return x.toJSON(this.style)}get bingLogo(){return this.bingMetadata!=null?this.bingMetadata.brandLogoUri:null}load(e){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then(()=>this._getMetadata())):this.addResolvingPromise(Promise.reject(new p("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(e,t,i){if(!this.loaded||this.bingMetadata==null)return null;let n=this.bingMetadata.resourceSets[0].resources[0],l=n.imageUrlSubdomains[t%n.imageUrlSubdomains.length],m=this._getQuadKey(e,t,i);return n.imageUrl.replace("{subdomain}",l).replace("{quadkey}",m)}fetchAttributionData(){return f(this,null,function*(){return this.load().then(()=>this.bingMetadata==null?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(e=>({attribution:e.attribution,coverageAreas:e.coverageAreas.map(t=>({zoomMin:t.zoomMin,zoomMax:t.zoomMax,score:1,bbox:[t.bbox[0],t.bbox[1],t.bbox[2],t.bbox[3]]}))}))})})}_getMetadata(){let e={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return d(`${q}/REST/v1/Imagery/Metadata/${e}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(t=>{let i=t.data;if(i.statusCode!==200)throw new p("bingmapslayer:getmetadata",i.statusDescription);if(this.bingMetadata=i,this.bingMetadata.resourceSets.length===0)throw new p("bingmapslayer:getmetadata","no bing resourcesets");if(this.bingMetadata.resourceSets[0].resources.length===0)throw new p("bingmapslayer:getmetadata","no bing resources")}).catch(t=>{throw new p("bingmapslayer:getmetadata",t.message)})}_getPortalBingKey(){return d(this.portalUrl??"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(e=>{if(!e.data.bingKey)throw new p("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey}).catch(e=>{throw new p("bingmapslayer:getportalbingkey",e.message)})}_getQuadKey(e,t,i){let n="";for(let l=e;l>0;l--){let m=0,b=1<<l-1;i&b&&(m+=1),t&b&&(m+=2),n+=m.toString()}return n}};r([o({json:{read:!1,write:!1},value:null})],s.prototype,"bingMetadata",null),r([o({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],s.prototype,"type",void 0),r([o({type:y})],s.prototype,"tileInfo",void 0),r([o({type:String,readOnly:!0,json:{read:!1,write:!1}})],s.prototype,"copyright",null),r([o({type:String,json:{write:!1,read:!1}})],s.prototype,"key",void 0),r([o({type:x.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:x.read}}})],s.prototype,"style",void 0),r([o({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],s.prototype,"operationalLayerType",null),r([o({type:String,json:{write:!1,read:!1}})],s.prototype,"culture",void 0),r([o({type:String,json:{write:!1,read:!1}})],s.prototype,"region",void 0),r([o({type:String,json:{write:!0,read:!0}})],s.prototype,"portalUrl",void 0),r([o({type:Boolean,json:{write:!1,read:!1}})],s.prototype,"hasAttributionData",void 0),r([o({type:String,readOnly:!0})],s.prototype,"bingLogo",null),s=r([v("esri.layers.BingMapsLayer")],s);var je=s;export{je as default};
