import {Component} from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import  "../../style/newapply.css";
import {connect} from "react-redux";

const layout = {
    labelCol: {
        span: 6,
    },
    wrapperCol: {
        span: 18,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const UserInfoDrawerhook = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div className={"newapplyform"}>

            <p>用户信息</p>
            <hr/>
            <br/>

            <p>{`用户id：${props.userInfo.userId}`}</p>
            <p>{`用户名：${props.userInfo.userName}`}</p>
            <p>{`邮箱：${props.userInfo.userEmail}`}</p>
            <p>{`角色：${props.userInfo.userRoles}`}</p>

            <br/>
            <br/>
            <br/>
            <p>修改密码</p>
            <hr/>
            <br/>
            <br/>
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}

            >
                <Form.Item
                    label="新密码"
                    name="newpassword"
                    rules={[
                        {
                            required: true,
                            message: '新密码不能为空',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        修改密码
                    </Button>
                </Form.Item>
            </Form>

        </div>

    )

}
function mapStateToProps(state)
{
    return{
        userInfo:state.loginstate.userInfo
    }
}

const UserInfoDrawer= connect(mapStateToProps,null)(UserInfoDrawerhook)

export default UserInfoDrawer