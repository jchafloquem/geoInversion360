import{b as K,c as X,d as ee}from"./chunk-BEBRAWZX.js";import{a as F,b as w,c as j,d as R,e as te}from"./chunk-IXZYGJ4V.js";import"./chunk-VFGTXZIM.js";import{a as W,b as H,c as Y}from"./chunk-O4IUXH7A.js";import"./chunk-6KRFVLII.js";import{a as $}from"./chunk-EP6QNUFZ.js";import"./chunk-JOIFOJSK.js";import{b as U}from"./chunk-SMT6QWPH.js";import{e as b,f as T}from"./chunk-M33MKV3S.js";import"./chunk-IEAJIOPI.js";import"./chunk-HHJJPMV6.js";import"./chunk-SPAOTNUK.js";import{a as S}from"./chunk-JHZRGEBS.js";import"./chunk-RQQJT345.js";import"./chunk-27SQOLVY.js";import"./chunk-6QNRNEQJ.js";import{j as z,k as J,l as L,m as B,n as V}from"./chunk-UHE637ZN.js";import"./chunk-7QY3BMVN.js";import"./chunk-NWPYI2UP.js";import"./chunk-TNPL7MIN.js";import{a as N}from"./chunk-UYBHUOFR.js";import"./chunk-BYQI7UDX.js";import"./chunk-A6I6D7FN.js";import"./chunk-JEOTSKYP.js";import"./chunk-U6WVZEYH.js";import"./chunk-HW25OXMH.js";import"./chunk-IBDPR46F.js";import"./chunk-BES4JRIO.js";import"./chunk-DHCNASG6.js";import"./chunk-CD7FGRAU.js";import"./chunk-G4NJ66JB.js";import"./chunk-3CM6CIFQ.js";import"./chunk-P5GBR7PO.js";import"./chunk-HIQGSNLD.js";import"./chunk-QU77E3KV.js";import"./chunk-SSGUIPHM.js";import"./chunk-7WFRJSY3.js";import"./chunk-PSQRUING.js";import"./chunk-DFTBSFIN.js";import"./chunk-3JLZ7SFH.js";import"./chunk-FUBITVJ7.js";import{x as se,y as ie}from"./chunk-VOH7XGOR.js";import"./chunk-Y6HWUWZ3.js";import"./chunk-AQ74ANSJ.js";import"./chunk-5UCI4TUX.js";import"./chunk-SAOUSUZE.js";import"./chunk-PPFMRTTD.js";import{g as x}from"./chunk-IWJQ3PU6.js";import"./chunk-Z5Q76SB7.js";import"./chunk-TTN7UOJS.js";import"./chunk-5QLB7ZJ7.js";import"./chunk-E5R4OI7X.js";import"./chunk-N566L3JG.js";import"./chunk-7S6PD5JC.js";import"./chunk-ZWI7LLTZ.js";import"./chunk-6NCXSKJD.js";import"./chunk-FYZRIMPP.js";import"./chunk-ATXTHXJA.js";import"./chunk-VFINLX57.js";import"./chunk-LM5MGO7W.js";import"./chunk-4HUAEW4D.js";import"./chunk-XWRPBDYS.js";import"./chunk-TCCAOREC.js";import"./chunk-BCREO4Q5.js";import"./chunk-SO6OJFOM.js";import"./chunk-DG5QI6E2.js";import"./chunk-TMZNSBQB.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import{G as _,r as M}from"./chunk-OFVMJORF.js";import"./chunk-2FYXACXP.js";import"./chunk-XGVKSCMM.js";import"./chunk-FX2VBPAM.js";import{c as Q}from"./chunk-K4GPNFIS.js";import"./chunk-RP7XSKHE.js";import"./chunk-VV7MGXTC.js";import{e as P}from"./chunk-IXNVQC76.js";import"./chunk-LYPZUCFI.js";import"./chunk-QYC4ILGT.js";import"./chunk-HFQFGALU.js";import"./chunk-5TSEU5EE.js";import"./chunk-VC35VCVT.js";import"./chunk-MT7BXRRQ.js";import"./chunk-NNKLK2DS.js";import"./chunk-VU5W7W6Y.js";import{aa as Z}from"./chunk-BRGZVJPZ.js";import"./chunk-Z5NXR7SL.js";import"./chunk-7JLWSSXP.js";import"./chunk-W3WDPWBE.js";import{p as G}from"./chunk-JKP4I6UL.js";import"./chunk-TZHKPIVH.js";import"./chunk-JPDAKIWT.js";import"./chunk-W6LY37E4.js";import{q as A,s as g}from"./chunk-BRWS572J.js";import"./chunk-AKNRR36C.js";import{a as q,b as C,g as p}from"./chunk-JEGVIFEP.js";var ue={hasAttachments:!1,capabilities:"query, editing, create, delete, update",useStandardizedQueries:!0,supportsCoordinatesQuantization:!0,supportsReturningQueryGeometry:!0,advancedQueryCapabilities:{supportsQueryAttachments:!1,supportsStatistics:!0,supportsPercentileStatistics:!0,supportsReturningGeometryCentroid:!0,supportsQueryWithDistance:!0,supportsDistinct:!0,supportsReturningQueryExtent:!0,supportsReturningGeometryProperties:!1,supportsHavingClause:!0,supportsOrderBy:!0,supportsPagination:!0,supportsQueryWithResultType:!1,supportsSqlExpression:!0,supportsDisjointSpatialRel:!0}},re=class{constructor(){this._queryEngine=null,this._snapshotFeatures=e=>p(this,null,function*(){let s=yield this._fetch(e);return this._createFeatures(s)})}destroy(){this._queryEngine?.destroy(),this._queryEngine=this._createDefaultAttributes=null}load(a){return p(this,arguments,function*(e,s={}){this._loadOptions={url:e.url,customParameters:e.customParameters};let i=[],[o]=yield Promise.all([e.url?this._fetch(s?.signal):null,this._checkProjection(e.spatialReference)]),n=X(o,{geometryType:e.geometryType}),u=e.fields||n.fields||[],d=e.hasZ!=null?e.hasZ:n.hasZ,h=n.geometryType,y=e.objectIdField||n.objectIdFieldName||"__OBJECTID",f=e.spatialReference||_,t=e.timeInfo;u===n.fields&&n.unknownFields.length>0&&i.push({name:"geojson-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:n.unknownFields}});let c=new S(u),l=c.get(y);l?(l.type!=="esriFieldTypeString"&&(l.type="esriFieldTypeOID"),l.editable=!1,l.nullable=!1,y=l.name):(l={alias:y,name:y,type:n.objectIdFieldType==="string"?"esriFieldTypeString":"esriFieldTypeOID",editable:!1,nullable:!1},u.unshift(l));let m={};for(let r of u){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),!r.name)throw new g("geojson-layer:invalid-field-name","field name is missing",{field:r});if(!N.jsonValues.includes(r.type))throw new g("geojson-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r});if(r.name!==l.name){let I=se(r);I!==void 0&&(m[r.name]=I)}r.length==null&&(r.length=ie(r))}if(t){if(t.startTimeField){let r=c.get(t.startTimeField);r?(t.startTimeField=r.name,r.type="esriFieldTypeDate"):t.startTimeField=null}if(t.endTimeField){let r=c.get(t.endTimeField);r?(t.endTimeField=r.name,r.type="esriFieldTypeDate"):t.endTimeField=null}if(t.trackIdField){let r=c.get(t.trackIdField);r?t.trackIdField=r.name:(t.trackIdField=null,i.push({name:"geojson-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:t}}))}t.startTimeField||t.endTimeField||(i.push({name:"geojson-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:t}}),t=null)}let ne=h?W(h):void 0,D=c.dateFields.length?{timeZoneIANA:Q}:null,E={warnings:i,featureErrors:[],layerDefinition:C(q({},ue),{drawingInfo:ne??void 0,templates:Y(m),extent:void 0,geometryType:h,objectIdField:y,fields:u,hasZ:!!d,timeInfo:t,dateFieldsTimeReference:D})};this._queryEngine=new U({fieldsIndex:S.fromLayerJSON({fields:u,timeInfo:t,dateFieldsTimeReference:D}),geometryType:h,hasM:!1,hasZ:d,objectIdField:y,spatialReference:f,timeInfo:t,featureStore:new $({geometryType:h,hasM:!1,hasZ:d}),cacheSpatialQueries:!0});let k=this._queryEngine.fieldsIndex.requiredFields.indexOf(l);k>-1&&this._queryEngine.fieldsIndex.requiredFields.splice(k,1),this._createDefaultAttributes=H(m,y);let O=yield this._createFeatures(o);this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,O);let ae=this._normalizeFeatures(O,E.featureErrors);this._queryEngine.featureStore.addMany(ae);let{fullExtent:oe,timeExtent:v}=yield this._queryEngine.fetchRecomputedExtents();if(E.layerDefinition.extent=oe,v){let{start:r,end:I}=v;E.layerDefinition.timeInfo.timeExtent=[r,I]}return E})}applyEdits(e){return p(this,null,function*(){let{spatialReference:s,geometryType:a}=this._queryEngine;return yield Promise.all([te(s,a),b(e.adds,s),b(e.updates,s)]),yield this._waitSnapshotComplete(),this._applyEdits(e)})}queryFeatures(){return p(this,arguments,function*(e={},s={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,s.signal)})}queryFeatureCount(){return p(this,arguments,function*(e={},s={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,s.signal)})}queryObjectIds(){return p(this,arguments,function*(e={},s={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,s.signal)})}queryExtent(){return p(this,arguments,function*(e={},s={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,s.signal)})}querySnapping(a){return p(this,arguments,function*(e,s={}){return yield this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,s.signal)})}refresh(e){return p(this,null,function*(){this._loadOptions.customParameters=e,this._snapshotTask?.abort(),this._snapshotTask=P(this._snapshotFeatures),this._snapshotTask.promise.then(i=>{this._queryEngine.featureStore.clear(),this._objectIdGenerator=this._createObjectIdGenerator(this._queryEngine,i);let o=this._normalizeFeatures(i);o&&this._queryEngine.featureStore.addMany(o)},i=>{this._queryEngine.featureStore.clear(),G(i)||A.getLogger("esri.layers.GeoJSONLayer").error(new g("geojson-layer:refresh","An error occurred during refresh",{error:i}))}),yield this._waitSnapshotComplete();let{fullExtent:s,timeExtent:a}=yield this._queryEngine.fetchRecomputedExtents();return{extent:s,timeExtent:a}})}_createFeatures(e){return p(this,null,function*(){if(e==null)return[];let{geometryType:s,hasZ:a,objectIdField:i}=this._queryEngine,o=ee(e,{geometryType:s,hasZ:a,objectIdField:i});if(!M(this._queryEngine.spatialReference,_))for(let n of o)n.geometry!=null&&(n.geometry=B(T(V(n.geometry,this._queryEngine.geometryType,this._queryEngine.hasZ,!1),_,this._queryEngine.spatialReference)));return o})}_waitSnapshotComplete(){return p(this,null,function*(){if(this._snapshotTask&&!this._snapshotTask.finished){try{yield this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}})}_fetch(e){return p(this,null,function*(){let{url:s,customParameters:a}=this._loadOptions,i=(yield Z(s??"",{responseType:"json",query:q({},a),signal:e})).data;return K(i),i})}_normalizeFeatures(e,s){let{objectIdField:a,fieldsIndex:i}=this._queryEngine,o=[];for(let n of e){let u=this._createDefaultAttributes(),d=j(i,u,n.attributes,!0);d?s?.push(d):(this._assignObjectId(u,n.attributes,!0),n.attributes=u,n.objectId=u[a],o.push(n))}return o}_applyEdits(e){return p(this,null,function*(){let{adds:s,updates:a,deletes:i}=e,o={addResults:[],deleteResults:[],updateResults:[],uidToObjectId:{}};if(s?.length&&this._applyAddEdits(o,s),a?.length&&this._applyUpdateEdits(o,a),i?.length){for(let d of i)o.deleteResults.push(w(d));this._queryEngine.featureStore.removeManyById(i)}let{fullExtent:n,timeExtent:u}=yield this._queryEngine.fetchRecomputedExtents();return{extent:n,timeExtent:u,featureEditResults:o}})}_applyAddEdits(e,s){let{addResults:a}=e,{geometryType:i,hasM:o,hasZ:n,objectIdField:u,spatialReference:d,featureStore:h,fieldsIndex:y}=this._queryEngine,f=[];for(let t of s){if(t.geometry&&i!==x(t.geometry)){a.push(F("Incorrect geometry type."));continue}let c=this._createDefaultAttributes(),l=j(y,c,t.attributes);if(l)a.push(l);else{if(this._assignObjectId(c,t.attributes),t.attributes=c,t.uid!=null){let m=t.attributes[u];e.uidToObjectId[t.uid]=m}if(t.geometry!=null){let m=t.geometry.spatialReference??d;t.geometry=T(R(t.geometry,m),m,d)}f.push(t),a.push(w(t.attributes[u]))}}h.addMany(J([],f,i,n,o,u))}_applyUpdateEdits({updateResults:e},s){let{geometryType:a,hasM:i,hasZ:o,objectIdField:n,spatialReference:u,featureStore:d,fieldsIndex:h}=this._queryEngine;for(let y of s){let{attributes:f,geometry:t}=y,c=f?.[n];if(c==null){e.push(F(`Identifier field ${n} missing`));continue}if(!d.has(c)){e.push(F(`Feature with object id ${c} missing`));continue}let l=L(d.getFeature(c),a,o,i);if(t!=null){if(a!==x(t)){e.push(F("Incorrect geometry type."));continue}let m=t.spatialReference??u;l.geometry=T(R(t,m),m,u)}if(f){let m=j(h,l.attributes,f);if(m){e.push(m);continue}}d.add(z(l,a,o,i,n)),e.push(w(c))}}_createObjectIdGenerator(e,s){let a=e.fieldsIndex.get(e.objectIdField);if(a.type==="esriFieldTypeString")return()=>a.name+"-"+Date.now().toString(16);let i=Number.NEGATIVE_INFINITY;for(let o of s)o.objectId&&(i=Math.max(i,o.objectId));return i=Math.max(0,i)+1,()=>i++}_assignObjectId(e,s,a=!1){let i=this._queryEngine.objectIdField;e[i]=a&&i in s?s[i]:this._objectIdGenerator()}_checkProjection(e){return p(this,null,function*(){try{yield b(_,e)}catch{throw new g("geojson-layer","Projection not supported")}})}};export{re as default};
