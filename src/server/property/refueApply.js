
import axios from "axios";
import {allowApplyUrl, refuseApplyUrl} from "../serverUrlConfig/serverUrlConfig";
import {message} from "antd";
import {getTodoApply} from "./getTodoApply";

export const refuseApply=(applyid)=>{
    axios.post(refuseApplyUrl,{
        applyid:applyid
    })
        .then((res)=>{
            if (res.status===200){
                message.success("已拒绝")
                //接下来刷新列表
                getTodoApply()
            }
        })
}