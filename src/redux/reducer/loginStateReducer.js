const loginStateReducer=(state ={
    isLogin:true,
    userInfo:{
        userType:"admin",
        userPrivilege:[
            "apply",
            "check"
        ]
    },
    token:"123123123",
    loginFlag:false
},action)=>{
    switch (action.type){
        case "login":{
            return{
                ...state,

            }
        }
        case "logout":{
            return {
                ...state,
                isLogin: false
            }

        }
        default:
            return state;
    }
}

export default loginStateReducer