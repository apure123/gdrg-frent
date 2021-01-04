import {Component} from "react";
import {Form, Input, Button, Checkbox, Breadcrumb} from 'antd';
import  "../../style/newapply.css";
import {addRole} from "../../server/superAdmin/newRole";

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
        offset: 6,
        span: 18,
    },
};

const NewRole = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
        addRole(values.roleName)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div className={"newapplyform"}>
            <Breadcrumb style={{ margin: '32px 0' }}>
                <Breadcrumb.Item>管理员</Breadcrumb.Item>
                <Breadcrumb.Item>新建角色</Breadcrumb.Item>
            </Breadcrumb>
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
                    label="角色名"
                    name="roleName"
                    rules={[
                        {
                            required: true,
                            message: '角色名不能为空',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交申请
                    </Button>
                </Form.Item>
            </Form>

        </div>

    )

}


export default NewRole