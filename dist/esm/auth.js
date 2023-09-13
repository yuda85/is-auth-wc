import { p as promiseResolve, b as bootstrapLazy } from './index-c96b2028.js';
export { s as setNonce } from './index-c96b2028.js';

/*
 Stencil Client Patch Browser v4.0.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = import.meta.url;
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return promiseResolve(opts);
};

patchBrowser().then(options => {
  return bootstrapLazy([["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["ic-container_2",[[1,"ic-container"],[1,"ic-login",{"name":[32],"email":[32],"checkbox":[32],"isFormValid":[32],"nameError":[32],"emailError":[32],"checkboxError":[32]}]]]], options);
});

//# sourceMappingURL=auth.js.map