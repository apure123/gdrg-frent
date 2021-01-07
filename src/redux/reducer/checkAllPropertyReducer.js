const allPropertyReducer=(state ={
    allProperty:[
        {
            propertyId:"",
            deviceType:"",
            deviceName:"",
            userId:"",
            userName:"",
        }

    ]
},action)=>{
    switch (action.type){
        case "refreshAllProperty":{
            return{
                ...state,
                allProperty: action.allProperty

            }
        }

        default:
            return state;
    }
}

export default allPropertyReducer