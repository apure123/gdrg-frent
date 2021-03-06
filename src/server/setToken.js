
import axios from "axios";
const setHeadToken = token =>{
    if(token){
        // token存在设置header,因为后续每个请求都需要
        axios.defaults.headers.common['token'] = token ;
    }else{
        // 没有token就移除
        delete axios.defaults.headers.common['token'];
    }
}
export default setHeadToken ;