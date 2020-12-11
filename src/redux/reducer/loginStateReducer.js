const loginStateReducer=(state ={
    isLogin:true,
    userInfo:{
        userType:"admin"
    },
    token:"123123123"
},action)=>{
    switch (action.type){
        case "login":{
            return{
                ...state

            }
        }
        case "logout":{

        }
    }
}

export default loginStateReducer