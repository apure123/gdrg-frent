import axios from "axios";
import {setRoleForUserUrl} from "../serverUrlConfig/serverUrlConfig";
import {message} from "antd";
import {getAllUser} from "./getAllUser";
export const setRoleForUser=(userid,roles)=>{
    axios.post(setRoleForUserUrl,{
        userId:userid,
        roleIds:roles
    })
        .then((res)=>{
            if (res.status===200){
                message.success("设置成功")
                getAllUser()//刷新
            }else {
                message.error("设置失败")
            }
        })
        .catch((err)=>{
            message.error("设置失败")
        })

}