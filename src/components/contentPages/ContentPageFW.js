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
import ChangePassWord from "./ChangePassWord";
import {logoutOperation} from "../../server/LogoutOperation";

const { Header, Content, Footer, Sider } = Layout;




class ContentPageFW extends Component{
    constructor(props) {
        super(props);
        this.state={
            visible:false,
            visible2:false
        }
    }
    showDrawer = () => {
        this.setState({
            ...this.state,
            visible:true
        })
    };
    showDrawer2 = () => {
        this.setState({
            ...this.state,
            visible2:true
        })
    };

    onClose = () => {
        this.setState({
            ...this.state,
            visible:false
        })
    };

    onClose2 = () => {
        this.setState({
            ...this.state,
            visible2:false
        })
    }


    menu = (
        <Menu>
            <Menu.Item>
                <a onClick={this.showDrawer}>
                    查看个人资料
                </a>
            </Menu.Item>
            <Menu.Item>
                <a onClick={this.showDrawer2}>
                    修改密码
                </a>
            </Menu.Item>
            <Menu.Item>
                <a onClick={logoutOperation}>
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
            <Drawer
                title="修改密码"
                placement="right"
                closable={false}
                onClose={this.onClose2}
                visible={this.state.visible2}
                width={400}
            >
                <ChangePassWord></ChangePassWord>

            </Drawer>

            <Header className="site-layout-background" id={"headerscope"} style={{ padding: 0 }} >

                <Dropdown overlay={this.menu}>
                    <Avatar id={"avatarlogo"} size="large" icon={<UserOutlined />} />

                </Dropdown>
            </Header>
        <Content style={{ margin: '0 16px' }}>

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