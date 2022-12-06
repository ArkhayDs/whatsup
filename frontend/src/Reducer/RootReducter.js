import {combineReducers} from "@reduxjs/toolkit";
import SigninReducer from "./SigninReducer";
import DarkModeReducer from "./DarkModeReducer";

export const RootReducter = combineReducers({
    SigninReducer,
    DarkModeReducer
});