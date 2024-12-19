"use strict";
/* Copyright (c) 2024, VRAI Labs and/or its affiliates. All rights reserved.
 *
 * This software is licensed under the Apache License, Version 2.0 (the
 * "License") as published by the Apache Software Foundation.
 *
 * You may not use this file except in compliance with the License. You may
 * obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */
var __assign =
    (this && this.__assign) ||
    function () {
        __assign =
            Object.assign ||
            function (t) {
                for (var s, i = 1, n = arguments.length; i < n; i++) {
                    s = arguments[i];
                    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
                }
                return t;
            };
        return __assign.apply(this, arguments);
    };
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerAndRecoverAccount =
    exports.authenticateAndSignIn =
    exports.registerAndSignup =
    exports.recoverAccount =
    exports.generateRecoverAccountToken =
    exports.emailExists =
    exports.signIn =
    exports.signUp =
    exports.signInOptions =
    exports.registerOptions =
    exports.init =
        void 0;
var utils_1 = require("../../utils");
var recipe_1 = require("./recipe");
var RecipeWrapper = /** @class */ (function () {
    function RecipeWrapper() {}
    RecipeWrapper.init = function (config) {
        return recipe_1.default.init(config);
    };
    /**
     * Registers a new device based on the passed options and returns the
     * challenge to be fulfilled in order for successful addition of the identity.
     *
     * @param email (OPTIONAL) Email to register the options against. This cannot be passed along with recoverAccountToken.
     *
     * @param recoverAccountToken (OPTIONAL) Recover account token in case this is being generated in that context. This cannot be passed along with email.
     *
     * @param userContext (OPTIONAL) Refer to {@link https://supertokens.com/docs/emailpassword/advanced-customizations/user-context the documentation}
     *
     * @param options (OPTIONAL) Use this to configure additional properties (for example pre api hooks)
     *
     * @returns `{ status: "OK", ...}` if successful along a description of the created webauthn details (challenge, etc.)
     */
    RecipeWrapper.registerOptions = function (input) {
        return recipe_1.default.getInstanceOrThrow().recipeImplementation.registerOptions(
            __assign(__assign({}, input), {
                userContext: (0, utils_1.getNormalisedUserContext)(
                    input === null || input === void 0 ? void 0 : input.userContext
                ),
            })
        );
    };
    /**
     * Returns details about how the authenticator to should verify that a signin
     * is correct.
     *
     * @param email Email to add signin options against.
     *
     * @param userContext (OPTIONAL) Refer to {@link https://supertokens.com/docs/emailpassword/advanced-customizations/user-context the documentation}
     *
     * @param options (OPTIONAL) Use this to configure additional properties (for example pre api hooks)
     *
     * @returns `{ status: "OK", ...}` if successful along a description of the webauthn options (challenge, etc.)
     */
    RecipeWrapper.signInOptions = function (input) {
        return recipe_1.default.getInstanceOrThrow().recipeImplementation.signInOptions(
            __assign(__assign({}, input), {
                userContext: (0, utils_1.getNormalisedUserContext)(
                    input === null || input === void 0 ? void 0 : input.userContext
                ),
            })
        );
    };
    /**
     * Signup to ST with the webauthn options ID and the credential received from the
     * device.
     *
     * @param webauthnGeneratedOptionsId ID of the stored options
     *
     * @param credential Details of the credential
     *
     * @param userContext (OPTIONAL) Refer to {@link https://supertokens.com/docs/emailpassword/advanced-customizations/user-context the documentation}
     *
     * @param options (OPTIONAL) Use this to configure additional properties (for example pre api hooks)
     *
     * @returns `{ status: "OK", ...}` if successful along a description of the user details (id, etc.)
     */
    RecipeWrapper.signUp = function (input) {
        return recipe_1.default.getInstanceOrThrow().recipeImplementation.signUp(
            __assign(__assign({}, input), {
                userContext: input === null || input === void 0 ? void 0 : input.userContext,
            })
        );
    };
    /**
     * Sign in with the credential and the generated options ID.
     *
     * @param webauthnGeneratedOptionsId ID of the stored options
     *
     * @param credential Details of the credential
     *
     * @param userContext (OPTIONAL) Refer to {@link https://supertokens.com/docs/emailpassword/advanced-customizations/user-context the documentation}
     *
     * @param options (OPTIONAL) Use this to configure additional properties (for example pre api hooks)
     *
     * @returns `{ status: "OK", ...}` if successful along a description of the user details (id, etc.)
     */
    RecipeWrapper.signIn = function (input) {
        return recipe_1.default.getInstanceOrThrow().recipeImplementation.signIn(
            __assign(__assign({}, input), {
                userContext: input === null || input === void 0 ? void 0 : input.userContext,
            })
        );
    };
    /**
     * Checks whether there is an webauthn user with the passed email.
     *
     * @param email Email to check for existence
     *
     * @param userContext (OPTIONAL) Refer to {@link https://supertokens.com/docs/emailpassword/advanced-customizations/user-context the documentation}
     *
     * @param options (OPTIONAL) Use this to configure additional properties (for example pre api hooks)
     *
     * @returns `{ status: "OK", ...}` if successful along with a boolean indicating existence
     */
    RecipeWrapper.emailExists = function (input) {
        return recipe_1.default.getInstanceOrThrow().recipeImplementation.emailExists(
            __assign(__assign({}, input), {
                userContext: input === null || input === void 0 ? void 0 : input.userContext,
            })
        );
    };
    /**
     * Generate and send a recover account token.
     *
     * @param email Email to send the recover account token to.
     *
     * @param userContext (OPTIONAL) Refer to {@link https://supertokens.com/docs/emailpassword/advanced-customizations/user-context the documentation}
     *
     * @param options (OPTIONAL) Use this to configure additional properties (for example pre api hooks)
     *
     * @returns `{ status: "OK", ...}` if successful
     */
    RecipeWrapper.generateRecoverAccountToken = function (input) {
        return recipe_1.default.getInstanceOrThrow().recipeImplementation.generateRecoverAccountToken(
            __assign(__assign({}, input), {
                userContext: input === null || input === void 0 ? void 0 : input.userContext,
            })
        );
    };
    /**
     * Recover the account using the token received in email.
     *
     * @param token Recovery token received in email
     *
     * @param webauthnGeneratedOptionsId Stored options ID for webauthn
     *
     * @param credential Details of the credential
     *
     * @param userContext (OPTIONAL) Refer to {@link https://supertokens.com/docs/emailpassword/advanced-customizations/user-context the documentation}
     *
     * @param options (OPTIONAL) Use this to configure additional properties (for example pre api hooks)
     *
     * @returns `{ status: "OK", ...}` if successful along a description of the user details (id, etc.) and email
     */
    RecipeWrapper.recoverAccount = function (input) {
        return recipe_1.default.getInstanceOrThrow().recipeImplementation.recoverAccount(
            __assign(__assign({}, input), {
                userContext: input === null || input === void 0 ? void 0 : input.userContext,
            })
        );
    };
    /**
     * Register the new device and signup the user with the passed email ID.
     *
     * It uses `@simplewebauthn/browser` to make the webauthn calls.
     *
     * @param email Email of the user to register and signup
     *
     * @param userContext (OPTIONAL) Refer to {@link https://supertokens.com/docs/emailpassword/advanced-customizations/user-context the documentation}
     *
     * @param options (OPTIONAL) Use this to configure additional properties (for example pre api hooks)
     *
     * @returns `{ status: "OK", ...}` if successful along a description of the user details (id, etc.) and email
     */
    RecipeWrapper.registerAndSignUp = function (input) {
        return recipe_1.default.getInstanceOrThrow().recipeImplementation.registerAndSignUp(
            __assign(__assign({}, input), {
                userContext: input === null || input === void 0 ? void 0 : input.userContext,
            })
        );
    };
    /**
     * Authenticate the user and sign them in after verifying their identity.
     *
     * It uses `@simplewebauthn/browser` to make the webauthn calls.
     *
     * @param email Email of the user to authenticate and signin
     *
     * @param userContext (OPTIONAL) Refer to {@link https://supertokens.com/docs/emailpassword/advanced-customizations/user-context the documentation}
     *
     * @param options (OPTIONAL) Use this to configure additional properties (for example pre api hooks)
     *
     * @returns `{ status: "OK", ...}` if successful along a description of the user details (id, etc.) and email
     */
    RecipeWrapper.authenticateAndSignIn = function (input) {
        return recipe_1.default.getInstanceOrThrow().recipeImplementation.authenticateAndSignIn(
            __assign(__assign({}, input), {
                userContext: input === null || input === void 0 ? void 0 : input.userContext,
            })
        );
    };
    /**
     * Register the new device and recover the user's account with the recover token.
     *
     * It uses `@simplewebauthn/browser` to make the webauthn calls.
     *
     * @param recoverAccountToken Recovery token for the user's account
     *
     * @param userContext (OPTIONAL) Refer to {@link https://supertokens.com/docs/emailpassword/advanced-customizations/user-context the documentation}
     *
     * @param options (OPTIONAL) Use this to configure additional properties (for example pre api hooks)
     *
     * @returns `{ status: "OK", ...}` if successful along a description of the user details (id, etc.) and email
     */
    RecipeWrapper.registerAndRecoverAccount = function (input) {
        return recipe_1.default.getInstanceOrThrow().recipeImplementation.registerAndRecoverAccount(
            __assign(__assign({}, input), {
                userContext: input === null || input === void 0 ? void 0 : input.userContext,
            })
        );
    };
    return RecipeWrapper;
})();
exports.default = RecipeWrapper;
var init = RecipeWrapper.init;
exports.init = init;
var registerOptions = RecipeWrapper.registerOptions;
exports.registerOptions = registerOptions;
var signInOptions = RecipeWrapper.signInOptions;
exports.signInOptions = signInOptions;
var signUp = RecipeWrapper.signUp;
exports.signUp = signUp;
var signIn = RecipeWrapper.signIn;
exports.signIn = signIn;
var emailExists = RecipeWrapper.emailExists;
exports.emailExists = emailExists;
var generateRecoverAccountToken = RecipeWrapper.generateRecoverAccountToken;
exports.generateRecoverAccountToken = generateRecoverAccountToken;
var recoverAccount = RecipeWrapper.recoverAccount;
exports.recoverAccount = recoverAccount;
var registerAndSignup = RecipeWrapper.registerAndSignUp;
exports.registerAndSignup = registerAndSignup;
var authenticateAndSignIn = RecipeWrapper.authenticateAndSignIn;
exports.authenticateAndSignIn = authenticateAndSignIn;
var registerAndRecoverAccount = RecipeWrapper.registerAndRecoverAccount;
exports.registerAndRecoverAccount = registerAndRecoverAccount;