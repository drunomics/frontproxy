/** Object assign polyfill */
Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:function(e){"use strict";if(null==e)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),t=1;t<arguments.length;t++){var n=arguments[t];if(null!=n){n=Object(n);for(var c=Object.keys(Object(n)),o=0,a=c.length;o<a;o++){var b=c[o],i=Object.getOwnPropertyDescriptor(n,b);void 0!==i&&i.enumerable&&(r[b]=n[b])}}}return r}});

window.lupusContentEl = document.querySelector('main[role="main"]');
lupus = Object.assign(lupus ? lupus : {}, {
  initialState: {
    synced: false,
    content: window.lupusContentEl ? window.lupusContentEl.innerHTML : '',
    breadcrumbs: { },
    metatags: { },
    messages: { }
  }
});

/**
 * The goal of this part of the script is to remove the content injected from the frontproxy.
 * Removing the content restores the original DOM structure before the nuxt app is mounted,
 * so that the virtual dom tree matches the real one.
 */
const breadcrumbs = document.querySelector('.breadcrumbs')

if (window.lupusContentEl) {
  window.lupusContentEl.innerHTML = '<!---->'
}

if (breadcrumbs) {
  breadcrumbs.innerHTML = ''
}
