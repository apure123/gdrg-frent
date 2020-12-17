const allPropertyReducer=(state ={
    allProperty:[
        {
            propertyId:"123",
            deviceType:"键盘",
            deviceName:"logic380",
            userId:"1",
            userName:"zhaneasn",
        },
        {
            propertyId:"121",
            deviceType:"电脑",
            deviceName:"一台电脑",
            userId:"2",
            userName:"lisi",
        },
        {
            propertyId:"122",
            deviceType:"游戏机",
            deviceName:"ps5",
            userId:"1",
            userName:"zahsan",
        },

    ]
},action)=>{
    switch (action.type){
        case "refreshAllProperty":{
            return{
                ...state,
                applylog: action.allProperty

            }
        }

        default:
            return state;
    }
}

export default allPropertyReducer