import {combineReducers} from "@reduxjs/toolkit";
import SigninReducer from "./SigninReducer";
import DarkModeReducer from "./DarkModeReducer";
import ChatReducer from "./ChatReducer";

export const RootReducter = combineReducers({
    SigninReducer,
    DarkModeReducer,
    ChatReducer
});