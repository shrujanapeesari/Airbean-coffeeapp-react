const initState = {
    menu: [],
    order:[]
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
             case 'FETCH_ORDERID':
            return {
                ...state,
                order: state.order.map(order => {
                    if (order.id !== action.payload) {
                        return order;
                    }

                    return {
                        ...order,
                        done: !order.done
                    }
                })
            }
        case 'FETCH_MENU': {
return {
    ...state,
    menu:action.payload

    }
}

   case 'UPDATE_ORDER': {
return {
    ...state,
    order:action.payload

    }
}



default:
return state
}
}