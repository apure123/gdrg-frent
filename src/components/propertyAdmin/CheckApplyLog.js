import {Component} from "react";
import { Table, Tag, Space } from 'antd';
import {connect} from "react-redux"
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



class  CheckApplyLog extends Component{

    render() {
        return(<div>
            <Table columns={columns} dataSource={this.props.applyLog} />
        </div>)
    }
}


function mapStateToProps(state)
{
    return{
        applyLog:state.applyLog.applyLogList,
    }
}

function mapDispatchToProps(dispatch){
    return{

    }
}
CheckApplyLog=connect(mapStateToProps,null)(CheckApplyLog);
export default CheckApplyLog