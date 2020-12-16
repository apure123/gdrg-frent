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
        offset: 6,
        span: 18,
    },
};

const NewApply = () => {
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
                    label="设备类型"
                    name="deviceType"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="设备名称"
                    name="deviceName"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
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
/*class  NewApply extends Component{

    render() {
        return(<div>
            这里是申请页面，主要就是表单
        </div>)
    }
}*/

export default NewApply