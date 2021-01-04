const approveListReducer=(state ={
    approveList:[
        {
            applyId:"123",
            deviceType:"键盘",
            deviceName:"logic380",
            userId:"1",
            userName:"zhaneasn",
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