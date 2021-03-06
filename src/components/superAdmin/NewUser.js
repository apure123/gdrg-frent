import {Component} from "react";
import {Form, Input, Button, Checkbox, Select} from 'antd';
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
        offset: 6,
        span: 18,
    },
};

const NewUser = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div className={"newapplyform"}>
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
                    label="用户名"
                    name="userName"
                    rules={[
                        {
                            required: true,
                            message: '用户名不能为空',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="账号状态"
                    name="accountState"
                    rules={[
                        {
                            required: true,
                            message: 'Please input accountState!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="账号角色"
                    name="role"
                    rules={[
                        {
                            required: true,
                            message: 'Please input accountState!',
                        },
                    ]}
                >
                    <Select
                        mode="multiple"
                        style={{ width: '100%' }}
                        placeholder="选择用户类型"
                        /*defaultValue={['china']}*/

                        optionLabelProp="label"
                    >
                        <Select.Option value="超级用户" label="超级">
                            <div className="demo-option-label-item">
                    <span role="img" aria-label="China">
                    </span>
                                超级用户
                            </div>
                        </Select.Option>
                        <Select.Option value="老板" label="boss">
                            <div className="demo-option-label-item">
                    <span role="img" aria-label="USA">
                    </span>
                                老板
                            </div>
                        </Select.Option>

                    </Select>
                </Form.Item>



                {/*<Form.Item {...tailLayout} name="remember" valuePropName="checked">
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>
                */}
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        提交申请
                    </Button>
                </Form.Item>

            </Form>

        </div>

    )

}


export default NewUser