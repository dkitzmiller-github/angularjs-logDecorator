// Generated by uRequire v0.6.14 - template: 'UMD' 
(function (window, global) {
  
var __isAMD = !!(typeof define === 'function' && define.amd),
    __isNode = (typeof exports === 'object'),
    __isWeb = !__isNode;

"use strict";
(function (factory) {
  if (typeof exports === 'object') {
    var nr = new (require('urequire').NodeRequirer) ('mindspace/utils/createGuid', module, __dirname, '.');
    module.exports = factory(nr.require, exports, module);
} else if (typeof define === 'function' && define.amd) { define(factory) } else throw new Error('uRequire: Loading UMD module as <script>, without `build.noLoaderUMD`');
}).call(this, function (require, exports, module) {
  

function createGuid() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c === "x" ? r : r & 3 | 8;
      return v.toString(16);
    });
  }
  return createGuid;


})
}).call(this, (typeof exports === 'object' ? global : window), (typeof exports === 'object' ? global : window))