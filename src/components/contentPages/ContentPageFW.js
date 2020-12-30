import {Component} from "react"
import {connect} from "react-redux"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {Breadcrumb, Button, Layout,Dropdown,Menu,Avatar,Drawer} from "antd";
import {superAdminRoutes} from "../../configs/routers";
import { DownOutlined,UserOutlined } from '@ant-design/icons';
import  "../../style/headerscope.css"
import UserInfoDrawer from "./UserInfoDrawer";

const { Header, Content, Footer, Sider } = Layout;




class ContentPageFW extends Component{
    constructor(props) {
        super(props);
        this.state={
            visible:false
        }
    }
    showDrawer = () => {
        this.setState({
            ...this.state,
            visible:true
        })
    };

    onClose = () => {
        this.setState({
            ...this.state,
            visible:false
        })
    };


    menu = (
        <Menu>
            <Menu.Item>
                <a onClick={this.showDrawer}>
                    查看个人资料
                </a>
            </Menu.Item>
            <Menu.Item>
                <a onClick={this.props.logout}>
                    退出登录
                </a>
            </Menu.Item>

        </Menu>
    );


    render() {

        return(<div>
            <Drawer
                title="用户详情信息"
                placement="right"
                closable={false}
                onClose={this.onClose}
                visible={this.state.visible}
                width={400}
            >
                <UserInfoDrawer></UserInfoDrawer>

            </Drawer>
            <Header className="site-layout-background" id={"headerscope"} style={{ padding: 0 }} >

                <Dropdown overlay={this.menu}>
                    <Avatar id={"avatarlogo"} size="large" icon={<UserOutlined />} />

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

function mapDispatchToProps(dispatch){
    return{

        logout:()=>{dispatch({type:"logout"})},

    }
}

ContentPageFW=connect(null,mapDispatchToProps)(ContentPageFW)

export default ContentPageFW