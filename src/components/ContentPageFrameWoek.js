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
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import ContentPageFW from "./contentPages/ContentPageFW";

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




    render() {
        return(<div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1" icon={<PieChartOutlined />}>
                                <Link to={"/dashboard"}>首页</Link>
                            </Menu.Item>
                            <Menu.Item key="2" icon={<DesktopOutlined />}>
                                公司财务管理
                            </Menu.Item>
                            <SubMenu key="sub1" icon={<UserOutlined />} title="公司财务管理">
                                <Menu.Item key="3">申请审批</Menu.Item>
                                <Menu.Item key="4">审批历史记录</Menu.Item>
                                <Menu.Item key="5">资产管理</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub3" icon={<TeamOutlined />} title="Team">
                                <Menu.Item key="6">Team 1</Menu.Item>
                                <Menu.Item key="8">Team 2</Menu.Item>
                            </SubMenu>
                            <SubMenu key="sub4" icon={<TeamOutlined />} title="超级管理员">
                                <Menu.Item key="6" ><Link to={"/dashboard/superAdmin/user"}>用户管理</Link></Menu.Item>
                                <Menu.Item key="7"><Link to={"/dashboard/superAdmin/role"}>角色权限管理</Link></Menu.Item>
                            </SubMenu>
                            <Menu.Item key="9" icon={<FileOutlined />}>
                                Files
                            </Menu.Item>
                        </Menu>
                </Sider>
                <Layout className="site-layout">
                    <ContentPageFW pathname={window.location.pathname}></ContentPageFW>
                </Layout>
            </Layout>
        </div>)
    }

}

export default ContentPageFrameWoek