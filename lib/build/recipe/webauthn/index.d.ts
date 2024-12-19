import { AuthenticationResponseJSON, RegistrationResponseJSON } from "@simplewebauthn/browser";
import { GeneralErrorResponse, User } from "../../types";
import { RecipeFunctionOptions } from "../recipeModule/types";
import { CredentialPayload, ResidentKey, UserInput, UserVerification } from "./types";
export default class RecipeWrapper {
    static init(
        config?: UserInput
    ): import("../../types").CreateRecipeFunction<import("./types").PreAndPostAPIHookAction>;
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
    static registerOptions(
        input: {
            options?: RecipeFunctionOptions;
            userContext: any;
        } & (
            | {
                  email: string;
              }
            | {
                  recoverAccountToken: string;
              }
        )
    ): Promise<
        | {
              status: "OK";
              webauthnGeneratedOptionsId: string;
              rp: {
                  id: string;
                  name: string;
              };
              user: {
                  id: string;
                  name: string;
                  displayName: string;
              };
              challenge: string;
              timeout: number;
              excludeCredentials: {
                  id: string;
                  type: "public-key";
                  transports: ("ble" | "hybrid" | "internal" | "nfc" | "usb")[];
              }[];
              attestation: "none" | "indirect" | "direct" | "enterprise";
              pubKeyCredParams: {
                  alg: number;
                  type: "public-key";
              }[];
              authenticatorSelection: {
                  requireResidentKey: boolean;
                  residentKey: ResidentKey;
                  userVerification: UserVerification;
              };
              fetchResponse: Response;
          }
        | {
              status: "RECOVER_ACCOUNT_TOKEN_INVALID_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "INVALID_EMAIL_ERROR";
              err: string;
              fetchResponse: Response;
          }
        | {
              status: "INVALID_GENERATED_OPTIONS_ERROR";
              fetchResponse: Response;
          }
    >;
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
    static signInOptions(input: { email: string; options?: RecipeFunctionOptions; userContext: any }): Promise<
        | {
              status: "OK";
              webauthnGeneratedOptionsId: string;
              challenge: string;
              timeout: number;
              userVerification: UserVerification;
              fetchResponse: Response;
          }
        | {
              status: "INVALID_GENERATED_OPTIONS_ERROR";
              fetchResponse: Response;
          }
        | GeneralErrorResponse
    >;
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
    static signUp(input: {
        webauthnGeneratedOptionsId: string;
        credential: RegistrationResponseJSON;
        options?: RecipeFunctionOptions;
        userContext: any;
    }): Promise<
        | {
              status: "OK";
              user: User;
          }
        | GeneralErrorResponse
        | {
              status: "SIGN_UP_NOT_ALLOWED";
              reason: string;
          }
        | {
              status: "INVALID_CREDENTIALS_ERROR";
          }
        | {
              status: "GENERATED_OPTIONS_NOT_FOUND_ERROR";
          }
        | {
              status: "INVALID_GENERATED_OPTIONS_ERROR";
          }
        | {
              status: "INVALID_AUTHENTICATOR_ERROR";
              reason: string;
          }
        | {
              status: "EMAIL_ALREADY_EXISTS_ERROR";
          }
    >;
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
    static signIn(input: {
        webauthnGeneratedOptionsId: string;
        credential: AuthenticationResponseJSON;
        options?: RecipeFunctionOptions;
        userContext: any;
    }): Promise<
        | {
              status: "OK";
              user: User;
          }
        | {
              status: "INVALID_CREDENTIALS_ERROR";
          }
        | {
              status: "SIGN_IN_NOT_ALLOWED";
              reason: string;
          }
        | GeneralErrorResponse
    >;
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
    static emailExists(input: { email: string; options?: RecipeFunctionOptions; userContext: any }): Promise<
        | {
              status: "OK";
              exists: boolean;
          }
        | GeneralErrorResponse
    >;
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
    static generateRecoverAccountToken(input: {
        email: string;
        options?: RecipeFunctionOptions;
        userContext: any;
    }): Promise<
        | {
              status: "OK";
          }
        | {
              status: "RECOVER_ACCOUNT_NOT_ALLOWED";
              reason: string;
          }
        | GeneralErrorResponse
    >;
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
    static recoverAccount(input: {
        token: string;
        webauthnGeneratedOptionsId: string;
        credential: CredentialPayload;
        options?: RecipeFunctionOptions;
        userContext: any;
    }): Promise<
        | {
              status: "OK";
              user: User;
              email: string;
          }
        | GeneralErrorResponse
        | {
              status: "RECOVER_ACCOUNT_TOKEN_INVALID_ERROR";
          }
        | {
              status: "INVALID_CREDENTIALS_ERROR";
          }
        | {
              status: "GENERATED_OPTIONS_NOT_FOUND_ERROR";
          }
        | {
              status: "INVALID_GENERATED_OPTIONS_ERROR";
          }
        | {
              status: "INVALID_AUTHENTICATOR_ERROR";
              reason: string;
          }
    >;
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
    static registerAndSignUp(input: { email: string; options?: RecipeFunctionOptions; userContext: any }): Promise<
        | {
              status: "OK";
              user: User;
              fetchResponse: Response;
          }
        | {
              status: "INVALID_EMAIL_ERROR";
              err: string;
              fetchResponse: Response;
          }
        | {
              status: "INVALID_GENERATED_OPTIONS_ERROR";
              fetchResponse: Response;
          }
        | GeneralErrorResponse
        | {
              status: "SIGN_UP_NOT_ALLOWED";
              reason: string;
              fetchResponse: Response;
          }
        | {
              status: "INVALID_CREDENTIALS_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "GENERATED_OPTIONS_NOT_FOUND_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "INVALID_GENERATED_OPTIONS_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "INVALID_AUTHENTICATOR_ERROR";
              reason: string;
              fetchResponse: Response;
          }
        | {
              status: "EMAIL_ALREADY_EXISTS_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "AUTHENTICATOR_ALREADY_REGISTERED";
          }
    >;
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
    static authenticateAndSignIn(input: { email: string; options?: RecipeFunctionOptions; userContext: any }): Promise<
        | {
              status: "OK";
              user: User;
              fetchResponse: Response;
          }
        | {
              status: "INVALID_GENERATED_OPTIONS_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "INVALID_CREDENTIALS_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "SIGN_IN_NOT_ALLOWED";
              reason: string;
              fetchResponse: Response;
          }
        | GeneralErrorResponse
    >;
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
    static registerAndRecoverAccount(input: {
        recoverAccountToken: string;
        options?: RecipeFunctionOptions;
        userContext: any;
    }): Promise<
        | {
              status: "OK";
              user: User;
              email: string;
              fetchResponse: Response;
          }
        | {
              status: "RECOVER_ACCOUNT_TOKEN_INVALID_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "INVALID_GENERATED_OPTIONS_ERROR";
              fetchResponse: Response;
          }
        | GeneralErrorResponse
        | {
              status: "RECOVER_ACCOUNT_TOKEN_INVALID_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "INVALID_CREDENTIALS_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "GENERATED_OPTIONS_NOT_FOUND_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "INVALID_GENERATED_OPTIONS_ERROR";
              fetchResponse: Response;
          }
        | {
              status: "INVALID_AUTHENTICATOR_ERROR";
              reason: string;
              fetchResponse: Response;
          }
        | {
              status: "AUTHENTICATOR_ALREADY_REGISTERED";
          }
    >;
}
declare const init: typeof RecipeWrapper.init;
declare const registerOptions: typeof RecipeWrapper.registerOptions;
declare const signInOptions: typeof RecipeWrapper.signInOptions;
declare const signUp: typeof RecipeWrapper.signUp;
declare const signIn: typeof RecipeWrapper.signIn;
declare const emailExists: typeof RecipeWrapper.emailExists;
declare const generateRecoverAccountToken: typeof RecipeWrapper.generateRecoverAccountToken;
declare const recoverAccount: typeof RecipeWrapper.recoverAccount;
declare const registerAndSignup: typeof RecipeWrapper.registerAndSignUp;
declare const authenticateAndSignIn: typeof RecipeWrapper.authenticateAndSignIn;
declare const registerAndRecoverAccount: typeof RecipeWrapper.registerAndRecoverAccount;
export {
    init,
    registerOptions,
    signInOptions,
    signUp,
    signIn,
    emailExists,
    generateRecoverAccountToken,
    recoverAccount,
    registerAndSignup,
    authenticateAndSignIn,
    registerAndRecoverAccount,
};