import{a as N}from"./chunk-T62VBPHF.js";import{g as m}from"./chunk-JEGVIFEP.js";var F=["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"],S=F.join(","),O=typeof Element>"u",d=O?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,p=!O&&Element.prototype.getRootNode?function(r){var t;return r==null||(t=r.getRootNode)===null||t===void 0?void 0:t.call(r)}:function(r){return r?.ownerDocument},T=function r(t,e){var n;e===void 0&&(e=!0);var a=t==null||(n=t.getAttribute)===null||n===void 0?void 0:n.call(t,"inert"),i=a===""||a==="true",o=i||e&&t&&r(t.parentNode);return o},j=function(t){var e,n=t==null||(e=t.getAttribute)===null||e===void 0?void 0:e.call(t,"contenteditable");return n===""||n==="true"},L=function(t,e,n){if(T(t))return[];var a=Array.prototype.slice.apply(t.querySelectorAll(S));return e&&d.call(t,S)&&a.unshift(t),a=a.filter(n),a},k=function r(t,e,n){for(var a=[],i=Array.from(t);i.length;){var o=i.shift();if(!T(o,!1))if(o.tagName==="SLOT"){var u=o.assignedElements(),s=u.length?u:o.children,l=r(s,!0,n);n.flatten?a.push.apply(a,l):a.push({scopeParent:o,candidates:l})}else{var f=d.call(o,S);f&&n.filter(o)&&(e||!t.includes(o))&&a.push(o);var c=o.shadowRoot||typeof n.getShadowRoot=="function"&&n.getShadowRoot(o),y=!T(c,!1)&&(!n.shadowRootFilter||n.shadowRootFilter(o));if(c&&y){var v=r(c===!0?o.children:c.children,!0,n);n.flatten?a.push.apply(a,v):a.push({scopeParent:o,candidates:v})}else i.unshift.apply(i,o.children)}}return a},q=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},B=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||j(t))&&!q(t)?0:t.tabIndex},z=function(t,e){var n=B(t);return n<0&&e&&!q(t)?0:n},X=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},M=function(t){return t.tagName==="INPUT"},Y=function(t){return M(t)&&t.type==="hidden"},Z=function(t){var e=t.tagName==="DETAILS"&&Array.prototype.slice.apply(t.children).some(function(n){return n.tagName==="SUMMARY"});return e},H=function(t,e){for(var n=0;n<t.length;n++)if(t[n].checked&&t[n].form===e)return t[n]},K=function(t){if(!t.name)return!0;var e=t.form||p(t),n=function(u){return e.querySelectorAll('input[type="radio"][name="'+u+'"]')},a;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")a=n(window.CSS.escape(t.name));else try{a=n(t.name)}catch(o){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",o.message),!1}var i=H(a,t.form);return!i||i===t},J=function(t){return M(t)&&t.type==="radio"},Q=function(t){return J(t)&&!K(t)},V=function(t){var e,n=t&&p(t),a=(e=n)===null||e===void 0?void 0:e.host,i=!1;if(n&&n!==t){var o,u,s;for(i=!!((o=a)!==null&&o!==void 0&&(u=o.ownerDocument)!==null&&u!==void 0&&u.contains(a)||t!=null&&(s=t.ownerDocument)!==null&&s!==void 0&&s.contains(t));!i&&a;){var l,f,c;n=p(a),a=(l=n)===null||l===void 0?void 0:l.host,i=!!((f=a)!==null&&f!==void 0&&(c=f.ownerDocument)!==null&&c!==void 0&&c.contains(a))}}return i},R=function(t){var e=t.getBoundingClientRect(),n=e.width,a=e.height;return n===0&&a===0},_=function(t,e){var n=e.displayCheck,a=e.getShadowRoot;if(getComputedStyle(t).visibility==="hidden")return!0;var i=d.call(t,"details>summary:first-of-type"),o=i?t.parentElement:t;if(d.call(o,"details:not([open]) *"))return!0;if(!n||n==="full"||n==="legacy-full"){if(typeof a=="function"){for(var u=t;t;){var s=t.parentElement,l=p(t);if(s&&!s.shadowRoot&&a(s)===!0)return R(t);t.assignedSlot?t=t.assignedSlot:!s&&l!==t.ownerDocument?t=l.host:t=s}t=u}if(V(t))return!t.getClientRects().length;if(n!=="legacy-full")return!0}else if(n==="non-zero-area")return R(t);return!1},tt=function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if(e.tagName==="FIELDSET"&&e.disabled){for(var n=0;n<e.children.length;n++){var a=e.children.item(n);if(a.tagName==="LEGEND")return d.call(e,"fieldset[disabled] *")?!0:!a.contains(t)}return!0}e=e.parentElement}return!1},w=function(t,e){return!(e.disabled||T(e)||Y(e)||_(e,t)||Z(e)||tt(e))},I=function(t,e){return!(Q(e)||B(e)<0||!w(t,e))},rt=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},et=function r(t){var e=[],n=[];return t.forEach(function(a,i){var o=!!a.scopeParent,u=o?a.scopeParent:a,s=z(u,o),l=o?r(a.candidates):u;s===0?o?e.push.apply(e,l):e.push(u):n.push({documentOrder:i,tabIndex:s,item:a,isScope:o,content:l})}),n.sort(X).reduce(function(a,i){return i.isScope?a.push.apply(a,i.content):a.push(i.content),a},[]).concat(e)},nt=function(t,e){e=e||{};var n;return e.getShadowRoot?n=k([t],e.includeContainer,{filter:I.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:rt}):n=L(t,e.includeContainer,I.bind(null,e)),et(n)},wt=function(t,e){e=e||{};var n;return e.getShadowRoot?n=k([t],e.includeContainer,{filter:w.bind(null,e),flatten:!0,getShadowRoot:e.getShadowRoot}):n=L(t,e.includeContainer,w.bind(null,e)),n},At=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return d.call(t,S)===!1?!1:I(e,t)},at=F.concat("iframe").join(","),Ct=function(t,e){if(e=e||{},!t)throw new Error("No node provided");return d.call(t,at)===!1?!1:w(e,t)},it={getShadowRoot:!0};function Et(r){return r?r.id=r.id||`${r.tagName.toLowerCase()}-${N()}`:""}function It(r){let t="dir",e=`[${t}]`,n=ot(r,e);return n?n.getAttribute(t):"ltr"}function P(r){return r.getRootNode()}function $(r){return r.host||null}function xt(r,{selector:t,id:e}){function n(a){if(!a)return null;a.assignedSlot&&(a=a.assignedSlot);let i=P(a),o=e?"getElementById"in i?i.getElementById(e):null:t?i.querySelector(t):null,u=$(i);return o||(u?n(u):null)}return n(r)}function ot(r,t){function e(n){return n?n.closest(t)||e($(P(n))):null}return e(r)}function ut(r,t){return G(r,t)}function G(r,t){if(!r)return;let e=t(r);if(e!==void 0)return e;let{parentNode:n}=r;return G(n instanceof ShadowRoot?n.host:n,t)}function Nt(r,t){return!!ut(t,e=>e===r?!0:void 0)}function st(r){return typeof r?.setFocus=="function"}function Rt(r){return m(this,null,function*(){if(r)return st(r)?r.setFocus():r.focus()})}function lt(r){if(r)return nt(r,it)[0]??r}function Dt(r){lt(r)?.focus()}var g=":not([slot])";function Ft(r,t,e){t&&!Array.isArray(t)&&typeof t!="string"&&(e=t,t=null);let n=t?Array.isArray(t)?t.map(a=>`[slot="${a}"]`).join(","):`[slot="${t}"]`:g;return e?.all?ct(r,n,e):ft(r,n,e)}function U(r,t){return r?Array.from(r.children||[]).filter(e=>e?.matches(t)):[]}function ct(r,t,e){let n=t===g?U(r,g):Array.from(r.querySelectorAll(t));n=e&&e.direct===!1?n:n.filter(i=>i.parentElement===r),n=e?.matches?n.filter(i=>i?.matches(e.matches)):n;let a=e?.selector;return a?n.map(i=>Array.from(i.querySelectorAll(a))).reduce((i,o)=>[...i,...o],[]).filter(i=>!!i):n}function ft(r,t,e){let n=t===g?U(r,g)[0]||null:r.querySelector(t);n=e&&e.direct===!1||n?.parentElement===r?n:null,n=e?.matches?n?.matches(e.matches)?n:null:n;let a=e?.selector;return a?n?.querySelector(a):n}function Ot(r,t,e){if(typeof t=="string"&&t!=="")return t;if(t==="")return r[e]}function Lt(r){return(!!r).toString()}function kt(r){return bt(r)||vt(r)}function dt(r){return ht(r).filter(t=>t.nodeType===Node.TEXT_NODE).map(t=>t.textContent).join("").trim()}function vt(r){return!!dt(r)}function ht(r){return r.currentTarget.assignedNodes({flatten:!0})}function bt(r){return!!gt(r).length}function gt(r){return r.currentTarget.assignedElements({flatten:!0})}function qt(r){return!!(r.isPrimary&&r.button===0)}function Bt(r){return r.detail===0}function Mt(r,t){if(r.parentNode!==t.parentNode)return!1;let e=Array.from(r.parentNode.children);return e.indexOf(r)<e.indexOf(t)}function Pt(r,t,e,n){return m(this,null,function*(){return yt(r,t,"transition",e,n)})}function yt(r,t,e,n,a){return m(this,null,function*(){let i=window.getComputedStyle(r),o=e==="transition"?i.transitionDuration:i.animationDuration,u=e==="transition"?i.transitionProperty:i.animationName,s=o.split(","),f=u.split(",").indexOf(t),c=s[f]??s[0];function y(){n?.(),a?.()}if(c==="0s"){y();return}let v=e==="transition"?"transitionstart":"animationstart",A=e==="transition"?"transitionend":"animationend",C=e==="transition"?"transitioncancel":"animationcancel";return new Promise(x=>{let W=window.setTimeout(()=>{r.removeEventListener(v,E),r.removeEventListener(A,h),r.removeEventListener(C,h),y(),x()},parseFloat(c)*1e3);r.addEventListener(v,E),r.addEventListener(A,h),r.addEventListener(C,h);function E(b){b.target===r&&D(b)===t&&(window.clearTimeout(W),r.removeEventListener(v,E),n?.())}function h(b){b.target===r&&D(b)===t&&(r.removeEventListener(A,h),r.removeEventListener(C,h),a?.(),x())}})})}function mt(r){return"propertyName"in r}function D(r){return mt(r)?r.propertyName:r.animationName}export{B as a,nt as b,wt as c,At as d,Ct as e,it as f,Et as g,It as h,xt as i,ot as j,Nt as k,Rt as l,lt as m,Dt as n,Ft as o,Ot as p,Lt as q,kt as r,bt as s,gt as t,qt as u,Bt as v,Mt as w,Pt as x};
