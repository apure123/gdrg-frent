import axios from "axios"
import {applyPropertyUrl} from "../serverUrlConfig/serverUrlConfig";
import {message} from "antd";
export const newapply=(assetType,assetName,userId)=>{
    axios.post(applyPropertyUrl,{
        assetname:assetName,
        assettype:assetType,
        userid:userId
    })
        .then((res)=>{
            if (res.status===200){
                message.success("申请成功")
            }
        })

}