const getMenu = (menu) => {
  return {
    type: 'FETCH_MENU',
    payload: menu
  }
}
 const updateOrder = (order) => {
    return {
        type: 'POST_ORDER',
        payload: order
    }
}

const setUserId= (status) => {
  console.log('status=', status);
  return {
    type: 'POST_USERID',
    payload: status
  }
}
  const addOrder = (order) => {
    return {
        type: 'POST_ORDER',
        payload: order
    }
}

  const getOrder = (orderid) => {
    return {
        type: 'FETCH_ORDER',
        payload: orderid
    }
}
const setSelection = (selection) => {
    return {
        type: 'POST_SELECTION',
        payload: selection 
    }
}





// eslint-disable-next-line import/no-anonymous-default-export
export default {getMenu, addOrder, getOrder, updateOrder, setUserId, setSelection}

