import {Component} from "react";
import { Table, Tag, Space } from 'antd';
const columns = [
    {
        title: '申请编号',
        dataIndex: 'userName',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: '申请人id',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '申请人',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '设备类型',
        dataIndex: 'deviceType',
    },
    {
        title: "设备名称",
        dataIndex: "deviceName"
    },
    {
        title: '操作',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },

];

const data = [
    {
        key: '1',
        userName: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        userName: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        userName: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];

class  Approve extends Component{

    render() {
        return(<div>
            <Table columns={columns} dataSource={data} />
        </div>)
    }
}

export default Approve