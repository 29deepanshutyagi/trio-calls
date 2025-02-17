import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import { useAppDispatch, useAppSelector } from "core/hooks/redux";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import { updateAuth, updateDisplayName } from "core/reducers/auth";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Logo from "./Logo";
import { toggleDarkMode } from "core/reducers/theme";
import IconButton from "@material-ui/core/IconButton";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
    appBar: {
        marginBottom: ({ toolBarBottomMargin }) => theme.spacing(toolBarBottomMargin),
    },
    headerText: {
        flexGrow: 1,
        marginLeft: theme.spacing(1),
        fontWeight: "bold",
    },
    icon: {
        marginRight: theme.spacing(1),
    },
}));
const Header = ({ elevation = 5, toolBarBottomMargin = 10, }) => {
    const classes = useStyles({ toolBarBottomMargin });
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [newDisplayName, setNewDisplayName] = React.useState("");
    const [profileDialog, setProfileDialog] = React.useState(false);
    const { displayName, useDark } = useAppSelector(({ authReducer: { displayName }, themeReducer: { useDark } }) => ({
        displayName,
        useDark,
    }));
    const handleMenu = (event) => {
        setAnchorEl(anchorEl ? null : event.currentTarget);
    };
    const handleLogout = () => {
        localStorage.clear();
        dispatch(updateAuth({ isAuth: false, displayName: "", UID: "", email: "" }));
    };
    const handleToggleTheme = () => {
        dispatch(toggleDarkMode(null));
    };
    return (_jsxs(AppBar, Object.assign({ elevation: elevation, position: "static", color: "inherit", className: classes.appBar }, { children: [_jsxs(Toolbar, { children: [_jsx(Logo, { size: 4 }), _jsx(Typography, Object.assign({ variant: "h6", color: "primary", className: classes.headerText }, { children: "Trio Calls" })), _jsx(Tooltip, Object.assign({ title: "Toggle Theme (Alt+t)" }, { children: _jsx(IconButton, Object.assign({ accessKey: "t", "aria-label": "toggle theme", onClick: handleToggleTheme }, { children: !useDark ? _jsx(Brightness4Icon, {}) : _jsx(Brightness7Icon, {}) })) })), _jsx(Tooltip, Object.assign({ title: "My Account" }, { children: _jsx(Chip, { label: displayName, color: "default", variant: "outlined", onClick: handleMenu }) }))] }), _jsxs(Menu, Object.assign({ id: "simple-menu", anchorEl: anchorEl, keepMounted: true, open: Boolean(anchorEl), onClose: handleMenu }, { children: [_jsxs(MenuItem, Object.assign({ onClick: () => setProfileDialog(true) }, { children: [_jsx(AccountCircleOutlinedIcon, { className: classes.icon, fontSize: "small" }), "Profile"] })), _jsxs(MenuItem, Object.assign({ onClick: handleLogout }, { children: [_jsx(PowerSettingsNewIcon, { className: classes.icon, fontSize: "small" }), "Logout"] }))] })), _jsxs(Dialog, Object.assign({ open: profileDialog, onClose: () => setProfileDialog(false), "aria-labelledby": "profile dialog" }, { children: [_jsx(DialogTitle, { children: "My Profile" }), _jsx(DialogContent, { children: _jsx(DialogContentText, { children: _jsx(TextField, { label: "Display Name", variant: "outlined", defaultValue: displayName, value: newDisplayName, onChange: (e) => setNewDisplayName(e.target.value) }) }) }), _jsx(DialogActions, { children: _jsx(Button, Object.assign({ variant: "contained", color: "primary", onClick: () => {
                                dispatch(updateDisplayName(newDisplayName));
                                setProfileDialog(false);
                            } }, { children: "Save" })) })] }))] })));
};
export default Header;
