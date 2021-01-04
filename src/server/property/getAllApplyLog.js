import axios from "axios"
import {allApplyUrl} from "../serverUrlConfig/serverUrlConfig";
import {store} from "../../middleware/store";

export const getAllApplyLog=()=>{
    let key=0;
    axios.get(allApplyUrl)
        .then((res)=>{
            //把返回的数据格式转换一下
            let newlist=res.data.data.map((item)=>{
                key++;
                return {
                    key: key,
                    applyId:item.id,
                    userId:item.userid,
                    userName:item.username,
                    deviceType:item.applyType,
                    deviceName:item.applyName,
                    applyState:item.state
                }
            })
            store.dispatch({
                type:"refreshAllApplyList",
                applyLogList:newlist
            })
        })
}