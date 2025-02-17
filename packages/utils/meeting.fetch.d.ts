import { Meeting } from "./types";
export declare const getMeet: (meetID: string, UID: string) => Promise<Meeting>;
export declare const newMeet: ({ hostID, invitees, title, type, time, }: Meeting) => Promise<Meeting>;
