import{b as _}from"./chunk-LYPZUCFI.js";import{I as r}from"./chunk-Z5NXR7SL.js";import{M as m,S as h}from"./chunk-7JLWSSXP.js";import{a as t}from"./chunk-W3WDPWBE.js";import{n as p}from"./chunk-JKP4I6UL.js";import{e as c}from"./chunk-TZHKPIVH.js";import{s as d}from"./chunk-BRWS572J.js";var w="not-loaded",S="loading",E="failed",f="loaded",y=l=>{let o=class extends l{constructor(...e){super(...e),this._loadController=null,this.loadError=null,this.loadStatus="not-loaded",this._set("loadWarnings",[]),this.addResolvingPromise(new Promise(a=>{let b=this.load.bind(this);this.load=g=>{let C=new Promise((n,i)=>{let u=p(g,i);this.destroyed&&i(new d("load:instance-destroyed",`Instance of '${this.declaredClass||this.constructor.name}' is already destroyed`,{instance:this})),this.when(n,i).finally(()=>{u&&u.remove()})});if(this.loadStatus===w){this._set("loadStatus",S);let n=this._loadController=new AbortController;b({signal:n.signal})}return a(),C}})),this.when(()=>{this._set("loadStatus",f),this._loadController=null},a=>{this._set("loadStatus",E),this._set("loadError",a),this._loadController=null})}destroy(){this._loadController&&(this._loadController=c(this._loadController),this._promiseProps.abort()),this._set("loadError",null),this._set("loadWarnings",[])}get loaded(){return this.loadStatus===f}get loadWarnings(){return this._get("loadWarnings")}load(){return null}cancelLoad(){return this.isFulfilled()||(this._set("loadError",new d("load:cancelled","Cancelled")),this._loadController?.abort(),this._promiseProps.abort()),this}};return t([r({readOnly:!0})],o.prototype,"loaded",null),t([r({readOnly:!0})],o.prototype,"loadError",void 0),t([r({clonable:!1})],o.prototype,"loadStatus",void 0),t([r({type:[m],readOnly:!0})],o.prototype,"loadWarnings",null),o=t([h("esri.core.Loadable")],o),o},s=class extends y(_){};s=t([h("esri.core.Loadable")],s),function(l){function o(e){return!(!e||!e.load)}l.LoadableMixin=y,l.isLoadable=o}(s||(s={}));var F=s;export{F as a};
