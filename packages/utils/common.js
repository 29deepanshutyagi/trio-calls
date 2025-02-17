/**
 * Convert xxxxxxxxxxxx to xxxx-xxxx-xxxx
 */
export const stringToMeetID = (str) => { var _a; return !isValidMeetID(str) ? ((_a = str.match(/.{1,4}/g)) === null || _a === void 0 ? void 0 : _a.join("-")) || str : str; };
/**
 * Check if str is in form xxxx-xxxx-xxxx
 */
export const isValidMeetID = (str) => /^(\w+){4}-(\w+){4}-(\w+){4}$/.test(str);
/**
 * Copy to clipboard
 */
export const CopyToClipboard = function (text) {
    return navigator.clipboard.writeText(text);
};
export const setStateHandler = (setState) => (event) => {
    setState(event.target.value);
};
export const getRandomColor = (isDark) => {
    const letters = (isDark ? "BCDEF" : "456789").split("");
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
};
export const dateToTime = (str) => new Date(str || Date.now()).toLocaleTimeString("en-IN", {
    hour12: true,
    hour: "numeric",
    minute: "2-digit",
});
