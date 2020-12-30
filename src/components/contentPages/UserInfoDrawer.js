import {Component} from "react";
import { Form, Input, Button, Checkbox } from 'antd';
import  "../../style/newapply.css";

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

const UserInfoDrawer = () => {
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


export default UserInfoDrawer