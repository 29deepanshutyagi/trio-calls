import { jsx as _jsx } from "react/jsx-runtime";
import { withStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
const ShadowBox = withStyles(({ palette: { type } }) => ({
    root: {
        boxShadow: `0px 0px 30px 1px  ${type === "dark" ? "#0e0c0c" : "#c2c2c2"}`,
    },
}))((p) => _jsx(Box, Object.assign({ component: Paper }, p)));
export default ShadowBox;
