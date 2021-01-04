import axios from "axios";
import { allowApplyUrl} from "../serverUrlConfig/serverUrlConfig";
import {message} from "antd";
import {getTodoApply} from "./getTodoApply";

export const allowApply=(applyid)=>{
    axios.post(allowApplyUrl,{
        applyid:applyid
    })
        .then((res)=>{
            if (res.status===200){
                message.success("已通过")
                //接下来刷新列表
                getTodoApply()
            }
        })
}