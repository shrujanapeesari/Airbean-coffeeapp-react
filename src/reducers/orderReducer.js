const initState = {
  menu: [],
  order: [],
  userId: [],
  selection: [],
};

export const orderReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_ORDER": {
      return {
        ...state,
        order: [
          ...state.order,
          {
            id: state.order.length + 1,
            task: action.payload,
          },
        ],
      };
    }
    case "FETCH_ORDERID": {
      return {
        ...state,
        orderid: action.payload,
      };
    }
    case "FETCH_MENU": {
      return {
        ...state,
        menu: action.payload,
      };
    }
    case "SET_USERID": {
      return {
        ...state,
        userId: action.payload,
      };
    }
    case "SET_SELECTION": {
      return {
        ...state,
        selection: action.payload,
      };
    }

    case "POST_USERID": {
      console.log("POST_USERID=", action.payload);
      return {
        ...state,
        userId: action.payload,
      };
    }

    default:
      return state;
  }
};
