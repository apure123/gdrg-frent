import {Component} from "react";
import { Form, Input, Button, Breadcrumb } from 'antd';
import  "../../style/newapply.css";
import {newapply} from "../../server/apply/newapply";
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
        offset: 6,
        span: 18,
    },
};

const NewApplyhook = (props) => {
    const onFinish = (values) => {
        console.log('Success:', values);
        newapply(values.deviceType,values.deviceName,props.userInfo.userId)

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return(
        <div>
            <Breadcrumb style={{ margin: '32px 0' }}>
                <Breadcrumb.Item>资产申请</Breadcrumb.Item>
                <Breadcrumb.Item>资产申请</Breadcrumb.Item>
            </Breadcrumb>
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
function mapStateToProps(state)
{
    return{
        userInfo:state.loginstate.userInfo
    }
}

const NewApply=connect(mapStateToProps,null)(NewApplyhook)

export default NewApply