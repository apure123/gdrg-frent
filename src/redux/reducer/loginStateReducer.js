const loginStateReducer=(state ={
    isLogin:false,
    userInfo:{
        userRoles:["admin"],
        userPrivilege:[
            "apply",
            "check"
        ],
        userId:"1",
        userName:"username",
        userEmail:"1@1"
    },
    token:"",

},action)=>{
    switch (action.type){
        case "login":{
            return{
                ...state,
                isLogin: true,
                userInfo: {
                    userRoles: action.roles,
                    userPrivilege:action.userPrivilege,
                    userId:action.userInfo.id,
                    userName:action.userInfo.username,
                    userEmail:action.userInfo.email,
                },



            }
        }
        case "settoken":{
            return {
                ...state,
                token:action.token
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