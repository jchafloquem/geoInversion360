import{a as N}from"./chunk-NOUYXRP4.js";import{e as F,i as x,j as A}from"./chunk-SRPI622Y.js";import{a as _}from"./chunk-W5OI4BJ2.js";import{h as u,p as f}from"./chunk-ZAQLF7TN.js";import{n as w,q as M,s as m}from"./chunk-BRWS572J.js";import{a as g,b as U}from"./chunk-JEGVIFEP.js";var l=class e{constructor(t,r,n,i,s,o,a){this.instanceId=t,this.textureKey=r,this.indexStart=n,this.indexCount=i,this.vertexStart=s,this.vertexCount=o,this.overlaps=a}updateBaseOffsets(t){this.vertexStart+=t.vertexFrom,this.indexStart+=t.indexFrom}clone(){return new e(this.instanceId,this.textureKey,this.indexStart,this.indexCount,this.vertexStart,this.vertexCount,this.overlaps)}static write(t,r,n,i,s,o,a,c){t.push(r),t.push(n),t.push(i),t.push(s),t.push(o),t.push(a),t.push(c)}serialize(t){return t.push(this.instanceId),t.push(this.textureKey),t.push(this.indexStart),t.push(this.indexCount),t.push(this.vertexStart),t.push(this.vertexCount),t.push(this.overlaps),t}static deserialize(t){let r=t.readInt32(),n=t.readInt32(),i=t.readInt32(),s=t.readInt32(),o=t.readInt32(),a=t.readInt32(),c=t.readInt32();return new e(r,n,i,s,o,a,c)}};l.byteSizeHint=7*Uint32Array.BYTES_PER_ELEMENT;function p(e,t){if(t!==null){e.push(t.length);for(let r of t)r.serialize(e);return e}e.push(0)}function h(e,t,r){let n=e.readInt32(),i=new Array(n);for(let s=0;s<i.length;s++)i[s]=t.deserialize(e,r);return i}var y=class e{constructor(t,r){this.id=t,this.sortKey=r,this.records=[]}serialize(t){return t.push(this.id),t.writeF32(this.sortKey),p(t,this.records),t}static deserialize(t){let r=t.readInt32(),n=t.readF32(),i=new e(r,n);return i.records=h(t,l)??[],i}};y.byteSizeHint=2*Uint32Array.BYTES_PER_ELEMENT+l.byteSizeHint;var L=new Float32Array(1),P=new Uint32Array(L.buffer);function D(e){return L[0]=e,P[0]}function K(e,t){return 65535&e|t<<16}function T(e){let t=D(e),r=t>>>31,n=t>>>23&255,i=8388607&t;return n-=127,n>15?r<<15|31744:n<-25?0:(n<-14&&(i+=8388608,i/=2**(-14-n),n=-15),n+=15,i/=8192,i=z(i,1023),r<<15|n<<10|i)}function z(e,t){let r=Math.floor(e),n=e-r;return r<t&&(n>.5||n===.5&&r%2==1)?r+1:r}function S(e){let t=e>>>15,r=e>>10&31,n=1023&e;return t=t?-1:1,r-=15,n/=1024,r>-15?n+=1:r=-14,t*2**r*n}function Q(e){let t=e.map(({name:r,count:n,type:i})=>`${r}.${n}.${i}`).join(",");return w(t)}function E(e,t,r,n,i,s,o){if(e.primitiveName===t){for(let a in e)if(a===r){let c=n?.readWithDefault(i,s,e[a]&&o);return e.type==="text"&&(c=c.toString()),void(e[a]=c)}}if("type"in e&&e.type!=null)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":if(e.symbolLayers)for(let a of e.symbolLayers)E(a,t,r,n,i,s,o);break;case"CIMHatchFill":e.lineSymbol&&E(e.lineSymbol,t,r,n,i,s,o);break;case"CIMSolidStroke":case"CIMSolidFill":case"CIMVectorMarker":if(e.type==="CIMVectorMarker"&&e.markerGraphics)for(let a of e.markerGraphics)E(a,t,r,n,i,s,o),E(a.symbol,t,r,n,i,s,o)}}var C=400;function W(e){let t=e.width;return e.effects!=null?C:Math.max(1.25*t,8)}var b=()=>M.getLogger("esri.views.2d.engine.webgl.Utils");function mt(e){switch(e){case f.UNSIGNED_BYTE:return 1;case f.UNSIGNED_SHORT_4_4_4_4:return 2;case f.FLOAT:return 4;default:return void b().error(new m("webgl-utils",`Unable to handle type ${e}`))}}function yt(e){switch(e){case f.UNSIGNED_BYTE:return Uint8Array;case f.UNSIGNED_SHORT_4_4_4_4:return Uint16Array;case f.FLOAT:return Float32Array;default:return void b().error(new m("webgl-utils",`Unable to handle type ${e}`))}}function k(e){let t={};for(let r in e){let n=e[r],i=0;t[r]=n.map(s=>{let o=new _(s.name,s.count,s.type,i,0,s.normalized||!1);return i+=s.count*F(s.type),o}),t[r]?.forEach(s=>s.stride=i)}return t}var O=e=>{let t=new Map;for(let r in e)for(let n of e[r])t.set(n.name,n.location);return t},H=e=>{let t={};for(let r in e){let n=e[r];t[r]=n?.length?n[0].stride:0}return t},I=new Map,Tt=(e,t)=>{if(!I.has(e)){let r=k(t),n={strides:H(r),bufferLayouts:r,attributes:O(t)};I.set(e,n)}return I.get(e)},St=e=>e.includes("data:image/svg+xml");function It(e){let t=[];for(let r=0;r<e.length;r++)t.push(e.charCodeAt(r));return t}function gt(e,t,r){let n=new x(t.width,t.height);return n.dataType=t.dataType,t.depth&&(n.depth=t.depth),t.flipped&&(n.flipped=t.flipped),t.hasMipmap&&(n.hasMipmap=t.hasMipmap),n.internalFormat=t.internalFormat,t.isImmutable&&(n.isImmutable=t.isImmutable),t.isOpaque&&(n.isOpaque=t.isOpaque),t.maxAnisotropy&&(n.maxAnisotropy=t.maxAnisotropy),n.pixelFormat=t.pixelFormat,t.preMultiplyAlpha&&(n.preMultiplyAlpha=t.preMultiplyAlpha),t.samplingMode&&(n.samplingMode=t.samplingMode),t.target&&(n.target=t.target),n.uniform=t.uniform,t.unpackAlignment&&(n.unpackAlignment=t.unpackAlignment),t.wrapMode&&(n.wrapMode=t.wrapMode),new A(e,n,r)}function Ut(e){return"url"in e&&"urlHash"in e?U(g({},e),{url:""}):e}var B=class e{constructor(t,r,n,i,s,o,a,c,d=[]){this.entityTexel=t,this.anchorX=r,this.anchorY=n,this.directionX=i,this.directionY=s,this.maxScale=o,this.minScale=a,this.referenceBounds=c,this.bounds=d}serialize(t){t.push(this.entityTexel),t.writeF32(this.anchorX),t.writeF32(this.anchorY),t.writeF32(this.directionX),t.writeF32(this.directionY),t.writeF32(this.maxScale),t.writeF32(this.minScale),this.referenceBounds===null?(t.writeF32(0),t.writeF32(0),t.writeF32(0)):(t.writeF32(this.referenceBounds.size),t.writeF32(this.referenceBounds.offsetX),t.writeF32(this.referenceBounds.offsetY)),p(t,this.bounds)}static deserialize(t){let r=t.readInt32(),n=t.readF32(),i=t.readF32(),s=t.readF32(),o=t.readF32(),a=t.readF32(),c=t.readF32(),d=t.readF32(),R=t.readF32(),Y=t.readF32(),v=h(t,N)??[];return new e(r,n,i,s,o,a,c,{size:d,offsetX:R,offsetY:Y},v)}};function Lt(e,t,r,n){let i=r.packPrecisionFactor??1;switch(r.type){case u.BYTE:if(r.count===1)e.setInt8(n+r.offset,t*i);else for(let s=0;s<r.count;s++){let o=s*Int8Array.BYTES_PER_ELEMENT;e.setInt8(n+r.offset+o,t[s]*i)}break;case u.UNSIGNED_BYTE:if(r.count===1)e.setUint8(n+r.offset,t*i);else for(let s=0;s<r.count;s++){let o=s*Uint8Array.BYTES_PER_ELEMENT;e.setUint8(n+r.offset+o,t[s]*i)}break;case u.SHORT:if(r.count===1)e.setInt16(n+r.offset,t*i,!0);else for(let s=0;s<r.count;s++){let o=s*Int16Array.BYTES_PER_ELEMENT;e.setInt16(n+r.offset+o,t[s]*i,!0)}break;case u.UNSIGNED_SHORT:if(r.count===1)e.setUint16(n+r.offset,t*i,!0);else for(let s=0;s<r.count;s++){let o=s*Uint16Array.BYTES_PER_ELEMENT;e.setUint16(n+r.offset+o,t[s]*i,!0)}break;case u.INT:if(r.count===1)e.setInt32(n+r.offset,t*i,!0);else for(let s=0;s<r.count;s++){let o=s*Int32Array.BYTES_PER_ELEMENT;e.setInt32(n+r.offset+o,t[s]*i,!0)}break;case u.UNSIGNED_INT:if(r.count===1)e.setUint32(n+r.offset,t*i,!0);else for(let s=0;s<r.count;s++){let o=s*Uint32Array.BYTES_PER_ELEMENT;e.setUint32(n+r.offset+o,t[s]*i,!0)}break;case u.FLOAT:if(r.count===1)e.setFloat32(n+r.offset,t*i,!0);else for(let s=0;s<r.count;s++){let o=s*Float32Array.BYTES_PER_ELEMENT;e.setFloat32(n+r.offset+o,t[s]*i,!0)}break;case u.HALF_FLOAT:if(r.count===1)e.setUint16(n+r.offset,T(t*i),!0);else for(let s=0;s<r.count;s++){let o=s*Uint16Array.BYTES_PER_ELEMENT;e.setUint16(n+r.offset+o,T(t[s]*i),!0)}}}function bt(e,t,r){switch(t.type){case u.BYTE:{if(t.count===1)return e.getInt8(r+t.offset);let n=[];for(let i=0;i<t.count;i++){let s=i*Int8Array.BYTES_PER_ELEMENT;n.push(e.getInt8(r+t.offset+s))}return n}case u.UNSIGNED_BYTE:{if(t.count===1)return e.getUint8(r+t.offset);let n=[];for(let i=0;i<t.count;i++){let s=i*Uint8Array.BYTES_PER_ELEMENT;n.push(e.getUint8(r+t.offset+s))}return n}case u.SHORT:{if(t.count===1)return e.getInt16(r+t.offset,!0);let n=[];for(let i=0;i<t.count;i++){let s=i*Int16Array.BYTES_PER_ELEMENT;n.push(e.getInt16(r+t.offset+s,!0))}return n}case u.UNSIGNED_SHORT:{if(t.count===1)return e.getUint16(r+t.offset,!0);let n=[];for(let i=0;i<t.count;i++){let s=i*Uint16Array.BYTES_PER_ELEMENT;n.push(e.getUint16(r+t.offset+s,!0))}return n}case u.INT:{if(t.count===1)return e.getInt32(r+t.offset,!0);let n=[];for(let i=0;i<t.count;i++){let s=i*Int32Array.BYTES_PER_ELEMENT;n.push(e.getInt32(r+t.offset+s,!0))}return n}case u.UNSIGNED_INT:{if(t.count===1)return e.getUint32(r+t.offset,!0);let n=[];for(let i=0;i<t.count;i++){let s=i*Uint32Array.BYTES_PER_ELEMENT;n.push(e.getUint32(r+t.offset+s,!0))}return n}case u.FLOAT:{if(t.count===1)return e.getFloat32(r+t.offset,!0);let n=[];for(let i=0;i<t.count;i++){let s=i*Float32Array.BYTES_PER_ELEMENT;n.push(e.getFloat32(r+t.offset+s,!0))}return n}case u.HALF_FLOAT:{if(t.count===1)return S(e.getUint16(r+t.offset,!0));let n=[];for(let i=0;i<t.count;i++){let s=i*Uint16Array.BYTES_PER_ELEMENT;n.push(S(e.getUint16(r+t.offset+s,!0)))}return n}}}export{l as a,h as b,y as c,mt as d,yt as e,Tt as f,St as g,It as h,gt as i,Ut as j,K as k,Q as l,E as m,W as n,Lt as o,bt as p,B as q};
