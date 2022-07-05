import { UserInput } from "./types";
import { RecipeInterface, ClaimValidationError, SessionClaimValidator } from "supertokens-website";
export default class RecipeWrapper {
    static init(config?: UserInput): import("../../types").CreateRecipeFunction<unknown>;
    static getUserId(input?: { userContext?: any }): Promise<string>;
    static getAccessTokenPayloadSecurely(input?: { userContext?: any }): Promise<any>;
    static attemptRefreshingSession(): Promise<boolean>;
    static doesSessionExist(input?: { userContext?: any }): Promise<boolean>;
    static addAxiosInterceptors(axiosInstance: any, userContext?: any): void;
    static signOut(input?: { userContext?: any }): Promise<void>;
    static validateClaims(input: {
        overrideGlobalClaimValidators?: (
            globalClaimValidators: SessionClaimValidator[],
            userContext: any
        ) => SessionClaimValidator[];
        userContext?: any;
    }): Promise<ClaimValidationError[]> | ClaimValidationError[];
    static getInvalidClaimsFromResponse(input: {
        response:
            | {
                  data: any;
              }
            | Response;
        userContext?: any;
    }): Promise<ClaimValidationError[]>;
}
declare const init: typeof RecipeWrapper.init;
declare const getUserId: typeof RecipeWrapper.getUserId;
declare const getAccessTokenPayloadSecurely: typeof RecipeWrapper.getAccessTokenPayloadSecurely;
declare const attemptRefreshingSession: typeof RecipeWrapper.attemptRefreshingSession;
declare const doesSessionExist: typeof RecipeWrapper.doesSessionExist;
declare const addAxiosInterceptors: typeof RecipeWrapper.addAxiosInterceptors;
declare const signOut: typeof RecipeWrapper.signOut;
declare const validateClaims: typeof RecipeWrapper.validateClaims;
declare const getInvalidClaimsFromResponse: typeof RecipeWrapper.getInvalidClaimsFromResponse;
export {
    ClaimValidationError,
    ClaimValidationResult,
    SessionClaimValidator,
    PrimitiveClaim,
    BooleanClaim,
} from "supertokens-website";
export {
    init,
    getUserId,
    getAccessTokenPayloadSecurely,
    attemptRefreshingSession,
    doesSessionExist,
    addAxiosInterceptors,
    signOut,
    validateClaims,
    getInvalidClaimsFromResponse,
    RecipeInterface,
    UserInput,
};
