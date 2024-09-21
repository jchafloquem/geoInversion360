import{a as B,b as m,c as G,d as H,e as Q,f as g,h as b,i as X}from"./chunk-2B3PG2ZT.js";import{a as j}from"./chunk-HFQFGALU.js";import{a as K}from"./chunk-NNKLK2DS.js";import{S as F,T as V,W as z,aa as $,o as q,q as h}from"./chunk-BRGZVJPZ.js";import{r as C}from"./chunk-7JLWSSXP.js";import{h as S,n as D,p as U,w as T}from"./chunk-JKP4I6UL.js";import{d as N}from"./chunk-TZHKPIVH.js";import{k as y,q as E,s as P}from"./chunk-BRWS572J.js";import{a as n}from"./chunk-AKNRR36C.js";import{a as l,b as J,d as x,g as i}from"./chunk-JEGVIFEP.js";var Y={request(r,e){return i(this,null,function*(){let t=r.options,s=t.responseType;t.signal=e?.signal,t.responseType=s==="native"||s==="native-request-init"?"native-request-init":s&&["blob","json","text"].includes(s)&&q(r.url)?.after?s:"array-buffer";let o=yield $(r.url,t),a={data:o.data,httpStatus:o.httpStatus,ssl:o.ssl};switch(o.requestOptions?.responseType){case"native-request-init":return delete a.data.signal,a;case"blob":a.data=yield a.data.arrayBuffer();break;case"json":a.data=new TextEncoder().encode(JSON.stringify(a.data)).buffer;break;case"text":a.data=new TextEncoder().encode(a.data).buffer}return{result:a,transferList:[a.data]}})}};var Z={};function ee(r){let e={async:r.async,isDebug:r.isDebug,locale:r.locale,baseUrl:r.baseUrl,has:l({},r.has),map:l({},r.map),packages:r.packages?.concat()||[],paths:l(l({},Z.paths),r.paths)};return r.hasOwnProperty("async")||(e.async=!0),r.hasOwnProperty("isDebug")||(e.isDebug=!1),r.baseUrl||(e.baseUrl=Z.baseUrl),e}var R=class{constructor(){let e=document.createDocumentFragment();["addEventListener","dispatchEvent","removeEventListener"].forEach(t=>{this[t]=(...s)=>e[t](...s)})}},u=class{constructor(){this._dispatcher=new R,this._workerPostMessage({type:m.HANDSHAKE})}terminate(){}get onmessage(){return this._onmessageHandler}set onmessage(e){this._onmessageHandler&&this.removeEventListener("message",this._onmessageHandler),this._onmessageHandler=e,e&&this.addEventListener("message",e)}get onmessageerror(){return this._onmessageerrorHandler}set onmessageerror(e){this._onmessageerrorHandler&&this.removeEventListener("messageerror",this._onmessageerrorHandler),this._onmessageerrorHandler=e,e&&this.addEventListener("messageerror",e)}get onerror(){return this._onerrorHandler}set onerror(e){this._onerrorHandler&&this.removeEventListener("error",this._onerrorHandler),this._onerrorHandler=e,e&&this.addEventListener("error",e)}postMessage(e){C(()=>{this._workerMessageHandler(new MessageEvent("message",{data:e}))})}dispatchEvent(e){return this._dispatcher.dispatchEvent(e)}addEventListener(e,t,s){this._dispatcher.addEventListener(e,t,s)}removeEventListener(e,t,s){this._dispatcher.removeEventListener(e,t,s)}_workerPostMessage(e){C(()=>{this.dispatchEvent(new MessageEvent("message",{data:e}))})}_workerMessageHandler(e){return i(this,null,function*(){let t=g(e);if(t&&t.type===m.OPEN){let{modulePath:s,jobId:o}=t,a=yield b.loadWorker(s);a||(a=yield import(s));let c=b.connect(a);this._workerPostMessage({type:m.OPENED,jobId:o,data:c})}})}};var W=()=>E.getLogger("esri.core.workers.workerFactory"),{HANDSHAKE:le}=m,ce='let globalId=0;const outgoing=new Map,configuration={CONFIGURATION};self.esriConfig=configuration.esriConfig;const workerPath=self.esriConfig.workers.workerPath,HANDSHAKE=0,OPEN=1,OPENED=2,RESPONSE=3,INVOKE=4,ABORT=5;function createAbortError(){const e=new Error("Aborted");return e.name="AbortError",e}function receiveMessage(e){return e&&e.data?"string"==typeof e.data?JSON.parse(e.data):e.data:null}function invokeStaticMessage(e,o,r){const t=r&&r.signal,n=globalId++;let s=null;return new Promise(((r,i)=>{if(t){if(t.aborted)return i(createAbortError());s=()=>{outgoing.get(n)&&(outgoing.delete(n),self.postMessage({type:5,jobId:n}),i(createAbortError()))},t.addEventListener("abort",s)}outgoing.set(n,{resolve:r,reject:i}),self.postMessage({type:4,jobId:n,methodName:e,abortable:null!=t,data:o})})).finally((()=>{t&&t.removeEventListener("abort",s)}))}let workerRevisionChecked=!1;function checkWorkerRevision(e){if(!workerRevisionChecked&&e.kernelInfo){workerRevisionChecked=!0;const{revision:o,fullVersion:r}=configuration.kernelInfo,{revision:t,fullVersion:n,version:s}=e.kernelInfo;esriConfig.assetsPath!==esriConfig.defaultAssetsPath&&o!==t&&console.warn(`Version mismatch detected between ArcGIS Maps SDK for JavaScript modules and assets. For more information visit https://bit.ly/3QnsuSo.\nModules version: ${r}\nAssets version: ${n??s}\nAssets path: ${esriConfig.assetsPath}`)}}function messageHandler(e){const o=receiveMessage(e);if(!o)return;const r=o.jobId;switch(o.type){case 1:let n;function t(e){const o=n.connect(e);self.postMessage({type:2,jobId:r,data:o},[o])}"function"==typeof define&&define.amd?require([workerPath],(e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||new Promise((e=>{require([o.modulePath],e)})))).then(t)})):"System"in self&&"function"==typeof System.import?System.import(workerPath).then((e=>(n=e.default,checkWorkerRevision(n),n.loadWorker(o.modulePath)))).then((e=>e||System.import(o.modulePath))).then(t):esriConfig.workers.useDynamicImport?import(workerPath).then((e=>{n=e.default||e,checkWorkerRevision(n),n.loadWorker(o.modulePath).then((e=>e||import(o.modulePath))).then(t)})):(self.RemoteClient||importScripts(workerPath),n=self.RemoteClient.default||self.RemoteClient,checkWorkerRevision(n),n.loadWorker(o.modulePath).then(t));break;case 3:if(outgoing.has(r)){const s=outgoing.get(r);outgoing.delete(r),o.error?s.reject(JSON.parse(o.error)):s.resolve(o.data)}}}self.dojoConfig=configuration.loaderConfig,esriConfig.workers.loaderUrl&&(self.importScripts(esriConfig.workers.loaderUrl),"function"==typeof require&&"function"==typeof require.config&&require.config(configuration.loaderConfig)),self.addEventListener("message",messageHandler),self.postMessage({type:0});',_,M,re="Failed to create Worker. Fallback to execute module in main thread";function se(){return i(this,null,function*(){if(!n("esri-workers"))return te(new u);if(!_&&!M)try{let e=ce.split("{CONFIGURATION}").join(de());_=URL.createObjectURL(new Blob([e],{type:"text/javascript"}))}catch(e){M=e||{}}let r;if(_)try{r=new Worker(_,{name:"esri-worker-"+fe++})}catch{W().warn(re,M),r=new u}else W().warn(re,M),r=new u;return te(r)})}function te(r){return i(this,null,function*(){return new Promise(e=>{function t(o){let a=g(o);a&&a.type===le&&(r.removeEventListener("message",t),r.removeEventListener("error",s),e(r))}function s(o){o.preventDefault(),r.removeEventListener("message",t),r.removeEventListener("error",s),W().warn("Failed to create Worker. Fallback to execute module in main thread",o),(r=new u).addEventListener("message",t),r.addEventListener("error",s)}r.addEventListener("message",t),r.addEventListener("error",s)})})}function de(){let r;if(y.default!=null){let o=l({},y);delete o.default,r=JSON.parse(JSON.stringify(o))}else r=JSON.parse(JSON.stringify(y));r.assetsPath=h(r.assetsPath),r.defaultAssetsPath=r.defaultAssetsPath?h(r.defaultAssetsPath):void 0,r.request.interceptors=[],r.log.interceptors=[],r.locale=j(),r.has={"esri-csp-restrictions":n("esri-csp-restrictions"),"esri-2d-debug":!1,"esri-2d-update-debug":n("esri-2d-update-debug"),"esri-2d-log-updating":n("esri-2d-log-updating"),"featurelayer-pbf":n("featurelayer-pbf"),"featurelayer-fast-triangulation-enabled":n("featurelayer-fast-triangulation-enabled"),"featurelayer-simplify-thresholds":n("featurelayer-simplify-thresholds"),"featurelayer-simplify-payload-size-factors":n("featurelayer-simplify-payload-size-factors"),"featurelayer-simplify-mobile-factor":n("featurelayer-simplify-mobile-factor"),"featurelayer-query-max-depth":n("featurelayer-query-max-depth"),"featurelayer-query-pausing-enabled":n("featurelayer-query-pausing-enabled"),"featurelayer-snapshot-enabled":n("featurelayer-snapshot-enabled"),"esri-atomics":n("esri-atomics"),"esri-shared-array-buffer":n("esri-shared-array-buffer"),"esri-tiles-debug":n("esri-tiles-debug"),"esri-workers-arraybuffer-transfer":n("esri-workers-arraybuffer-transfer"),"feature-polyline-generalization-factor":n("feature-polyline-generalization-factor"),"host-webworker":1},r.workers.loaderUrl&&(r.workers.loaderUrl=h(r.workers.loaderUrl)),r.workers.workerPath?r.workers.workerPath=h(r.workers.workerPath):r.workers.workerPath=h(K("esri/core/workers/RemoteClient.js")),r.workers.useDynamicImport=!1;let e=y.workers.loaderConfig,t=ee({baseUrl:e?.baseUrl,locale:j(),has:l({"csp-restrictions":1,"dojo-test-sniff":0,"host-webworker":1},e?.has),map:l({},e?.map),paths:l({},e?.paths),packages:e?.packages||[]});return JSON.stringify({esriConfig:r,loaderConfig:t,kernelInfo:{buildDate:F,fullVersion:z,revision:V}})}var fe=0;var{ABORT:oe,INVOKE:me,OPEN:ue,OPENED:pe,RESPONSE:k}=m,I=class r{static create(e){return i(this,null,function*(){let t=yield se();return new r(t,e)})}constructor(e,t){this._outJobs=new Map,this._inJobs=new Map,this.worker=e,this.id=t,e.addEventListener("message",this._onMessage.bind(this)),e.addEventListener("error",s=>{s.preventDefault(),E.getLogger("esri.core.workers.WorkerOwner").error(s)})}terminate(){this.worker.terminate()}open(s){return i(this,arguments,function*(e,t={}){let{signal:o}=t,a=G();return new Promise((c,d)=>{let v={resolve:c,reject:d,abortHandle:D(o,()=>{this._outJobs.delete(a),this._post({type:oe,jobId:a})})};this._outJobs.set(a,v),this._post({type:ue,jobId:a,modulePath:e})})})}_onMessage(e){let t=g(e);if(t)switch(t.type){case pe:this._onOpenedMessage(t);break;case k:this._onResponseMessage(t);break;case oe:this._onAbortMessage(t);break;case me:this._onInvokeMessage(t)}}_onAbortMessage(e){let t=this._inJobs,s=e.jobId,o=t.get(s);o&&(o.controller&&o.controller.abort(),t.delete(s))}_onInvokeMessage(e){let{methodName:t,jobId:s,data:o,abortable:a}=e,c=a?new AbortController:null,d=this._inJobs,v=Y[t],w;try{if(typeof v!="function")throw new TypeError(`${t} is not a function`);w=v.call(null,o,{signal:c?c.signal:null})}catch(f){return void this._post({type:k,jobId:s,error:H(f)})}T(w)?(d.set(s,{controller:c,promise:w}),w.then(f=>{d.has(s)&&(d.delete(s),this._post({type:k,jobId:s},f))},f=>{d.has(s)&&(d.delete(s),f||(f={message:"Error encountered at method"+t}),U(f)||this._post({type:k,jobId:s,error:H(f||{message:`Error encountered at method ${t}`})}))})):this._post({type:k,jobId:s},w)}_onOpenedMessage(e){let{jobId:t,data:s}=e,o=this._outJobs.get(t);o&&(this._outJobs.delete(t),N(o.abortHandle),o.resolve(s))}_onResponseMessage(e){let{jobId:t,error:s,data:o}=e,a=this._outJobs.get(t);a&&(this._outJobs.delete(t),N(a.abortHandle),s?a.reject(P.fromJSON(JSON.parse(s))):a.resolve(o))}_post(e,t,s){return Q(this.worker,e,t,s)}};var ae=n("host-browser")?Math.min(navigator.hardwareConcurrency-1,n("workers-pool-size")):0,p=n("esri-mobile")?Math.min(ae,3):ae;p||(p=n("safari")&&n("mac")?7:2);var ne=0,A=[];function cr(){ie()}function O(r,e){return i(this,null,function*(){let t=new X,a=e,{registryTarget:s}=a,o=x(a,["registryTarget"]);return yield t.open(r,o),s&&B(s,t),t})}function dr(t){return i(this,arguments,function*(r,e={}){if(typeof r!="string")throw new P("workers:undefined-module","modulePath is missing");let s=e.strategy||"distributed";if(n("host-webworker")&&!n("esri-workers")&&(s="local"),s==="local"){let o=yield b.loadWorker(r);o||(o=yield import(r)),S(e.signal);let a=e.client||o;return O([b.connect(o,e.schedule)],J(l({},e),{client:a}))}if(yield ie(),S(e.signal),s==="dedicated"){let o=ne++%p;return O([yield A[o].open(r,e)],e)}if(e.maxNumWorkers&&e.maxNumWorkers>0){let o=Math.min(e.maxNumWorkers,p);if(o<p){let a=new Array(o);for(let c=0;c<o;++c){let d=ne++%p;a[c]=A[d].open(r,e)}return O(a,e)}}return O(A.map(o=>o.open(r,e)),e)})}var he,L=null;function ie(){return i(this,null,function*(){if(L)return L;he=new AbortController;let r=[];for(let e=0;e<p;e++){let t=I.create(e).then(s=>(A[e]=s,s));r.push(t)}return L=Promise.all(r),L})}export{cr as a,dr as b};
