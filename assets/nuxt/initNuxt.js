/** Object assign polyfill */
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n;n="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,n.ObjectAssign=e()}}(function(){return function e(n,r,t){function o(f,u){if(!r[f]){if(!n[f]){var l="function"==typeof require&&require;if(!u&&l)return l(f,!0);if(i)return i(f,!0);var c=new Error("Cannot find module '"+f+"'");throw c.code="MODULE_NOT_FOUND",c}var a=r[f]={exports:{}};n[f][0].call(a.exports,function(e){var r=n[f][1][e];return o(r?r:e)},a,a.exports,e,n,r,t)}return r[f].exports}for(var i="function"==typeof require&&require,f=0;f<t.length;f++)o(t[f]);return o}({1:[function(e,n,r){"use strict";function t(e,n){if(void 0===e||null===e)throw new TypeError("Cannot convert first argument to object");for(var r=Object(e),t=1;t<arguments.length;t++){var o=arguments[t];if(void 0!==o&&null!==o)for(var i=Object.keys(Object(o)),f=0,u=i.length;f<u;f++){var l=i[f],c=Object.getOwnPropertyDescriptor(o,l);void 0!==c&&c.enumerable&&(r[l]=o[l])}}return r}function o(){Object.assign||Object.defineProperty(Object,"assign",{enumerable:!1,configurable:!0,writable:!0,value:t})}n.exports={assign:t,polyfill:o}},{}]},{},[1])(1)});

window.lupusContentEl = document.querySelector('main[role="main"]');
lupus = Object.assign(lupus ? lupus : {}, {
  initialState: {
    route: window.$nuxt.$route.path,
    content: window.contentEl ? window.contentEl.innerHTML : ''
  }
});
