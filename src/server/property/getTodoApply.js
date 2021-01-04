import axios from "axios";

import {store} from "../../middleware/store";
import {todoApplyUrl} from "../serverUrlConfig/serverUrlConfig";


export const getTodoApply=()=>{
    let key=0;
    axios.get(todoApplyUrl)
        .then((res)=>{
            //把返回的数据格式转换一下
            let newlist=res.data.data.map((item)=>{
                key++;
                return {
                    key: key,
                    applyId:item.id,
                    deviceType:item.applyType,
                    deviceName:item.applyName,
                    userId:item.userid,
                    userName:item.username,
                }
            })
            store.dispatch({
                type:"refreshApproveList",
                approveList:newlist
            })
        })
}