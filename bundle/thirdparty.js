"use strict";var supertokensThirdParty;(self.webpackChunksupertokens_web_js=self.webpackChunksupertokens_web_js||[]).push([[298],{7611:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SSR_ERROR=t.DEFAULT_API_BASE_PATH=void 0,t.DEFAULT_API_BASE_PATH="/auth",t.SSR_ERROR="\nIf you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook."},2173:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0});var n=r(942);t.default=n.STGeneralError},7992:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function r(e,t){void 0===t&&(t=!1),e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");var n=new URL(e);return t?n.hostname.startsWith("localhost")||(o=n.hostname,/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(o))?"http://"+n.host:"https://"+n.host:n.protocol+"//"+n.host}catch(e){}var o;if(e.startsWith("/"))throw new Error("Please provide a valid domain name");if(0===e.indexOf(".")&&(e=e.substr(1)),(-1!==e.indexOf(".")||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://")){e="https://"+e;try{return new URL(e),r(e,!0)}catch(e){}}throw new Error("Please provide a valid domain name")}t.default=function(e){var t=this;this.getAsStringDangerous=function(){return t.value},this.value=r(e)}},1260:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});function r(e){e=e.trim();try{if(!e.startsWith("http://")&&!e.startsWith("https://"))throw new Error("Error converting to proper URL");return"/"===(e=new URL(e).pathname).charAt(e.length-1)?e.substr(0,e.length-1):e}catch(e){}if((function(e){if(-1===e.indexOf(".")||e.startsWith("/"))return!1;try{return-1!==new URL(e).hostname.indexOf(".")}catch(e){}try{return-1!==new URL("http://"+e).hostname.indexOf(".")}catch(e){}return!1}(e)||e.startsWith("localhost"))&&!e.startsWith("http://")&&!e.startsWith("https://"))return r(e="http://"+e);"/"!==e.charAt(0)&&(e="/"+e);try{return new URL("http://example.com"+e),r("http://example.com"+e)}catch(e){throw new Error("Please provide a valid URL path")}}t.default=function e(t){var n=this;this.startsWith=function(e){return n.value.startsWith(e.value)},this.appendPath=function(t){return new e(n.value+t.value)},this.getAsStringDangerous=function(){return n.value},this.value=r(t)}},634:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var a=r(1260),s=r(255),u=r(2173),c=function(){function e(e,t){var r=this;this.recipeId=e,this.appInfo=t,this.get=function(e,t,a,s,u,c){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e,t,s),n({method:"GET"},a),u,c)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.post=function(e,t,a,s,u){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:if(void 0===a.body)throw new Error("Post request must have a body");return[4,this.fetch(this.getFullUrl(e,t),n({method:"POST"},a),s,u)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.delete=function(e,t,a,s,u){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e,t),n({method:"DELETE"},a),s,u)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.put=function(e,t,a,s,u){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(e,t),n({method:"PUT"},a),s,u)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.fetch=function(e,t,a,u){return o(r,void 0,void 0,(function(){var r,o,c,l,f,d;return i(this,(function(i){switch(i.label){case 0:return r=void 0===t?{}:t.headers,[4,this.callPreAPIHook({preAPIHook:a,url:e,requestInit:n(n({},t),{headers:n(n({},r),{"fdi-version":s.supported_fdi.join(","),"Content-Type":"application/json",rid:this.recipeId})})})];case 1:return o=i.sent(),c=o.requestInit,l=o.url,[4,fetch(l,c)];case 2:if((f=i.sent()).status>=300)throw f;return void 0===u?[3,4]:(d=f.clone(),[4,u({requestInit:c,url:e,fetchResponse:d})]);case 3:i.sent(),i.label=4;case 4:return[2,f]}}))}))},this.callPreAPIHook=function(e){return o(r,void 0,void 0,(function(){return i(this,(function(t){switch(t.label){case 0:return void 0===e.preAPIHook?[2,{url:e.url,requestInit:e.requestInit}]:[4,e.preAPIHook({url:e.url,requestInit:e.requestInit})];case 1:return[2,t.sent()]}}))}))},this.getFullUrl=function(e,t,n){var o=r.appInfo.apiBasePath.getAsStringDangerous();void 0!==e&&"public"!==e&&(o="".concat(o,"/").concat(e));var i=new a.default(t),s="".concat(r.appInfo.apiDomain.getAsStringDangerous()).concat(o).concat(i.getAsStringDangerous());return void 0===n?s:s+"?"+new URLSearchParams(n)},this.getResponseJsonOrThrowGeneralError=function(e){return o(r,void 0,void 0,(function(){var t,r;return i(this,(function(n){switch(n.label){case 0:return[4,e.clone().json()];case 1:if("GENERAL_ERROR"===(t=n.sent()).status)throw r=void 0===t.message?"No Error Message Provided":t.message,new u.default(r);return[2,t]}}))}))}}var t;return t=e,e.preparePreAPIHook=function(e){var r=e.recipePreAPIHook,a=e.action,s=e.options,u=e.userContext;return function(e){return o(void 0,void 0,void 0,(function(){var o;return i(t,(function(t){switch(t.label){case 0:return[4,r(n(n({},e),{action:a,userContext:u}))];case 1:return o=t.sent(),void 0===s||void 0===s.preAPIHook?[2,o]:[2,s.preAPIHook({url:o.url,requestInit:o.requestInit,userContext:u})]}}))}))}},e.preparePostAPIHook=function(e){var r=e.recipePostAPIHook,a=e.action,s=e.userContext;return function(e){return o(void 0,void 0,void 0,(function(){return i(t,(function(t){switch(t.label){case 0:return[4,r(n(n({},e),{userContext:s,action:a}))];case 1:return t.sent(),[2]}}))}))}},e}();t.default=c},7725:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var s=r(1996),u=r(6322),c=function(e){function t(t){var r=e.call(this,t)||this;return r.signOut=function(e){return i(r,void 0,void 0,(function(){return a(this,(function(t){switch(t.label){case 0:return[4,u.default.getInstanceOrThrow().signOut({userContext:e.userContext})];case 1:return[2,t.sent()]}}))}))},r}return o(t,e),t}(s.default);t.default=c},5053:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseAuthRecipe=void 0;var n=r(6069);t.normaliseAuthRecipe=function(e){return(0,n.normaliseRecipeModuleConfig)(e)}},6984:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Recipe=void 0;var a=r(4853),s=r(6333),u=r(1265),c=r(8122),l=function(e){function t(t){var r=e.call(this,(0,a.normaliseUserInput)(t))||this,n=new s.default((0,u.default)({recipeId:r.config.recipeId,appInfo:r.config.appInfo,clientType:r.config.clientType,preAPIHook:r.config.preAPIHook,postAPIHook:r.config.postAPIHook}));return r.recipeImplementation=n.override(r.config.override.functions).build(),r}return o(t,e),t.init=function(e){return function(r,n){return t.instance=new t(i(i({},e),{recipeId:t.RECIPE_ID,appInfo:r,clientType:n})),t.instance}},t.getInstanceOrThrow=function(){if(void 0===t.instance){var e="No instance of Multitenancy found. Make sure to call the Multitenancy.init method.";throw e=(0,c.checkForSSRErrorAndAppendIfNeeded)(e),Error(e)}return t.instance},t.reset=function(){(0,c.isTest)()&&(t.instance=void 0)},t.RECIPE_ID="multitenancy",t}(r(7725).default);t.Recipe=l,t.default=l},1265:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getRecipeImplementation=void 0;var a=r(634);function s(e){var t=new a.default(e.recipeId,e.appInfo);return{getTenantId:function(){},getLoginMethods:function(r){var s=r.tenantId,u=r.options,c=r.userContext;return o(this,void 0,void 0,(function(){var r,o,l,f;return i(this,(function(i){switch(i.label){case 0:return r={},void 0!==e.clientType&&(r.clientType=e.clientType),[4,t.get(s,"/loginmethods",{},r,a.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"GET_LOGIN_METHODS",options:u,userContext:c}),a.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"GET_LOGIN_METHODS",userContext:c}))];case 1:return o=i.sent(),l=o.jsonBody,f=o.fetchResponse,[2,n(n({},l),{fetchResponse:f})]}}))}))}}}t.default=s,t.getRecipeImplementation=s},4853:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseUserInput=void 0;var o=r(5053);t.normaliseUserInput=function(e){var t=n({functions:function(e){return e}},e.override);return n(n({},(0,o.normaliseAuthRecipe)(e)),{override:t})}},1996:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=function(e){this.config=e}},6069:function(e,t){var r=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},n=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseRecipeModuleConfig=void 0,t.normaliseRecipeModuleConfig=function(e){var t=this,o=e.preAPIHook;void 0===o&&(o=function(e){return r(t,void 0,void 0,(function(){return n(this,(function(t){return[2,e]}))}))});var i=e.postAPIHook;return void 0===i&&(i=function(){return r(t,void 0,void 0,(function(){return n(this,(function(e){return[2]}))}))}),{recipeId:e.recipeId,appInfo:e.appInfo,clientType:e.clientType,preAPIHook:o,postAPIHook:i}}},6322:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)},a=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},s=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.Recipe=void 0;var u=r(1996),c=r(1757),l=r(8122),f=function(e){function t(t){var r=e.call(this,t)||this;return r.getUserId=function(e){return c.default.getUserId({userContext:e.userContext})},r.getAccessToken=function(e){return a(r,void 0,void 0,(function(){return s(this,(function(t){return[2,c.default.getAccessToken({userContext:e.userContext})]}))}))},r.getAccessTokenPayloadSecurely=function(e){return a(r,void 0,void 0,(function(){return s(this,(function(t){return[2,c.default.getAccessTokenPayloadSecurely({userContext:e.userContext})]}))}))},r.doesSessionExist=function(e){return c.default.doesSessionExist({userContext:e.userContext})},r.signOut=function(e){return c.default.signOut({userContext:e.userContext})},r.attemptRefreshingSession=function(){return a(r,void 0,void 0,(function(){return s(this,(function(e){return[2,c.default.attemptRefreshingSession()]}))}))},r.validateClaims=function(e){return c.default.validateClaims(e.overrideGlobalClaimValidators,e.userContext)},c.default.init(i(i({},t),{preAPIHook:function(e){return a(r,void 0,void 0,(function(){var r,n;return s(this,(function(o){return(r=new Headers(e.requestInit.headers)).set("rid",t.recipeId),n=i(i({},e),{requestInit:i(i({},e.requestInit),{headers:r})}),void 0===t.preAPIHook?[2,n]:[2,t.preAPIHook(e)]}))}))},apiDomain:t.appInfo.apiDomain.getAsStringDangerous(),apiBasePath:t.appInfo.apiBasePath.getAsStringDangerous()})),r}return o(t,e),t.init=function(e){return function(r,n,o){return t.instance=new t(i(i({},e),{appInfo:r,recipeId:t.RECIPE_ID,enableDebugLogs:o})),t.instance}},t.prototype.getClaimValue=function(e){return c.default.getClaimValue(e)},t.prototype.getInvalidClaimsFromResponse=function(e){return c.default.getInvalidClaimsFromResponse(e)},t.addAxiosInterceptors=function(e,t){return c.default.addAxiosInterceptors(e,t)},t.getInstanceOrThrow=function(){if(void 0===t.instance){var e="No instance of Session found. Make sure to call the Session.init method.";throw e=(0,l.checkForSSRErrorAndAppendIfNeeded)(e),Error(e)}return t.instance},t.reset=function(){(0,l.isTest)()&&(t.instance=void 0)},t.RECIPE_ID="session",t}(u.default);t.Recipe=f,t.default=f},1257:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.signOut=t.signInAndUp=t.getAuthorisationURLWithQueryParamsAndSetState=t.getStateAndOtherInfoFromStorage=t.init=void 0;var a=r(8122),s=r(6984),u=r(9102),c=function(){function e(){}return e.init=function(e){return u.default.init(e)},e.signOut=function(e){return u.default.getInstanceOrThrow().signOut({userContext:(0,a.getNormalisedUserContext)(null==e?void 0:e.userContext)})},e.getStateAndOtherInfoFromStorage=function(e){return u.default.getInstanceOrThrow().recipeImplementation.getStateAndOtherInfoFromStorage(n(n({},e),{userContext:(0,a.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e.getAuthorisationURLWithQueryParamsAndSetState=function(e){return o(this,void 0,void 0,(function(){var t,r;return i(this,(function(o){switch(o.label){case 0:return t=(0,a.getNormalisedUserContext)(e.userContext),[4,s.default.getInstanceOrThrow().recipeImplementation.getTenantId({userContext:t})];case 1:return r=o.sent(),[2,u.default.getInstanceOrThrow().recipeImplementation.getAuthorisationURLWithQueryParamsAndSetState(n(n({tenantId:r},e),{userContext:t}))]}}))}))},e.signInAndUp=function(e){return u.default.getInstanceOrThrow().recipeImplementation.signInAndUp(n(n({},e),{userContext:(0,a.getNormalisedUserContext)(null==e?void 0:e.userContext)}))},e}();t.default=c;var l=c.init;t.init=l;var f=c.getAuthorisationURLWithQueryParamsAndSetState;t.getAuthorisationURLWithQueryParamsAndSetState=f;var d=c.getStateAndOtherInfoFromStorage;t.getStateAndOtherInfoFromStorage=d;var p=c.signInAndUp;t.signInAndUp=p;var h=c.signOut;t.signOut=h},9102:function(e,t,r){var n,o=this&&this.__extends||(n=function(e,t){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])},n(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function r(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(r.prototype=t.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},i.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.Recipe=void 0;var a=r(4566),s=r(6333),u=r(3664),c=r(8122),l=function(e){function t(t){var r=e.call(this,(0,a.normaliseUserInput)(t))||this,n=new s.default((0,u.default)({recipeId:r.config.recipeId,appInfo:r.config.appInfo,clientType:r.config.clientType,preAPIHook:r.config.preAPIHook,postAPIHook:r.config.postAPIHook}));return r.recipeImplementation=n.override(r.config.override.functions).build(),r}return o(t,e),t.init=function(e){return function(r,n){return t.instance=new t(i(i({},e),{recipeId:t.RECIPE_ID,appInfo:r,clientType:n})),t.instance}},t.getInstanceOrThrow=function(){if(void 0===t.instance){var e="No instance of ThirdParty found. Make sure to call the ThirdParty.init method.";throw e=(0,c.checkForSSRErrorAndAppendIfNeeded)(e),Error(e)}return t.instance},t.reset=function(){(0,c.isTest)()&&(t.instance=void 0)},t.RECIPE_ID="thirdparty",t}(r(7725).default);t.Recipe=l,t.default=l},3664:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)},o=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function a(e){try{u(n.next(e))}catch(e){i(e)}}function s(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(a,s)}u((n=n.apply(e,t||[])).next())}))},i=this&&this.__generator||function(e,t){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.getRecipeImplementation=void 0;var a=r(634),s=r(8122),u=r(2173),c=r(7528);function l(e){var t=new a.default(e.recipeId,e.appInfo);return{getStateAndOtherInfoFromStorage:function(){var e=c.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.getItemSync("supertokens-oauth-state-2");if(null!==e)try{return JSON.parse(e)}catch(e){return}},setStateAndOtherInfoToStorage:function(e){return o(this,void 0,void 0,(function(){var t;return i(this,(function(r){switch(r.label){case 0:return t=JSON.stringify(n({},e.state)),[4,c.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.setItem("supertokens-oauth-state-2",t)];case 1:return r.sent(),[2]}}))}))},getAuthorisationURLWithQueryParamsAndSetState:function(e){return o(this,void 0,void 0,(function(){var t,r,n,o;return i(this,(function(i){switch(i.label){case 0:return[4,this.getAuthorisationURLFromBackend({thirdPartyId:e.thirdPartyId,tenantId:e.tenantId,redirectURIOnProviderDashboard:e.redirectURIOnProviderDashboard||e.frontendRedirectURI,userContext:e.userContext,options:e.options})];case 1:return t=i.sent(),r=void 0!==e.redirectURIOnProviderDashboard&&e.frontendRedirectURI!==e.redirectURIOnProviderDashboard?e.frontendRedirectURI:void 0,n=this.generateStateToSendToOAuthProvider({frontendRedirectURI:r,userContext:e.userContext}),o=Date.now()+6e5,[4,this.setStateAndOtherInfoToStorage({state:{stateForAuthProvider:n,thirdPartyId:e.thirdPartyId,tenantId:e.tenantId,expiresAt:o,redirectURIOnProviderDashboard:e.redirectURIOnProviderDashboard||e.frontendRedirectURI,pkceCodeVerifier:t.pkceCodeVerifier},userContext:e.userContext})];case 2:return i.sent(),[2,(0,s.appendQueryParamsToURL)(t.urlWithQueryParams,{state:n})]}}))}))},getAuthorisationURLFromBackend:function(r){return o(this,void 0,void 0,(function(){var n,o,s,u;return i(this,(function(i){switch(i.label){case 0:return n={thirdPartyId:r.thirdPartyId,redirectURIOnProviderDashboard:r.redirectURIOnProviderDashboard},void 0!==e.clientType&&(n.clientType=e.clientType),[4,t.get(r.tenantId,"/authorisationurl",{},n,a.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"GET_AUTHORISATION_URL",options:r.options,userContext:r.userContext}),a.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"GET_AUTHORISATION_URL",userContext:r.userContext}))];case 1:return o=i.sent(),s=o.jsonBody,u=o.fetchResponse,[2,{status:"OK",urlWithQueryParams:s.urlWithQueryParams,pkceCodeVerifier:s.pkceCodeVerifier,fetchResponse:u}]}}))}))},signInAndUp:function(r){return o(this,void 0,void 0,(function(){var o,c,l,f,d,p,h,v,y;return i(this,(function(i){switch(i.label){case 0:return o=this.getStateAndOtherInfoFromStorage({userContext:r.userContext}),c=this.getAuthStateFromURL({userContext:r.userContext}),[4,this.verifyAndGetStateOrThrowError({stateFromAuthProvider:c,stateObjectFromStorage:o,userContext:r.userContext})];case 1:if(l=i.sent(),void 0!==(f=this.getAuthErrorFromURL({userContext:r.userContext})))throw new Error("Auth provider responded with error: ".concat(f));return d=(0,s.getAllQueryParams)(),p=Object.fromEntries(d),[4,t.post(l.tenantId,"/signinup",{body:JSON.stringify({thirdPartyId:l.thirdPartyId,clientType:e.clientType,redirectURIInfo:{redirectURIOnProviderDashboard:l.redirectURIOnProviderDashboard,redirectURIQueryParams:p,pkceCodeVerifier:l.pkceCodeVerifier}})},a.default.preparePreAPIHook({recipePreAPIHook:e.preAPIHook,action:"THIRD_PARTY_SIGN_IN_UP",options:r.options,userContext:r.userContext}),a.default.preparePostAPIHook({recipePostAPIHook:e.postAPIHook,action:"THIRD_PARTY_SIGN_IN_UP",userContext:r.userContext}))];case 2:if(h=i.sent(),v=h.jsonBody,y=h.fetchResponse,"FIELD_ERROR"===v.status)throw new u.default(v.error);return[2,n(n({},v),{fetchResponse:y})]}}))}))},generateStateToSendToOAuthProvider:function(e){var t={state:"".concat(1e20).replace(/[018]/g,(function(e){return(parseInt(e)^crypto.getRandomValues(new Uint8Array(1))[0]&15>>parseInt(e)/4).toString(16)}))};return void 0!==e&&void 0!==e.frontendRedirectURI&&(t.frontendRedirectURI=e.frontendRedirectURI),btoa(JSON.stringify(t))},verifyAndGetStateOrThrowError:function(e){return o(this,void 0,void 0,(function(){return i(this,(function(t){if(void 0===e.stateObjectFromStorage||void 0===e.stateObjectFromStorage.stateForAuthProvider)throw new Error("No valid auth state present in session storage");if(void 0===e.stateFromAuthProvider)throw new Error("No state recieved from auth provider");if(e.stateObjectFromStorage.expiresAt<Date.now())throw new Error("Auth state verification failed. The auth provider took too long to respond");if(e.stateFromAuthProvider!==e.stateObjectFromStorage.stateForAuthProvider)throw new Error("Auth state verification failed. The auth provider responded with an invalid state");return[2,e.stateObjectFromStorage]}))}))},getAuthErrorFromURL:function(){return(0,s.getQueryParams)("error")},getAuthStateFromURL:function(){var e=(0,s.getQueryParams)("state");return void 0===e?"":e}}}t.default=l,t.getRecipeImplementation=l},4566:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},n.apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.normaliseUserInput=void 0;var o=r(5053);t.normaliseUserInput=function(e){var t=n({functions:function(e){return e}},e.override);return n(n({},(0,o.normaliseAuthRecipe)(e)),{override:t})}},8122:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGlobalClaimValidators=t.getHashFromLocation=t.getNormalisedUserContext=t.checkForSSRErrorAndAppendIfNeeded=t.getAllQueryParams=t.getQueryParams=t.isTest=t.normaliseInputAppInfoOrThrowError=t.appendQueryParamsToURL=void 0;var n=r(7528),o=r(7611),i=r(7992),a=r(1260),s=r(5811);t.appendQueryParamsToURL=function(e,t){if(void 0===t)return e;try{var r=new URL(e);return Object.entries(t).forEach((function(e){var t=e[0],n=e[1];r.searchParams.set(t,n)})),r.href}catch(r){var n=e.startsWith("/")?"http:localhost":"http://localhost/",o=new URL("".concat(n).concat(e));return Object.entries(t).forEach((function(e){var t=e[0],r=e[1];o.searchParams.set(t,r)})),"".concat(o.pathname).concat(o.search)}},t.normaliseInputAppInfoOrThrowError=function(e){if(void 0===e)throw new Error("Please provide the appInfo object when calling supertokens.init");if(void 0===e.apiDomain)throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");if(void 0===e.appName)throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");var t,r,n=new a.default("");return void 0!==e.apiGatewayPath&&(n=new a.default(e.apiGatewayPath)),{appName:e.appName,apiDomain:new i.default(e.apiDomain),apiBasePath:n.appendPath((t=o.DEFAULT_API_BASE_PATH,r=e.apiBasePath,void 0!==r?new a.default(r):new a.default(t)))}},t.isTest=function(){try{return"testing"===process.env.TEST_MODE}catch(e){return!1}},t.getQueryParams=function(e){var t=new URLSearchParams(n.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()).get(e);if(null!==t)return t},t.getAllQueryParams=function(){return new URLSearchParams(n.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch())},t.checkForSSRErrorAndAppendIfNeeded=function(e){return"undefined"==typeof window&&(e+=o.SSR_ERROR),e},t.getNormalisedUserContext=function(e){return void 0===e?{}:e},t.getHashFromLocation=function(){return n.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1)},t.getGlobalClaimValidators=function(e){var t=e.overrideGlobalClaimValidators,r=e.userContext;return(0,s.getGlobalClaimValidators)(t,r)}},255:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.supported_fdi=t.package_version=void 0,t.package_version="0.7.2",t.supported_fdi=["1.17"]},7528:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WindowHandlerReference=void 0;var n=r(9092);Object.defineProperty(t,"WindowHandlerReference",{enumerable:!0,get:function(){return n.WindowHandlerReference}})},4328:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getGlobalClaimValidators=void 0;var n=r(2652),o=r(788),i=r(2582);t.getGlobalClaimValidators=function(e,t){var r=(0,n.getNormalisedUserContext)(t),a=i.default.getClaimValidatorsAddedByOtherRecipes(),s=o.default.recipeImpl.getGlobalClaimValidators({claimValidatorsAddedByOtherRecipes:a,userContext:r});return void 0!==e?e(s,r):s}},942:(e,t,r)=>{function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}t.__esModule=!0;let o=r(6398);void 0!==o.default?n(o):n({default:o,...o})},5811:(e,t,r)=>{t.__esModule=!0,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(4328))},9092:(e,t,r)=>{t.__esModule=!0,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(7860))}},e=>{var t=(1257,e(e.s=1257));supertokensThirdParty=t}]);