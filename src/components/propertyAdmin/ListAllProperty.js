import {Component} from "react";
import { Table, Tag, Space } from 'antd';
import {connect} from "react-redux"
const columns = [
    {
        title: '资产编号',
        dataIndex: 'propertyId',
        key: 'propertyId',
    },
    {
        title: '资产类型',
        dataIndex: 'deviceType',
        key: 'deviceType',
    },
    {
        title: '资产名称',
        dataIndex: 'deviceName',
        key: 'deviceName',
    },
    {
        title: "分配员工",
        dataIndex: "userName"
    },{
        title: "分配员工id",
        dataIndex: "userId"
    }
];

const data = [
    {
        key: '1',
        propertyId:"123",
        deviceType:"键盘",
        deviceName:"keyboard123123",
        userName: 'John Brown',
        userId:"24",
    },{
        key: '2',
        propertyId:"124",
        deviceType:"键盘",
        deviceName:"keyboard123123",
        userName: '李狗蛋',
        userId:"23",
    },{
        key: '3',
        propertyId:"125",
        deviceType:"键盘",
        deviceName:"keyboard123123",
        userName: '赵小花',
        userId:"21",
    },
];

class  ListAllProperty extends Component{

    render() {
        return(<div>
            <Table columns={columns} dataSource={this.props.allProperty} />
        </div>)
    }
}
function mapStateToProps(state)
{
    return{
        allProperty:state.allProperty.allProperty,
    }
}

ListAllProperty=connect(mapStateToProps,null)(ListAllProperty);

export default ListAllProperty