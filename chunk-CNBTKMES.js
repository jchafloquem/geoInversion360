import{a as x,b as T}from"./chunk-LETHUPQK.js";import{a as j}from"./chunk-SPJDFBYB.js";import{c as w}from"./chunk-WMT47BMV.js";import{a as $}from"./chunk-BEBRAWZX.js";import{y as C}from"./chunk-VOH7XGOR.js";import{a as U}from"./chunk-PPFMRTTD.js";import{g as O,s as V}from"./chunk-ATXTHXJA.js";import{v as M}from"./chunk-SO6OJFOM.js";import{b as G}from"./chunk-DG5QI6E2.js";import{G as D,r as L}from"./chunk-OFVMJORF.js";import{F as I,G as A,aa as b,p as k}from"./chunk-BRGZVJPZ.js";import{e as v,f as S}from"./chunk-Z5NXR7SL.js";import{s as m}from"./chunk-BRWS572J.js";import{a as g,b as E,g as d}from"./chunk-JEGVIFEP.js";var N="xlink:href",F="2.0.0",W="__esri_wfs_id__",K="wfs-layer:getWFSLayerTypeInfo-error",B="wfs-layer:empty-service",q="wfs-layer:feature-type-not-found",Z="wfs-layer:geojson-not-supported",ee="wfs-layer:kvp-encoding-not-supported",te="wfs-layer:malformed-json",z="wfs-layer:unknown-geometry-type",re="wfs-layer:unknown-field-type",ae="wfs-layer:unsupported-spatial-reference",ne="wfs-layer:unsupported-wfs-version";function je(r,t){return d(this,null,function*(){let e=oe((yield b(r,{responseType:"text",query:g({SERVICE:"WFS",REQUEST:"GetCapabilities",VERSION:F},t?.customParameters),signal:t?.signal})).data);return ue(r,e),e})}function oe(r){let t=H(r);he(t),J(t);let e=t.firstElementChild,a=v(pe(e));return{operations:se(e),get featureTypes(){return Array.from(a())},readFeatureTypes:a}}var ie=["json","application/json","geojson","application/json; subtype=geojson","application/geo+json"];function X(r){for(let t of ie){let e=r.findIndex(a=>a.toLowerCase()===t);if(e>=0)return r[e]}return null}function se(r){let t=!1,e={GetCapabilities:{url:""},DescribeFeatureType:{url:""},GetFeature:{url:"",outputFormat:null,supportsPagination:!1}},a=[],o=[];if(x(r,{OperationsMetadata:{Parameter:n=>{if(n.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:i})=>{i&&a.push(i)}}}},Operation:n=>{switch(n.getAttribute("name")){case"GetCapabilities":return{DCP:{HTTP:{Get:i=>{e.GetCapabilities.url=i.getAttribute(N)}}}};case"DescribeFeatureType":return{DCP:{HTTP:{Get:i=>{e.DescribeFeatureType.url=i.getAttribute(N)}}}};case"GetFeature":return{DCP:{HTTP:{Get:i=>{e.GetFeature.url=i.getAttribute(N)}}},Parameter:i=>{if(i.getAttribute("name")==="outputFormat")return{AllowedValues:{Value:({textContent:s})=>{s&&o.push(s)}}}}}}},Constraint:n=>{switch(n.getAttribute("name")){case"KVPEncoding":return{DefaultValue:i=>{t=i.textContent.toLowerCase()==="true"}};case"ImplementsResultPaging":return{DefaultValue:i=>{e.GetFeature.supportsPagination=i.textContent.toLowerCase()==="true"}}}}}}),e.GetFeature.outputFormat=X(o)??X(a),!t)throw new m(ee,"WFS service doesn't support key/value pair (KVP) encoding");if(e.GetFeature.outputFormat==null)throw new m(Z,"WFS service doesn't support GeoJSON output format");return e}function ue(r,t){I(r)&&(k(r,t.operations.DescribeFeatureType.url,!0)&&(t.operations.DescribeFeatureType.url=A(t.operations.DescribeFeatureType.url)),k(r,t.operations.GetFeature.url,!0)&&(t.operations.GetFeature.url=A(t.operations.GetFeature.url)))}function Y(r){let t=parseInt(r.textContent?.match(/(?<wkid>\d+$)/i)?.groups?.wkid??"",10);if(!Number.isNaN(t))return t}function pe(r){return T(r,{FeatureTypeList:{FeatureType:t=>{let e={typeName:"undefined:undefined",name:"",title:"",description:"",extent:null,namespacePrefix:"",namespaceUri:"",defaultSpatialReference:4326,supportedSpatialReferences:[]},a=new Set;return x(t,{Name:o=>{let{name:n,prefix:i}=R(o.textContent);e.typeName=`${i}:${n}`,e.name=n,e.namespacePrefix=i,e.namespaceUri=o.lookupNamespaceURI(i)},Abstract:o=>{e.description=o.textContent},Title:o=>{e.title=o.textContent},WGS84BoundingBox:o=>{e.extent=M.fromJSON(le(o))},DefaultCRS:o=>{let n=Y(o);n&&(e.defaultSpatialReference=n,a.add(n))},OtherCRS:o=>{let n=Y(o);n&&a.add(n)}}),e.title||(e.title=e.name),a.add(4326),e.supportedSpatialReferences.push(...a),e}}})}function le(r){let t,e,a,o;for(let n of r.children)switch(n.localName){case"LowerCorner":[t,e]=n.textContent.split(" ").map(i=>Number.parseFloat(i));break;case"UpperCorner":[a,o]=n.textContent.split(" ").map(i=>Number.parseFloat(i))}return{xmin:t,ymin:e,xmax:a,ymax:o,spatialReference:D}}function ce(r,t,e){return S(r,a=>e?a.name===t&&a.namespaceUri===e:a.typeName===t||a.name===t)}function Oe(o,n,i){return d(this,arguments,function*(r,t,e,a={}){let{featureType:s,extent:l}=yield me(r,t,e,a),{spatialReference:u}=Se(r.operations.GetFeature.url,s,a.spatialReference),{fields:p,geometryType:c,swapXY:f,objectIdField:y,geometryField:h}=yield fe(r,s,u,a);return{url:r.operations.GetCapabilities.url,name:s.name,namespaceUri:s.namespaceUri,fields:p,geometryField:h,geometryType:c,objectIdField:y,spatialReference:a.spatialReference??new G({wkid:s.defaultSpatialReference}),extent:l,swapXY:f,wfsCapabilities:r,customParameters:a.customParameters}})}function me(o,n,i){return d(this,arguments,function*(r,t,e,a={}){let s=r.readFeatureTypes(),l=t?ce(s,t,e):s.next().value,{spatialReference:u=new G({wkid:l?.defaultSpatialReference})}=a;if(l==null)throw t?new m(q,`The type '${t}' could not be found in the service`):new m(B,"The service is empty");let p=l.extent;if(p&&!L(p.spatialReference,u))try{yield V(p.spatialReference,u,void 0,a),p=O(p,u)}catch{throw new m(ae,"Projection not supported")}return{extent:p,spatialReference:u,featureType:l}})}function fe(o,n,i){return d(this,arguments,function*(r,t,e,a={}){let{typeName:s}=t,[l,u]=yield Promise.allSettled([ge(r.operations.DescribeFeatureType.url,s,a),de(r,s,e,a)]),p=P=>new m(K,`An error occurred while getting info about the feature type '${s}'`,{error:P});if(l.status==="rejected")throw p(l.reason);if(u.status==="rejected")throw p(u.reason);let{fields:c,errors:f}=l.value??{},y=l.value?.geometryType||u.value?.geometryType,h=u.value?.swapXY??!1;if(y==null)throw new m(z,`The geometry type could not be determined for type '${s}`,{typeName:s,geometryType:y,fields:c,errors:f});return E(g({},ye(c??[])),{geometryType:y,swapXY:h})})}function ye(r){let t=r.find(a=>a.type==="geometry"),e=r.find(a=>a.type==="oid");return r=r.filter(a=>a.type!=="geometry"),e||(e=new w({name:W,type:"oid",alias:W}),r.unshift(e)),{geometryField:t?.name??null,objectIdField:e.name,fields:r}}function de(o,n,i){return d(this,arguments,function*(r,t,e,a={}){let s,l=!1,[u,p]=yield Promise.all([Fe(r.operations.GetFeature.url,t,e,r.operations.GetFeature.outputFormat,E(g({},a),{count:1})),b(r.operations.GetFeature.url,{responseType:"text",query:_(t,e,void 0,E(g({},a),{count:1})),signal:a?.signal})]),c=u.type==="FeatureCollection"&&u.features[0]?.geometry;if(c){let f;switch(s=U.fromJSON($(c.type)),c.type){case"Point":f=c.coordinates;break;case"LineString":case"MultiPoint":f=c.coordinates[0];break;case"MultiLineString":case"Polygon":f=c.coordinates[0][0];break;case"MultiPolygon":f=c.coordinates[0][0][0]}let y=/<[^>]*pos[^>]*> *(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/.exec(p.data);if(y){let h=f[0].toFixed(3),P=f[1].toFixed(3),Q=parseFloat(y[1]).toFixed(3);h===parseFloat(y[2]).toFixed(3)&&P===Q&&(l=!0)}}return{geometryType:s,swapXY:l}})}function ge(r,t,e){return d(this,null,function*(){return we(t,(yield b(r,{responseType:"text",query:g({SERVICE:"WFS",REQUEST:"DescribeFeatureType",VERSION:F,TYPENAME:t,TYPENAMES:t},e?.customParameters),signal:e?.signal})).data)})}function we(r,t){let{name:e}=R(r),a=H(t);J(a);let o=S(T(a.firstElementChild,{element:n=>n}),n=>n.getAttribute("name")===e);if(o!=null){let n=o.getAttribute("type"),i=n?S(T(a.firstElementChild,{complexType:s=>s}),s=>s.getAttribute("name")===R(n).name):S(T(o,{complexType:s=>s}),()=>!0);if(i)return Te(i)}throw new m(q,`Type '${r}' not found in document`,{document:new XMLSerializer().serializeToString(a)})}var be=new Set(["objectid","fid"]);function Te(r){let t=[],e=[],a,o=T(r,{complexContent:{extension:{sequence:{element:n=>n}}}});for(let n of o){let i=n.getAttribute("name");if(!i)continue;let s,l;if(n.hasAttribute("type")?s=R(n.getAttribute("type")).name:x(n,{simpleType:{restriction:c=>(s=R(c.getAttribute("base")).name,{maxLength:f=>{l=+f.getAttribute("value")}})}}),!s)continue;let u=n.getAttribute("nillable")==="true",p=!1;switch(s.toLowerCase()){case"integer":case"nonpositiveinteger":case"negativeinteger":case"long":case"int":case"short":case"byte":case"nonnegativeinteger":case"unsignedlong":case"unsignedint":case"unsignedshort":case"unsignedbyte":case"positiveinteger":e.push(new w({name:i,alias:i,type:"integer",nullable:u,length:C("integer")}));break;case"float":case"double":case"decimal":e.push(new w({name:i,alias:i,type:"double",nullable:u,length:C("double")}));break;case"boolean":case"string":case"gyearmonth":case"gyear":case"gmonthday":case"gday":case"gmonth":case"anyuri":case"qname":case"notation":case"normalizedstring":case"token":case"language":case"idrefs":case"entities":case"nmtoken":case"nmtokens":case"name":case"ncname":case"id":case"idref":case"entity":case"duration":case"time":e.push(new w({name:i,alias:i,type:"string",nullable:u,length:l??C("string")}));break;case"datetime":case"date":e.push(new w({name:i,alias:i,type:"date",nullable:u,length:l??C("date")}));break;case"pointpropertytype":a="point",p=!0;break;case"multipointpropertytype":a="multipoint",p=!0;break;case"curvepropertytype":case"multicurvepropertytype":case"multilinestringpropertytype":a="polyline",p=!0;break;case"surfacepropertytype":case"multisurfacepropertytype":case"multipolygonpropertytype":a="polygon",p=!0;break;case"geometrypropertytype":case"multigeometrypropertytype":p=!0,t.push(new m(z,`geometry type '${s}' is not supported`,{type:new XMLSerializer().serializeToString(r)}));break;default:t.push(new m(re,`Unknown field type '${s}'`,{type:new XMLSerializer().serializeToString(r)}))}p&&e.push(new w({name:i,alias:i,type:"geometry",nullable:u}))}for(let n of e)if(n.type==="integer"&&!n.nullable&&be.has(n.name.toLowerCase())){n.type="oid";break}return{geometryType:a,fields:e,errors:t}}function Fe(r,t,e,a,o){return d(this,null,function*(){let{data:n}=yield b(r,{responseType:"text",query:_(t,e,a,o),signal:o?.signal});n=n.replaceAll(/": +(-?\d+),(\d+)(,)?/g,'": $1.$2$3');try{return JSON.parse(n)}catch(i){throw new m(te,"Error while parsing the\xA0response",{response:n,error:i})}})}function _(r,t,e,a){let o=typeof t=="number"?t:t.wkid;return g({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:F,TYPENAMES:r,OUTPUTFORMAT:e,SRSNAME:"EPSG:"+o,STARTINDEX:a?.startIndex,COUNT:a?.count},a?.customParameters)}function Ve(r,t,e){return d(this,null,function*(){let a=yield b(r,{responseType:"text",query:g({SERVICE:"WFS",REQUEST:"GetFeature",VERSION:F,TYPENAMES:t,RESULTTYPE:"hits"},e?.customParameters),signal:e?.signal}),o=/numberMatched=["'](?<numberMatched>\d+)["']/gi.exec(a.data);if(o?.groups)return+o.groups.numberMatched})}function H(r){return new DOMParser().parseFromString(r.trim(),"text/xml")}function R(r){let[t,e]=r.split(":");return{prefix:e?t:"",name:e??t}}function he(r){let t=r.firstElementChild?.getAttribute("version");if(t&&t!==F)throw new m(ne,`Unsupported WFS version ${t}. Supported version: ${F}`)}function J(r){let t="",e="";if(x(r.firstElementChild,{Exception:a=>(t=a.getAttribute("exceptionCode"),{ExceptionText:o=>{e=o.textContent}})}),t)throw new m(`wfs-layer:${t}`,e)}function Se(r,t,e){let a={wkid:t.defaultSpatialReference},o=e?.wkid!=null?{wkid:e.wkid}:a;return{spatialReference:o,getFeatureSpatialReference:j(r)||o.wkid&&t.supportedSpatialReferences.includes(o.wkid)?{wkid:o.wkid}:{wkid:t.defaultSpatialReference}}}export{W as a,je as b,ce as c,Oe as d,ye as e,Fe as f,Ve as g,Se as h};
