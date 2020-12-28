import React, { Component } from 'react';
import {Button, Checkbox, Input,Form,message} from "antd";
import {connect} from "react-redux";
import axios from "axios"
import {rigisterUrl} from "../../server/serverUrlConfig/serverUrlConfig";
/*import ajax_url from "../../server_config/ajax_url";*/

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 10},
    }
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 4,
        },
    },
};

const ajax_url="123123";

class Register extends Component{

    state = {
        confirmDirty: false,
        autoCompleteResult: [],
    };

    //密码框对应的方法
    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }

    //确认密码框的方法
    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } else {
            callback();
        }
    }

    //确认密码框不聚焦时触发的方法
    //只要有输入就把confirmDirty设为真
    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

//注册提交的方法
    registerSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

            }
        });
    }

    //注册提交到后端的测试方法
    registerSubmit_test=(e)=>{
        e.preventDefault();
        var fd = new FormData()
        fd.append('account', this.props.form.getFieldValue("account"))
        fd.append('password', this.props.form.getFieldValue("password"))
        fd.append('nickname', this.props.form.getFieldValue("nickname"))
        fd.append('email', this.props.form.getFieldValue("email"))

        let config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
        axios.post(`${ajax_url}/register.php`, fd,config)
            .then(function (response) {
                console.log(response);
                if(response.data.result===1){
                    message.success(response.data.message)
                }
                else {
                    message.error(response.data.message)
                }
            })
            .catch(function (error) {
                console.log(error);
                alert("注册失败，似乎遇到了点问题")
            })
            .then(function () {
                // always executed
            });
    }

    //antdv4的测试方法
    registerSubmit_test1=(values)=>{
        var data={
            username:values.account,
            password:values.password,
            /*nickname:values.nickname,*/
            email:values.email
        }

        axios.post(rigisterUrl, data)
            .then(function (response) {
                console.log("下面是服务器返回信息");
                console.log(response);
                if (response.status===200){
                    message.success('注册成功，快去登陆吧！');
                }else {
                    if(response.data.msg){
                        message.error(response.data.msg);
                    }else {
                        message.error("未知错误")
                    }

                }



            })
            .catch(function (error) {
                console.log(error);
                alert("注册失败，似乎遇到了点问题")
            })
            .then(function () {
                // always executed
            });


    }

    render() {

        return(
            <div className={"register-form"}>{/*注册框*/}

                {/*<Icon type="close" className={"close"} onClick={this.props.closeregister}  />*/}
                <Form {...formItemLayout}  onFinish={this.registerSubmit_test1}>

                    <Form.Item className={"title2"}>
                        <h2 >注册</h2>
                    </Form.Item>
                    <Form.Item label={"用户名"} name={"account"} rules={[{
                        message: '请输入用户名!',
                    }, {
                        required: true, message: '请输入用户名！',
                    }]}>
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name={"password"}
                        rules={[{
                            required: true, message: 'Please input your password!',
                        }, ]}
                        hasFeedback
                    >
                        <Input type="password" />
                    </Form.Item>

                    <Form.Item
                        label="确认密码"
                        name={"confirm"}
                        rules={[{
                            required: true, message: 'Please confirm your password!',
                        },
                            ({ getFieldValue }) => ({
                                validator(rule, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }

                                    return Promise.reject('两个密码不一致！');
                                },
                            }),

                        ]}
                    >
                        <Input type="password" onBlur={this.handleConfirmBlur} />
                    </Form.Item>

                    <Form.Item label={"昵称"}
                               name={"nickname"}
                               rules={[{
                                   message: '请输入用昵称!',
                               }, {
                                   required: true, message: '请输入用昵称!',
                               }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label={"邮箱"}
                        name={"email"}
                        rules={[{
                            message: '请输入邮箱!',
                        }, {
                            required: true, message: '请输入邮箱!',
                        }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}
                               name={"agreement"}
                               valuePropName={"checked"}
                    >
                        <Checkbox>I have read the <a href="">agreement</a></Checkbox>
                    </Form.Item>

                    <Form.Item {...tailFormItemLayout}
                    >
                        <Button type="primary" htmlType="submit">注册</Button>
                    </Form.Item>
                </Form>





            </div>
        )
    }

}
function mapStateToProps(state)
{
    return{
        registerFlag:state.login.regflag,

    }
}

function mapDispatchToProps(dispatch){
    return{
        closeregister:()=>{dispatch({type:"close_register"})}
    }
}
/*Register=connect(mapStateToProps,mapDispatchToProps)(Register)*/
export default Register;