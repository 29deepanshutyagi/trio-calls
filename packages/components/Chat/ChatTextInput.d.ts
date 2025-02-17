import React from "react";
declare type ChatTextInputProps = {
    onSend?: (message: string) => unknown;
    isSmall?: boolean;
};
declare const ChatTextInput: React.FC<ChatTextInputProps>;
export default ChatTextInput;
