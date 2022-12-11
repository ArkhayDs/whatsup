import {combineReducers} from "@reduxjs/toolkit";
import SigninReducer from "./SigninReducer";

export const RootReducter = combineReducers({
    SigninReducer,
});