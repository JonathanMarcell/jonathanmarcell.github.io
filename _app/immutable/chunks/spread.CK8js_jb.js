function i(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function g(n,d){const e={},s={},o={$$scope:1};let u=n.length;for(;u--;){const t=n[u],f=d[u];if(f){for(const c in t)c in f||(s[c]=1);for(const c in f)o[c]||(e[c]=f[c],o[c]=1);n[u]=f}else for(const c in t)o[c]=1}for(const t in s)t in e||(e[t]=void 0);return e}function h(n){return typeof n=="object"&&n!==null?n:{}}export{h as a,i as e,g};
