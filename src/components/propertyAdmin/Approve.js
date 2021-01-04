import {Component} from "react";
import {Table, Tag, Space, Breadcrumb} from 'antd';
import {connect} from "react-redux"
import {getTodoApply} from "../../server/property/getTodoApply";
import {allowApply} from "../../server/property/allowApply";
import {refuseApply} from "../../server/property/refueApply";

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
                <a onClick={()=>{
                    allowApply(record.applyId)
                }}>通过</a>
                <a onClick={()=>{
                    refuseApply(record.applyId)
                }}>拒绝</a>
            </Space>
        ),
    },

];


class  Approve extends Component{

    componentDidMount() {
        getTodoApply()
    }

    render() {
        return(<div>
            <Breadcrumb style={{ margin: '32px 0' }}>
                <Breadcrumb.Item>财务管理</Breadcrumb.Item>
                <Breadcrumb.Item>待审批</Breadcrumb.Item>
            </Breadcrumb>
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