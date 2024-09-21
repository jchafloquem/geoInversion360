import{a as w,c as b,d as v,e as x}from"./chunk-AZQXDF5K.js";import{a as c}from"./chunk-7FVU4GPM.js";import{a as p,b as m}from"./chunk-PCE3ZAVU.js";import{b as e}from"./chunk-GMW3QDVG.js";import{a as d}from"./chunk-RHABF3KL.js";import{w as u}from"./chunk-ZGLJFDS6.js";var l=class extends p{constructor(t,a){super(t,"vec2",d.Draw,(s,r,f,n)=>s.setUniform2fv(t,a(r,f,n)))}};var i=4;function h(){let o=new x,t=o.fragment;o.include(b);let a=(i+1)/2,s=1/(2*a*a);return t.include(v),t.uniforms.add(new w("depthMap",r=>r.depthTexture),new c("tex",r=>r.colorTexture),new l("blurSize",r=>r.blurSize),new m("projScale",(r,f)=>{let n=u(f.camera.eye,f.camera.center);return n>5e4?Math.max(0,r.projScale-(n-5e4)):r.projScale})),t.code.add(e`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${e.float(s)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),o.outputs.add("fragBlur","float"),t.code.add(e`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${e.int(i)}; r <= ${e.int(i)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),o}var O=Object.freeze(Object.defineProperty({__proto__:null,build:h},Symbol.toStringTag,{value:"Module"}));export{h as a,O as b};
