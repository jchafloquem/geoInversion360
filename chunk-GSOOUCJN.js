import{a as lt}from"./chunk-YUIUJIOR.js";import{v as Tt}from"./chunk-SO6OJFOM.js";import{f as Bt}from"./chunk-TMZNSBQB.js";import{s as Pt}from"./chunk-OFVMJORF.js";import{a as Ut}from"./chunk-VC35VCVT.js";import{a as vt}from"./chunk-MT7BXRRQ.js";import{I as X,T as bt}from"./chunk-Z5NXR7SL.js";import{S as At}from"./chunk-7JLWSSXP.js";import{a as W}from"./chunk-W3WDPWBE.js";import{h as kt}from"./chunk-JKP4I6UL.js";import{b as yt,q as H,s as Mt}from"./chunk-BRWS572J.js";import{a as Z,b as pt}from"./chunk-AKNRR36C.js";import{g as at}from"./chunk-JEGVIFEP.js";var rt=class{constructor(e=null,n=null,o=null){this.minValue=e,this.maxValue=n,this.noDataValue=o}};var Q,O=Q=class extends bt{static createEmptyBand(t,e){return new(Q.getPixelArrayConstructor(t))(e)}static combineBandMasks(t){if(t.length<2)return t[0];let e=t[0].length,n=new Uint8Array(e).fill(255);for(let o=0;o<t.length;o++){let a=t[o];for(let i=0;i<e;i++)a[i]||(n[i]=0)}return n}static getPixelArrayConstructor(t){let e;switch(t){case"u1":case"u2":case"u4":case"u8":e=Uint8Array;break;case"u16":e=Uint16Array;break;case"u32":e=Uint32Array;break;case"s8":e=Int8Array;break;case"s16":e=Int16Array;break;case"s32":e=Int32Array;break;case"f32":case"c64":case"c128":case"unknown":e=Float32Array;break;case"f64":e=Float64Array}return e}constructor(t){super(t),this.width=null,this.height=null,this.pixelType="f32",this.validPixelCount=null,this.mask=null,this.maskIsAlpha=!1,this.premultiplyAlpha=!1,this.statistics=null,this.depthCount=1}castPixelType(t){if(!t)return"f32";let e=t.toLowerCase();return["u1","u2","u4"].includes(e)?e="u8":["unknown","u8","s8","u16","s16","u32","s32","f32","f64"].includes(e)||(e="f32"),e}getPlaneCount(){return this.pixels?.length}addData(t){if(!t.pixels||t.pixels.length!==this.width*this.height)throw new Mt("pixelblock:invalid-or-missing-pixels","add data requires valid pixels array that has same length defined by pixel block width * height");this.pixels||(this.pixels=[]),this.statistics||(this.statistics=[]),this.pixels.push(t.pixels),this.statistics.push(t.statistics??new rt)}getAsRGBA(){let t=new ArrayBuffer(this.width*this.height*4);switch(this.pixelType){case"s8":case"s16":case"u16":case"s32":case"u32":case"f32":case"f64":this._fillFromNon8Bit(t);break;default:this._fillFrom8Bit(t)}return new Uint8ClampedArray(t)}getAsRGBAFloat(){let t=new Float32Array(this.width*this.height*4);return this._fillFrom32Bit(t),t}updateStatistics(){if(!this.pixels)return;this.statistics=this.pixels.map(n=>Xt(n,this.mask));let t=this.mask,e=0;if(t!=null)for(let n=0;n<t.length;n++)t[n]&&e++;else e=this.width*this.height;this.validPixelCount=e}clamp(t){if(!t||t==="f64"||t==="f32"||!this.pixels)return;let[e,n]=lt(t),o=this.pixels,a=this.width*this.height,i=o.length,r,c,h,l=[];for(let s=0;s<i;s++){h=Q.createEmptyBand(t,a),r=o[s];for(let f=0;f<a;f++)c=r[f],h[f]=c>n?n:c<e?e:c;l.push(h)}this.pixels=l,this.pixelType=t}extractBands(t){let{pixels:e,statistics:n}=this;if(t==null||t.length===0||!e||e.length===0)return this;let o=e.length,a=t.some(f=>f>=e.length),i=o===t.length&&!t.some((f,p)=>f!==p);if(a||i)return this;let r=this.bandMasks?.length===o?t.map(f=>this.bandMasks[f]):void 0,{mask:c,validPixelCount:h}=this,{width:l,height:s}=this;return r?.length&&(c=Q.combineBandMasks(r),h=c.filter(f=>!!f).length),new Q({pixelType:this.pixelType,width:l,height:s,mask:c,bandMasks:r,validPixelCount:h,maskIsAlpha:this.maskIsAlpha,pixels:t.map(f=>e[f]),statistics:n&&t.map(f=>n[f])})}clone(){let t=new Q({width:this.width,height:this.height,pixelType:this.pixelType,maskIsAlpha:this.maskIsAlpha,validPixelCount:this.validPixelCount}),e;this.mask!=null&&(t.mask=new Uint8Array(this.mask)),this.bandMasks&&(t.bandMasks=this.bandMasks.map(o=>new Uint8Array(o)));let n=Q.getPixelArrayConstructor(this.pixelType);if(this.pixels&&this.pixels.length>0){t.pixels=[];let o=!!this.pixels[0].slice;for(e=0;e<this.pixels.length;e++)t.pixels[e]=o?this.pixels[e].slice(0,this.pixels[e].length):new n(this.pixels[e])}if(this.statistics)for(t.statistics=[],e=0;e<this.statistics.length;e++)t.statistics[e]=yt(this.statistics[e]);return t.premultiplyAlpha=this.premultiplyAlpha,t}_fillFrom8Bit(t){let{mask:e,maskIsAlpha:n,premultiplyAlpha:o,pixels:a}=this;if(!t||!a?.length)return void H.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let i,r,c,h;i=r=c=a[0],a.length>=3?(r=a[1],c=a[2]):a.length===2&&(r=a[1]);let l=new Uint32Array(t),s=this.width*this.height;if(i.length===s)if(e!=null&&e.length===s)if(n)for(h=0;h<s;h++){let f=e[h];if(f){let p=f/255;l[h]=o?f<<24|c[h]*p<<16|r[h]*p<<8|i[h]*p:f<<24|c[h]<<16|r[h]<<8|i[h]}}else for(h=0;h<s;h++)e[h]&&(l[h]=255<<24|c[h]<<16|r[h]<<8|i[h]);else for(h=0;h<s;h++)l[h]=255<<24|c[h]<<16|r[h]<<8|i[h];else H.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.")}_fillFromNon8Bit(t){let{pixels:e,mask:n,statistics:o}=this;if(!t||!e?.length)return void H.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The input pixel block is empty.");let a=this.pixelType,i=1,r=0,c=1;if(o&&o.length>0){for(let d of o)if(d.minValue!=null&&(r=Math.min(r,d.minValue)),d.maxValue!=null&&d.minValue!=null){let g=d.maxValue-d.minValue;c=Math.max(c,g)}i=255/c}else{let d=255;a==="s8"?(r=-128,d=127):a==="u16"?d=65535:a==="s16"?(r=-32768,d=32767):a==="u32"?d=4294967295:a==="s32"?(r=-2147483648,d=2147483647):a==="f32"?(r=-34e38,d=34e38):a==="f64"&&(r=-Number.MAX_VALUE,d=Number.MAX_VALUE),i=255/(d-r)}let h=new Uint32Array(t),l=this.width*this.height,s,f,p,u,m;if(s=f=p=e[0],s.length!==l)return H.getLogger(this).error("getAsRGBA()","Unable to convert to RGBA. The pixelblock is invalid.");if(e.length>=2)if(f=e[1],e.length>=3&&(p=e[2]),n!=null&&n.length===l)for(u=0;u<l;u++)n[u]&&(h[u]=255<<24|(p[u]-r)*i<<16|(f[u]-r)*i<<8|(s[u]-r)*i);else for(u=0;u<l;u++)h[u]=255<<24|(p[u]-r)*i<<16|(f[u]-r)*i<<8|(s[u]-r)*i;else if(n!=null&&n.length===l)for(u=0;u<l;u++)m=(s[u]-r)*i,n[u]&&(h[u]=255<<24|m<<16|m<<8|m);else for(u=0;u<l;u++)m=(s[u]-r)*i,h[u]=255<<24|m<<16|m<<8|m}_fillFrom32Bit(t){let{pixels:e,mask:n}=this;if(!t||!e?.length)return H.getLogger(this).error("getAsRGBAFloat()","Unable to convert to RGBA. The input pixel block is empty.");let o,a,i,r;o=a=i=e[0],e.length>=3?(a=e[1],i=e[2]):e.length===2&&(a=e[1]);let c=this.width*this.height;if(o.length!==c)return H.getLogger(this).error("getAsRGBAFloat()","Unable to convert to RGBA. The pixelblock is invalid.");let h=0;if(n!=null&&n.length===c)for(r=0;r<c;r++)t[h++]=o[r],t[h++]=a[r],t[h++]=i[r],t[h++]=1&n[r];else for(r=0;r<c;r++)t[h++]=o[r],t[h++]=a[r],t[h++]=i[r],t[h++]=1}};function Xt(t,e){let n=1/0,o=-1/0,a=t.length,i,r=0;if(e!=null)for(i=0;i<a;i++)e[i]&&(r=t[i],n=r<n?r:n,o=r>o?r:o);else for(i=0;i<a;i++)r=t[i],n=r<n?r:n,o=r>o?r:o;return new rt(n,o)}W([X({json:{write:!0}})],O.prototype,"width",void 0),W([X({json:{write:!0}})],O.prototype,"height",void 0),W([X({json:{write:!0}})],O.prototype,"pixelType",void 0),W([Ut("pixelType")],O.prototype,"castPixelType",null),W([X({json:{write:!0}})],O.prototype,"validPixelCount",void 0),W([X({json:{write:!0}})],O.prototype,"mask",void 0),W([X({json:{write:!0}})],O.prototype,"maskIsAlpha",void 0),W([X({json:{write:!0}})],O.prototype,"pixels",void 0),W([X()],O.prototype,"premultiplyAlpha",void 0),W([X({json:{write:!0}})],O.prototype,"statistics",void 0),W([X({json:{write:!0}})],O.prototype,"depthCount",void 0),W([X({json:{write:!0}})],O.prototype,"noDataValues",void 0),W([X({json:{write:!0}})],O.prototype,"bandMasks",void 0),O=Q=W([At("esri.layers.support.PixelBlock")],O);var _=O;var It,St;(function(t){t[t.matchAny=0]="matchAny",t[t.matchAll=1]="matchAll"})(It||(It={})),function(t){t[t.bestMatch=0]="bestMatch",t[t.fail=1]="fail"}(St||(St={}));var Ie=6;function R(t){return t!=null&&t.declaredClass==="esri.layers.support.PixelBlock"&&t.pixels&&t.pixels.length>0}function Se(t){if(!t?.length||t.some(s=>!R(s)))return null;if(t.length===1)return t[0]?.clone()??null;let e=t,{width:n,height:o,pixelType:a}=e[0];if(e.some(s=>s.width!==n||s.height!==o))return null;let i=e.map(({mask:s})=>s).filter(s=>s!=null),r=null;i.length&&(r=new Uint8Array(n*o),r.set(i[0]),i.length>1&&_t(i.slice(1),r));let c=[];e.forEach(({pixels:s})=>c.push(...s));let h=e.map(({statistics:s})=>s).filter(s=>s?.length),l=[];return h.forEach(s=>l.push(...s)),new _({pixelType:a,width:n,height:o,mask:r,pixels:c,statistics:l.length?l:null})}function Ve(t){if(!t)return;let e=t.colormap;if(!e||e.length===0)return;let n=e.sort((f,p)=>f[0]-p[0]),o=0;n[0][0]<0&&(o=n[0][0]);let a=Math.max(256,n[n.length-1][0]-o+1),i=new Uint8Array(4*a),r=[],c,h=0,l=0,s=n[0].length===5;if(a>65536)return n.forEach(f=>{r[f[0]-o]=s?f.slice(1):f.slice(1).concat([255])}),{indexed2DColormap:r,offset:o,alphaSpecified:s};if(t.fillUnspecified)for(c=n[l],h=c[0]-o;h<a;h++)i[4*h]=c[1],i[4*h+1]=c[2],i[4*h+2]=c[3],i[4*h+3]=s?c[4]:255,h===c[0]-o&&(c=l===n.length-1?c:n[++l]);else for(h=0;h<n.length;h++)c=n[h],l=4*(c[0]-o),i[l]=c[1],i[l+1]=c[2],i[l+2]=c[3],i[l+3]=s?c[4]:255;return{indexedColormap:i,offset:o,alphaSpecified:s}}function Fe(t,e){if(!R(t)||!e||!e.indexedColormap&&!e.indexed2DColormap)return t;let n=t.clone(),o=n.pixels,a=n.mask,i=n.width*n.height;if(o.length!==1)return t;let{indexedColormap:r,indexed2DColormap:c,offset:h,alphaSpecified:l}=e,s=0,f=o[0],p=new Uint8Array(f.length),u=new Uint8Array(f.length),m=new Uint8Array(f.length),d,g=0;if(r){let w=r.length-1;if(a!=null)for(s=0;s<i;s++)a[s]&&(g=4*(f[s]-h),g<h||g>w?a[s]=0:(p[s]=r[g],u[s]=r[g+1],m[s]=r[g+2],a[s]=r[g+3]));else{for(a=new Uint8Array(i),s=0;s<i;s++)g=4*(f[s]-h),g<h||g>w?a[s]=0:(p[s]=r[g],u[s]=r[g+1],m[s]=r[g+2],a[s]=r[g+3]);n.mask=a}}else if(c)if(a!=null)for(s=0;s<i;s++)a[s]&&(d=c[f[s]],p[s]=d[0],u[s]=d[1],m[s]=d[2],a[s]=d[3]);else{for(a=new Uint8Array(i),s=0;s<i;s++)d=c[f[s]],p[s]=d[0],u[s]=d[1],m[s]=d[2],a[s]=d[3];n.mask=a}return n.pixels=[p,u,m],n.statistics=null,n.pixelType="u8",n.maskIsAlpha=l,n}function Ce(t,e){if(!R(t))return null;let{pixels:n,mask:o}=t,a=n.length,i=e.lut,{offset:r}=e;i&&i[0].length===1&&(i=n.map(()=>i));let c=[],h=e.outputPixelType||"u8";for(let s=0;s<a;s++){let f=Dt(n[s],o,i[s],r||0,h);c.push(f)}let l=new _({width:t.width,height:t.height,pixels:c,mask:o,pixelType:h});return l.updateStatistics(),l}function Dt(t,e,n,o,a){let i=t.length,r=_.createEmptyBand(a,i);if(e)for(let c=0;c<i;c++)e[c]&&(r[c]=n[t[c]-o]);else for(let c=0;c<i;c++)r[c]=n[t[c]-o];return r}function De(t,e){if(!R(t))return null;let n=t.clone(),{pixels:o}=n,a=n.width*n.height,i=e.length,r=Math.floor(i/2),c=e[Math.floor(r)],h=o[0],l,s,f,p,u,m,d=!1,g=new Uint8Array(a),w=new Uint8Array(a),k=new Uint8Array(a),y=n.mask,A=e[0].mappedColor.length===4;for(y||(y=new Uint8Array(a),y.fill(A?255:1),n.mask=y),u=0;u<a;u++)if(y[u]){for(l=h[u],d=!1,m=r,s=c,f=0,p=i-1;p-f>1;){if(l===s.value){d=!0;break}l>s.value?f=m:p=m,m=Math.floor((f+p)/2),s=e[Math.floor(m)]}d||(l===e[f].value?(s=e[f],d=!0):l===e[p].value?(s=e[p],d=!0):l<e[f].value?(d=!1,s=null):l>e[f].value&&(l<e[p].value?(s=e[f],d=!0):p===i-1?(d=!1,s=null):(s=e[p],d=!0))),d?(g[u]=s.mappedColor[0],w[u]=s.mappedColor[1],k[u]=s.mappedColor[2],y[u]=s.mappedColor[3]):g[u]=w[u]=k[u]=y[u]=0}return n.pixels=[g,w,k],n.mask=y,n.pixelType="u8",n.maskIsAlpha=A,n}function _e(t,e){if(!R(t))return null;let{width:n,height:o}=t,{inputRanges:a,outputValues:i,outputPixelType:r,noDataRanges:c,allowUnmatched:h,isLastInputRangeInclusive:l}=e,s=t.pixels[0],f=_.createEmptyBand(r,s.length),p=t.mask,u=new Uint8Array(n*o);p?u.set(p):u.fill(255);let m=t.pixelType.startsWith("f")?1e-6:0,d=a.map(A=>A-m);d[0]=a[0],d[d.length-1]=a[a.length-1]+(l?1e-6:0);let g=a.length/2,[w,k]=lt(r);for(let A=0;A<o;A++)for(let x=0;x<n;x++){let M=A*n+x;if(u[M]){let b=s[M],v=!1;for(let T=g-1;T>=0;T--)if(b===d[2*T]||b>d[2*T]&&b<d[2*T+1]){f[M]=i[T],v=!0;break}v||(h?f[M]=b>k?k:b<w?w:b:u[M]=0)}}let y=c?.length;if(y)for(let A=0;A<o;A++)for(let x=0;x<n;x++){let M=A*n+x;if(!p||p[M]){let b=s[M];for(let v=0;v<y;v+=2)if(b>=c[v]&&b<=c[v+1]){f[M]=0,u[M]=0;break}}}return new _({width:n,height:o,pixelType:r,pixels:[f],mask:u})}function Vt(t,e,n,o){let a=n!=null&&n.length>=2?new Set(n):null,i=n?.length===1?n[0]:null,r=!!e?.length;for(let c=0;c<t.length;c++)if(o[c]){let h=t[c];if(r){let l=!1;for(let s=0;s<e.length;s+=2)if(h>=e[s]&&h<=e[s+1]){l=!0;break}l||(o[c]=0)}o[c]&&(h===i||a?.has(h))&&(o[c]=0)}}function Ft(t,e){let n=t[0].length;for(let o=0;o<n;o++)if(e[o]){let a=!1;for(let i=0;i<t.length;i++)if(t[i][o]){a=!0;break}a||(e[o]=0)}}function _t(t,e){let n=t[0].length;for(let o=0;o<n;o++)if(e[o]){let a=!1;for(let i=0;i<t.length;i++)if(t[i][o]===0){a=!0;break}a&&(e[o]=0)}}function Re(t,e){if(!R(t))return null;let{width:n,height:o,pixels:a}=t,i=n*o,r=new Uint8Array(i);t.mask?r.set(t.mask):r.fill(255);let c=a.length,{includedRanges:h,noDataValues:l,outputPixelType:s,matchAll:f,lookups:p}=e;if(p){let u=[];for(let m=0;m<c;m++){let d=p[m],g=Dt(a[m],r,d.lut,d.offset||0,"u8");u.push(g)}u.length===1?r.set(u[0]):f?Ft(u,r):_t(u,r)}else if(f){let u=[];for(let m=0;m<c;m++){let d=new Uint8Array(i);d.set(r),Vt(a[m],h?.slice(2*m,2*m+2),l?.[m],d),u.push(d)}u.length===1?r.set(u[0]):Ft(u,r)}else for(let u=0;u<c;u++)Vt(a[u],h?.slice(2*u,2*u+2),l?.[u],r);return new _({width:n,height:o,pixelType:s,pixels:a,mask:r})}function Le(t){let{srcPixelType:e,inputRanges:n,outputValues:o,allowUnmatched:a,noDataRanges:i,isLastInputRangeInclusive:r,outputPixelType:c}=t;if(e!=="u8"&&e!=="s8"&&e!=="u16"&&e!=="s16")return null;let h=e.includes("16")?65536:256,l=e.includes("s")?-h/2:0,s=_.createEmptyBand(c,h),f=new Uint8Array(h);a&&f.fill(255);let[p,u]=lt(c);if(n?.length&&o?.length){let d=n.map(g=>g-1e-6);d[0]=n[0],r&&(d[d.length-1]=n[n.length-1]);for(let g=0;g<d.length;g++){let w=o[g]>u?u:o[g]<p?p:o[g],k=Math.ceil(d[2*g]-l),y=Math.floor(d[2*g+1]-l);for(let A=k;A<=y;A++)s[A]=w,f[A]=255}}if(i?.length)for(let m=0;m<i.length;m++){let d=Math.ceil(i[2*m]-l),g=Math.floor(i[2*m+1]-l);for(let w=d;w<=g;w++)f[w]=0}return{lut:s,offset:l,mask:f}}function Ne(t,e,n){if(t!=="u8"&&t!=="s8"&&t!=="u16"&&t!=="s16")return null;let o=t.includes("16")?65536:256,a=t.includes("s")?-o/2:0,i=new Uint8Array(o);if(e)for(let r=0;r<e.length;r++){let c=Math.ceil(e[2*r]-a),h=Math.floor(e[2*r+1]-a);for(let l=c;l<=h;l++)i[l]=255}else i.fill(255);if(n)for(let r=0;r<n.length;r++)i[n[r]-a]=0;return{lut:i,offset:a}}function Kt(t,e,n,o,a,i,r,c){return{xmin:a<=n*t?0:a<n*t+t?a-n*t:t,ymin:i<=o*e?0:i<o*e+e?i-o*e:e,xmax:a+r<=n*t?0:a+r<n*t+t?a+r-n*t:t,ymax:i+c<=o*e?0:i+c<o*e+e?i+c-o*e:e}}function Ee(t,e){if(!t||t.length===0)return null;let n=t.find(m=>m.pixelBlock);if(n?.pixelBlock==null)return null;let o=(n.extent.xmax-n.extent.xmin)/n.pixelBlock.width,a=(n.extent.ymax-n.extent.ymin)/n.pixelBlock.height,i=.01*Math.min(o,a),r=t.sort((m,d)=>Math.abs(m.extent.ymax-d.extent.ymax)>i?d.extent.ymax-m.extent.ymax:Math.abs(m.extent.xmin-d.extent.xmin)>i?m.extent.xmin-d.extent.xmin:0),c=Math.min.apply(null,r.map(m=>m.extent.xmin)),h=Math.min.apply(null,r.map(m=>m.extent.ymin)),l=Math.max.apply(null,r.map(m=>m.extent.xmax)),s=Math.max.apply(null,r.map(m=>m.extent.ymax)),f={x:Math.round((e.xmin-c)/o),y:Math.round((s-e.ymax)/a)},p={width:Math.round((l-c)/o),height:Math.round((s-h)/a)},u={width:Math.round((e.xmax-e.xmin)/o),height:Math.round((e.ymax-e.ymin)/a)};return Math.round(p.width/n.pixelBlock.width)*Math.round(p.height/n.pixelBlock.height)!==r.length||f.x<0||f.y<0||p.width<u.width||p.height<u.height?null:{extent:e,pixelBlock:$t(r.map(m=>m.pixelBlock),p,{clipOffset:f,clipSize:u})}}function mt(t,e,n,o,a,i){let{width:r,height:c}=n.block,{x:h,y:l}=n.offset,{width:s,height:f}=n.mosaic,p=Kt(r,c,o,a,h,l,s,f),u=0,m=0;if(i){let d=i.hasGCSSShiftTransform?360:i.halfWorldWidth??0,g=r*i.resolutionX,w=i.startX+o*g;w<d&&w+g>d?m=i.rightPadding:w>=d&&(u=i.leftMargin-i.rightPadding,m=0)}if(p.xmax-=m,typeof e!="number")for(let d=p.ymin;d<p.ymax;d++){let g=(a*c+d-l)*s+(o*r-h)+u,w=d*r;for(let k=p.xmin;k<p.xmax;k++)t[g+k]=e[w+k]}else for(let d=p.ymin;d<p.ymax;d++){let g=(a*c+d-l)*s+(o*r-h)+u;for(let w=p.xmin;w<p.xmax;w++)t[g+w]=e}}function $t(t,e,n={}){let{clipOffset:o,clipSize:a,alignmentInfo:i,blockWidths:r}=n;if(r)return Ht(t,e,{blockWidths:r});let c=t.find(P=>R(P));if(c==null)return null;let h=a?a.width:e.width,l=a?a.height:e.height,s=c.width,f=c.height,p=e.width/s,u=e.height/f,m={offset:o||{x:0,y:0},mosaic:a||e,block:{width:s,height:f}},d=c.pixelType,g=_.getPixelArrayConstructor(d),w=c.pixels.length,k=[],y,A;for(let P=0;P<w;P++){A=new g(h*l);for(let B=0;B<u;B++)for(let U=0;U<p;U++){let I=t[B*p+U];R(I)&&(y=I.pixels[P],mt(A,y,m,U,B,i))}k.push(A)}let x=t.some(P=>P==null||P.mask!=null&&P.mask.length>0),M=t.some(P=>P?.bandMasks&&P.bandMasks.length>1),b=x?new Uint8Array(h*l):void 0,v=M?[]:void 0;if(b){for(let P=0;P<u;P++)for(let B=0;B<p;B++){let U=t[P*p+B],I=U!=null?U.mask:null;mt(b,I??(U?255:0),m,B,P,i)}if(v)for(let P=0;P<w;P++){let B=new Uint8Array(h*l);for(let U=0;U<u;U++)for(let I=0;I<p;I++){let C=t[U*p+I],V=C?.bandMasks?.[P]??C?.mask;mt(B,V??(C?255:0),m,I,U,i)}v.push(B)}}let T=new _({width:h,height:l,pixels:k,pixelType:d,bandMasks:v,mask:b});return T.updateStatistics(),T}function Ht(t,e,n){let o=t.find(g=>g!=null);if(o==null)return null;let a=t.some(g=>g==null||!!g.mask),{width:i,height:r}=e,c=a?new Uint8Array(i*r):null,{blockWidths:h}=n,l=[],s=o.getPlaneCount(),f=_.getPixelArrayConstructor(o.pixelType);if(a)for(let g=0,w=0;g<t.length;w+=h[g],g++){let k=t[g];if(!R(k))continue;let y=k.mask;for(let A=0;A<r;A++)for(let x=0;x<h[g];x++)c[A*i+x+w]=y==null?255:y[A*k.width+x]}let p=t.some(g=>g?.bandMasks&&g.bandMasks.length>1),u=p?[]:void 0,m=i*r;for(let g=0;g<s;g++){let w=new f(m),k=p?new Uint8Array(m):void 0;for(let y=0,A=0;y<t.length;A+=h[y],y++){let x=t[y];if(!R(x))continue;let M=x.pixels[g];if(M!=null){for(let b=0;b<r;b++)for(let v=0;v<h[y];v++)w[b*i+v+A]=M[b*x.width+v];if(k){let b=x.bandMasks?.[g]??x.mask;for(let v=0;v<r;v++)for(let T=0;T<h[y];T++)k[v*i+T+A]=b?b[v*x.width+T]:255}}}l.push(w),u&&k&&u.push(k)}let d=new _({width:i,height:r,mask:c,bandMasks:u,pixels:l,pixelType:o.pixelType});return d.updateStatistics(),d}function je(t,e,n){if(!R(t))return null;let{width:o,height:a}=t,i=e.x,r=e.y,c=n.width+i,h=n.height+r;if(i<0||r<0||c>o||h>a||i===0&&r===0&&c===o&&h===a)return t;t.mask||(t.mask=new Uint8Array(o*a));let l=t.mask;for(let s=0;s<a;s++){let f=s*o;for(let p=0;p<o;p++)l[f+p]=s<r||s>=h||p<i||p>=c?0:1}return t.updateStatistics(),t}function Qt(t){if(!R(t))return null;let e=t.clone(),{width:n,height:o,pixels:a}=t,i=a[0],r=e.pixels[0],c=t.mask;for(let h=2;h<o-1;h++){let l=new Map;for(let f=h-2;f<h+2;f++)for(let p=0;p<4;p++){let u=f*n+p;ot(l,i[u],c?c[u]:1)}r[h*n]=Ct(l),r[h*n+1]=r[h*n+2]=r[h*n];let s=3;for(;s<n-1;s++){let f=(h-2)*n+s+1;ot(l,i[f],c?c[f]:1),f=(h-1)*n+s+1,ot(l,i[f],c?c[f]:1),f=h*n+s+1,ot(l,i[f],c?c[f]:1),f=(h+1)*n+s+1,ot(l,i[f],c?c[f]:1),f=(h-2)*n+s-3,ht(l,i[f],c?c[f]:1),f=(h-1)*n+s-3,ht(l,i[f],c?c[f]:1),f=h*n+s-3,ht(l,i[f],c?c[f]:1),f=(h+1)*n+s-3,ht(l,i[f],c?c[f]:1),r[h*n+s]=Ct(l)}r[h*n+s+1]=r[h*n+s]}for(let h=0;h<n;h++)r[h]=r[n+h]=r[2*n+h],r[(o-1)*n+h]=r[(o-2)*n+h];return e.updateStatistics(),e}function Ct(t){if(t.size===0)return 0;let e=0,n=-1,o=0,a=t.keys(),i=a.next();for(;!i.done;)o=t.get(i.value),o>e&&(n=i.value,e=o),i=a.next();return n}function ht(t,e,n){if(n===0)return;let o=t.get(e);o===1?t.delete(e):t.set(e,o-1)}function ot(t,e,n){n!==0&&t.set(e,t.has(e)?t.get(e)+1:1)}function Rt(t,e,n){let{x:o,y:a}=e,{width:i,height:r}=n;if(o===0&&a===0&&r===t.height&&i===t.width)return t;let{width:c,height:h}=t,l=Math.max(0,a),s=Math.max(0,o),f=Math.min(o+i,c),p=Math.min(a+r,h);if(f<0||p<0||!R(t))return null;o=Math.max(0,-o),a=Math.max(0,-a);let{pixels:u}=t,m=i*r,d=u.length,g=[];for(let A=0;A<d;A++){let x=u[A],M=_.createEmptyBand(t.pixelType,m);for(let b=l;b<p;b++){let v=b*c,T=(b+a-l)*i+o;for(let P=s;P<f;P++)M[T++]=x[v+P]}g.push(M)}let w=new Uint8Array(m),k=t.mask;for(let A=l;A<p;A++){let x=A*c,M=(A+a-l)*i+o;for(let b=s;b<f;b++)w[M++]=k?k[x+b]:1}let y=new _({width:n.width,height:n.height,pixelType:t.pixelType,pixels:g,mask:w});return y.updateStatistics(),y}function Lt(t,e=!0){if(!R(t))return null;let{pixels:n,width:o,height:a,mask:i,pixelType:r}=t,c=[],h=Math.round(o/2),l=Math.round(a/2),s=a-1,f=o-1;for(let u=0;u<n.length;u++){let m=n[u],d=_.createEmptyBand(r,h*l),g=0;for(let w=0;w<a;w+=2)for(let k=0;k<o;k+=2){let y=m[w*o+k];if(e){let A=k===f?y:m[w*o+k+1],x=w===s?y:m[w*o+k+o],M=k===f?x:w===s?A:m[w*o+k+o+1];d[g++]=(y+A+x+M)/4}else d[g++]=y}c.push(d)}let p=null;if(i!=null){p=new Uint8Array(h*l);let u=0;for(let m=0;m<a;m+=2)for(let d=0;d<o;d+=2){let g=i[m*o+d];if(e){let w=d===f?g:i[m*o+d+1],k=m===s?g:i[m*o+d+o],y=d===f?k:m===s?w:i[m*o+d+o+1];p[u++]=g*w*k*y?1:0}else p[u++]=g}}return new _({width:h,height:l,pixelType:r,pixels:c,mask:p})}function Ge(t,e,n=0,o=!0){if(!R(t))return null;let{width:a,height:i}=e,{width:r,height:c}=t,h=new Map,l={x:0,y:0},s=1+n,f=t;for(let p=0;p<s;p++){let u=Math.ceil(r/a),m=Math.ceil(c/i);for(let d=0;d<m;d++){l.y=d*i;for(let g=0;g<u;g++){l.x=g*a;let w=Rt(f,l,e);h.set(`${p}/${d}/${g}`,w)}}p<s-1&&(f=Lt(f,o)),r=Math.round(r/2),c=Math.round(c/2)}return h}function Oe(t){let{pixelBlock:e,tileSize:n,level:o,row:a,col:i,useBilinear:r}=t;if(!R(e))return null;let{width:c,height:h}=n,l=2**o,s=l*c,f=l*h,p=Rt(e,{y:a*f,x:i*s},{width:s,height:f});if(!p)return null;for(let u=o;u>0;u--)p=Lt(p,r);return p}function Nt(t,e,n,o,a=0){let{width:i,height:r}=t,{width:c,height:h}=e,l=o.cols,s=o.rows,f=Math.ceil(c/l-.1/l),p=Math.ceil(h/s-.1/s),u,m,d,g,w,k,y,A=f*l,x=A*p*s,M=new Float32Array(x),b=new Float32Array(x),v=new Uint32Array(x),T=new Uint32Array(x),P,B,U=0;for(let I=0;I<p;I++)for(let C=0;C<f;C++){u=12*(I*f+C),m=n[u],d=n[u+1],g=n[u+2],w=n[u+3],k=n[u+4],y=n[u+5];for(let V=0;V<s;V++){U=(I*s+V)*A+C*l,B=(V+.5)/s;for(let S=0;S<V;S++)P=(S+.5)/l,M[U+S]=(m*P+d*B+g)*i+a,b[U+S]=(w*P+k*B+y)*r+a,v[U+S]=Math.floor(M[U+S]),T[U+S]=Math.floor(b[U+S])}u+=6,m=n[u],d=n[u+1],g=n[u+2],w=n[u+3],k=n[u+4],y=n[u+5];for(let V=0;V<s;V++){U=(I*s+V)*A+C*l,B=(V+.5)/s;for(let S=V;S<l;S++)P=(S+.5)/l,M[U+S]=(m*P+d*B+g)*i+a,b[U+S]=(w*P+k*B+y)*r+a,v[U+S]=Math.floor(M[U+S]),T[U+S]=Math.floor(b[U+S])}}return{offsets_x:M,offsets_y:b,offsets_xi:v,offsets_yi:T,gridWidth:A}}function qe(t,e){let{coefficients:n,spacing:o}=e,{offsets_x:a,offsets_y:i,gridWidth:r}=Nt(t,t,n,{rows:o[0],cols:o[1]}),{width:c,height:h}=t,l=new Float32Array(c*h),s=180/Math.PI;for(let f=0;f<h;f++)for(let p=0;p<c;p++){let u=f*r+p,m=f===0?u:u-r,d=f===h-1?u:u+r,g=a[m]-a[d],w=i[d]-i[m];if(isNaN(g)||isNaN(w))l[f*c+p]=90;else{let k=Math.atan2(w,g)*s;k=(360+k)%360,l[f*c+p]=k}}return l}function We(t,e,n,o,a="nearest"){if(!R(t))return null;a==="majority"&&(t=Qt(t));let{pixels:i,mask:r,bandMasks:c,pixelType:h}=t,l=t.width,s=t.height,f=_.getPixelArrayConstructor(h),p=i.length,{width:u,height:m}=e,d=!1;for(let U=0;U<n.length;U+=3)n[U]===-1&&n[U+1]===-1&&n[U+2]===-1&&(d=!0);let{offsets_x:g,offsets_y:w,offsets_xi:k,offsets_yi:y,gridWidth:A}=Nt({width:l,height:s},e,n,o,a==="majority"?.5:0),x,M=(U,I,C,V)=>{let S=U instanceof Float32Array||U instanceof Float64Array?0:.5;for(let F=0;F<m;F++){x=F*A;for(let D=0;D<u;D++){if(g[x]<0||w[x]<0)U[F*u+D]=0;else if(V)U[F*u+D]=I[k[x]+y[x]*l];else{let j=Math.floor(g[x]),z=Math.floor(w[x]),N=Math.ceil(g[x]),q=Math.ceil(w[x]),J=g[x]-j,$=w[x]-z;if(!C||C[j+z*l]&&C[N+z*l]&&C[j+q*l]&&C[N+q*l]){let nt=(1-J)*I[j+z*l]+J*I[N+z*l],Y=(1-J)*I[j+q*l]+J*I[N+q*l];U[F*u+D]=(1-$)*nt+$*Y+S}else U[F*u+D]=I[k[x]+y[x]*l]}x++}}},b=[],v,T=c?.length===p,P=[];for(let U=0;U<p;U++){if(T){let I=new Uint8Array(u*m);M(I,c[U],c[U],!0),P.push(I)}v=new f(u*m),M(v,i[U],T?c[U]:r,a==="nearest"||a==="majority"),b.push(v)}let B=new _({width:u,height:m,pixelType:h,pixels:b,bandMasks:T?P:void 0});if(r!=null)B.mask=new Uint8Array(u*m),M(B.mask,r,r,!0);else if(d){B.mask=new Uint8Array(u*m);for(let U=0;U<u*m;U++)B.mask[U]=g[U]<0||w[U]<0?0:1}return B.updateStatistics(),B}var et=new Map;et.set("meter-per-second",1),et.set("kilometer-per-hour",.277778),et.set("knots",.514444),et.set("feet-per-second",.3048),et.set("mile-per-hour",.44704);var gt=180/Math.PI,xt=5,ft=new vt({esriMetersPerSecond:"meter-per-second",esriKilometersPerHour:"kilometer-per-hour",esriKnots:"knots",esriFeetPerSecond:"feet-per-second",esriMilesPerHour:"mile-per-hour"});function wt(t,e){return et.get(t)/et.get(e)||1}function jt(t){return(450-t)%360}function Gt(t,e="geographic"){let[n,o]=t,a=Math.sqrt(n*n+o*o),i=Math.atan2(o,n)*gt;return i=(360+i)%360,e==="geographic"&&(i=jt(i)),[a,i]}function Ot(t,e="geographic"){let n=t[1];e==="geographic"&&(n=jt(n)),n%=360;let o=t[0];return[o*Math.cos(n/gt),o*Math.sin(n/gt)]}function $e(t,e,n,o="geographic"){if(!R(t)||n==null)return t;let a=e==="vector-magdir"?t.clone():Et(t,e),i=a.pixels[1];for(let r=0;r<i.length;r++)i[r]=o==="geographic"?(i[r]+n[r]+270)%360:(i[r]+360-n[r])%360;return e==="vector-magdir"?a:Et(a,"vector-magdir")}function Et(t,e,n="geographic",o=1){if(!R(t))return t;let{pixels:a,width:i,height:r}=t,c=i*r,h=a[0],l=a[1],s=t.pixelType.startsWith("f")?t.pixelType:"f32",f=_.createEmptyBand(s,c),p=_.createEmptyBand(s,c),u=0;for(let d=0;d<r;d++)for(let g=0;g<i;g++)e==="vector-uv"?([f[u],p[u]]=Gt([h[u],l[u]],n),f[u]*=o):([f[u],p[u]]=Ot([h[u],l[u]],n),f[u]*=o,p[u]*=o),u++;let m=new _({pixelType:s,width:t.width,height:t.height,mask:t.mask,validPixelCount:t.validPixelCount,maskIsAlpha:t.maskIsAlpha,pixels:[f,p]});return m.updateStatistics(),m}function He(t,e,n=1){if(n===1||!R(t))return t;let o=t.clone(),{pixels:a,width:i,height:r}=o,c=a[0],h=a[1],l=0;for(let s=0;s<r;s++)for(let f=0;f<i;f++)e==="vector-uv"?(c[l]*=n,h[l]*=n):c[l]*=n,l++;return o.updateStatistics(),o}function Qe(t,e,n,o,a){if(a==null||!a.spatialReference.equals(t.spatialReference))return{extent:t,width:Math.round(e/o),height:Math.round(n/o),resolution:t.width/e};let i=a.xmin,r=a.ymax,c=(t.xmax-t.xmin)/e*o,h=(t.ymax-t.ymin)/n*o,l=(c+h)/2;return t.xmin=i+Math.floor((t.xmin-i)/c)*c,t.xmax=i+Math.ceil((t.xmax-i)/c)*c,t.ymin=r+Math.floor((t.ymin-r)/h)*h,t.ymax=r+Math.ceil((t.ymax-r)/h)*h,{extent:t,width:Math.round(t.width/c),height:Math.round(t.height/h),resolution:l}}var Yt=qt(0,0,0);function qt(t=0,e=0,n=Math.PI,o=!0){o&&(n=(2*Math.PI-n)%(2*Math.PI));let a=o?-1:1,i=13*a,r=-7*a,c=-2*a,h=-16*a,l=21.75,[s,f]=G(0,e+i,n,l),[p,u]=G(t-5.5,e+r,n,l),[m,d]=G(t+5.5,e+r,n,l),[g,w]=G(t-1.5,e+c,n,l),[k,y]=G(t+1.5,e+c,n,l),[A,x]=G(t-1.5,e+h,n,l),[M,b]=G(t+1.5,e+h,n,l);return[s,f,p,u,g,w,k,y,m,d,A,x,M,b]}function Zt(t=0,e=Math.PI,n=!0){n&&(e=(2*Math.PI-e)%(2*Math.PI));let o=10,a=n?-1:1,i=5*a,r=20*a,c=25*a,h=45,l=0,s=0,f=2,p=0,u=f*a,m=n?1:-1,d=o/2*m,[g,w]=[l+d,s-r],[k,y]=[g+f*m,w],[A,x]=[k-p*m,y+u],[M,b]=[l-d,s-c],[v,T]=[M+p*m,b-u],P=Math.ceil(t/xt),B=Math.floor(P/10);P-=8*B;let U=[],I=[];for(let J=0;J<P/2;J++,B--){B<=0&&P%2==1&&J===(P-1)/2&&(M=l,v=M+p*m,b=(b+w)/2,T=b-u);let[$,nt]=G(M,b,e,h);if(B>0){let[Y,it]=G(k,b,e,h),[st,L]=G(g,w,e,h);U.push(Y),U.push(it),U.push($),U.push(nt),U.push(st),U.push(L)}else{let[Y,it]=G(k,y,e,h),[st,L]=G(A,x,e,h),[E,ut]=G(v,T,e,h);I.push($),I.push(nt),I.push(E),I.push(ut),I.push(st),I.push(L),I.push(Y),I.push(it)}b+=i,w+=i,y+=i,x+=i,T+=i}let[C,V]=G(l+d,s+r,e,h),S=(o/2+f)*m,[F,D]=G(l+S,s+r,e,h),[j,z]=G(l+d,s-c,e,h),[N,q]=G(l+S,s-c,e,h);return{pennants:U,barbs:I,shaft:[C,V,F,D,j,z,N,q]}}function G(t,e,n,o=1){let a=Math.sqrt(t*t+e*e)/o,i=(2*Math.PI+Math.atan2(e,t))%(2*Math.PI);return[a,(2*Math.PI+i-n)%(2*Math.PI)]}var ct=[0,1,3,6,10,16,21,27,33,40,47,55,63],te=[0,.5,1,1.5,2],ee=[0,.25,.5,1,1.5,2,2.5,3,3.5,4];function tt(t,e,n,o){let a=wt(o||"knots",n),i;for(i=1;i<e.length;i++)if(i===e.length-1){if(t<e[i]*a)break}else if(t<=e[i]*a)break;return Math.min(i-1,e.length-2)}function ne(t,e,n,o,a){let i=0;switch(e){case"beaufort_kn":i=tt(t,ct,"knots",n);break;case"beaufort_km":i=tt(t,ct,"kilometer-per-hour",n);break;case"beaufort_ft":i=tt(t,ct,"feet-per-second",n);break;case"beaufort_m":i=tt(t,ct,"meter-per-second",n);break;case"classified_arrow":i=tt(t,a??[],o,n);break;case"ocean_current_m":i=tt(t,te,"meter-per-second",n);break;case"ocean_current_kn":i=tt(t,ee,"knots",n)}return i}function ie(t,e){let{style:n,inputUnit:o,outputUnit:a,breakValues:i}=e,r=ft.fromJSON(o),c=ft.fromJSON(a),h=7*6,l=15,s=0,f=0,{width:p,height:u,mask:m}=t,d=t.pixels[0],g=t.pixels[1],w=m!=null?m.filter(x=>x>0).length:p*u,k=new Float32Array(w*h),y=new Uint32Array(l*w),A=e.invertDirection?qt(0,0,0,!1):Yt;for(let x=0;x<u;x++)for(let M=0;M<p;M++){let b=x*p+M;if(!m||m[x*p+M]){let v=(g[b]+360)%360/180*Math.PI,T=ne(d[b],n,r,c,i);for(let B=0;B<A.length;B+=2)k[s++]=(M+.5)/p,k[s++]=(x+.5)/u,k[s++]=A[B],k[s++]=A[B+1]+v,k[s++]=T,k[s++]=d[b];let P=7*(s/h-1);y[f++]=P,y[f++]=P+1,y[f++]=P+2,y[f++]=P+0,y[f++]=P+4,y[f++]=P+3,y[f++]=P+0,y[f++]=P+2,y[f++]=P+3,y[f++]=P+2,y[f++]=P+5,y[f++]=P+3,y[f++]=P+5,y[f++]=P+6,y[f++]=P+3}}return{vertexData:k,indexData:y}}var dt=[];function se(t,e){if(dt.length===0)for(let u=0;u<30;u++)dt.push(Zt(5*u,0,!e.invertDirection));let n=wt(ft.fromJSON(e.inputUnit),"knots"),{width:o,height:a,mask:i}=t,r=t.pixels[0],c=t.pixels[1],h=6,l=[],s=[],f=0,p=0;for(let u=0;u<a;u++)for(let m=0;m<o;m++){let d=u*o+m,g=r[d]*n;if((!i||i[u*o+m])&&g>=xt){let w=(c[d]+360)%360/180*Math.PI,{pennants:k,barbs:y,shaft:A}=dt[Math.min(Math.floor(g/5),29)];if(k.length+y.length===0)continue;let x=l.length/h,M=(m+.5)/o,b=(u+.5)/a;for(let v=0;v<k.length;v+=2)l[f++]=M,l[f++]=b,l[f++]=k[v],l[f++]=k[v+1]+w,l[f++]=0,l[f++]=g;for(let v=0;v<y.length;v+=2)l[f++]=M,l[f++]=b,l[f++]=y[v],l[f++]=y[v+1]+w,l[f++]=0,l[f++]=g;for(let v=0;v<A.length;v+=2)l[f++]=M,l[f++]=b,l[f++]=A[v],l[f++]=A[v+1]+w,l[f++]=0,l[f++]=g;for(let v=0;v<k.length/6;v++)s[p++]=x,s[p++]=x+1,s[p++]=x+2,x+=3;for(let v=0;v<y.length/8;v++)s[p++]=x,s[p++]=x+1,s[p++]=x+2,s[p++]=x+1,s[p++]=x+2,s[p++]=x+3,x+=4;s[p++]=x+0,s[p++]=x+1,s[p++]=x+2,s[p++]=x+1,s[p++]=x+3,s[p++]=x+2,x+=4}}return{vertexData:new Float32Array(l),indexData:new Uint32Array(s)}}function le(t,e){let o=0,a=0,{width:i,height:r,mask:c}=t,h=t.pixels[0],l=[],s=[],f=wt(ft.fromJSON(e.inputUnit),"knots"),p=e.style==="wind_speed"?xt:Number.MAX_VALUE;for(let u=0;u<r;u++)for(let m=0;m<i;m++){let d=h[u*i+m]*f;if((!c||c[u*i+m])&&d<p){for(let w=0;w<4;w++)l[o++]=(m+.5)/i,l[o++]=(u+.5)/r,l[o++]=w<2?-.5:.5,l[o++]=w%2==0?-.5:.5,l[o++]=0,l[o++]=d;let g=4*(o/24-1);s[a++]=g,s[a++]=g+1,s[a++]=g+2,s[a++]=g+1,s[a++]=g+2,s[a++]=g+3}}return{vertexData:new Float32Array(l),indexData:new Uint32Array(s)}}function Ye(t,e){return e.style==="simple_scalar"?le(t,e):e.style==="wind_speed"?se(t,e):ie(t,e)}function Ze(t,e,n,o=[0,0],a=.5){let{width:i,height:r,mask:c}=t,[h,l]=t.pixels,[s,f]=o,p=Math.round((i-s)/n),u=Math.round((r-f)/n),m=p*u,d=new Float32Array(m),g=new Float32Array(m),w=new Uint8Array(m),k=e==="vector-uv";for(let A=0;A<u;A++)for(let x=0;x<p;x++){let M=0,b=A*p+x,v=Math.max(0,A*n+f),T=Math.max(0,x*n+s),P=Math.min(r,v+n),B=Math.min(i,T+n);for(let U=v;U<P;U++)for(let I=T;I<B;I++){let C=U*i+I;if(!c||c[C]){M++;let V=k?[h[C],l[C]]:[h[C],(360+l[C])%360],[S,F]=k?V:Ot(V);d[b]+=S,g[b]+=F}}if(M>=(P-v)*(B-T)*(1-a)){w[b]=1;let[U,I]=Gt([d[b]/M,g[b]/M]);d[b]=U,g[b]=I}else w[b]=0,d[b]=0,g[b]=0}let y=new _({width:p,height:u,pixels:[d,g],mask:w});return y.updateStatistics(),y}var K=()=>H.getLogger("esri.views.2d.engine.flow.dataUtils"),re=10;function cn(t,e,n,o){return at(this,null,function*(){let a=performance.now(),i=oe(e,n),r=performance.now(),c=he(e,i,n.width,n.height),h=performance.now(),l=fe(c,!0),s=performance.now(),f=t==="Streamlines"?ue(l,re):pe(l),p=performance.now();return Z("esri-2d-profiler")&&(K().info("I.1","_createFlowFieldFromData (ms)",Math.round(r-a)),K().info("I.2","_getStreamlines (ms)",Math.round(h-r)),K().info("I.3","createAnimatedLinesData (ms)",Math.round(s-h)),K().info("I.4","create{Streamlines|Particles}Mesh (ms)",Math.round(p-s)),K().info("I.5","createFlowMesh (ms)",Math.round(p-a)),K().info("I.6","Mesh size (bytes)",f.vertexData.buffer.byteLength+f.indexData.buffer.byteLength)),yield Promise.resolve(),kt(o),f})}function oe(t,e){let n=ce(e.data,e.width,e.height,t.smoothing);return t.interpolate?(o,a)=>{let i=Math.floor(o),r=Math.floor(a);if(i<0||i>=e.width)return[0,0];if(r<0||r>=e.height)return[0,0];let c=o-i,h=a-r,l=i,s=r,f=i<e.width-1?i+1:i,p=r<e.height-1?r+1:r,u=n[2*(s*e.width+l)],m=n[2*(s*e.width+f)],d=n[2*(p*e.width+l)],g=n[2*(p*e.width+f)],w=n[2*(s*e.width+l)+1],k=n[2*(s*e.width+f)+1];return[(u*(1-h)+d*h)*(1-c)+(m*(1-h)+g*h)*c,(w*(1-h)+n[2*(p*e.width+l)+1]*h)*(1-c)+(k*(1-h)+n[2*(p*e.width+f)+1]*h)*c]}:(o,a)=>{let i=Math.round(o),r=Math.round(a);return i<0||i>=e.width||r<0||r>=e.height?[0,0]:[n[2*(r*e.width+i)],n[2*(r*e.width+i)+1]]}}function ae(t,e,n,o,a,i,r,c,h){let l=[],s=n,f=o,p=0,[u,m]=e(s,f);u*=t.velocityScale,m*=t.velocityScale;let d=Math.sqrt(u*u+m*m),g,w;l.push({x:s,y:f,t:p,speed:d});for(let k=0;k<t.verticesPerLine;k++){let[y,A]=e(s,f);y*=t.velocityScale,A*=t.velocityScale;let x=Math.sqrt(y*y+A*A);if(x<t.minSpeedThreshold)return l;let M=y/x,b=A/x;if(s+=M*t.segmentLength,f+=b*t.segmentLength,p+=t.segmentLength/x,Math.acos(M*g+b*w)>t.maxTurnAngle)return l;if(t.collisions){let v=Math.round(s*h),T=Math.round(f*h);if(v<0||v>r-1||T<0||T>c-1)return l;let P=i[T*r+v];if(P!==-1&&P!==a)return l;i[T*r+v]=a}l.push({x:s,y:f,t:p,speed:x}),g=M,w=b}return l}function he(t,e,n,o){let a=[],i=new pt,r=1/Math.max(t.lineCollisionWidth,1),c=Math.round(n*r),h=Math.round(o*r),l=new Int32Array(c*h);for(let f=0;f<l.length;f++)l[f]=-1;let s=[];for(let f=0;f<o;f+=t.lineSpacing)for(let p=0;p<n;p+=t.lineSpacing)s.push({x:p,y:f,sort:i.getFloat()});s.sort((f,p)=>f.sort-p.sort);for(let{x:f,y:p}of s)if(i.getFloat()<t.density){let u=ae(t,e,f,p,a.length,l,c,h,r);if(u.length<2)continue;a.push(u)}return a}function ce(t,e,n,o){if(o===0)return t;let a=Math.round(3*o),i=new Array(2*a+1),r=0;for(let l=-a;l<=a;l++){let s=Math.exp(-l*l/(o*o));i[l+a]=s,r+=s}for(let l=-a;l<=a;l++)i[l+a]/=r;let c=new Float32Array(t.length);for(let l=0;l<n;l++)for(let s=0;s<e;s++){let f=0,p=0;for(let u=-a;u<=a;u++){if(s+u<0||s+u>=e)continue;let m=i[u+a];f+=m*t[2*(l*e+(s+u))],p+=m*t[2*(l*e+(s+u))+1]}c[2*(l*e+s)]=f,c[2*(l*e+s)+1]=p}let h=new Float32Array(t.length);for(let l=0;l<e;l++)for(let s=0;s<n;s++){let f=0,p=0;for(let u=-a;u<=a;u++){if(s+u<0||s+u>=n)continue;let m=i[u+a];f+=m*c[2*((s+u)*e+l)],p+=m*c[2*((s+u)*e+l)+1]}h[2*(s*e+l)]=f,h[2*(s*e+l)+1]=p}return h}function fe(t,e){let n=new pt,o=t.reduce((h,l)=>h+l.length,0),a=new Float32Array(4*o),i=new Array(t.length),r=0,c=0;for(let h of t){let l=r;for(let s of h)a[4*r]=s.x,a[4*r+1]=s.y,a[4*r+2]=s.t,a[4*r+3]=s.speed,r++;i[c++]={startVertex:l,numberOfVertices:h.length,totalTime:h[h.length-1].t,timeSeed:e?n.getFloat():0}}return{lineVertices:a,lineDescriptors:i}}function ue(t,e){let{lineVertices:o,lineDescriptors:a}=t,i=0,r=0;for(let u of a)i+=2*u.numberOfVertices,r+=6*(u.numberOfVertices-1);let c=new Float32Array(i*9),h=new Uint32Array(r),l=0,s=0;function f(){h[s++]=l-2,h[s++]=l,h[s++]=l-1,h[s++]=l,h[s++]=l+1,h[s++]=l-1}function p(u,m,d,g,w,k,y,A){let x=l*9,M=0;c[x+M++]=u,c[x+M++]=m,c[x+M++]=1,c[x+M++]=d,c[x+M++]=k,c[x+M++]=y,c[x+M++]=g/2,c[x+M++]=w/2,c[x+M++]=A,l++,c[x+M++]=u,c[x+M++]=m,c[x+M++]=-1,c[x+M++]=d,c[x+M++]=k,c[x+M++]=y,c[x+M++]=-g/2,c[x+M++]=-w/2,c[x+M++]=A,l++}for(let u of a){let{totalTime:m,timeSeed:d}=u,g=null,w=null,k=null,y=null,A=null,x=null;for(let M=0;M<u.numberOfVertices;M++){let b=o[4*(u.startVertex+M)],v=o[4*(u.startVertex+M)+1],T=o[4*(u.startVertex+M)+2],P=o[4*(u.startVertex+M)+3],B=null,U=null,I=null,C=null;if(M>0){B=b-g,U=v-w;let V=Math.sqrt(B*B+U*U);if(B/=V,U/=V,M>1){let S=B+A,F=U+x,D=Math.sqrt(S*S+F*F);S/=D,F/=D;let j=Math.min(1/(S*B+F*U),e);S*=j,F*=j,I=-F,C=S}else I=-U,C=B;I!==null&&C!==null&&(p(g,w,k,I,C,m,d,P),f())}g=b,w=v,k=T,A=B,x=U,y=P}p(g,w,k,-x,A,m,d,y)}return{vertexData:c,indexData:h}}function pe(t){let{lineVertices:a,lineDescriptors:i}=t,r=0,c=0;for(let V of i){let S=V.numberOfVertices-1;r+=4*S*2,c+=6*S*2}let h=new Float32Array(r*16),l=new Uint32Array(c),s,f,p,u,m,d,g,w,k,y,A,x,M,b,v=0,T=0;function P(){l[T++]=v-8,l[T++]=v-7,l[T++]=v-6,l[T++]=v-7,l[T++]=v-5,l[T++]=v-6,l[T++]=v-4,l[T++]=v-3,l[T++]=v-2,l[T++]=v-3,l[T++]=v-1,l[T++]=v-2}function B(V,S,F,D,j,z,N,q,J,$,nt,Y,it,st){let L=v*16,E=0;for(let ut of[1,2])for(let Jt of[1,2,3,4])h[L+E++]=V,h[L+E++]=S,h[L+E++]=F,h[L+E++]=D,h[L+E++]=N,h[L+E++]=q,h[L+E++]=J,h[L+E++]=$,h[L+E++]=ut,h[L+E++]=Jt,h[L+E++]=it,h[L+E++]=st,h[L+E++]=j/2,h[L+E++]=z/2,h[L+E++]=nt/2,h[L+E++]=Y/2,v++}function U(V,S){let F=k+A,D=y+x,j=Math.sqrt(F*F+D*D);F/=j,D/=j;let z=k*F+y*D;F/=z,D/=z;let N=A+M,q=x+b,J=Math.sqrt(N*N+q*q);N/=J,q/=J;let $=A*N+x*q;N/=$,q/=$,B(s,f,p,u,-D,F,m,d,g,w,-q,N,V,S),P()}function I(V,S,F,D,j,z){if(k=A,y=x,A=M,x=b,k==null&&y==null&&(k=A,y=x),m!=null&&d!=null){M=V-m,b=S-d;let N=Math.sqrt(M*M+b*b);M/=N,b/=N}k!=null&&y!=null&&U(j,z),s=m,f=d,p=g,u=w,m=V,d=S,g=F,w=D}function C(V,S){k=A,y=x,A=M,x=b,k==null&&y==null&&(k=A,y=x),k!=null&&y!=null&&U(V,S)}for(let V of i){s=null,f=null,p=null,u=null,m=null,d=null,g=null,w=null,k=null,y=null,A=null,x=null,M=null,b=null;let{totalTime:S,timeSeed:F}=V;for(let D=0;D<V.numberOfVertices;D++)I(a[4*(V.startVertex+D)],a[4*(V.startVertex+D)+1],a[4*(V.startVertex+D)+2],a[4*(V.startVertex+D)+3],S,F);C(S,F)}return{vertexData:h,indexData:l}}function Wt(t,e){let n=e.pixels,{width:o,height:a}=e,i=new Float32Array(o*a*2),r=e.mask||new Uint8Array(o*a*2);if(e.mask||r.fill(255),t==="vector-uv")for(let c=0;c<o*a;c++)i[2*c]=n[0][c],i[2*c+1]=-n[1][c];else if(t==="vector-magdir")for(let c=0;c<o*a;c++){let h=n[0][c],l=Bt(n[1][c]),s=Math.cos(l-Math.PI/2),f=Math.sin(l-Math.PI/2);i[2*c]=s*h,i[2*c+1]=f*h}return{data:i,mask:r,width:o,height:a}}function fn(t,e,n,o,a,i){return at(this,null,function*(){let r=performance.now(),c=Pt(e.spatialReference);if(!c){let A=yield zt(t,e,n,o,a,i);return Z("esri-2d-profiler")&&K().info("I.7","loadImagery, early exit (ms)",Math.round(performance.now()-r)),Z("esri-2d-profiler")&&K().info("I.9","Number of parts",1),A}let[h,l]=c.valid,s=l-h,f=Math.ceil(e.width/s),p=e.width/f,u=Math.round(n/f),m=e.xmin,d=[],g=performance.now();for(let A=0;A<f;A++){let x=new Tt({xmin:m,xmax:m+p,ymin:e.ymin,ymax:e.ymax,spatialReference:e.spatialReference});d.push(zt(t,x,u,o,a,i)),m+=p}let w=yield Promise.all(d);Z("esri-2d-profiler")&&K().info("I.8","All calls to _fetchPart (ms)",Math.round(performance.now()-g)),Z("esri-2d-profiler")&&K().info("I.9","Number of parts",w.length);let k={data:new Float32Array(n*o*2),mask:new Uint8Array(n*o),width:n,height:o},y=0;for(let A of w){for(let x=0;x<A.height;x++)for(let M=0;M<A.width;M++)y+M>=n||(k.data[2*(x*n+y+M)]=A.data[2*(x*A.width+M)],k.data[2*(x*n+y+M)+1]=A.data[2*(x*A.width+M)+1],k.mask[x*n+y+M]=A.mask[x*A.width+M]);y+=A.width}return Z("esri-2d-profiler")&&K().info("I.10","loadImagery, general exit (ms)",Math.round(performance.now()-r)),k})}function zt(t,e,n,o,a,i){return at(this,null,function*(){let r={requestProjectedLocalDirections:!0,signal:i};if(a!=null&&(r.timeExtent=a),t.type==="imagery"){yield t.load({signal:i});let l=t.rasterInfo.dataType,s=yield t.fetchImage(e,n,o,r);return s?.pixelData?.pixelBlock==null?{data:new Float32Array(n*o*2),mask:new Uint8Array(n*o),width:n,height:o}:Wt(l,s.pixelData.pixelBlock)}yield t.load({signal:i});let c=t.serviceRasterInfo.dataType,h=yield t.fetchPixels(e,n,o,r);return h?.pixelBlock==null?{data:new Float32Array(n*o*2),mask:new Uint8Array(n*o),width:n,height:o}:Wt(c,h.pixelBlock)})}export{rt as a,_ as b,It as c,St as d,Ie as e,R as f,Se as g,Ve as h,Fe as i,Ce as j,Dt as k,De as l,_e as m,Re as n,Le as o,Ne as p,Ee as q,$t as r,je as s,Ge as t,Oe as u,qe as v,We as w,ft as x,wt as y,Gt as z,$e as A,Et as B,He as C,Qe as D,le as E,Ye as F,Ze as G,cn as H,fn as I};
