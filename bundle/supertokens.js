"use strict";var supertokens;(self.webpackChunksupertokens_web_js=self.webpackChunksupertokens_web_js||[]).push([[842],{280:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(569),t)},7611:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SSR_ERROR=t.DEFAULT_API_BASE_PATH=void 0,t.DEFAULT_API_BASE_PATH="/auth",t.SSR_ERROR="\nIf you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook."},569:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.init=void 0;var n=r(3146),o=function(){function e(){}return e.init=function(e){n.default.init(e)},e}();t.default=o,t.init=o.init},7992:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function r(e,t){void 0===t&&(t=!1),e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");var n=new URL(e);return t?n.hostname.startsWith("localhost")||(o=n.hostname,/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(o))?"http://"+n.host:"https://"+n.host:n.protocol+"//"+n.host}catch(e){}var o;if(e.startsWith("/"))throw new Error("Please provide a valid domain name");if(0===e.indexOf(".")&&(e=e.substr(1)),(-1!==e.indexOf(".")||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://")){e="https://"+e;try{return new URL(e),r(e,!0)}catch(e){}}throw new Error("Please provide a valid domain name")}t.default=function(e){var t=this;this.getAsStringDangerous=function(){return t.value},this.value=r(e)}},1260:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function r(e){e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");return"/"===(e=new URL(e).pathname).charAt(e.length-1)?e.substr(0,e.length-1):e}catch(e){}if((function(e){if(-1===e.indexOf(".")||e.startsWith("/"))return!1;try{return-1!==new URL(e).hostname.indexOf(".")}catch(e){}try{return-1!==new URL("http://"+e).hostname.indexOf(".")}catch(e){}return!1}(e)||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://"))return r(e="http://"+e);"/"!==e.charAt(0)&&(e="/"+e);try{return new URL("http://example.com"+e),r("http://example.com"+e)}catch(e){throw new Error("Please provide a valid URL path")}}t.default=function e(t){var n=this;this.startsWith=function(e){return n.value.startsWith(e.value)},this.appendPath=function(t){return new e(n.value+t.value)},this.getAsStringDangerous=function(){return n.value},this.value=r(t)}},5941:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.PostSuperTokensInitCallbacks=void 0;var r=function(){function e(){}return e.addPostInitCallback=function(t){e.postInitCallbacks.push(t)},e.runPostInitCallbacks=function(){for(var t=0,r=e.postInitCallbacks;t<r.length;t++)(0,r[t])()},e.postInitCallbacks=[],e}();t.PostSuperTokensInitCallbacks=r},3146:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(8122),o=r(2118),i=r(9092),a=r(5941),s=function(){function e(e){var t=this;if(this.recipeList=[],this.appInfo=(0,n.normaliseInputAppInfoOrThrowError)(e.appInfo),void 0===e.recipeList||0===e.recipeList.length)throw new Error("Please provide at least one recipe to the supertokens.init function call. See https://supertokens.io/docs/emailpassword/quick-setup/frontend");var r=!1;void 0!==e.enableDebugLogs&&(r=e.enableDebugLogs),this.recipeList=e.recipeList.map((function(e){return e(t.appInfo,r)}))}return e.init=function(t){o.CookieHandlerReference.init(t.cookieHandler),i.WindowHandlerReference.init(t.windowHandler),void 0===e.instance?(e.instance=new e(t),a.PostSuperTokensInitCallbacks.runPostInitCallbacks()):console.warn("SuperTokens was already initialized")},e.getInstanceOrThrow=function(){if(void 0===e.instance){var t="SuperTokens must be initialized before calling this method.";throw t=(0,n.checkForSSRErrorAndAppendIfNeeded)(t),new Error(t)}return e.instance},e.reset=function(){(0,n.isTest)()?e.instance=void 0:console.warn("Calling reset() is only supported during testing")},e}();t.default=s},8122:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getHashFromLocation=t.getNormalisedUserContext=t.checkForSSRErrorAndAppendIfNeeded=t.getQueryParams=t.isTest=t.normaliseInputAppInfoOrThrowError=t.appendQueryParamsToURL=void 0;var n=r(9092),o=r(7611),i=r(7992),a=r(1260);t.appendQueryParamsToURL=function(e,t){if(void 0===t)return e;try{var r=new URL(e);return Object.entries(t).forEach((function(e){var t=e[0],n=e[1];r.searchParams.set(t,n)})),r.href}catch(r){var n=e.startsWith("/")?"http:localhost":"http://localhost/",o=new URL("".concat(n).concat(e));return Object.entries(t).forEach((function(e){var t=e[0],r=e[1];o.searchParams.set(t,r)})),"".concat(o.pathname).concat(o.search)}},t.normaliseInputAppInfoOrThrowError=function(e){if(void 0===e)throw new Error("Please provide the appInfo object when calling supertokens.init");if(void 0===e.apiDomain)throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");if(void 0===e.appName)throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");var t,r,n=new a.default("");return void 0!==e.apiGatewayPath&&(n=new a.default(e.apiGatewayPath)),{appName:e.appName,apiDomain:new i.default(e.apiDomain),apiBasePath:n.appendPath((t=o.DEFAULT_API_BASE_PATH,r=e.apiBasePath,void 0!==r?new a.default(r):new a.default(t)))}},t.isTest=function(){try{return"testing"===process.env.TEST_MODE}catch(e){return!1}},t.getQueryParams=function(e){var t=new URLSearchParams(n.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()).get(e);if(null!==t)return t},t.checkForSSRErrorAndAppendIfNeeded=function(e){return"undefined"==typeof window&&(e+=o.SSR_ERROR),e},t.getNormalisedUserContext=function(e){return void 0===e?{}:e},t.getHashFromLocation=function(){return n.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1)}},2118:(e,t,r)=>{t.__esModule=!0,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(5209))},9092:(e,t,r)=>{t.__esModule=!0,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(7860))}},e=>{var t=(280,e(e.s=280));supertokens=t}]);