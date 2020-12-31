import axios from "axios"


import {getAllRoleUrl} from "../serverUrlConfig/serverUrlConfig";
import {store} from "../../middleware/store";

export const getAllRole=()=>{

    let keyindex=0;
    axios.get(getAllRoleUrl,null)
        .then((res)=>{

            //把返回的数据格式转换一下
            let newlist=res.data.data.map((item)=>{
                keyindex++;
                return {
                    key:keyindex,
                    roleId:item.role.id,
                    roleName:item.role.rolename,
                    privilege:item.privilege

                }
            })

            store.dispatch({type:"refreshRoleList",roleList:newlist})
        })
}