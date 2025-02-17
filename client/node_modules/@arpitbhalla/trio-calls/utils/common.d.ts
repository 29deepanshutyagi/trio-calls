/**
 * Convert xxxxxxxxxxxx to xxxx-xxxx-xxxx
 */
export declare const stringToMeetID: (str: string) => string;
/**
 * Check if str is in form xxxx-xxxx-xxxx
 */
export declare const isValidMeetID: (str: string) => boolean;
/**
 * Copy to clipboard
 */
export declare const CopyToClipboard: (text: string) => unknown;
export declare const setStateHandler: (setState: React.Dispatch<React.SetStateAction<string>>) => React.ChangeEventHandler<unknown>;
export declare const getRandomColor: (isDark?: boolean | undefined) => string;
export declare const dateToTime: (str?: string | undefined) => string;
