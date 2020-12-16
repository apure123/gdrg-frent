import {Component} from "react";
import { Table, Tag, Space } from 'antd';
const columns = [
    {
        title: '申请id',
        dataIndex: 'applyId',
        key: 'applyId',
        /*render: text => <a>{text}</a>,*/
    },
    {
        title: '申请设备类型',
        dataIndex: 'deviceType',
        key: 'deviceType',
    },
    {
        title: '申请设备名称',
        dataIndex: 'deviceName',
        key: 'deviceName',
    },
    {
        title:"申请状态",
        key: "applyState",
        dataIndex: "applyState",
        render: (status)=>{
            if (status==="allow"){
                return <Tag color="success">已通过</Tag>
            }else if (status==="refuse"){
                return <Tag color={"error"}>已拒绝</Tag>
            }else {
                return <Tag color={"processing"}>未处理</Tag>
            }
        }
    }
];

const data = [
    {
        key: '1',
        applyId:"111",
        deviceType:"键盘",
        deviceName:"键盘1",
        applyState:"allow"
    },
    {
        key: '2',
        applyId:"112",
        deviceType:"键盘",
        deviceName:"键盘2",
        applyState:"refuse"
    },{
        key: '3',
        applyId:"113",
        deviceType:"电脑",
        deviceName:"电脑1",
        applyState:"waiting"
    },{
        key: '4',
        applyId:"111",
        deviceType:"鼠标",
        deviceName:"鼠标3",
        applyState:"allow"
    },
];

class  ApplyLog extends Component{

    render() {
        return(<div>
            <Table columns={columns} dataSource={data} />
        </div>)
    }
}

export default ApplyLog