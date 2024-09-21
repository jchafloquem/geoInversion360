import{B as $,C as L,D as B,E as I,F as _,G as W,H as k,I as j,K as Q,L as q,M as J,N as Y,O as K,P as X,Q as Z,R as H,S as ee,c as m,d as V,e as M,g as x,h as U,m as g,n as P,o as S,t as A,u as E,v as D,w as F,x as h,y as R}from"./chunk-BMJVGRDY.js";import{a as z}from"./chunk-HBSQWDA6.js";import{a as v,b as O,e as G}from"./chunk-AZQXDF5K.js";import{c as b,f as N,g as u,j as p,l as s}from"./chunk-ZYBGZLJ2.js";import{a as C}from"./chunk-7FVU4GPM.js";import{b as T}from"./chunk-PCE3ZAVU.js";import{b as o}from"./chunk-GMW3QDVG.js";import{a as y}from"./chunk-RHABF3KL.js";import{a as c}from"./chunk-H5IJXG2U.js";import{d as w}from"./chunk-2EA2KAER.js";import{c as n}from"./chunk-7C6Z24SS.js";function re(e,r){let a=e.fragment;switch(a.code.add(o`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),r.doubleSidedMode){case l.None:a.code.add(o`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case l.View:a.code.add(o`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case l.WindingOrder:a.code.add(o`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:r.doubleSidedMode;case l.COUNT:}}var l;(function(e){e[e.None=0]="None",e[e.View=1]="View",e[e.WindingOrder=2]="WindingOrder",e[e.COUNT=3]="COUNT"})(l||(l={}));function oe(e,r){let a=e.fragment;r.hasVertexTangents?(e.attributes.add(c.TANGENT,"vec4"),e.varyings.add("vTangent","vec4"),r.doubleSidedMode===l.WindingOrder?a.code.add(o`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(o`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(o`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),r.textureCoordinateType!==m.None&&(e.include(M,r),a.uniforms.add(r.pbrTextureBindType===y.Pass?new v("normalTexture",t=>t.textureNormal):new C("normalTexture",t=>t.textureNormal)),r.hasNormalTextureTransform&&(a.uniforms.add(new O("scale",t=>t.scale??w)),a.uniforms.add(new s("normalTextureTransformMatrix",t=>t.normalTextureTransformMatrix??n))),a.code.add(o`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),r.hasNormalTextureTransform&&a.code.add(o`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(o`return tangentSpace * rawNormal;
}`))}function ae(e,r){r.hasColorTextureTransform?(e.vertex.uniforms.add(new s("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??n)),e.varyings.add("colorUV","vec2"),e.vertex.code.add(o`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o`void forwardColorUV(){}`)}function te(e,r){r.hasNormalTextureTransform&&r.textureCoordinateType!==m.None?(e.vertex.uniforms.add(new s("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??n)),e.varyings.add("normalUV","vec2"),e.vertex.code.add(o`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o`void forwardNormalUV(){}`)}function ie(e,r){r.hasEmissionTextureTransform&&r.textureCoordinateType!==m.None?(e.vertex.uniforms.add(new s("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??n)),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(o`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o`void forwardEmissiveUV(){}`)}function ne(e,r){r.hasOcclusionTextureTransform&&r.textureCoordinateType!==m.None?(e.vertex.uniforms.add(new s("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??n)),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(o`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o`void forwardOcclusionUV(){}`)}function se(e,r){r.hasMetallicRoughnessTextureTransform&&r.textureCoordinateType!==m.None?(e.vertex.uniforms.add(new s("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??n)),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(o`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):e.vertex.code.add(o`void forwardMetallicRoughnessUV(){}`)}function me(e){let r=new G,{vertex:a,fragment:t,varyings:d}=r;if(R(a,e),r.include(P),d.add("vpos","vec3"),r.include(_,e),r.include($,e),r.include(I,e),r.include(ae,e),e.output===b.Color){r.include(te,e),r.include(ie,e),r.include(ne,e),r.include(se,e),h(a,e),r.include(N,e),r.include(F,e);let f=e.normalType===u.Attribute||e.normalType===u.Compressed;f&&e.offsetBackfaces&&r.include(E),r.include(oe,e),r.include(S,e),e.instancedColor&&r.attributes.add(c.INSTANCECOLOR,"vec4"),d.add("vPositionLocal","vec3"),r.include(V,e),r.include(A,e),r.include(L,e),r.include(B,e),a.uniforms.add(new z("externalColor",i=>i.externalColor)),d.add("vcolorExt","vec4"),e.multipassEnabled&&d.add("depth","float"),a.code.add(o`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${o.float(.001)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${f?o`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${e.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${f&&e.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${e.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),r.include(D,e),r.include(K,e),r.include(j,e),r.include(W,e),r.include(e.instancedDoublePrecision?Z:H,e),r.include(X,e),h(t,e),t.uniforms.add(a.uniforms.get("localOrigin"),new p("ambient",i=>i.ambient),new p("diffuse",i=>i.diffuse),new T("opacity",i=>i.opacity),new T("layerOpacity",i=>i.layerOpacity)),e.hasColorTexture&&t.uniforms.add(new v("tex",i=>i.texture)),r.include(U,e),r.include(q,e),t.include(ee),r.include(re,e),J(t),Y(t),Q(t),e.transparencyPassType===g.ColorAlpha&&(r.outputs.add("fragColor","vec4",0),r.outputs.add("fragAlpha","float",1)),t.code.add(o`
      void main() {
        discardBySlice(vpos);
        ${e.multipassEnabled?"terrainDepthTest(depth);":""}
        ${e.hasColorTexture?o`
                vec4 texColor = texture(tex, ${e.hasColorTextureTransform?o`colorUV`:o`vuv0`});
                ${e.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:o`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${e.normalType===u.ScreenDerivative?o`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:o`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${e.pbrMode===x.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${e.receiveShadows?"readShadowMap(vpos, linearDepth)":e.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${e.hasVertexColors?o`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:o`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${e.hasNormalTexture?o`
                mat3 tangentSpace = ${e.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${e.hasNormalTextureTransform?o`normalUV`:"vuv0"});`:o`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${e.spherical?o`normalize(posWorld);`:o`vec3(0.0, 0.0, 1.0);`}

        ${e.snowCover?o`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${e.pbrMode===x.Normal||e.pbrMode===x.Schematic?o`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${e.snowCover?o`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:o`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.transparencyPassType===g.ColorAlpha?o`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return r.include(k,e),r}var fr=Object.freeze(Object.defineProperty({__proto__:null,build:me},Symbol.toStringTag,{value:"Module"}));export{l as a,me as b,fr as c};
