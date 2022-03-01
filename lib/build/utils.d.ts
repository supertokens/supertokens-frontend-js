import { AppInfoUserInput, NormalisedAppInfo } from "./types";
export declare function appendQueryParamsToURL(stringUrl: string, queryParams?: Record<string, string>): string;
export declare function normaliseInputAppInfoOrThrowError(appInfo: AppInfoUserInput): NormalisedAppInfo;
export declare function isTest(): boolean;
export declare function getQueryParams(param: string): string | undefined;
export declare function checkForSSRErrorAndAppendIfNeeded(error: string): string;
export declare function getNormalisedUserContext(userContext?: any): any;
export declare function getSessionStorage(key: string): string | undefined;
export declare function setSessionStorage(key: string, value: string): void;
