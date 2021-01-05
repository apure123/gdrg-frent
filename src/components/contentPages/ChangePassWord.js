import React, {Component} from "react"
import {Avatar, Button, Form, Input} from "antd";
import {UserOutlined} from "@ant-design/icons";
import {changePassword} from "../../server/changePassword";
import {connect} from "react-redux";

class ChangePassWord extends Component{


    render() {
        return (
            <div>


                    <br/>
                    <Form onFinish={(values)=>{
                        changePassword(this.props.userInfo.userId,values.newPassword)
                    }}style={{width:"100%"}}>


                        <Form.Item name={'newPassword'} rules={[{ required: true, message: 'Please input your Password!' }]}>
                            <Input   type="password" placeholder="新密码"  style={{margin:"auto",width:"100%"}}/>
                        </Form.Item>
                        <Form.Item>
                            <div className={"somebutton"}>
                                <Button type="primary" htmlType="submit" style={{margin:"auto",marginRight:"10px",marginLeft:"10px"}} >修改</Button>
                            </div>
                        </Form.Item>


                    </Form>

            </div>
        );
    }


}

function mapStateToProps(state)
{
    return{
        userInfo:state.loginstate.userInfo
    }
}
ChangePassWord=connect(mapStateToProps,null)(ChangePassWord)
export default ChangePassWord;