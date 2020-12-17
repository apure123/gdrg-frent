const myApplyLogReducer=(state ={
        applylog:[
            {
                applyId:"123",
                deviceType:"键盘",
                deviceName:"logic380",
                applyState:"waiting"
            },
            {
                applyId:"121",
                deviceType:"电脑",
                deviceName:"一台电脑",
                applyState:"refuse"
            },
            {
                applyId:"122",
                deviceType:"游戏机",
                deviceName:"ps5",
                applyState:"allow"
            },

        ]
},action)=>{
    switch (action.type){
        case "refreshMyApplyLog":{
            return{
                ...state,
                applylog: action.aplylog

            }
        }

        default:
            return state;
    }
}

export default myApplyLogReducer