import{a as w,b as F,d as m}from"./chunk-DHCNASG6.js";import"./chunk-CD7FGRAU.js";import"./chunk-G4NJ66JB.js";import{b as c,c as p,d as v,g as z,h as T,i as y,k as I,l as V,m as x}from"./chunk-3CM6CIFQ.js";import"./chunk-P5GBR7PO.js";import"./chunk-HIQGSNLD.js";import"./chunk-QU77E3KV.js";import"./chunk-SSGUIPHM.js";import"./chunk-7WFRJSY3.js";import"./chunk-PSQRUING.js";import"./chunk-DFTBSFIN.js";import"./chunk-3JLZ7SFH.js";import"./chunk-FUBITVJ7.js";import"./chunk-VOH7XGOR.js";import"./chunk-Y6HWUWZ3.js";import"./chunk-AQ74ANSJ.js";import"./chunk-5UCI4TUX.js";import"./chunk-SAOUSUZE.js";import"./chunk-PPFMRTTD.js";import"./chunk-IWJQ3PU6.js";import"./chunk-Z5Q76SB7.js";import"./chunk-TTN7UOJS.js";import"./chunk-5QLB7ZJ7.js";import"./chunk-E5R4OI7X.js";import"./chunk-N566L3JG.js";import"./chunk-7S6PD5JC.js";import"./chunk-ZWI7LLTZ.js";import"./chunk-6NCXSKJD.js";import"./chunk-4HUAEW4D.js";import"./chunk-XWRPBDYS.js";import"./chunk-TCCAOREC.js";import"./chunk-BCREO4Q5.js";import"./chunk-SO6OJFOM.js";import"./chunk-DG5QI6E2.js";import"./chunk-TMZNSBQB.js";import"./chunk-ZGLJFDS6.js";import"./chunk-RSDQHAJX.js";import"./chunk-OFVMJORF.js";import"./chunk-XGVKSCMM.js";import"./chunk-FX2VBPAM.js";import"./chunk-K4GPNFIS.js";import"./chunk-RP7XSKHE.js";import"./chunk-VV7MGXTC.js";import"./chunk-IXNVQC76.js";import"./chunk-LYPZUCFI.js";import"./chunk-QYC4ILGT.js";import"./chunk-HFQFGALU.js";import"./chunk-5TSEU5EE.js";import"./chunk-VC35VCVT.js";import"./chunk-MT7BXRRQ.js";import"./chunk-NNKLK2DS.js";import"./chunk-BRGZVJPZ.js";import"./chunk-Z5NXR7SL.js";import"./chunk-7JLWSSXP.js";import"./chunk-W3WDPWBE.js";import"./chunk-JKP4I6UL.js";import"./chunk-TZHKPIVH.js";import"./chunk-JPDAKIWT.js";import"./chunk-W6LY37E4.js";import"./chunk-BRWS572J.js";import"./chunk-AKNRR36C.js";import{g as u}from"./chunk-JEGVIFEP.js";function C(o){return u(this,null,function*(){let{attribute:a,features:s}=o,{normalizationType:e,normalizationField:i,minValue:n,maxValue:l,fieldType:t}=a,r=yield m({field:a.field,valueExpression:a.valueExpression,normalizationType:e,normalizationField:i,normalizationTotal:a.normalizationTotal,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},s),f=c({normalizationType:e,normalizationField:i,minValue:n,maxValue:l}),d={value:.5,fieldType:t},S=t==="esriFieldTypeString"?p({values:r,supportsNullCount:f,percentileParams:d}):v({values:r,minValue:n,maxValue:l,useSampleStdDev:!e,supportsNullCount:f,percentileParams:d});return z(S,t==="esriFieldTypeDate")})}function E(o){return u(this,null,function*(){let{attribute:a,features:s}=o,e=yield m({field:a.field,field2:a.field2,field3:a.field3,fieldDelimiter:a.fieldDelimiter,valueExpression:a.valueExpression,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},s,!1),i=T(e);return y(i,a.domains,a.returnAllCodedValues,a.fieldDelimiter)})}function Z(o){return u(this,null,function*(){let{attribute:a,features:s}=o,{field:e,normalizationType:i,normalizationField:n,normalizationTotal:l,classificationMethod:t}=a,r=yield m({field:e,valueExpression:a.valueExpression,normalizationType:i,normalizationField:n,normalizationTotal:l,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},s),f=I(r,{field:e,normalizationType:i,normalizationField:n,normalizationTotal:l,classificationMethod:t,standardDeviationInterval:a.standardDeviationInterval,numClasses:a.numClasses,minValue:a.minValue,maxValue:a.maxValue});return V(f,t)})}function h(o){return u(this,null,function*(){let{attribute:a,features:s}=o,{field:e,normalizationType:i,normalizationField:n,normalizationTotal:l,classificationMethod:t}=a,r=yield m({field:e,valueExpression:a.valueExpression,normalizationType:i,normalizationField:n,normalizationTotal:l,viewInfoParams:a.viewInfoParams,timeZone:a.timeZone,fieldInfos:a.fieldInfos},s);return x(r,{field:e,normalizationType:i,normalizationField:n,normalizationTotal:l,classificationMethod:t,standardDeviationInterval:a.standardDeviationInterval,numBins:a.numBins,minValue:a.minValue,maxValue:a.maxValue})})}function b(o){return u(this,null,function*(){let{attribute:a,features:s}=o,{field:e,radius:i,transform:n,spatialReference:l}=a,t=a.size??[0,0],r=w(s??[],n,l,t);return F(r,i??void 0,e,t[0],t[1])})}export{Z as classBreaks,b as heatmapStatistics,h as histogram,C as summaryStatistics,E as uniqueValues};
