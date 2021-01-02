import {combineReducers}from "redux"
import loginStateReducer from "./reducer/loginStateReducer";
import myApplyLogReducer from "./reducer/myApplyLogReducer";
import allPropertyReducer from "./reducer/checkAllPropertyReducer";
import approveListReducer from "./reducer/approveListReducer";
import applyLogReducer from "./reducer/applyLogReducer";
import allUserInfoReducer from "./reducer/allUserInfoReducer";
import allRoleReducer from "./reducer/allRoleReducer";
import allPrivilegeReducer from "./reducer/allPrivilegeReducer";

const rootReducer=combineReducers({
    loginstate:loginStateReducer,
    myApplyLog:myApplyLogReducer,
    allProperty:allPropertyReducer,
    approve:approveListReducer,
    applyLog:applyLogReducer,
    allUser:allUserInfoReducer,
    allRole:allRoleReducer,
    allPrivilege:allPrivilegeReducer,






})

export default rootReducer ;
