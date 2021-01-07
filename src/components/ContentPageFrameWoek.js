import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import {routes, superAdminRoutes} from "../configs/routers";
import {BrowserRouter as Router, Link, Redirect, Route} from "react-router-dom";
import ContentPageFW from "./contentPages/ContentPageFW";
import {connect} from "react-redux";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class ContentPageFrameWoek extends Component{
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    componentDidMount() {
    }

    checkDisable=(key)=>{
        let res=true;
        for(let pi of this.props.userPrivilege){
            if (pi==key){
                res=false;
            }
        }
        return res;
    }



    render() {
        return(<div>
            {this.props.isLogin?"":<Redirect to={"/"}/>}
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                <Link to={"/dashboard"}>首页</Link>
                            </Menu.Item>

                            <SubMenu key="sub1" icon={<UserOutlined />} title="资产申请">
                                <Menu.Item disabled={this.checkDisable(1)} key="2"><Link to={"/dashboard/apply/newapply"}>资产申请</Link></Menu.Item>
                                <Menu.Item disabled={this.checkDisable(2)} key="3"><Link to={"/dashboard/apply/log"}>我的历史申请</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<UserOutlined />} title="公司财务管理">
                                <Menu.Item disabled={this.checkDisable(3)} key="4" ><Link to={"/dashboard/propertyAdmin/all"}>查看公司资产</Link></Menu.Item>
                                <Menu.Item disabled={this.checkDisable(4)} key="5"><Link to={"/dashboard/propertyAdmin/applylog"}>查看申请记录</Link></Menu.Item>
                                <Menu.Item disabled={this.checkDisable(5)} key="6"><Link to={"/dashboard/propertyAdmin/approve"}>待审批</Link></Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" icon={<TeamOutlined />} title="超级管理员">
                                <Menu.Item disabled={this.checkDisable(6)} key="7" ><Link to={"/dashboard/superAdmin/user"}>用户管理</Link></Menu.Item>
                                {/*<Menu.Item key="8" ><Link to={"/dashboard/superAdmin/newuser"}>新建用户</Link></Menu.Item>*/}
                                <Menu.Item disabled={this.checkDisable(7)} key="9"><Link to={"/dashboard/superAdmin/role"}>角色权限管理</Link></Menu.Item>
                                <Menu.Item disabled={this.checkDisable(8)} key="10"><Link to={"/dashboard/superAdmin/newrole"}>新建角色</Link></Menu.Item>
                            </SubMenu>

                        </Menu>
                </Sider>
                <Layout className="site-layout">
                    <ContentPageFW pathname={window.location.pathname}></ContentPageFW>
                </Layout>
            </Layout>
        </div>)
    }

}

function mapStateToProps(state)
{
    return{
        isLogin:state.loginstate.isLogin,
        userPrivilege:state.loginstate.userInfo.userPrivilege
    }
}
ContentPageFrameWoek=connect(mapStateToProps,null)(ContentPageFrameWoek)

export default ContentPageFrameWoek