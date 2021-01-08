import {store} from "../middleware/store";
import setHeadToken from "./setToken";

export  const logoutOperation=()=>{
    //清除token
    localStorage.clear()
    setHeadToken();//清除请求头
    store.dispatch({type:"logout"})

}

