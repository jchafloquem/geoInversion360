import{a as I,c as g}from"./chunk-C3UHYQBM.js";import{Ga as L,S as F,V as D,W as A,X as w,aa as v,b as f,c as u,fa as h,ga as _,ha as b,qa as T}from"./chunk-FXWBXMPB.js";import{a as d}from"./chunk-OCNYIIP3.js";import{a as G}from"./chunk-JHZRGEBS.js";import{n as z}from"./chunk-UHE637ZN.js";import{a as o,c as m,h as p}from"./chunk-IBDPR46F.js";import{f as y}from"./chunk-IWJQ3PU6.js";import{b as c,l as x}from"./chunk-SO6OJFOM.js";import{a as J,g as O}from"./chunk-JEGVIFEP.js";var S=class a{constructor(){this.arcadeDeclaredClass="esri.arcade.Feature",this._optimizedGeomDefinition=null,this._geometry=null,this.attributes=null,this._layer=null,this._fieldTypesFixed=!0,this.fieldsIndex=null,this.contextTimeZone=null,this.immutable=!0,this._fieldsToFixDataTypes=null,this.immutable=!0}static createFromGraphic(e,s){let t=new a;return t.contextTimeZone=s??null,t._geometry=e.geometry!=null?e.geometry:null,e.attributes===void 0||e.attributes===null?t.attributes={}:t.attributes=e.attributes,e._sourceLayer?(t._layer=e._sourceLayer,t._fieldTypesFixed=!1):e._layer?(t._layer=e._layer,t._fieldTypesFixed=!1):e.layer&&"fields"in e.layer?(t._layer=e.layer,t._fieldTypesFixed=!1):e.sourceLayer&&"fields"in e.sourceLayer&&(t._layer=e.sourceLayer,t._fieldTypesFixed=!1),t._layer&&!t._fieldTypesFixed&&(t.fieldsIndex=this.hydrateFieldsIndex(t._layer)),t}static createFromArcadeFeature(e){if(e instanceof a){let t=new a;return t._fieldTypesFixed=e._fieldTypesFixed,t.attributes=e.attributes,t._geometry=e._geometry,t._optimizedGeomDefinition=e._optimizedGeomDefinition,e._layer&&(t._layer=e._layer),t.fieldsIndex=e.fieldsIndex,t.contextTimeZone=e.contextTimeZone,t}let s={};for(let t of e.keys())s[t]=e.field(t);return a.createFromGraphicLikeObject(e.geometry(),s,e.fullSchema(),e.contextTimeZone)}static createFromOptimisedFeature(e,s,t){let i=new a;return i._geometry=e.geometry?{geometry:e.geometry}:null,i._optimizedGeomDefinition=t,i.attributes=e.attributes||{},i._layer=s,i._fieldTypesFixed=!1,i}static createFromArcadeDictionary(e,s){let t=new a;return t.attributes=e.field("attributes"),t.attributes!==null&&t.attributes instanceof g?(t.attributes=t.attributes.attributes,t.attributes===null&&(t.attributes={})):t.attributes={},t._geometry=e.field("geometry"),t._geometry!==null&&(t._geometry instanceof g?t._geometry=a.parseGeometryFromDictionary(t._geometry,s):t._geometry instanceof c||(t._geometry=null)),t}static createFromGraphicLikeObject(e,s,t=null,i){let n=new a;return n.contextTimeZone=i??null,s===null&&(s={}),n.attributes=s,n._geometry=e??null,n._layer=t,n._layer&&(n._fieldTypesFixed=!1,n.fieldsIndex=this.hydrateFieldsIndex(n._layer)),n}static hydrateFieldsIndex(e){return e===null?null:v(e)?e.getFieldsIndex():e.fieldsIndex?e.fieldsIndex:G.fromLayerJSON({datesInUnknownTimezone:e.datesInUnknownTimezone,fields:e.fields,timeInfo:e.timeInfo,editFieldsInfo:e.editFieldsInfo,dateFieldsTimeReference:e.dateFieldsTimeReference??{timeZone:"UTC",respectsDaylightSaving:!1}})}repurposeFromGraphicLikeObject(e,s,t=null){s===null&&(s={}),this.attributes=s,this._geometry=e??null,this._layer=t,this._layer?this._fieldTypesFixed=!1:this._fieldTypesFixed=!0}castToText(e=!1){let s="";this._fieldTypesFixed===!1&&this._fixFieldTypes();for(let t in this.attributes){s!==""&&(s+=",");let i=this.attributes[t];i==null?s+=JSON.stringify(t)+":null":A(i)||w(i)||D(i)?s+=JSON.stringify(t)+":"+JSON.stringify(i):i instanceof c?s+=JSON.stringify(t)+":"+T(i):i instanceof p||i instanceof m?s+=`${JSON.stringify(t)}:${JSON.stringify(i.toString())}`:i instanceof d||Array.isArray(i)?s+=JSON.stringify(t)+":"+T(i,null,e):i instanceof o?s+=e?JSON.stringify(t)+":"+JSON.stringify(i.getTime()):JSON.stringify(t)+":"+i.stringify():i!==null&&typeof i=="object"&&i.castToText!==void 0&&(s+=JSON.stringify(t)+":"+i.castToText(e))}return'{"geometry":'+(this.geometry()===null?"null":T(this.geometry()))+',"attributes":{'+s+"}}"}_fixFieldTypes(){if(this._fieldsToFixDataTypes&&this._fieldsToFixDataTypes?.length>0)return this._fixAllFields(this._fieldsToFixDataTypes),void(this._fieldTypesFixed=!0);let e=[],s=this._layer.fields;for(let t=0;t<s.length;t++){let i=s[t],{name:n,type:r}=i;switch(r){case"date":case"esriFieldTypeDate":e.push({field:n,dataType:"date"});break;case"date-only":case"esriFieldTypeDateOnly":e.push({field:n,dataType:"date-only"});break;case"time-only":case"esriFieldTypeTimeOnly":e.push({field:n,dataType:"time-only"});break;case"timestamp-offset":case"esriFieldTypeTimestampOffset":e.push({field:n,dataType:"timestamp-offset"})}}this._fieldsToFixDataTypes=e,e.length>0&&this._fixAllFields(e),this._fieldTypesFixed=!0}isUnknownDateTimeField(e){return this.fieldsIndex?.getTimeZone(e)==="unknown"}_fixAllFields(e){this.attributes=J({},this.attributes);let s=this.contextTimeZone??"system";for(let t=0;t<e.length;t++){let i=e[t].field,n=e[t].dataType,r=this.attributes[i];if(r===void 0){for(let l in this.attributes)if(l.toLowerCase()===i.toLowerCase()){if(r=this.attributes[l],r!==null){if(n==="time-only"){b(r)||(this.attributes[l]=p.fromReader(r.toString()));break}if(n==="date-only"){_(r)||(this.attributes[l]=m.fromReader(r.toString()));break}if(n==="timestamp-offset"){h(r)||(this.attributes[l]=o.fromReaderAsTimeStampOffset(r.toString()));break}let k=this.isUnknownDateTimeField(l);r instanceof Date?this.attributes[l]=k?o.unknownDateJSToArcadeDate(r):o.dateJSAndZoneToArcadeDate(r,s):h(r)||(this.attributes[l]=k?o.unknownEpochToArcadeDate(r):o.epochToArcadeDate(r,s))}break}}else if(r!==null){if(n==="time-only"){b(r)?this.attributes[i]=r:this.attributes[i]=p.fromReader(r.toString());continue}if(n==="date-only"){_(r)?this.attributes[i]=r:this.attributes[i]=m.fromReader(r.toString());continue}if(n==="timestamp-offset"){h(r)?this.attributes[i]=r:this.attributes[i]=o.fromReaderAsTimeStampOffset(r.toString());continue}let l=this.isUnknownDateTimeField(i);h(r)?this.attributes[i]=r:r instanceof Date?this.attributes[i]=l?o.unknownDateJSToArcadeDate(r):o.dateJSAndZoneToArcadeDate(r,s):this.attributes[i]=l?o.unknownEpochToArcadeDate(r):o.epochToArcadeDate(r,s)}}}geometry(){return this._geometry===null||this._geometry instanceof c||(this._optimizedGeomDefinition?(this._geometry=y(z(this._geometry,this._optimizedGeomDefinition.geometryType,this._optimizedGeomDefinition.hasZ,this._optimizedGeomDefinition.hasM)),this._geometry.spatialReference=this._optimizedGeomDefinition.spatialReference):this._geometry=y(this._geometry)),this._geometry}field(e){this._fieldTypesFixed||this._fixFieldTypes();let s=this.attributes[e];if(s!==void 0)return s;let t=e.toLowerCase();for(let i in this.attributes)if(i.toLowerCase()===t)return this.attributes[i];if(this._hasFieldDefinition(t))return null;throw new u(null,f.FieldNotFound,null,{key:e})}_hasFieldDefinition(e){if(this._layer===null)return!1;for(let s=0;s<this._layer.fields.length;s++)if(this._layer.fields[s].name.toLowerCase()===e)return!0;return!1}setField(e,s){if(this.immutable)throw new u(null,f.Immutable,null);if(s instanceof Date&&(s=this.isUnknownDateTimeField(e)?o.unknownDateJSToArcadeDate(s):o.dateJSToArcadeDate(s)),F(s)===!1)throw new u(null,f.TypeNotAllowedInFeature,null);let t=e.toLowerCase();if(this.attributes[e]===void 0){for(let i in this.attributes)if(i.toLowerCase()===t)return void(this.attributes[i]=s);this.attributes[e]=s}else this.attributes[e]=s}hasField(e){let s=e.toLowerCase();if(this.attributes[e]!==void 0)return!0;for(let t in this.attributes)if(t.toLowerCase()===s)return!0;return!!this._hasFieldDefinition(s)}keys(){let e=[],s={};for(let t in this.attributes)e.push(t),s[t.toLowerCase()]=1;if(this._layer!==null)for(let t=0;t<this._layer.fields.length;t++){let i=this._layer.fields[t];s[i.name.toLowerCase()]!==1&&e.push(i.name)}return e=e.sort(),e}static parseGeometryFromDictionary(e,s){let t=a._convertDictionaryToJson(e,!0);return t.hasm!==void 0&&(t.hasM=t.hasm,delete t.hasm),t.hasz!==void 0&&(t.hasZ=t.hasz,delete t.hasz),t.spatialreference!==void 0&&(t.spatialReference=t.spatialreference,delete t.spatialreference),t.spatialReference||(t.spatialReference=s),t.rings!==void 0&&(t.rings=this._fixPathArrays(t.rings,t.hasZ===!0,t.hasZ===!0)),t.paths!==void 0&&(t.paths=this._fixPathArrays(t.paths,t.hasZ===!0,t.hasM===!0)),t.points!==void 0&&(t.points=this._fixPointArrays(t.points,t.hasZ===!0,t.hasM===!0)),y(t)}static _fixPathArrays(e,s,t){let i=[];if(Array.isArray(e))for(let n=0;n<e.length;n++)i.push(this._fixPointArrays(e[n],s,t));else if(e instanceof d)for(let n=0;n<e.length();n++)i.push(this._fixPointArrays(e.get(n),s,t));return i}static _fixPointArrays(e,s,t){let i=[];if(Array.isArray(e))for(let n=0;n<e.length;n++){let r=e[n];r instanceof x?s&&t?i.push([r.x,r.y,r.z,r.m]):s?i.push([r.x,r.y,r.z]):t?i.push([r.x,r.y,r.m]):i.push([r.x,r.y]):r instanceof d?i.push(r.toArray()):i.push(r)}else if(e instanceof d)for(let n=0;n<e.length();n++){let r=e.get(n);r instanceof x?s&&t?i.push([r.x,r.y,r.z,r.m]):s?i.push([r.x,r.y,r.z]):t?i.push([r.x,r.y,r.m]):i.push([r.x,r.y]):r instanceof d?i.push(r.toArray()):i.push(r)}return i}static _convertDictionaryToJson(e,s=!1){let t={};for(let i in e.attributes){let n=e.attributes[i];n instanceof g&&(n=a._convertDictionaryToJson(n)),s?t[i.toLowerCase()]=n:t[i]=n}return t}static parseAttributesFromDictionary(e){let s={};for(let t in e.attributes){let i=e.attributes[t];if(!F(i))throw new u(null,f.InvalidParameter,null);s[t]=i}return s}static fromJson(e,s){let t=null;e.geometry!==null&&e.geometry!==void 0&&(t=y(e.geometry));let i={};if(e.attributes!==null&&e.attributes!==void 0)for(let n in e.attributes){let r=e.attributes[n];if(r===null)i[n]=r;else{if(!(D(r)||w(r)||A(r)||h(r)||b(r)||_(r)))throw new u(null,f.InvalidParameter,null);i[n]=r}}return a.createFromGraphicLikeObject(t,i,null,s??null)}fullSchema(){return this._layer}gdbVersion(){if(this._layer===null)return"";let e=this._layer.gdbVersion;return e===void 0?"":e===""&&this._layer.capabilities?.isVersioned?"SDE.DEFAULT":e}castAsJson(e){let s={attributes:{},geometry:e?.keepGeometryType===!0?this.geometry():this.geometry()?.toJSON()??null};for(let t in this.attributes){let i=this.attributes[t];i!==void 0&&(s.attributes[t]=L(i,e))}return s}castAsJsonAsync(e=null,s){return O(this,null,function*(){return this.castAsJson(s)})}};I(S);export{S as a};
