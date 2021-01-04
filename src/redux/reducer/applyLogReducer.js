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