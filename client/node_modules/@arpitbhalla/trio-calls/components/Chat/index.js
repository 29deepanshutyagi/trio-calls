import { jsx as _jsx } from "react/jsx-runtime";
import loadable from "@loadable/component";
import LinearProgress from "@material-ui/core/LinearProgress";
export const ChatMessage = loadable(() => import("./ChatMessage"), {
    fallback: _jsx(LinearProgress, {}),
});
export const ChatTextInput = loadable(() => import("./ChatTextInput"), {
    fallback: _jsx(LinearProgress, {}),
});
