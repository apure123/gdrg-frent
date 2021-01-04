import {Component} from "react";
import {Table, Tag, Space, Breadcrumb} from 'antd';
import {connect} from "react-redux"
import {myApplyLog} from "../../server/apply/myApplyLog";
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
            if (status===1){
                return <Tag color="success">已通过</Tag>
            }else if (status===2){
                return <Tag color={"error"}>已拒绝</Tag>
            }else {
                return <Tag color={"processing"}>未处理</Tag>
            }
        }
    }
];


class  ApplyLog extends Component{

    componentDidMount() {
        //获取申请列表
        myApplyLog(this.props.userInfo.userId)
    }

    render() {
        return(<div>
            <Breadcrumb style={{ margin: '32px 0' }}>
                <Breadcrumb.Item>资产申请</Breadcrumb.Item>
                <Breadcrumb.Item>我的申请记录</Breadcrumb.Item>
            </Breadcrumb>
            <Table columns={columns} dataSource={this.props.applylog} />
        </div>)
    }
}

function mapStateToProps(state)
{
    return{
        applylog:state.myApplyLog.applylog,
        userInfo:state.loginstate.userInfo
    }
}
ApplyLog=connect(mapStateToProps,null)(ApplyLog)

export default ApplyLog