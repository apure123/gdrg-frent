import React, { Component } from 'react';
import { Layout, Button, Form, Input, Avatar,message} from 'antd';
import {Redirect }from "react-router-dom"
import "../style/login.css"
import {connect} from "react-redux"
import { UserOutlined } from '@ant-design/icons';

import Register from "./loginPage/Register";
import axios from "axios"
import {loginUrl} from "../server/serverUrlConfig/serverUrlConfig";
import {loginOperation, refreshPage} from "../server/LoginOperation";
/*import ajax_url from "../../server_config/ajax_url";*/

const ajax_url="12313";

const {
    Header, Content, Footer, Sider,
} = Layout;
const Formitem=Form.item;


class LoginPage extends Component{
    constructor(props) {
        super(props);
        this.state={
            registerFlag:false
        }

    }


    componentDidMount() {
        /*console.log(this.props.registerFlag)*/
        refreshPage();
    }

//登录提交的方法
    /*logintest=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
        console.log("捕获的用户名为：")
        console.log(this.props.form.getFieldValue("loginUserName"))
        console.log(this.props.form.getFieldValue("loginPassword"))

        //此处修改
        var fd = new FormData()
        fd.append('account', this.props.form.getFieldValue("loginUserName"))
        fd.append('password', this.props.form.getFieldValue("loginPassword"))
        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        axios.post(`${ajax_url}/login.php`, fd,config)
            .then( (response) =>{
                console.log(response);

                if (response.data.result==="1")
                {
                    console.log("密码正确，开始登录");
                    //登录
                    this.props.loginsubmit(response.data.userid,response.data.nickname,response.data.account)
                }
                else message.error("登录失败:"+response.data.message)
            })
            .catch(function (error) {
                console.log(error);
                message.error("登录失败")
            })
    }*/

    loginnewtest=(values)=>{
        loginOperation(values.loginUserName,values.loginPassword)
    }

    //改变注册窗口是否显示
    changeRegisterFlag=()=>{
        if (this.state.registerFlag===true){
            this.setState({
                registerFlag:false
            })
        }else {
            this.setState({
                ...this.state,
                registerFlag:true
            })
        }
        console.log("注册状态改变后");
        console.log(this.state);
    }

    render() {


        // if (this.props.loginflag)
        // {
        //     return<Redirect to={"/system"}/>
        // }
        console.log(this.props.loginflag);

        return(

            <div className="Login">
                {this.props.loginflag?<Redirect to={"/dashboard"}/>:""}
                {/*左边注册部分*/}
                <div style={{width:"75%",float:"left",margin:"0",minHeight:"700px",height:"100vh"}} className={"registerpart"}>

                    {
                        this.state.registerFlag ?
                            <Register changeRegisterFlag={this.changeRegisterFlag}/>
                            :
                            <div></div>
                    }

                </div>


                {/*登录部分*/}
                <div className={"login"}>

                    <br/>
                    <Form onFinish={this.loginnewtest}style={{width:"100%"}}>

                        <Avatar shape="square" icon={<UserOutlined />} size={150}  style={{display:"inline-block",margin:"50px",borderRadius:"20px"}}/>


                        {/*这是antdv4的新表格操作*/}
                        <Form.Item name={'loginUserName'} rules={[{ required: true, message: 'Please input your username!' }]}>
                            <Input   placeholder="用户名" style={{margin:"auto",width:"61.8%"}} />
                        </Form.Item>
                        <Form.Item name={'loginPassword'} rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input   type="password" placeholder="密码"  style={{margin:"auto",width:"61.8%"}}/>
                        </Form.Item>
                        <Form.Item>
                            <div className={"somebutton"}>
                                <Button type="primary" htmlType="submit" style={{margin:"auto",marginRight:"10px",marginLeft:"10px"}} >登录</Button>
                                <Button onClick={this.changeRegisterFlag}>注册</Button>
                            </div>
                        </Form.Item>


                    </Form>



                </div>

            </div >
        )
    }

}

function mapStateToProps(state)
{
    return{

        loginflag:state.loginstate.isLogin
    }
}

function mapDispatchToProps(dispatch){
    return{


    }
}

LoginPage=connect(mapStateToProps,mapDispatchToProps)(LoginPage)
export default  LoginPage;