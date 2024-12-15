/* Copyright (c) 2022, VRAI Labs and/or its affiliates. All rights reserved.
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

import { CreateRecipeFunction, NormalisedAppInfo } from "../../types";
import { SessionClaimValidatorStore } from "../../sessionClaimValidatorStore";
import RecipeModule from "../recipeModule";
import { InputType, NormalisedInputType, PreAndPostAPIHookAction, RecipeInterface } from "./types";
import { normaliseUserInput } from "./utils";
import RecipeImplementation from "./recipeImplementation";
import OverrideableBuilder from "supertokens-js-override";
import { checkForSSRErrorAndAppendIfNeeded, isTest } from "../../utils";
import { UserInput } from "./types";
import { EmailVerificationClaimClass } from "./emailVerificationClaim";
import { PostSuperTokensInitCallbacks } from "../../postSuperTokensInitCallbacks";

export default class Recipe implements RecipeModule<PreAndPostAPIHookAction, NormalisedInputType> {
    static instance?: Recipe;
    static RECIPE_ID = "emailverification";
    static EmailVerificationClaim = new EmailVerificationClaimClass(
        () => Recipe.getInstanceOrThrow().recipeImplementation
    );

    config: NormalisedInputType;
    recipeImplementation: RecipeInterface;

    constructor(config: InputType) {
        this.config = normaliseUserInput(config);
        const builder = new OverrideableBuilder(
            RecipeImplementation({
                recipeId: this.config.recipeId,
                appInfo: this.config.appInfo,
                clientType: this.config.clientType,
                preAPIHook: this.config.preAPIHook,
                postAPIHook: this.config.postAPIHook,
            })
        );
        this.recipeImplementation = builder.override(this.config.override.functions).build();

        PostSuperTokensInitCallbacks.addPostInitCallback(() => {
            SessionClaimValidatorStore.addClaimValidatorFromOtherRecipe(
                Recipe.EmailVerificationClaim.validators.isVerified(10)
            );
        });
    }

    static init(config?: UserInput): CreateRecipeFunction<PreAndPostAPIHookAction> {
        return (appInfo: NormalisedAppInfo, clientType: string | undefined) => {
            Recipe.instance = new Recipe({
                ...config,
                appInfo,
                clientType,
                recipeId: Recipe.RECIPE_ID,
            });

            return Recipe.instance;
        };
    }

    static getInstanceOrThrow(): Recipe {
        if (Recipe.instance === undefined) {
            let error =
                "No instance of EmailVerification found. Ensure that the 'EmailVerification.init' method is called within the 'SuperTokens.init' recipeList.";
            error = checkForSSRErrorAndAppendIfNeeded(error);

            throw Error(error);
        }

        return Recipe.instance;
    }

    static reset(): void {
        if (!isTest()) {
            return;
        }
        Recipe.instance = undefined;
        Recipe.EmailVerificationClaim = new EmailVerificationClaimClass(
            () => Recipe.getInstanceOrThrow().recipeImplementation
        );
    }
}

export { Recipe };
