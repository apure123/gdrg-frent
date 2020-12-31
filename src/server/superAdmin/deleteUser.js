import axios from "axios";
import {deleteUserUrl, getAllUserUrl} from "../serverUrlConfig/serverUrlConfig";
import {store} from "../../middleware/store";
import { message } from 'antd';
import {getAllUser} from "./getAllUser";

export const deleteUserById=(id)=>{
    axios.post(deleteUserUrl, {"userId":id})
        .then((res)=>{
            message.success("删除成功")
            //删除成功之后需要再请求一次用户列表，刷新一下
            getAllUser();

        })
        .catch(
            (err)=>{
                console.log(err);
            }
        )
}