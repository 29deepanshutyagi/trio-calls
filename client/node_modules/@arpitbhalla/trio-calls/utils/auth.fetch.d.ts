import { UserDetails } from "./types";
export declare const signIn: (email: string, password: string) => Promise<UserDetails>;
export declare const signUp: (displayName: string, email: string, password: string) => Promise<UserDetails>;
export declare const getProfile: (UID: string) => Promise<UserDetails>;
