import{a as u}from"./chunk-XBCADXRU.js";import{Na as w,T as s,V as p,_ as l,aa as m,b as F,c as h,ea as d,ja as S}from"./chunk-FXWBXMPB.js";import"./chunk-OCNYIIP3.js";import"./chunk-GYYF3HMQ.js";import"./chunk-WMT47BMV.js";import"./chunk-UYBHUOFR.js";import{e as y,f as A}from"./chunk-HW25OXMH.js";import{a as g}from"./chunk-IBDPR46F.js";import"./chunk-BES4JRIO.js";import"./chunk-IWJQ3PU6.js";import"./chunk-TTN7UOJS.js";import"./chunk-4HUAEW4D.js";import"./chunk-XWRPBDYS.js";import"./chunk-TCCAOREC.js";import"./chunk-BCREO4Q5.js";import"./chunk-SO6OJFOM.js";import"./chunk-DG5QI6E2.js";import"./chunk-TMZNSBQB.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import"./chunk-OFVMJORF.js";import"./chunk-QYC4ILGT.js";import"./chunk-HFQFGALU.js";import"./chunk-VC35VCVT.js";import"./chunk-MT7BXRRQ.js";import"./chunk-NNKLK2DS.js";import"./chunk-VU5W7W6Y.js";import"./chunk-BRGZVJPZ.js";import"./chunk-Z5NXR7SL.js";import"./chunk-7JLWSSXP.js";import"./chunk-W3WDPWBE.js";import"./chunk-JKP4I6UL.js";import"./chunk-TZHKPIVH.js";import"./chunk-JPDAKIWT.js";import"./chunk-W6LY37E4.js";import"./chunk-BRWS572J.js";import"./chunk-AKNRR36C.js";import{g as f}from"./chunk-JEGVIFEP.js";function c(a,n,t,e){return f(this,null,function*(){if(t.length===1){if(l(t[0]))return u(a,t[0],s(t[1],-1));if(d(t[0]))return u(a,t[0].toArray(),s(t[1],-1))}else if(t.length===2){if(l(t[0]))return u(a,t[0],s(t[1],-1));if(d(t[0]))return u(a,t[0].toArray(),s(t[1],-1));if(m(t[0])){let i=yield t[0].load(),r=yield x(A.create(t[1],i.getFieldsIndex(),i.dateFieldsTimeZoneDefaultUTC),e,n);return v(n,yield t[0].calculateStatistic(a,r,s(t[2],1e3),n.abortSignal))}}else if(t.length===3&&m(t[0])){let i=yield t[0].load(),r=yield x(A.create(t[1],i.getFieldsIndex(),i.dateFieldsTimeZoneDefaultUTC),e,n);return v(n,yield t[0].calculateStatistic(a,r,s(t[2],1e3),n.abortSignal))}return u(a,t,-1)})}function v(a,n){return n instanceof y?g.fromReaderAsTimeStampOffset(n.toStorageFormat()):n instanceof Date?g.dateJSAndZoneToArcadeDate(n,w(a)):n}function x(a,n,t){return f(this,null,function*(){let e=a.getVariables();if(e.length>0){let i=[];for(let o=0;o<e.length;o++){let T={name:e[o]};i.push(yield n.evaluateIdentifier(t,T))}let r={};for(let o=0;o<e.length;o++)r[e[o]]=i[o];return a.parameters=r,a}return a})}function q(a){a.mode==="async"&&(a.functions.stdev=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>c("stdev",n,r,a))},a.functions.variance=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>c("variance",n,r,a))},a.functions.average=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>c("mean",n,r,a))},a.functions.mean=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>c("mean",n,r,a))},a.functions.sum=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>c("sum",n,r,a))},a.functions.min=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>c("min",n,r,a))},a.functions.max=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>c("max",n,r,a))},a.functions.count=function(n,t){return a.standardFunctionAsync(n,t,(e,i,r)=>f(this,null,function*(){if(S(r,1,1,n,t),m(r[0]))return r[0].count(e.abortSignal);if(l(r[0])||p(r[0]))return r[0].length;if(d(r[0]))return r[0].length();throw new h(n,F.InvalidParameter,t)}))})}export{q as registerFunctions};
