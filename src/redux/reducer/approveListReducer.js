const approveListReducer=(state ={
    approveList:[
        {
            applyId:"123",
            deviceType:"键盘",
            deviceName:"logic380",
            userId:"1",
            userName:"zhaneasn",
        },
        {
            applyId:"121",
            deviceType:"电脑",
            deviceName:"一台电脑",
            userId:"2",
            userName:"lisi",
        },
        {
            applyId:"122",
            deviceType:"游戏机",
            deviceName:"ps5",
            userId:"1",
            userName:"zahsan",
        },

    ]
},action)=>{
    switch (action.type){
        case "refreshApproveList":{
            return{
                ...state,
                applylog: action.approveList

            }
        }

        default:
            return state;
    }
}

export default approveListReducer