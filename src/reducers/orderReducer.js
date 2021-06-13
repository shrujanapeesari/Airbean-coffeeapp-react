const initState = {
    menu: [],
    order:[],
    userId:[],
    
}

// let id = 0
export const orderReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_ORDER':{
            return {
    ...state,
        order: [
          ...state.order,
          {
            id: state.order.length + 1,
            task: action.payload
          }
        ]
      }

        }
             case 'FETCH_ORDERID':{
            return {
            ...state,
            orderid:action.payload

    }
}
        case 'FETCH_MENU': {
return {
    ...state,
    menu:action.payload

    }
}
   
case 'SET_USERID': {
return {
    ...state,
    userId:action.payload

    }
}
default:
return state
}
}