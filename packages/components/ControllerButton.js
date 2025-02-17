import { jsx as _jsx } from "react/jsx-runtime";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ToggleIcon from "material-ui-toggle-icon";
const ControlButton = ({ title, isEnabled, IconOn, IconOff, onClick, shortCut, }) => (_jsx(Tooltip, Object.assign({ title: `${title} ${!isEnabled ? "off" : "on"} ${shortCut ? `(Alt+${shortCut})` : ""}` }, { children: _jsx(IconButton, Object.assign({ accessKey: shortCut || "", onClick: onClick }, { children: _jsx(ToggleIcon, { on: isEnabled, onIcon: _jsx(IconOn, {}), offIcon: _jsx(IconOff, {}) }) })) })));
export default ControlButton;
