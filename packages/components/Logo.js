import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
    logo: {
        height: ({ size }) => theme.spacing(size),
    },
}));
const Logo = ({ size = 6 }) => {
    const classes = useStyles({ size });
    const history = useHistory();
    return (_jsx("img", { className: classes.logo, alt: "Trio Calls", src: "/icon.png", onClick: () => history.push("/") }));
};
export default React.memo(Logo);
