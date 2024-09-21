import{a as D}from"./chunk-UYBHUOFR.js";import{a as n}from"./chunk-TTN7UOJS.js";import{a as v}from"./chunk-SO6OJFOM.js";import{a as f}from"./chunk-MT7BXRRQ.js";import{I as r,T as l}from"./chunk-Z5NXR7SL.js";import{H as J,S as s}from"./chunk-7JLWSSXP.js";import{a as e}from"./chunk-W3WDPWBE.js";import{b as j}from"./chunk-BRWS572J.js";var g,m=g=class extends l{constructor(t){super(t),this.name=null,this.code=null}clone(){return new g({name:this.name,code:this.code})}};e([r({type:String,json:{write:!0}})],m.prototype,"name",void 0),e([r({type:[String,Number],json:{write:!0}})],m.prototype,"code",void 0),m=g=e([s("esri.layers.support.CodedValue")],m);var _=new f({inherited:"inherited",codedValue:"coded-value",range:"range"}),d=class extends l{constructor(t){super(t),this.name=null,this.type=null}};e([r({type:String,json:{write:!0}})],d.prototype,"name",void 0),e([n(_)],d.prototype,"type",void 0),d=e([s("esri.layers.support.Domain")],d);var p=d;var V,c=V=class extends p{constructor(t){super(t),this.codedValues=null,this.type="coded-value"}getName(t){let o=null;if(this.codedValues){let a=String(t);this.codedValues.some(y=>(String(y.code)===a&&(o=y.name),!!o))}return o}clone(){return new V({codedValues:j(this.codedValues),name:this.name})}};e([r({type:[m],json:{write:!0}})],c.prototype,"codedValues",void 0),e([n({codedValue:"coded-value"})],c.prototype,"type",void 0),c=V=e([s("esri.layers.support.CodedValueDomain")],c);var b=c;var w,h=w=class extends p{constructor(t){super(t),this.type="inherited"}clone(){return new w}};e([n({inherited:"inherited"})],h.prototype,"type",void 0),h=w=e([s("esri.layers.support.InheritedDomain")],h);var S=h;var N,u=N=class extends p{constructor(t){super(t),this.maxValue=null,this.minValue=null,this.type="range"}clone(){return new N({maxValue:this.maxValue,minValue:this.minValue,name:this.name})}};e([r({json:{type:[Number],read:{source:"range",reader:(t,o)=>o.range?.[1]},write:{enabled:!1,overridePolicy(){return{enabled:this.maxValue!=null&&this.minValue==null}},target:"range",writer(t,o,a){o[a]=[this.minValue||0,t]}}}})],u.prototype,"maxValue",void 0),e([r({json:{type:[Number],read:{source:"range",reader:(t,o)=>o.range?.[0]},write:{target:"range",writer(t,o,a){o[a]=[t,this.maxValue||0]}}}})],u.prototype,"minValue",void 0),e([n({range:"range"})],u.prototype,"type",void 0),u=N=e([s("esri.layers.support.RangeDomain")],u);var x=u;var T={key:"type",base:p,typeMap:{range:x,"coded-value":b,inherited:S}};function C(t){if(!t?.type)return null;switch(t.type){case"range":return x.fromJSON(t);case"codedValue":return b.fromJSON(t);case"inherited":return S.fromJSON(t)}return null}var O,k=new f({binary:"binary",coordinate:"coordinate",countOrAmount:"count-or-amount",dateAndTime:"date-and-time",description:"description",locationOrPlaceName:"location-or-place-name",measurement:"measurement",nameOrTitle:"name-or-title",none:"none",orderedOrRanked:"ordered-or-ranked",percentageOrRatio:"percentage-or-ratio",typeOrCategory:"type-or-category",uniqueIdentifier:"unique-identifier"}),i=O=class extends l{constructor(t){super(t),this.alias=null,this.defaultValue=void 0,this.description=null,this.domain=null,this.editable=!0,this.length=void 0,this.name=null,this.nullable=!0,this.type=null,this.valueType=null,this.visible=!0}readDescription(t,{description:o}){let a=null;try{a=o?JSON.parse(o):null}catch{}return a?.value??null}readValueType(t,{description:o}){let a=null;try{a=o?JSON.parse(o):null}catch{}return a?k.fromJSON(a.fieldValueType):null}clone(){return new O({alias:this.alias,defaultValue:this.defaultValue,description:this.description,domain:this.domain?.clone()??null,editable:this.editable,length:this.length,name:this.name,nullable:this.nullable,type:this.type,valueType:this.valueType,visible:this.visible})}};e([r({type:String,json:{write:!0}})],i.prototype,"alias",void 0),e([r({type:[String,Number],json:{write:{allowNull:!0}}})],i.prototype,"defaultValue",void 0),e([r()],i.prototype,"description",void 0),e([v("description")],i.prototype,"readDescription",null),e([r({types:T,json:{read:{reader:C},write:!0}})],i.prototype,"domain",void 0),e([r({type:Boolean,json:{write:!0}})],i.prototype,"editable",void 0),e([r({type:J,json:{write:{overridePolicy:t=>({enabled:Number.isFinite(t)})}}})],i.prototype,"length",void 0),e([r({type:String,json:{write:!0}})],i.prototype,"name",void 0),e([r({type:Boolean,json:{write:!0}})],i.prototype,"nullable",void 0),e([n(D)],i.prototype,"type",void 0),e([r()],i.prototype,"valueType",void 0),e([v("valueType",["description"])],i.prototype,"readValueType",null),e([r({type:Boolean,json:{read:!1}})],i.prototype,"visible",void 0),i=O=e([s("esri.layers.support.Field")],i);var Ue=i;export{T as a,C as b,Ue as c};
