import axios from "axios"


import {getAllUserUrl} from "../serverUrlConfig/serverUrlConfig";
import {store} from "../../middleware/store";

export const getAllUser=()=>{

    let keyindex=0;
    axios.get(getAllUserUrl,null)
        .then((res)=>{

            //把返回的数据格式转换一下
            let newlist=res.data.data.map((item)=>{
                keyindex++;
                return {
                    key:keyindex,
                    userId:item.user.id,
                    userName:item.user.username,
                    status:item.user.enable?"active":"frozen",
                    roles:item.roles

                }
            })

            store.dispatch({type:"refreshUserList",userList:newlist})
        })
}

