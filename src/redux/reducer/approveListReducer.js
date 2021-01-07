const approveListReducer=(state ={
    approveList:[
        {
            applyId:"",
            deviceType:"",
            deviceName:"",
            userId:"",
            userName:"",
        }

    ]
},action)=>{
    switch (action.type){
        case "refreshApproveList":{
            return{
                ...state,
                approveList: action.approveList

            }
        }

        default:
            return state;
    }
}

export default approveListReducer