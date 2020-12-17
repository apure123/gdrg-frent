import {combineReducers}from "redux"
import loginStateReducer from "./reducer/loginStateReducer";
import myApplyLogReducer from "./reducer/myApplyLogReducer";
import allPropertyReducer from "./reducer/checkAllPropertyReducer";
import approveListReducer from "./reducer/approveListReducer";
import applyLogReducer from "./reducer/applyLogReducer";

const rootReducer=combineReducers({
    loginstate:loginStateReducer,
    myApplyLog:myApplyLogReducer,
    allProperty:allPropertyReducer,
    approve:approveListReducer,
    applyLog:applyLogReducer,




})

export default rootReducer ;