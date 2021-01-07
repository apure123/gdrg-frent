const allRoleReducer=(state ={
    roleList:[
        {
            key: '',
            roleId:"",
            roleName:"",
            privilege:[""]
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