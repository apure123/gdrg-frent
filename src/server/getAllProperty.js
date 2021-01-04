import axios from "axios"
import {allPropertyUrl} from "./serverUrlConfig/serverUrlConfig";
import {store} from "../middleware/store";

export const getAllProperty=()=>{

    axios.get(allPropertyUrl,null)
        .then((res)=>{

            //把返回的数据格式转换一下
             let newlist=res.data.data.map((item)=>{
                return {
                    propertyId:item.id,
                    deviceType:item.assettype,
                    deviceName:item.assetname,
                    userId:item.userid,
                    userName:item.username

                }
            })

            store.dispatch({type:"refreshAllProperty",allProperty:newlist})
        })
}