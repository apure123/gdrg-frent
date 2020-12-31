import axios from "axios";
import {addRoleUrl, deleteUserUrl} from "../serverUrlConfig/serverUrlConfig";
import {message} from "antd";
import {getAllUser} from "./getAllUser";

export const addRole=(roleName)=>{
    axios.post(addRoleUrl, {"roleName":roleName})
        .then((res)=>{
            message.success("新建用户成功")
            //删除成功之后需要再请求一次用户列表，刷新一下
            getAllUser();

        })
        .catch(
            (err)=>{
                console.log(err);
            }
        )
}