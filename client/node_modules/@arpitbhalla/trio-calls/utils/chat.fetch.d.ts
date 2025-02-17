import { Meeting, Chat } from "./types";
export declare const getAllMeets: (UID: string) => Promise<Meeting[]>;
export declare const getChat: (UID: string, meetID: string) => Promise<{
    meetTitle: string;
    chats: Chat[];
}>;
