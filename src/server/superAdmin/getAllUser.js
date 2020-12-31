import axios from "axios"

import {store} from "../middleware/store";

export const getAllProperty=()=>{

    axios.get(allPropertyUrl,null)
        .then((res)=>{
            console.log("获取了数据库里面的财产列表");
            console.log(res.data);

            //把返回的数据格式转换一下
            let newlist=res.data.map((item)=>{
                return {
                    propertyId:item.id,
                    deviceType:item.type,
                    deviceName:item.assetname,
                    userId:item.ownerid,
                    userName:"还没映射"

                }
            })
            console.log(newlist);


            store.dispatch({type:"refreshAllProperty",allProperty:newlist})
        })
}