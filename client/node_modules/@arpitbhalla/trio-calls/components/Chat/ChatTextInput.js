import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import Fab from "@material-ui/core/Fab";
import Picker from "emoji-picker-react";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Popper from "@material-ui/core/Popper";
const useStyles = makeStyles((theme) => ({
    rootBox: {
        display: "flex",
        alignItems: "center",
        bottom: 0,
    },
    sendIcon: {
        marginLeft: theme.spacing(2),
        paddingLeft: 4,
    },
}));
const ChatTextInput = ({ onSend, isSmall }) => {
    const classes = useStyles();
    const [text, setText] = React.useState("");
    const [anchorEl, setAnchorEl] = React.useState(null);
    const handleClick = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleSubmit = () => {
        if (!text)
            return;
        onSend === null || onSend === void 0 ? void 0 : onSend(text);
        setText("");
    };
    return (_jsxs(Box, Object.assign({ className: classes.rootBox }, { children: [_jsx(Popper, Object.assign({ open: Boolean(anchorEl), anchorEl: anchorEl }, { children: _jsx(Picker, { onEmojiClick: (_event, { emoji }) => {
                        setText(text + emoji);
                    } }) })), _jsx(TextField, { fullWidth: true, multiline: true, rowsMax: 2, placeholder: "Send a message to everyone", variant: "outlined", value: text, margin: isSmall ? "dense" : "none", onChange: (e) => setText(e.target.value), InputProps: {
                    startAdornment: !isSmall && (_jsx(InputAdornment, Object.assign({ style: { margin: 0, padding: 0 }, position: "start" }, { children: _jsx(IconButton, Object.assign({ "aria-label": "", onClick: handleClick }, { children: _jsx(TagFacesIcon, { color: "action" }) })) }))),
                } }), _jsx("div", { children: _jsx(Fab, Object.assign({ size: isSmall ? "small" : "medium", color: "primary", "aria-label": "send message", className: classes.sendIcon, onClick: handleSubmit }, { children: _jsx(SendOutlinedIcon, { fontSize: "small" }) })) })] })));
};
export default ChatTextInput;
