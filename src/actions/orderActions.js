const getMenu = (menu) => {
  return {
    type: 'FETCH_MENU',
    payload: menu
  }
}

// const addTodos = (todos) => {
//   return {
//     type: 'ADD_TODOS',
//     payload: todos
//   }
// }

export default getMenu;