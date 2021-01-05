import axios from "axios";
import {frozenUserUrl} from "../serverUrlConfig/serverUrlConfig";
import {message} from "antd";
import {getAllUser} from "./getAllUser";

export const frozenUserById=(userid)=>{
    axios.post(frozenUserUrl,{
        userId:userid,
        enable:false
    }).then((res)=>{
        if (res.status===200){
            message.success("操作成功")
            getAllUser()
        }
    })
        .catch((err)=>{
            message.error("操作失败")
        })
}
export const activeUserById=(userid)=>{
    axios.post(frozenUserUrl,{
        userId:userid,
        enable:true
    }).then((res)=>{
        if (res.status===200){
            message.success("操作成功")
            getAllUser()
        }
    })
        .catch((err)=>{
            message.error("操作失败")
        })
}