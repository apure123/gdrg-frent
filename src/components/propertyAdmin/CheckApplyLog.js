import {Component} from "react";
import {Table, Tag, Space, Breadcrumb} from 'antd';
import {connect} from "react-redux"
import {getAllApplyLog} from "../../server/property/getAllApplyLog";
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
            if (status==1){
                return <Tag color="success">已通过</Tag>
            }else if (status==2){
                return <Tag color={"error"}>已拒绝</Tag>
            }else {
                return <Tag color={"processing"}>未处理</Tag>
            }
        }
    }
];



class  CheckApplyLog extends Component{
    componentDidMount() {
        getAllApplyLog()
    }

    render() {
        return(<div>
            <Breadcrumb style={{ margin: '32px 0' }}>
                <Breadcrumb.Item>财务管理</Breadcrumb.Item>
                <Breadcrumb.Item>查看申请记录</Breadcrumb.Item>
            </Breadcrumb>
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