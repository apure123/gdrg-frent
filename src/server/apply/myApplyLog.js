import axios from "axios"
import {myApplyUrl} from "../serverUrlConfig/serverUrlConfig";
import {store} from "../../middleware/store";


export const myApplyLog=(userid)=>{
    let keyindex=0;
    axios.post(myApplyUrl,{id:userid})
        .then((res)=>{
            //把返回的数据格式转换一下
            let newlist=res.data.data.map((item)=>{
                keyindex++;
                return {
                    key:keyindex,
                    applyId:item.id,
                    deviceType:item.asserttype,
                    deviceName:item.assertname,
                    applyState:item.state,


                }
            })

            store.dispatch({type:"refreshMyApplyLog",applylog:newlist})
        })
}
