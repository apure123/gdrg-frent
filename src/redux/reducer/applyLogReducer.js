const applyLogReducer=(state ={
    applyLogList:[
        {
            key: '1',
            applyId:"111",
            userId:"12",
            userName:"张三",
            deviceType:"键盘",
            deviceName:"键盘1",
            applyState:"waiting"
        },
        {
            key: '2',
            applyId:"121",
            userId:"12",
            userName:"张4",
            deviceType:"键盘",
            deviceName:"键盘1",
            applyState:"allow"
        },
        {
            key: '3',
            applyId:"113",
            userId:"13",
            userName:"张5",
            deviceType:"键盘",
            deviceName:"键盘2",
            applyState:"refuse"
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

export default applyLogReducer