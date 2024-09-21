import{a}from"./chunk-PCE3ZAVU.js";import{b as e}from"./chunk-GMW3QDVG.js";import{a as i}from"./chunk-RHABF3KL.js";import{a as u}from"./chunk-H5IJXG2U.js";var t;function w(o){return o===t.Shadow||o===t.ShadowHighlight||o===t.ShadowExcludeHighlight||o===t.ViewshedShadow}function D(o){return M(o)||o===t.Normal}function g(o){return o===t.Highlight||o===t.ObjectAndLayerIdColor}function y(o){return o===t.Color}function C(o){return y(o)||g(o)}function M(o){return C(o)||A(o)}function A(o){return o===t.Depth}(function(o){o[o.Color=0]="Color",o[o.Depth=1]="Depth",o[o.Normal=2]="Normal",o[o.Shadow=3]="Shadow",o[o.ShadowHighlight=4]="ShadowHighlight",o[o.ShadowExcludeHighlight=5]="ShadowExcludeHighlight",o[o.ViewshedShadow=6]="ViewshedShadow",o[o.Highlight=7]="Highlight",o[o.ObjectAndLayerIdColor=8]="ObjectAndLayerIdColor",o[o.COUNT=9]="COUNT"})(t||(t={}));function H(o,r){switch(r.normalType){case m.Compressed:o.attributes.add(u.NORMALCOMPRESSED,"vec2"),o.vertex.code.add(e`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case m.Attribute:o.attributes.add(u.NORMAL,"vec3"),o.vertex.code.add(e`vec3 normalModel() {
return normal;
}`);break;case m.ScreenDerivative:o.fragment.code.add(e`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:r.normalType;case m.COUNT:case m.Ground:}}var m;(function(o){o[o.Attribute=0]="Attribute",o[o.Compressed=1]="Compressed",o[o.Ground=2]="Ground",o[o.ScreenDerivative=3]="ScreenDerivative",o[o.COUNT=4]="COUNT"})(m||(m={}));var p=class extends a{constructor(r,s){super(r,"vec3",i.Pass,(l,n,c)=>l.setUniform3fv(r,s(n,c)))}};var d;(function(o){o[o.Multiply=1]="Multiply",o[o.Ignore=2]="Ignore",o[o.Replace=3]="Replace",o[o.Tint=4]="Tint"})(d||(d={}));var O=85;var V=2*O;function z(o){o.vertex.code.add(e`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${e.int(d.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${e.int(d.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${e.int(d.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${e.int(d.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}function J({code:o},r){r.doublePrecisionRequiresObfuscation?o.add(e`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`):o.add(e`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`)}var h=class extends a{constructor(r,s){super(r,"vec3",i.Draw,(l,n,c,x)=>l.setUniform3fv(r,s(n,c,x)))}};var f=class extends a{constructor(r,s){super(r,"mat3",i.Draw,(l,n,c)=>l.setUniformMatrix3fv(r,s(n,c)))}};var v=class extends a{constructor(r,s){super(r,"mat3",i.Pass,(l,n,c)=>l.setUniformMatrix3fv(r,s(n,c)))}};var b=class extends a{constructor(r,s){super(r,"mat4",i.Pass,(l,n,c)=>l.setUniformMatrix4fv(r,s(n,c)))}};export{d as a,z as b,t as c,w as d,D as e,H as f,m as g,J as h,h as i,p as j,f as k,v as l,b as m};
