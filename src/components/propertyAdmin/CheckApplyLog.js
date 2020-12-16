import {Component} from "react";
import { Table, Tag, Space } from 'antd';
const columns = [
    {
        title: '申请id',
        dataIndex: 'applyId',
        key: 'applyId',
    },
    {
        title: '申请人id',
        dataIndex: 'userId',
        key: 'userId',
    },
    {
        title: '申请人',
        dataIndex: 'userName',
        key: 'userName',
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
        userId:"12",
        userName:"张三",
        deviceType:"键盘",
        deviceName:"键盘1",
        applyState:"waiting"
    },
    {
        key: '2',
        applyId:"121",
        userId:"12",
        userName:"张4",
        deviceType:"键盘",
        deviceName:"键盘1",
        applyState:"allow"
    },
    {
        key: '3',
        applyId:"113",
        userId:"13",
        userName:"张5",
        deviceType:"键盘",
        deviceName:"键盘2",
        applyState:"refuse"
    },
];

class  CheckApplyLog extends Component{

    render() {
        return(<div>
            <Table columns={columns} dataSource={data} />
        </div>)
    }
}

export default CheckApplyLog