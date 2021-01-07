const applyLogReducer=(state ={
    applyLogList:[
        {
            key: '1',
            applyId:"",
            userId:"",
            userName:"",
            deviceType:"",
            deviceName:"",
            applyState:""
        },


    ]
},action)=>{
    switch (action.type){
        case "refreshAllApplyList":{
            return{
                ...state,
                applyLogList: action.applyLogList

            }
        }

        default:
            return state;
    }
}

export default applyLogReducer