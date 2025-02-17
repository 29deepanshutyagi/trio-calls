import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Typography from "@material-ui/core/Typography";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Skeleton from "@material-ui/lab/Skeleton";
export const ChatParticipantSkeleton = () => (_jsxs(ListItem, { children: [_jsx(ListItemAvatar, { children: _jsx(Skeleton, { variant: "circle", width: 40, height: 40 }) }), _jsx(ListItemText, { primary: _jsxs(Typography, Object.assign({ style: { display: "flex", justifyContent: "space-between" }, variant: "subtitle2", color: "textSecondary" }, { children: [_jsx(Skeleton, { width: 80 }), _jsx(Skeleton, { width: 40 })] })), secondary: _jsx(Typography, Object.assign({ variant: "caption" }, { children: _jsx(Skeleton, {}) })) })] }));
export const ChatMsgSkeleton = () => {
    return (_jsx(ListItem, { children: _jsx(ListItemText, { primary: _jsxs(Typography, Object.assign({ style: { display: "flex", justifyContent: "space-between" }, variant: "caption", color: "primary" }, { children: [_jsx(Skeleton, { width: 70 }), _jsx(Skeleton, { width: 50 })] })), secondary: _jsx(Skeleton, { variant: "rect", height: 30 }) }) }));
};
