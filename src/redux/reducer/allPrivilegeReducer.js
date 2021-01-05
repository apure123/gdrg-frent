const allPrivilegeReducer=(state ={
    privilegeList:[
        {
            key: '1',
            privilegeId:1,
            privilegeName:"申请资产"
        },
        {
            key: '2',
            privilegeId:2,
            privilegeName:"查看本人申请记录"
        },
        {
            key: '3',
            privilegeId:3,
            privilegeName:"查看公司资产"
        },
        {
            key: '4',
            privilegeId:4,
            privilegeName:"查看所有申请记录"
        },
        {
            key: '5',
            privilegeId:5,
            privilegeName:"进行申请的审批"
        },
        {
            key: '6',
            privilegeId:6,
            privilegeName:"用户管理"
        },
        {
            key: '7',
            privilegeId:7,
            privilegeName:"角色权限管理"
        },
        {
            key: '8',
            privilegeId:8,
            privilegeName:"新建角色"
        },

    ]
},action)=>{
    switch (action.type){
        case "refreshPrivilegeList":{
            return{
                ...state,
                privilegeList: action.privilegeList
            }
        }

        default:
            return state;
    }
}

export default allPrivilegeReducer
