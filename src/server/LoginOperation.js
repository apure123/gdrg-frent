//定义一下登录的操作
import axios from "axios";
import {getUserInfoUrl, loginUrl} from "./serverUrlConfig/serverUrlConfig";
import {message} from "antd";
import {store} from "../middleware/store";
import jwtDecode from "jwt-decode";
import setHeadToken from "./setToken";

export const loginOperation=(loginUserName,loginPassword)=>{

    axios.post(loginUrl,{username:loginUserName,password:loginPassword})
        .then( (response) =>{
            if (response.status===200&&response.data.code==200){
                message.success("登录成功");
                console.log(response.data);
                let userid=response.data.data.userId;
                let token=response.data.data.token;
                //首先设置token
                store.dispatch({type:"settoken",token:token})
                //把token保存进本地存储里面
                localStorage.setItem('jwToken',token)
                //设置请求头的token
                setHeadToken(token);
                getUserInfo();






            }else {
                message.error(response.data.msg);
            }
        })
        .catch(function (error) {
            console.log(error);
            message.error("登录失败")
        })

}

export  const getUserInfo=()=>{
    axios.get(getUserInfoUrl,)
        .then((res)=>{
            console.log(res.data);

            store.dispatch({
                type:"login",
                roles:res.data.data.roles,
                userPrivilege:res.data.data.privileges,
                userInfo:res.data.data.user,
            })
        })
}

export  const  refreshPage=async ()=>{
    if (localStorage.jwToken){
        setHeadToken(localStorage.jwToken)
        getUserInfo();
    }
}