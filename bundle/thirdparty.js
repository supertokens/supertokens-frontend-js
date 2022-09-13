"use strict";var supertokensThirdParty;(self.webpackChunksupertokens_web_js=self.webpackChunksupertokens_web_js||[]).push([[298],{7611:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.SSR_ERROR=e.DEFAULT_API_BASE_PATH=void 0,e.DEFAULT_API_BASE_PATH="/auth",e.SSR_ERROR="\nIf you are trying to use this method doing server-side-rendering, please make sure you move this method inside a componentDidMount method or useEffect hook."},2173:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0});var n=r(942);e.default=n.STGeneralError},7992:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});function r(t,e){void 0===e&&(e=!1),t=t.trim();try{if(!t.startsWith("http://")&&!t.startsWith("https://"))throw new Error("Error converting to proper URL");var n=new URL(t);return e?n.hostname.startsWith("localhost")||(o=n.hostname,/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(o))?"http://"+n.host:"https://"+n.host:n.protocol+"//"+n.host}catch(t){}var o;if(t.startsWith("/"))throw new Error("Please provide a valid domain name");if(0===t.indexOf(".")&&(t=t.substr(1)),(-1!==t.indexOf(".")||t.startsWith("localhost"))&&!t.startsWith("http://")&&!t.startsWith("https://")){t="https://"+t;try{return new URL(t),r(t,!0)}catch(t){}}throw new Error("Please provide a valid domain name")}e.default=function(t){var e=this;this.getAsStringDangerous=function(){return e.value},this.value=r(t)}},1260:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});function r(t){t=t.trim();try{if(!t.startsWith("http://")&&!t.startsWith("https://"))throw new Error("Error converting to proper URL");return"/"===(t=new URL(t).pathname).charAt(t.length-1)?t.substr(0,t.length-1):t}catch(t){}if((function(t){if(-1===t.indexOf(".")||t.startsWith("/"))return!1;try{return-1!==new URL(t).hostname.indexOf(".")}catch(t){}try{return-1!==new URL("http://"+t).hostname.indexOf(".")}catch(t){}return!1}(t)||t.startsWith("localhost"))&&!t.startsWith("http://")&&!t.startsWith("https://"))return r(t="http://"+t);"/"!==t.charAt(0)&&(t="/"+t);try{return new URL("http://example.com"+t),r("http://example.com"+t)}catch(t){throw new Error("Please provide a valid URL path")}}e.default=function t(e){var n=this;this.startsWith=function(t){return n.value.startsWith(t.value)},this.appendPath=function(e){return new t(n.value+e.value)},this.getAsStringDangerous=function(){return n.value},this.value=r(e)}},634:function(t,e,r){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function s(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((n=n.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var a=r(1260),s=r(255),u=r(2173),c=function(){function t(t,e){var r=this;this.get=function(t,e,a,s,u){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(t,a),n({method:"GET"},e),s,u)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.post=function(t,e,a,s){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:if(void 0===e.body)throw new Error("Post request must have a body");return[4,this.fetch(this.getFullUrl(t),n({method:"POST"},e),a,s)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.delete=function(t,e,a,s){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(t),n({method:"DELETE"},e),a,s)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.put=function(t,e,a,s){return o(r,void 0,void 0,(function(){var r;return i(this,(function(o){switch(o.label){case 0:return[4,this.fetch(this.getFullUrl(t),n({method:"PUT"},e),a,s)];case 1:return r=o.sent(),[4,this.getResponseJsonOrThrowGeneralError(r)];case 2:return[2,{jsonBody:o.sent(),fetchResponse:r}]}}))}))},this.fetch=function(t,e,a,u){return o(r,void 0,void 0,(function(){var r,o,c,l,f,h;return i(this,(function(i){switch(i.label){case 0:return r=void 0===e?{}:e.headers,[4,this.callPreAPIHook({preAPIHook:a,url:t,requestInit:n(n({},e),{headers:n(n({},r),{"fdi-version":s.supported_fdi.join(","),"Content-Type":"application/json",rid:this.recipeId})})})];case 1:return o=i.sent(),c=o.requestInit,l=o.url,[4,fetch(l,c)];case 2:if((f=i.sent()).status>=300)throw f;return void 0===u?[3,4]:(h=f.clone(),[4,u({requestInit:c,url:t,fetchResponse:h})]);case 3:i.sent(),i.label=4;case 4:return[2,f]}}))}))},this.callPreAPIHook=function(t){return o(r,void 0,void 0,(function(){return i(this,(function(e){switch(e.label){case 0:return void 0===t.preAPIHook?[2,{url:t.url,requestInit:t.requestInit}]:[4,t.preAPIHook({url:t.url,requestInit:t.requestInit})];case 1:return[2,e.sent()]}}))}))},this.getFullUrl=function(t,e){var n=new a.default(t),o="".concat(r.appInfo.apiDomain.getAsStringDangerous()).concat(r.appInfo.apiBasePath.getAsStringDangerous()).concat(n.getAsStringDangerous());return void 0===e?o:o+"?"+new URLSearchParams(e)},this.getResponseJsonOrThrowGeneralError=function(t){return o(r,void 0,void 0,(function(){var e,r;return i(this,(function(n){switch(n.label){case 0:return[4,t.clone().json()];case 1:if("GENERAL_ERROR"===(e=n.sent()).status)throw r=void 0===e.message?"No Error Message Provided":e.message,new u.default(r);return[2,e]}}))}))},this.recipeId=t,this.appInfo=e}var e;return e=t,t.preparePreAPIHook=function(t){var r=t.recipePreAPIHook,a=t.action,s=t.options,u=t.userContext;return function(t){return o(void 0,void 0,void 0,(function(){var o;return i(e,(function(e){switch(e.label){case 0:return[4,r(n(n({},t),{action:a,userContext:u}))];case 1:return o=e.sent(),void 0===s||void 0===s.preAPIHook?[2,o]:[2,s.preAPIHook({url:o.url,requestInit:o.requestInit,userContext:u})]}}))}))}},t.preparePostAPIHook=function(t){var r=t.recipePostAPIHook,a=t.action,s=t.userContext;return function(t){return o(void 0,void 0,void 0,(function(){return i(e,(function(e){switch(e.label){case 0:return[4,r(n(n({},t),{userContext:s,action:a}))];case 1:return e.sent(),[2]}}))}))}},t}();e.default=c},7725:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function s(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((n=n.apply(t,e||[])).next())}))},a=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0});var s=r(1996),u=r(6322),c=function(t){function e(e){var r=t.call(this,e)||this;return r.signOut=function(t){return i(r,void 0,void 0,(function(){return a(this,(function(e){switch(e.label){case 0:return[4,u.default.getInstanceOrThrow().signOut({userContext:t.userContext})];case 1:return[2,e.sent()]}}))}))},r}return o(e,t),e}(s.default);e.default=c},5053:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.normaliseAuthRecipe=void 0;var n=r(6069);e.normaliseAuthRecipe=function(t){return(0,n.normaliseRecipeModuleConfig)(t)}},1996:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0});e.default=function(t){this.config=t}},6069:function(t,e){var r=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function s(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((n=n.apply(t,e||[])).next())}))},n=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.normaliseRecipeModuleConfig=void 0,e.normaliseRecipeModuleConfig=function(t){var e=this,o=t.preAPIHook;void 0===o&&(o=function(t){return r(e,void 0,void 0,(function(){return n(this,(function(e){return[2,t]}))}))});var i=t.postAPIHook;return void 0===i&&(i=function(){return r(e,void 0,void 0,(function(){return n(this,(function(t){return[2]}))}))}),{recipeId:t.recipeId,appInfo:t.appInfo,preAPIHook:o,postAPIHook:i}}},6322:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)},a=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function s(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((n=n.apply(t,e||[])).next())}))},s=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.Recipe=void 0;var u=r(1996),c=r(1757),l=r(8122),f=function(t){function e(e){var r=t.call(this,e)||this;return r.getUserId=function(t){return c.default.getUserId({userContext:t.userContext})},r.getAccessTokenPayloadSecurely=function(t){return a(r,void 0,void 0,(function(){return s(this,(function(e){return[2,c.default.getAccessTokenPayloadSecurely({userContext:t.userContext})]}))}))},r.doesSessionExist=function(t){return c.default.doesSessionExist({userContext:t.userContext})},r.signOut=function(t){return c.default.signOut({userContext:t.userContext})},r.attemptRefreshingSession=function(){return a(r,void 0,void 0,(function(){return s(this,(function(t){return[2,c.default.attemptRefreshingSession()]}))}))},r.validateClaims=function(t){return c.default.validateClaims(t.overrideGlobalClaimValidators,t.userContext)},c.default.init(i(i({},e),{preAPIHook:function(t){return a(r,void 0,void 0,(function(){var r;return s(this,(function(n){return r=i(i({},t),{requestInit:i(i({},t.requestInit),{headers:i(i({},t.requestInit.headers),{rid:e.recipeId})})}),void 0===e.preAPIHook?[2,r]:[2,e.preAPIHook(t)]}))}))},apiDomain:e.appInfo.apiDomain.getAsStringDangerous(),apiBasePath:e.appInfo.apiBasePath.getAsStringDangerous()})),r}return o(e,t),e.init=function(t){return function(r,n){return e.instance=new e(i(i({},t),{appInfo:r,recipeId:e.RECIPE_ID,enableDebugLogs:n})),e.instance}},e.prototype.getClaimValue=function(t){return c.default.getClaimValue(t)},e.prototype.getInvalidClaimsFromResponse=function(t){return c.default.getInvalidClaimsFromResponse(t)},e.addAxiosInterceptors=function(t,e){return c.default.addAxiosInterceptors(t,e)},e.getInstanceOrThrow=function(){if(void 0===e.instance){var t="No instance of Session found. Make sure to call the Session.init method.";throw t=(0,l.checkForSSRErrorAndAppendIfNeeded)(t),Error(t)}return e.instance},e.reset=function(){(0,l.isTest)()&&(e.instance=void 0)},e.RECIPE_ID="session",e}(u.default);e.Recipe=f,e.default=f},1257:function(t,e,r){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.getAuthStateFromURL=e.getAuthErrorFromURL=e.getAuthCodeFromURL=e.verifyAndGetStateOrThrowError=e.generateStateToSendToOAuthProvider=e.getAuthorisationURLFromBackend=e.setStateAndOtherInfoToStorage=e.getStateAndOtherInfoFromStorage=e.signOut=e.signInAndUp=e.getAuthorisationURLWithQueryParamsAndSetState=e.init=void 0;var o=r(8122),i=r(9102),a=function(){function t(){}return t.init=function(t){return i.default.init(t)},t.signOut=function(t){return i.default.getInstanceOrThrow().signOut({userContext:(0,o.getNormalisedUserContext)(null==t?void 0:t.userContext)})},t.getStateAndOtherInfoFromStorage=function(t){return i.default.getInstanceOrThrow().recipeImplementation.getStateAndOtherInfoFromStorage(n(n({},t),{userContext:(0,o.getNormalisedUserContext)(null==t?void 0:t.userContext)}))},t.setStateAndOtherInfoToStorage=function(t){return i.default.getInstanceOrThrow().recipeImplementation.setStateAndOtherInfoToStorage(n(n({},t),{userContext:(0,o.getNormalisedUserContext)(t.userContext)}))},t.getAuthorisationURLWithQueryParamsAndSetState=function(t){return i.default.getInstanceOrThrow().recipeImplementation.getAuthorisationURLWithQueryParamsAndSetState(n(n({},t),{userContext:(0,o.getNormalisedUserContext)(t.userContext)}))},t.getAuthorisationURLFromBackend=function(t){return i.default.getInstanceOrThrow().recipeImplementation.getAuthorisationURLFromBackend(n(n({},t),{userContext:(0,o.getNormalisedUserContext)(t.userContext)}))},t.signInAndUp=function(t){return i.default.getInstanceOrThrow().recipeImplementation.signInAndUp(n(n({},t),{userContext:(0,o.getNormalisedUserContext)(null==t?void 0:t.userContext)}))},t.generateStateToSendToOAuthProvider=function(t){return i.default.getInstanceOrThrow().recipeImplementation.generateStateToSendToOAuthProvider(n(n({},t),{userContext:(0,o.getNormalisedUserContext)(null==t?void 0:t.userContext)}))},t.verifyAndGetStateOrThrowError=function(t){return i.default.getInstanceOrThrow().recipeImplementation.verifyAndGetStateOrThrowError(n(n({},t),{userContext:(0,o.getNormalisedUserContext)(t.userContext)}))},t.getAuthCodeFromURL=function(t){return i.default.getInstanceOrThrow().recipeImplementation.getAuthCodeFromURL(n(n({},t),{userContext:(0,o.getNormalisedUserContext)(null==t?void 0:t.userContext)}))},t.getAuthErrorFromURL=function(t){return i.default.getInstanceOrThrow().recipeImplementation.getAuthErrorFromURL(n(n({},t),{userContext:(0,o.getNormalisedUserContext)(null==t?void 0:t.userContext)}))},t.getAuthStateFromURL=function(t){return i.default.getInstanceOrThrow().recipeImplementation.getAuthStateFromURL(n(n({},t),{userContext:(0,o.getNormalisedUserContext)(null==t?void 0:t.userContext)}))},t}();e.default=a;var s=a.init;e.init=s;var u=a.getAuthorisationURLWithQueryParamsAndSetState;e.getAuthorisationURLWithQueryParamsAndSetState=u;var c=a.signInAndUp;e.signInAndUp=c;var l=a.getStateAndOtherInfoFromStorage;e.getStateAndOtherInfoFromStorage=l;var f=a.setStateAndOtherInfoToStorage;e.setStateAndOtherInfoToStorage=f;var h=a.getAuthorisationURLFromBackend;e.getAuthorisationURLFromBackend=h;var d=a.generateStateToSendToOAuthProvider;e.generateStateToSendToOAuthProvider=d;var p=a.verifyAndGetStateOrThrowError;e.verifyAndGetStateOrThrowError=p;var v=a.getAuthCodeFromURL;e.getAuthCodeFromURL=v;var g=a.getAuthErrorFromURL;e.getAuthErrorFromURL=g;var w=a.getAuthStateFromURL;e.getAuthStateFromURL=w;var y=a.signOut;e.signOut=y},9102:function(t,e,r){var n,o=this&&this.__extends||(n=function(t,e){return n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])},n(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),i=this&&this.__assign||function(){return i=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},i.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.Recipe=void 0;var a=r(4566),s=r(6333),u=r(3664),c=r(8122),l=function(t){function e(e){var r=t.call(this,(0,a.normaliseUserInput)(e))||this,n=new s.default((0,u.default)({recipeId:r.config.recipeId,appInfo:r.config.appInfo,preAPIHook:r.config.preAPIHook,postAPIHook:r.config.postAPIHook}));return r.recipeImplementation=n.override(r.config.override.functions).build(),r}return o(e,t),e.init=function(t){return function(r){return e.instance=new e(i(i({},t),{recipeId:e.RECIPE_ID,appInfo:r})),e.instance}},e.getInstanceOrThrow=function(){if(void 0===e.instance){var t="No instance of ThirdParty found. Make sure to call the ThirdParty.init method.";throw t=(0,c.checkForSSRErrorAndAppendIfNeeded)(t),Error(t)}return e.instance},e.reset=function(){(0,c.isTest)()&&(e.instance=void 0)},e.RECIPE_ID="thirdparty",e}(r(7725).default);e.Recipe=l,e.default=l},3664:function(t,e,r){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)},o=this&&this.__awaiter||function(t,e,r,n){return new(r||(r=Promise))((function(o,i){function a(t){try{u(n.next(t))}catch(t){i(t)}}function s(t){try{u(n.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(a,s)}u((n=n.apply(t,e||[])).next())}))},i=this&&this.__generator||function(t,e){var r,n,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;a;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,n=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!((o=(o=a.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=e.call(t,a)}catch(t){i=[6,t],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}};Object.defineProperty(e,"__esModule",{value:!0}),e.getRecipeImplementation=void 0;var a=r(634),s=r(8122),u=r(2173),c=r(9092);function l(t){var e=new a.default(t.recipeId,t.appInfo);return{getStateAndOtherInfoFromStorage:function(){var t=c.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.getItemSync("supertokens-oauth-state-2");if(null!==t)try{return JSON.parse(t)}catch(t){return}},setStateAndOtherInfoToStorage:function(t){return o(this,void 0,void 0,(function(){var e;return i(this,(function(r){switch(r.label){case 0:return e=JSON.stringify(n({},t.state)),[4,c.WindowHandlerReference.getReferenceOrThrow().windowHandler.sessionStorage.setItem("supertokens-oauth-state-2",e)];case 1:return r.sent(),[2]}}))}))},getAuthorisationURLWithQueryParamsAndSetState:function(t){return o(this,void 0,void 0,(function(){var e,r,n,o;return i(this,(function(i){switch(i.label){case 0:return e=this.generateStateToSendToOAuthProvider({userContext:t.userContext}),r=Date.now()+6e5,[4,this.setStateAndOtherInfoToStorage({state:{stateForAuthProvider:e,providerId:t.providerId,expiresAt:r,authorisationURL:t.authorisationURL,providerClientId:t.providerClientId},userContext:t.userContext})];case 1:return i.sent(),[4,this.getAuthorisationURLFromBackend({providerId:t.providerId,userContext:t.userContext,options:t.options})];case 2:return n=i.sent(),o=new URL(n.url),[2,null!==o.searchParams.get("redirect_uri")?(0,s.appendQueryParamsToURL)(n.url,{state:e}):(0,s.appendQueryParamsToURL)(n.url,{state:e,redirect_uri:t.authorisationURL})]}}))}))},getAuthorisationURLFromBackend:function(r){return o(this,void 0,void 0,(function(){var n,o,s;return i(this,(function(i){switch(i.label){case 0:return[4,e.get("/authorisationurl",{},{thirdPartyId:r.providerId},a.default.preparePreAPIHook({recipePreAPIHook:t.preAPIHook,action:"GET_AUTHORISATION_URL",options:r.options,userContext:r.userContext}),a.default.preparePostAPIHook({recipePostAPIHook:t.postAPIHook,action:"GET_AUTHORISATION_URL",userContext:r.userContext}))];case 1:return n=i.sent(),o=n.jsonBody,s=n.fetchResponse,[2,{status:"OK",url:o.url,fetchResponse:s}]}}))}))},signInAndUp:function(r){return o(this,void 0,void 0,(function(){var o,s,c,l,f,h,d,p;return i(this,(function(i){switch(i.label){case 0:return o=this.getStateAndOtherInfoFromStorage({userContext:r.userContext}),s=this.getAuthStateFromURL({userContext:r.userContext}),[4,this.verifyAndGetStateOrThrowError({stateFromAuthProvider:s,stateObjectFromStorage:o,userContext:r.userContext})];case 1:if(c=i.sent(),l=this.getAuthCodeFromURL({userContext:r.userContext}),void 0!==(f=this.getAuthErrorFromURL({userContext:r.userContext})))throw new Error("Auth provider responded with error: ".concat(f));return[4,e.post("/signinup",{body:JSON.stringify({code:l,thirdPartyId:c.providerId,redirectURI:c.authorisationURL,clientId:c.providerClientId})},a.default.preparePreAPIHook({recipePreAPIHook:t.preAPIHook,action:"THIRD_PARTY_SIGN_IN_UP",options:r.options,userContext:r.userContext}),a.default.preparePostAPIHook({recipePostAPIHook:t.postAPIHook,action:"THIRD_PARTY_SIGN_IN_UP",userContext:r.userContext}))];case 2:if(h=i.sent(),d=h.jsonBody,p=h.fetchResponse,"FIELD_ERROR"===d.status)throw new u.default(d.error);return[2,n(n({},d),{fetchResponse:p})]}}))}))},generateStateToSendToOAuthProvider:function(){return"".concat(1e20).replace(/[018]/g,(function(t){return(parseInt(t)^crypto.getRandomValues(new Uint8Array(1))[0]&15>>parseInt(t)/4).toString(16)}))},verifyAndGetStateOrThrowError:function(t){return o(this,void 0,void 0,(function(){return i(this,(function(e){if(void 0===t.stateObjectFromStorage||void 0===t.stateObjectFromStorage.stateForAuthProvider)throw new Error("No valid auth state present in session storage");if(void 0===t.stateFromAuthProvider)throw new Error("No state recieved from auth provider");if(t.stateObjectFromStorage.expiresAt<Date.now())throw new Error("Auth state verification failed. The auth provider took too long to respond");if(t.stateFromAuthProvider!==t.stateObjectFromStorage.stateForAuthProvider)throw new Error("Auth state verification failed. The auth provider responded with an invalid state");return[2,t.stateObjectFromStorage]}))}))},getAuthCodeFromURL:function(){var t=(0,s.getQueryParams)("code");return void 0===t?"":t},getAuthErrorFromURL:function(){return(0,s.getQueryParams)("error")},getAuthStateFromURL:function(){var t=(0,s.getQueryParams)("state");return void 0===t?"":t}}}e.default=l,e.getRecipeImplementation=l},4566:function(t,e,r){var n=this&&this.__assign||function(){return n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},n.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.normaliseUserInput=void 0;var o=r(5053);e.normaliseUserInput=function(t){var e=n({functions:function(t){return t}},t.override);return n(n({},(0,o.normaliseAuthRecipe)(t)),{override:e})}},8122:(t,e,r)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.getHashFromLocation=e.getNormalisedUserContext=e.checkForSSRErrorAndAppendIfNeeded=e.getQueryParams=e.isTest=e.normaliseInputAppInfoOrThrowError=e.appendQueryParamsToURL=void 0;var n=r(9092),o=r(7611),i=r(7992),a=r(1260);e.appendQueryParamsToURL=function(t,e){if(void 0===e)return t;try{var r=new URL(t);return Object.entries(e).forEach((function(t){var e=t[0],n=t[1];r.searchParams.set(e,n)})),r.href}catch(r){var n=t.startsWith("/")?"http:localhost":"http://localhost/",o=new URL("".concat(n).concat(t));return Object.entries(e).forEach((function(t){var e=t[0],r=t[1];o.searchParams.set(e,r)})),"".concat(o.pathname).concat(o.search)}},e.normaliseInputAppInfoOrThrowError=function(t){if(void 0===t)throw new Error("Please provide the appInfo object when calling supertokens.init");if(void 0===t.apiDomain)throw new Error("Please provide your apiDomain inside the appInfo object when calling supertokens.init");if(void 0===t.appName)throw new Error("Please provide your appName inside the appInfo object when calling supertokens.init");var e,r,n=new a.default("");return void 0!==t.apiGatewayPath&&(n=new a.default(t.apiGatewayPath)),{appName:t.appName,apiDomain:new i.default(t.apiDomain),apiBasePath:n.appendPath((e=o.DEFAULT_API_BASE_PATH,r=t.apiBasePath,void 0!==r?new a.default(r):new a.default(e)))}},e.isTest=function(){try{return"testing"===process.env.TEST_MODE}catch(t){return!1}},e.getQueryParams=function(t){var e=new URLSearchParams(n.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getSearch()).get(t);if(null!==e)return e},e.checkForSSRErrorAndAppendIfNeeded=function(t){return"undefined"==typeof window&&(t+=o.SSR_ERROR),t},e.getNormalisedUserContext=function(t){return void 0===t?{}:t},e.getHashFromLocation=function(){return n.WindowHandlerReference.getReferenceOrThrow().windowHandler.location.getHash().substring(1)}},255:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.supported_fdi=e.package_version=void 0,e.package_version="0.1.6",e.supported_fdi=["1.15"]},942:(t,e,r)=>{function n(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}e.__esModule=!0;let o=r(6398);void 0!==o.default?n(o):n({default:o,...o})},9092:(t,e,r)=>{e.__esModule=!0,function(t){for(var r in t)e.hasOwnProperty(r)||(e[r]=t[r])}(r(7860))}},t=>{var e=(1257,t(t.s=1257));supertokensThirdParty=e}]);