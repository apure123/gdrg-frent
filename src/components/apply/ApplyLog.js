import {Component} from "react";
import { Table, Tag, Space } from 'antd';
import {connect} from "react-redux"
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


class  ApplyLog extends Component{

    render() {
        return(<div>
            <Table columns={columns} dataSource={this.props.applylog} />
        </div>)
    }
}

function mapStateToProps(state)
{
    return{
        applylog:state.myApplyLog.applylog,
    }
}
ApplyLog=connect(mapStateToProps,null)(ApplyLog)

export default ApplyLog