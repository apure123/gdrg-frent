const allUserInfoReducer=(state ={
    userList:[
        {
            key: '1',
            userId:"12",
            userName:"张三",
            roles:["1"],
            status:"active"

        },

    ]
},action)=>{
    switch (action.type){
        case "refreshUserList":{
            return{
                ...state,
                userList: action.userList

            }
        }

        default:
            return state;
    }
}

export default allUserInfoReducer