import axios from "axios";
import {setPrivilegeForRoleUrl} from "../serverUrlConfig/serverUrlConfig";
import {message} from "antd";
import {getAllRole} from "./getAllRole";


export const setPrivilegesByRoleId=(roleId, privileges)=>{
    axios.post(setPrivilegeForRoleUrl,{
        roleId:roleId,
        privilegeIds:privileges
    })
        .then((res)=>{
            if (res.status===200){
                message.success("保存成功")
                getAllRole();//请求新数据
            }else {
                message.error("保存失败")
            }
        })
        .catch((err)=>{
            message.error("保存失败")
        })
}