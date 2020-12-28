import {Component} from "react"
import {routes} from "../configs/routers";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";


class AppDirect extends Component{

    render() {return(<div>
        <Router>
            <Switch>
                {routes.map((routeitem,key)=>{
                    if (routeitem.exact)
                    {
                        return <Route  exact path={routeitem.path} component={routeitem.component}/>
                    }else {
                        return <Route  path={routeitem.path} component={routeitem.component}/>
                    }
                })}
                <Redirect from={"/"} to={"/login"}></Redirect>
            </Switch>
        </Router>

    </div>)
    }
}

export default AppDirect