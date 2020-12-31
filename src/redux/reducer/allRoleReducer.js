const allRoleReducer=(state ={
    roleList:[
        {
            key: '1',
            roleId:"12",
            roleName:"张三",
            privilege:["1"]
        },

    ]
},action)=>{
    switch (action.type){
        case "refreshRoleList":{
            return{
                ...state,
                roleList: action.roleList
            }
        }

        default:
            return state;
    }
}

export default allRoleReducer