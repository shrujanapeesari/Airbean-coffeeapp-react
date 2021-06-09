const initialState = {
  menu: []
}

const todoReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'FETCH_MENU': {
      return {
        ...state,
        menu: [
          ...state.menu,
          {
            id: state.menu.length + 1,
            task: action.payload
          }
        ]
      }
    }
    case 'ADD_TODOS': {
      return {
        ...state,
        todos: action.payload
      }
    }
    default:
      return state;
  }
}

export default todoReducer;