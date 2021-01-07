import {store} from "../middleware/store";

export  const logoutOperation=()=>{
    store.dispatch({type:"logout"})
}