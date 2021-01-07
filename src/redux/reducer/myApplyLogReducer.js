const myApplyLogReducer=(state ={
        applylog:[
            {
                applyId:"",
                deviceType:"",
                deviceName:"",
                applyState:""
            },

        ]
},action)=>{
    switch (action.type){
        case "refreshMyApplyLog":{
            return{
                ...state,
                applylog: action.applylog

            }
        }

        default:
            return state;
    }
}

export default myApplyLogReducer