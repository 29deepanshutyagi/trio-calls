import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
const NotFound = () => {
    const history = useHistory();
    return (_jsx(Container, Object.assign({ maxWidth: "md" }, { children: _jsxs(Box, Object.assign({ textAlign: "center" }, { children: [_jsx(Typography, Object.assign({ variant: "h4" }, { children: "URL not found" })), _jsx("br", {}), _jsx("br", {}), _jsx(Button, Object.assign({ variant: "contained", color: "primary", onClick: () => history.push("/") }, { children: "Return to home screen" }))] })) })));
};
export default NotFound;
