function l(c,o,e,n){var u,r=arguments.length,t=r<3?o:n===null?n=Object.getOwnPropertyDescriptor(o,e):n;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(c,o,e,n);else for(var i=c.length-1;i>=0;i--)(u=c[i])&&(t=(r<3?u(t):r>3?u(o,e,t):u(o,e))||t);return r>3&&t&&Object.defineProperty(o,e,t),t}function y(c,o){return function(e,n){o(e,n,c)}}function d(c,o,e,n){function u(r){return r instanceof e?r:new e(function(t){t(r)})}return new(e||(e=Promise))(function(r,t){function i(f){try{a(n.next(f))}catch(p){t(p)}}function s(f){try{a(n.throw(f))}catch(p){t(p)}}function a(f){f.done?r(f.value):u(f.value).then(i,s)}a((n=n.apply(c,o||[])).next())})}export{l as a,y as b,d as c};
