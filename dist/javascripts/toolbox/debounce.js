function t(t,n,e){let o;return function(...u){const i=this,l=e&&!o;clearTimeout(o),o=setTimeout(function(){o=null,e||t.apply(i,u)},n),l&&t.apply(i,u)}}export{t as debounce};
