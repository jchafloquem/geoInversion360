import{b as h}from"./chunk-AP5GTQWL.js";import{c as n,d as u}from"./chunk-HIV7T35C.js";import{a as m}from"./chunk-VC35VCVT.js";import{I as s,T as p}from"./chunk-Z5NXR7SL.js";import{S as c,y as i}from"./chunk-7JLWSSXP.js";import{a as e}from"./chunk-W3WDPWBE.js";import{b as o,q as l}from"./chunk-BRWS572J.js";var a,r=a=class extends p{static from(t){return i(a,t)}constructor(t){super(t),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(t){return h(t,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},l.getLogger(this))}castMaterial(t){return i(t&&typeof t=="object"&&("metallic"in t||"roughness"in t||"metallicRoughnessTexture"in t)?u:n,t)}clone(){return new a({faces:o(this.faces),shading:this.shading,material:o(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(t,f){let g={faces:o(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(t,f):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new a(g)}get memoryUsage(){let t=0;return this.faces!=null&&(t+=this.faces.byteLength),this.material!=null&&(t+=this.material.memoryUsage),t}};e([s({json:{write:!0}})],r.prototype,"faces",void 0),e([m("faces")],r.prototype,"castFaces",null),e([s({type:n,json:{write:!0}})],r.prototype,"material",void 0),e([m("material")],r.prototype,"castMaterial",null),e([s()],r.prototype,"name",void 0),e([s({type:String,json:{write:!0}})],r.prototype,"shading",void 0),e([s({type:Boolean})],r.prototype,"trustSourceNormals",void 0),r=a=e([c("esri.geometry.support.MeshComponent")],r);var M=r;export{M as a};
