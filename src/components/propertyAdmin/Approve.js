import {Component} from "react";
import { Table, Tag, Space } from 'antd';
import {connect} from "react-redux"

const columns = [
    {
        title: '申请编号',
        dataIndex: 'applyId',
        key: 'applyId',
        /*render: text => <a>{text}</a>,*/
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
                <a>通过</a>
                <a>拒绝</a>
            </Space>
        ),
    },

];

const data = [
    {
        key: '1',
        applyId:"111",
        userId:"11",
        userName: 'John Brown',
        deviceType:"键盘",
        deviceName:"罗技",
    },{
        key: '2',
        applyId:"211",
        userId:"12",
        userName: 'John Brown',
        deviceType:"键盘",
        deviceName:"罗技2",
    },{
        key: '3',
        applyId:"121",
        userId:"11",
        userName: 'John Brown',
        deviceType:"鼠标",
        deviceName:"罗技",
    },
];

class  Approve extends Component{

    render() {
        return(<div>
            <Table columns={columns} dataSource={this.props.approveList} />
        </div>)
    }
}

function mapStateToProps(state)
{
    return{
         approveList:state.approve.approveList,
    }
}

function mapDispatchToProps(dispatch){
    return{

    }
}

Approve=connect(mapStateToProps,mapDispatchToProps)(Approve)
export default Approve