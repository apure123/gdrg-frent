const allUserInfoReducer=(state ={
    userList:[
        {
            key: '',
            userId:"",
            userName:"",
            roles:[""],
            status:""

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