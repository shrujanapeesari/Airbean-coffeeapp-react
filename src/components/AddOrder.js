import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import actions from '../actions/orderActions';
// import {useHistory} from 'react-router-dom'

function AddOrder() {
    // const [menu, setMenu] = useState('');
    const [order, setOrder] = useState('');
    const [selection, setSelection] = useState('');
    const currentOrder = useSelector((state) => { return state.order})
    const userId = useSelector((state) => { return state.userId})
    // const dispatch = useDispatch();
    const history = useHistory();

    // console.log('userId');

    // function updateOrder() {
    //     dispatch(actions.updateOrder(menu))  
    //     console.log('sucess', menu) 
    // }

    // This sets local selection value
    function inputChange({target}) {
        setSelection(target.value)
    }
// this adds to the order
    function addToOrder() {
        console.log('currentOrder=', currentOrder);
        currentOrder.push(selection);
        setOrder(currentOrder)
    }
    
    function checkout() {
        // post userId + order information to order API endpoint
        console.log('order=', order);
        console.log('userId=', userId);
         history.push('/order');
    }

    return (
        <section className="add-tomenu">
        <input 
            className="input-field" 
            placeholder="enter id"
            name="selection"
            onChange={inputChange}
        />
        <button onClick={ addToOrder }>Add to order</button>
        <div className="plus" onClick={() => addToOrder()}></div>
        <div> 
            <button onClick={ checkout }>Checkout</button>
        </div>
        </section>
    )
}

export default AddOrder;