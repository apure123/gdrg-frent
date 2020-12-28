//定义一下登录的操作
import axios from "axios";
import {loginUrl} from "./serverUrlConfig";
import {message} from "antd";
import {store} from "../../middleware/store";

export const loginOperation=(loginUserName,loginPassword)=>{

    axios.post(loginUrl,{username:loginUserName,password:loginPassword})
        .then( (response) =>{
            if (response.status===200){
                message.success("登录成功");
                console.log(response.data);
                //这里需要把用户信息存一下
                store.dispatch({type:"login",roles:response.data.roles,userPrivilege:response.data.privileges,userInfo:response.data.data.user})


            }else {
                message.error(response.data.msg);
            }
        })
        .catch(function (error) {
            console.log(error);
            message.error("登录失败")
        })
}