'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-4314db14.js');

/*
 Stencil Client Patch Browser v4.0.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('auth.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["ic-container_2.cjs",[[1,"ic-container"],[1,"ic-login",{"name":[32],"email":[32],"checkbox":[32],"isFormValid":[32],"nameError":[32],"emailError":[32],"checkboxError":[32]}]]]], options);
});

exports.setNonce = index.setNonce;

//# sourceMappingURL=auth.cjs.js.map