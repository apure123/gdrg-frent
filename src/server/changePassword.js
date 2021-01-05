import axios from "axios";
import {changeUserPasswordUrl} from "./serverUrlConfig/serverUrlConfig";
import {message} from "antd";


export const changePassword=(userId,newPassword)=>{
    axios.post(changeUserPasswordUrl,{
        userId:userId,
        password:newPassword
    })
        .then((res)=>{
            if (res.status===200){
                message.success("修改成功")
            }else {
                message.error("修改失败")
            }
        })
        .catch((err)=>{
            message.error("修改失败")
        })
}