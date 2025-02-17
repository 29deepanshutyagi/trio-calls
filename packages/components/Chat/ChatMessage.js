import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { ListItem, ListItemText } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";
const useStyles = makeStyles(() => ({
    secondary: {
        display: "flex",
        justifyContent: "space-between",
    },
}));
const ChatMessage = ({ displayName, message, time, isSelf, }) => {
    const classes = useStyles();
    return (_jsx(ListItem, Object.assign({ style: {
            padding: 0,
            marginBottom: 0,
        } }, { children: _jsx(ListItemText, { style: { margin: 0 }, primary: _jsxs(Typography, Object.assign({ className: classes.secondary, variant: "caption", color: "primary" }, { children: [_jsxs("b", { children: [displayName, " ", isSelf && "(You)"] }), _jsx("b", { children: time })] })), secondary: _jsx(Box, Object.assign({ border: "1px solid #dddcdc", borderRadius: 10, m: 1, px: 2 }, { children: _jsx(ReactMarkdown, Object.assign({ remarkPlugins: [gfm] }, { children: message || "" })) })) }) })));
};
export default React.memo(ChatMessage);
