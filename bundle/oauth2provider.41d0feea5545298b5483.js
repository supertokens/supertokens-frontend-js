"use strict";var supertokensOAuth2Provider;(self.webpackChunksupertokens_web_js=self.webpackChunksupertokens_web_js||[]).push([[678],{7611:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SSR_ERROR=t.DEFAULT_API_BASE_PATH=void 0,t.DEFAULT_API_BASE_PATH="/auth",t.SSR_ERROR="\nIf you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook."},2173:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});var r=n(942);t.default=r.STGeneralError},7992:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function n(e,t){void 0===t&&(t=!1),e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");var r=new URL(e);return t?r.hostname.startsWith("localhost")||(o=r.hostname,/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(o))?"http://"+r.host:"https://"+r.host:r.protocol+"//"+r.host}catch(e){}var o;if(e.startsWith("/"))throw new Error("Please provide a valid domain name");if(0===e.indexOf(".")&&(e=e.substr(1)),(-1!==e.indexOf(".")||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://")){e="https://"+e;try{return new URL(e),n(e,!0)}catch(e){}}throw new Error("Please provide a valid domain name")}t.default=function(e){var t=this;this.getAsStringDangerous=function(){return t.value},this.value=n(e)}},1260:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function n(e){e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");return"/"===(e=new URL(e).pathname).charAt(e.length-1)?e.substr(0,e.length-1):e}catch(e){}if((function(e){if(-1===e.indexOf(".")||e.startsWith("/"))return!1;try{return-1!==new URL(e).hostname.indexOf(".")}catch(e){}try{return-1!==new URL("http://"+e).hostname.indexOf(".")}catch(e){}return!1}(e)||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://"))return n(e="http://"+e);"/"!==e.charAt(0)&&(e="/"+e);try{return new URL("http://example.com"+e),n("http://example.com"+e)}catch(e){throw new Error("Please provide a valid URL path")}}t.default=function e(t){var r=this;this.startsWith=function(e){return r.value.startsWith(e.value)},this.appendPath=function(t){return new e(r.value+t.value)},this.getAsStringDangerous=function(){return r.value},this.value=n(t)}},634:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1260),u=n(255),s=n(2173),c=function(){function e(e,t){var n=this;this.recipeId=e,this.appInfo=t,this.get=function(e,t,a,u,s,c){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e,t,u),r({method:"GET"},a),s,c)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.post=function(e,t,a,u,s){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:if(void 0===a.body)throw new Error("Post request must have a body");return[4,this.fetch(this.getFullUrl(e,t),r({method:"POST"},a),u,s)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.delete=function(e,t,a,u,s){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e,t),r({method:"DELETE"},a),u,s)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.put=function(e,t,a,u,s){return o(n,void 0,void 0,(function(){var n;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e,t),r({method:"PUT"},a),u,s)];case 1:return n=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(n)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:n}]}}))}))},this.fetch=function(e,t,a,s){return o(n,void 0,void 0,(function(){var n,o,c,l,f,p;return i(this,(function(i){switch(i.label){case 0:return n=void 0===t?{}:t.headers,[4,this.callPreAPIHook({preAPIHook:a,url:e,requestInit:r(r({},t),{headers:r(r({},n),{"fdi-version":u.supported_fdi.join(","),"Content-Type":"application/json",rid:this.recipeId})})})];case 1:return o=i.sent(),c=o.requestInit,l=o.url,[4,fetch(l,c)];case 2:if((f=i.sent()).status>=300)throw f;return void 0===s?[3,4]:(p=f.clone(),[4,s({requestInit:c,url:e,fetchResponse:p})]);case 3:i.sent(),i.label=4;case 4:return[2,f]}}))}))},this.callPreAPIHook=function(e){return o(n,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return void 0===e.preAPIHook?[2,{url:e.url,requestInit:e.requestInit}]:[4,e.preAPIHook({url:e.url,requestInit:e.requestInit})];case 1:return[2,t.sent()]}}))}))},this.getFullUrl=function(e,t,r){var o=n.appInfo.apiBasePath.getAsStringDangerous();void 0!==e&&"public"!==e&&(o="".concat(o,"/").concat(e));var i=new a.default(t),u="".concat(n.appInfo.apiDomain.getAsStringDangerous()).concat(o).concat(i.getAsStringDangerous());return void 0===r?u:u+"?"+new URLSearchParams(r)},this.getResponseJsonOrThrowGeneralError=function(e){return o(n,void 0,void 0,(function(){var t,n;return i(this,(function(r){switch(r.label){case 0:return[4,e.clone().json()];case 1:if("GENERAL_ERROR"===(t=r.sent()).status)throw n=void 0===t.message?"No Error Message Provided":t.message,new s.default(n);return[2,t]}}))}))}}var t;return t=e,e.preparePreAPIHook=function(e){var n=e.recipePreAPIHook,a=e.action,u=e.options,s=e.userContext;return function(e){return o(void 0,void 0,void 0,(function(){var o;return i(t,(function(t){switch(t.label){case 0:return[4,n(r(r({},e),{action:a,userContext:s}))];case 1:return o=t.sent(),void 0===u||void 0===u.preAPIHook?[2,o]:[2,u.preAPIHook({url:o.url,requestInit:o.requestInit,userContext:s})]}}))}))}},e.preparePostAPIHook=function(e){var n=e.recipePostAPIHook,a=e.action,u=e.userContext;return function(e){return o(void 0,void 0,void 0,(function(){return i(t,(function(t){switch(t.label){case 0:return[4,n(r(r({},e),{userContext:u,action:a}))];case 1:return t.sent(),[2]}}))}))}},e}();t.default=c},7725:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0});var u=n(1996),s=n(6322),c=function(e){function t(t){var n=e.call(this,t)||this;return n.signOut=function(e){return i(n,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,s.default.getInstanceOrThrow().signOut({userContext:e.userContext})];case 1:return[2,t.sent()]}}))}))},n}return o(t,e),t}(u.default);t.default=c},5053:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseAuthRecipe=void 0;var r=n(6069);t.normaliseAuthRecipe=function(e){return(0,r.normaliseRecipeModuleConfig)(e)}},1199:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EMAILVERIFICATION_CLAIM_ID=void 0,t.EMAILVERIFICATION_CLAIM_ID="st-ev"},6984:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Recipe=void 0;var a=n(4853),u=n(6333),s=n(1265),c=n(8122),l=function(e){function t(t){var n=e.call(this,(0,a.normaliseUserInput)(t))||this,r=new u.default((0,s.default)({recipeId:n.config.recipeId,appInfo:n.config.appInfo,clientType:n.config.clientType,preAPIHook:n.config.preAPIHook,postAPIHook:n.config.postAPIHook}));return n.recipeImplementation=r.override(n.config.override.functions).build(),n}return o(t,e),t.init=function(e){return function(n,r,o,a){return t.instance=new t(i(i({},(0,c.applyPlugins)(t.RECIPE_ID,e,null!=a?a:[])),{recipeId:t.RECIPE_ID,appInfo:n,clientType:r})),t.instance}},t.getInstanceOrThrow=function(){if(void 0===t.instance){var e="No instance of Multitenancy found. Ensure that 'SuperTokens.init' method has been called.";throw e=(0,c.checkForSSRErrorAndAppendIfNeeded)(e),Error(e)}return t.instance},t.reset=function(){(0,c.isTest)()&&(t.instance=void 0)},t.RECIPE_ID="multitenancy",t}(n(7725).default);t.Recipe=l,t.default=l},1265:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getRecipeImplementation=void 0;var i=n(634),a=n(8122);function u(e){var t=new i.default(e.recipeId,e.appInfo);return{getTenantId:function(){var e=(0,a.getQueryParams)("tenantId");if(""!==(null==e?void 0:e.trim()))return e},getLoginMethods:function(n){var a=n.tenantId,u=n.options,s=n.userContext;return r(this,void 0,void 0,(function(){var n,r,c,l,f;return o(this,(function(o){switch(o.label){case 0:return n={},void 0!==e.clientType&&(n.clientType=e.clientType),[4,t.get(a,"/loginmethods",{},n,i.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"GET_LOGIN_METHODS",options:u,userContext:s}),i.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"GET_LOGIN_METHODS",userContext:s}))];case 1:return r=o.sent(),c=r.jsonBody,l=r.fetchResponse,void 0===c.firstFactors?(f=[],c.emailPassword.enabled&&f.push("emailpassword"),c.thirdParty.enabled&&f.push("thirdparty"),c.passwordless.enabled&&(f.push("otp-email"),f.push("otp-phone"),f.push("link-email"),f.push("link-phone"))):f=c.firstFactors,[2,{status:"OK",thirdParty:{providers:c.thirdParty.providers},firstFactors:f,fetchResponse:l}]}}))}))}}}t.default=u,t.getRecipeImplementation=u},4853:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseUserInput=void 0;var o=n(5053);t.normaliseUserInput=function(e){var t=r({functions:function(e){return e}},e.override);return r(r({},(0,o.normaliseAuthRecipe)(e)),{override:t})}},8021:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.logOut=t.getRedirectURLToContinueOAuthFlow=t.getLoginChallengeInfo=t.init=void 0;var o=n(8122),i=n(3073),a=function(){function e(){}return e.init=function(e){return i.default.init(e)},e.getLoginChallengeInfo=function(e){return i.default.getInstanceOrThrow().recipeImplementation.getLoginChallengeInfo(r(r({},e),{userContext:(0,o.getNormalisedUserContext)(e.userContext)}))},e.getRedirectURLToContinueOAuthFlow=function(e){return i.default.getInstanceOrThrow().recipeImplementation.getRedirectURLToContinueOAuthFlow(r(r({},e),{userContext:(0,o.getNormalisedUserContext)(e.userContext)}))},e.logOut=function(e){return i.default.getInstanceOrThrow().recipeImplementation.logOut(r(r({},e),{userContext:(0,o.getNormalisedUserContext)(e.userContext)}))},e}();t.default=a;var u=a.init;t.init=u;var s=a.getLoginChallengeInfo;t.getLoginChallengeInfo=s;var c=a.getRedirectURLToContinueOAuthFlow;t.getRedirectURLToContinueOAuthFlow=c;var l=a.logOut;t.logOut=l},3073:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Recipe=void 0;var a=n(7965),u=n(6333),s=n(9013),c=n(8122),l=function(e){function t(t){var n=e.call(this,(0,a.normaliseUserInput)(t))||this,r=new u.default((0,s.default)({recipeId:n.config.recipeId,appInfo:n.config.appInfo,clientType:n.config.clientType,preAPIHook:n.config.preAPIHook,postAPIHook:n.config.postAPIHook}));return n.recipeImplementation=r.override(n.config.override.functions).build(),n}return o(t,e),t.init=function(e){return function(n,r,o,a){return t.instance=new t(i(i({},(0,c.applyPlugins)(t.RECIPE_ID,e,null!=a?a:[])),{recipeId:t.RECIPE_ID,appInfo:n,clientType:r})),t.instance}},t.getInstanceOrThrow=function(){if(void 0===t.instance){var e="No instance of OAuth2Provider found. Ensure that the 'OAuth2Provider.init' method is called within the 'SuperTokens.init' recipeList.";throw e=(0,c.checkForSSRErrorAndAppendIfNeeded)(e),Error(e)}return t.instance},t.reset=function(){(0,c.isTest)()&&(t.instance=void 0)},t.RECIPE_ID="oauth2provider",t}(n(7725).default);t.Recipe=l,t.default=l},9013:function(e,t,n){var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getRecipeImplementation=void 0;var i=n(634),a=n(6984);function u(e){var t=new i.default(e.recipeId,e.appInfo);return{getLoginChallengeInfo:function(n){var u=n.loginChallenge,s=n.options,c=n.userContext;return r(this,void 0,void 0,(function(){var n,r,l,f,p,d;return o(this,(function(o){switch(o.label){case 0:return n={loginChallenge:u},d=(p=t).get,[4,a.default.getInstanceOrThrow().recipeImplementation.getTenantId({userContext:c})];case 1:return[4,d.apply(p,[o.sent(),"/oauth/login/info",{},n,i.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"GET_LOGIN_CHALLENGE_INFO",options:s,userContext:c}),i.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"GET_LOGIN_CHALLENGE_INFO",userContext:c})])];case 2:return r=o.sent(),l=r.jsonBody,f=r.fetchResponse,[2,{status:"OK",info:l.info,fetchResponse:f}]}}))}))},getRedirectURLToContinueOAuthFlow:function(n){var u=n.loginChallenge,s=n.options,c=n.userContext;return r(this,void 0,void 0,(function(){var n,r,l,f,p;return o(this,(function(o){switch(o.label){case 0:return p=(f=t).get,[4,a.default.getInstanceOrThrow().recipeImplementation.getTenantId({userContext:c})];case 1:return[4,p.apply(f,[o.sent(),"/oauth/login",{},{loginChallenge:u},i.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"GET_REDIRECT_URL_TO_CONTINUE_OAUTH_FLOW",options:s,userContext:c}),i.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"GET_REDIRECT_URL_TO_CONTINUE_OAUTH_FLOW",userContext:c})])];case 2:return n=o.sent(),r=n.jsonBody,l=n.fetchResponse,[2,{status:"OK",frontendRedirectTo:r.frontendRedirectTo,fetchResponse:l}]}}))}))},logOut:function(n){var u=n.logoutChallenge,s=n.options,c=n.userContext;return r(this,void 0,void 0,(function(){var n,r,l,f,p;return o(this,(function(o){switch(o.label){case 0:return p=(f=t).post,[4,a.default.getInstanceOrThrow().recipeImplementation.getTenantId({userContext:c})];case 1:return[4,p.apply(f,[o.sent(),"/oauth/logout",{body:JSON.stringify({logoutChallenge:u})},i.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"LOG_OUT",options:s,userContext:c}),i.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"LOG_OUT",userContext:c})])];case 2:return n=o.sent(),r=n.jsonBody,l=n.fetchResponse,[2,{status:"OK",frontendRedirectTo:r.frontendRedirectTo,fetchResponse:l}]}}))}))}}}t.default=u,t.getRecipeImplementation=u},7965:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseUserInput=void 0;var o=n(5053);t.normaliseUserInput=function(e){var t=r({functions:function(e){return e}},e.override);return r(r({},(0,o.normaliseAuthRecipe)(e)),{override:t})}},1996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){this.config=e}},6069:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseRecipeModuleConfig=void 0,t.normaliseRecipeModuleConfig=function(e){var t=this,o=e.preAPIHook;void 0===o&&(o=function(e){return n(t,void 0,void 0,(function(){return r(this,(function(t){return[2,e]}))}))});var i=e.postAPIHook;return void 0===i&&(i=function(){return n(t,void 0,void 0,(function(){return r(this,(function(e){return[2]}))}))}),{recipeId:e.recipeId,appInfo:e.appInfo,clientType:e.clientType,preAPIHook:o,postAPIHook:i}}},6322:function(e,t,n){var r,o=this&&this.__extends||(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(e){i(e)}}function u(e){try{s(r.throw(e))}catch(e){i(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,u)}s((r=r.apply(e,t||[])).next())}))},u=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},s=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};Object.defineProperty(t,"__esModule",{value:!0}),t.Recipe=void 0;var c=n(1996),l=n(1757),f=n(8122),p=[n(1199).EMAILVERIFICATION_CLAIM_ID],d=function(e){function t(t){var n=e.call(this,t)||this;return n.getUserId=function(e){return l.default.getUserId({userContext:e.userContext})},n.getAccessToken=function(e){return a(n,void 0,void 0,(function(){return u(this,(function(t){return[2,l.default.getAccessToken({userContext:e.userContext})]}))}))},n.getAccessTokenPayloadSecurely=function(e){return a(n,void 0,void 0,(function(){return u(this,(function(t){return[2,l.default.getAccessTokenPayloadSecurely({userContext:e.userContext})]}))}))},n.doesSessionExist=function(e){return l.default.doesSessionExist({userContext:e.userContext})},n.signOut=function(e){return l.default.signOut({userContext:e.userContext})},n.attemptRefreshingSession=function(){return a(n,void 0,void 0,(function(){return u(this,(function(e){return[2,l.default.attemptRefreshingSession()]}))}))},n.validateClaims=function(e){return l.default.validateClaims(e.overrideGlobalClaimValidators,e.userContext)},l.default.init(i(i({},t),{override:{functions:function(e,n){var r;return n.override((function(e){return i(i({},e),{getGlobalClaimValidators:function(t){var n=e.getGlobalClaimValidators(t);return s(s([],n.filter((function(e){return p.includes(e.id)})),!0),n.filter((function(e){return!p.includes(e.id)})),!0)}})})),(null===(r=t.override)||void 0===r?void 0:r.functions)&&n.override(t.override.functions),e}},preAPIHook:function(e){return a(n,void 0,void 0,(function(){var n,r;return u(this,(function(o){return(n=new Headers(e.requestInit.headers)).set("rid",t.recipeId),r=i(i({},e),{requestInit:i(i({},e.requestInit),{headers:n})}),void 0===t.preAPIHook?[2,r]:[2,t.preAPIHook(e)]}))}))},apiDomain:t.appInfo.apiDomain.getAsStringDangerous(),apiBasePath:t.appInfo.apiBasePath.getAsStringDangerous()})),n}return o(t,e),t.init=function(e){return function(n,r,o,a){return t.instance=new t(i(i({},(0,f.applyPlugins)(t.RECIPE_ID,e,null!=a?a:[])),{appInfo:n,recipeId:t.RECIPE_ID,enableDebugLogs:o})),t.instance}},t.prototype.getClaimValue=function(e){return l.default.getClaimValue(e)},t.prototype.getInvalidClaimsFromResponse=function(e){return l.default.getInvalidClaimsFromResponse(e)},t.addAxiosInterceptors=function(e,t){return l.default.addAxiosInterceptors(e,t)},t.getInstanceOrThrow=function(){if(void 0===t.instance){var e="No instance of Session found. Ensure that the 'Session.init' method is called within the 'SuperTokens.init' recipeList.";throw e=(0,f.checkForSSRErrorAndAppendIfNeeded)(e),Error(e)}return t.instance},t.reset=function(){(0,f.isTest)()&&(t.instance=void 0)},t.RECIPE_ID="session",t}(c.default);t.Recipe=d,t.default=d},8122:function(e,t,n){var r=this&&this.__assign||function(){return r=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},r.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.applyPlugins=t.normaliseUser=t.normaliseUserResponse=t.getGlobalClaimValidators=t.getHashFromLocation=t.getNormalisedUserContext=t.checkForSSRErrorAndAppendIfNeeded=t.getAllQueryParams=t.getQueryParams=t.isTest=t.normaliseInputAppInfoOrThrowError=t.appendQueryParamsToURL=void 0;var o=n(7528),i=n(7611),a=n(7992),u=n(1260),s=n(5811);function c(e,t){if("loginMethods"in t)return t;var n=void 0!==t.email?[t.email]:[],r=void 0!==t.phoneNumber?[t.phoneNumber]:[],o=void 0!==t.thirdParty?[t.thirdParty]:[];return{id:t.id,emails:n,phoneNumbers:r,thirdParty:o,isPrimaryUser:!1,tenantIds:t.tenantIds,timeJoined:t.timeJoined,loginMethods:[{recipeId:e,recipeUserId:t.id,timeJoined:t.timeJoined,tenantIds:t.tenantIds,email:t.email,phoneNumber:t.email}]}}t.appendQueryParamsToURL=function(e,t){if(void 0===t)return e;try{var n=new URL(e);return Object.entries(t).forEach((function(e){var t=e[0],r=e[1];n.searchParams.set(t,r)})),n.href}catch(n){var r=e.startsWith("/")?"http:localhost":"http://localhost/",o=new URL("".concat(r).concat(e));return Object.entries(t).forEach((function(e){var t=e[0],n=e[1];o.searchParams.set(t,n)})),"".concat(o.pathname).concat(o.search)}},t.normaliseInputAppInfoOrThrowError=function(e){if(void 0===e)throw new Error("Please provide the appInfo object when calling supertokens.init");if(void 0===e.apiDomain)throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");if(void 0===e.appName)throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");var t,n,r=new u.default("");return void 0!==e.apiGatewayPath&&(r=new u.default(e.apiGatewayPath)),{appName:e.appName,apiDomain:new a.default(e.apiDomain),apiBasePath:r.appendPath((t=i.DEFAULT_API_BASE_PATH,n=e.apiBasePath,void 0!==n?new u.default(n):new u.default(t)))}},t.isTest=function(){try{return"testing"===process.env.TEST_MODE}catch(e){return!1}},t.getQueryParams=function(e){var t=new URLSearchParams(o.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()).get(e);if(null!==t)return t},t.getAllQueryParams=function(){return new URLSearchParams(o.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch())},t.checkForSSRErrorAndAppendIfNeeded=function(e){return"undefined"==typeof window&&(e+=i.SSR_ERROR),e},t.getNormalisedUserContext=function(e){return void 0===e?{}:e},t.getHashFromLocation=function(){return o.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1)},t.getGlobalClaimValidators=function(e){var t=e.overrideGlobalClaimValidators,n=e.userContext;return(0,s.getGlobalClaimValidators)(t,n)},t.normaliseUserResponse=function(e,t){return"createdNewRecipeUser"in t?t:{createdNewRecipeUser:t.createdNewUser,user:c(e,t.user)}},t.normaliseUser=c,t.applyPlugins=function(e,t,n){for(var o,i=[null===(o=(t=null!=t?t:{}).override)||void 0===o?void 0:o.functions],a=0,u=n;a<u.length;a++){var s=u[a][e];s&&(t=s.config?s.config(t):t,void 0!==s.functions&&i.push(s.functions))}return(i=i.reverse().filter((function(e){return void 0!==e}))).length>0&&(t.override=r(r({},t.override),{functions:function(e,t){for(var n=0,r=i;n<r.length;n++){var o=r[n];t.override(o)}return e}})),t}},255:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.supported_fdi=t.package_version=void 0,t.package_version="0.14.0",t.supported_fdi=["3.1","4.0"]},7528:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WindowHandlerReference=void 0;var r=n(9092);Object.defineProperty(t,"WindowHandlerReference",{enumerable:!0,get:function(){return r.WindowHandlerReference}})},4328:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGlobalClaimValidators=void 0;var r=n(2652),o=n(788),i=n(2582);t.getGlobalClaimValidators=function(e,t){var n=(0,r.getNormalisedUserContext)(t),a=i.default.getClaimValidatorsAddedByOtherRecipes(),u=o.default.recipeImpl.getGlobalClaimValidators({claimValidatorsAddedByOtherRecipes:a,userContext:n});return void 0!==e?e(u,n):u}},942:(e,t,n)=>{function r(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}t.__esModule=!0;let o=n(6398);void 0!==o.default?r(o):r({default:o,...o})},5811:(e,t,n)=>{t.__esModule=!0,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(4328))},9092:(e,t,n)=>{t.__esModule=!0,function(e){for(var n in e)t.hasOwnProperty(n)||(t[n]=e[n])}(n(7860))}},e=>{var t=(8021,e(e.s=8021));supertokensOAuth2Provider=t}]);