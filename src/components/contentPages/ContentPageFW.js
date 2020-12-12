import {Component} from "react"

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Breadcrumb, Button, Layout,Dropdown,Menu,Avatar} from "antd";
import {superAdminRoutes} from "../../configs/routers";
import { DownOutlined,UserOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                1st menu item
            </a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
                2nd menu item
            </a>
        </Menu.Item>

    </Menu>
);


class ContentPageFW extends Component{




    render() {

        return(<div>
            <Header className="site-layout-background" style={{ padding: 0 }} >
                123123123
                <Dropdown overlay={menu}>
                    <Avatar size="large" icon={<UserOutlined />} />

                </Dropdown>
            </Header>
        <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>面包屑导航</Breadcrumb.Item>
                <Breadcrumb.Item>的例子</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>

                    {superAdminRoutes.map((routeitem,key)=>{
                        if (routeitem.exact)
                        {
                            return <Route  exact path={routeitem.path} component={routeitem.component}/>
                        }else {
                            return <Route  path={routeitem.path} component={routeitem.component}/>
                        }
                    })}

            </div>
        </Content>
        {/*<Footer style={{ textAlign: 'center' }}>给钱啥都干小组软工作业</Footer>*/}

    </div>)
    }
}

export default ContentPageFW