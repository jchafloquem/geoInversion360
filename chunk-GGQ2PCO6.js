import{b as c}from"./chunk-RP7XSKHE.js";import{E as h,I as l}from"./chunk-Z5NXR7SL.js";import{S as p}from"./chunk-7JLWSSXP.js";import{a as r}from"./chunk-W3WDPWBE.js";var s=class extends c{constructor(t){super(t),this.getCollections=null}initialize(){this.addHandles(h(()=>this._refresh()))}destroy(){this.getCollections=null}_refresh(){let t=this.getCollections!=null?this.getCollections():null;if(t==null)return void this.removeAll();let e=0;for(let n of t)n!=null&&(e=this._processCollection(e,n));this.splice(e,this.length)}_createNewInstance(t){return new c(t)}_processCollection(t,e){if(!e)return t;let n=this.itemFilterFunction??(o=>!!o);for(let o of e)if(o){if(n(o)){let i=this.indexOf(o,t);i>=0?i!==t&&this.reorder(o,t):this.add(o,t),++t}if(this.getChildrenFunction){let i=this.getChildrenFunction(o);if(Array.isArray(i))for(let f of i)t=this._processCollection(t,f);else t=this._processCollection(t,i)}}return t}};r([l()],s.prototype,"getCollections",void 0),r([l()],s.prototype,"getChildrenFunction",void 0),r([l()],s.prototype,"itemFilterFunction",void 0),s=r([p("esri.core.CollectionFlattener")],s);var v=s;export{v as a};
