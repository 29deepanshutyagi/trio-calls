import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "./Logo";
const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: "#fff",
        display: "flex",
        backgroundColor: theme.palette.background.default,
        flexDirection: "column",
    },
}));
const LoadingPage = () => {
    const classes = useStyles();
    return (_jsxs(Backdrop, Object.assign({ className: classes.backdrop, open: true }, { children: [_jsx(Box, Object.assign({ p: 2 }, { children: _jsx(Logo, { size: 10 }) })), _jsx(CircularProgress, { color: "primary" })] })));
};
export default LoadingPage;
