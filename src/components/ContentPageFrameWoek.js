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
import {BrowserRouter as Router, Route} from "react-router-dom";

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


    render() {
        return(<div>
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1" icon={<PieChartOutlined />}>
                            我的资产管理
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
                            <Menu.Item key="6">用户管理</Menu.Item>
                            <Menu.Item key="7">角色管理</Menu.Item>
                            <Menu.Item key="8">权限管理</Menu.Item>
                        </SubMenu>
                        <Menu.Item key="9" icon={<FileOutlined />}>
                            Files
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>面包屑导航</Breadcrumb.Item>
                            <Breadcrumb.Item>的例子</Breadcrumb.Item>
                        </Breadcrumb>
                        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                            <Router>
                                {superAdminRoutes.map((routeitem,key)=>{
                                    if (routeitem.exact)
                                    {
                                        return <Route  exact path={routeitem.path} component={routeitem.component}/>
                                    }else {
                                        return <Route  path={routeitem.path} component={routeitem.component}/>
                                    }
                                })}
                            </Router>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        </div>)
    }

}

export default ContentPageFrameWoek