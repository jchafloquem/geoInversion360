import{a as c,d as u}from"./chunk-OMNN7QFV.js";function v(){return navigator.userAgentData}function E(){if(!c.isBrowser)return"";let e=v();return e?.brands?e.brands.map(({brand:t,version:i})=>`${t}/${i}`).join(" "):navigator.userAgent}var r=/firefox/i.test(E()),n=r?new WeakMap:null;function I(){let{disabled:e}=this;e||HTMLElement.prototype.click.call(this)}function l(e){let t=e.target;if(r&&!n.get(t))return;let{disabled:i}=t;i&&e.preventDefault()}var d=["mousedown","mouseup","click"];function f(e){let t=e.target;r&&!n.get(t)||t.disabled&&(e.stopImmediatePropagation(),e.preventDefault())}var a={capture:!0};function L(e){if(e.disabled){e.el.setAttribute("aria-disabled","true"),e.el.contains(document.activeElement)&&document.activeElement.blur(),g(e);return}b(e),e.el.removeAttribute("aria-disabled")}function g(e){if(e.el.click=I,r){let t=k(e),i=n.get(e.el);i!==t&&(s(i),n.set(e.el,t)),o(n.get(e.el));return}o(e.el)}function o(e){e&&(e.addEventListener("pointerdown",l,a),d.forEach(t=>e.addEventListener(t,f,a)))}function k(e){return e.el.parentElement||e.el}function b(e){if(delete e.el.click,r){s(n.get(e.el)),n.delete(e.el);return}s(e.el)}function s(e){e&&(e.removeEventListener("pointerdown",l,a),d.forEach(t=>e.removeEventListener(t,f,a)))}function w(e){!e.disabled||!r||g(e)}function A(e){r&&b(e)}var D={container:"interaction-container"};function P({disabled:e},t){return u("div",{class:D.container,inert:e},...t)}export{L as a,w as b,A as c,P as d};
