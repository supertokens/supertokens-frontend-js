import { SessionClaimValidator, BooleanClaim } from "../session";
import { RecipeInterface } from "./types";

/**
 * We include "Class" in the class name, because it makes it easier to import/use the right thing (the instance exported by the recipe) instead of this.
 * */
export class EmailVerificationClaimClass extends BooleanClaim {
    constructor(
        getRecipeImpl: () => RecipeInterface,
        updateContextOnIsVerifiedFalse?: (userContext: any) => void | Promise<void>
    ) {
        super({
            id: "st-ev",
            refresh: async (userContext) => {
                await getRecipeImpl().isEmailVerified({
                    userContext,
                });
            },
        });

        this.validators = {
            ...this.validators,
            isVerified: (refetchTimeOnFalseInSeconds = 10, maxAgeInSeconds = 300) => ({
                id: this.id,
                refresh: this.refresh,
                shouldRefresh: (payload, userContext) => {
                    const value = this.getValueFromPayload(payload, userContext);
                    return (
                        value === undefined ||
                        this.getLastFetchedTime(payload, userContext)! < Date.now() - maxAgeInSeconds * 1000 ||
                        (value === false &&
                            this.getLastFetchedTime(payload, userContext)! <
                                Date.now() - refetchTimeOnFalseInSeconds * 1000)
                    );
                },
                validate: async (payload, userContext) => {
                    const value = this.getValueFromPayload(payload, userContext);
                    if (value !== true && updateContextOnIsVerifiedFalse !== undefined) {
                        await updateContextOnIsVerifiedFalse(userContext);
                    }
                    return value === true
                        ? { isValid: true }
                        : {
                              isValid: false,
                              reason: { message: "wrong value", expectedValue: true, actualValue: value },
                          };
                },
            }),
        };
    }

    validators!: BooleanClaim["validators"] & {
        isVerified: (refetchTimeOnFalseInSeconds?: number) => SessionClaimValidator;
    };
}