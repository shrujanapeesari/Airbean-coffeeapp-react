import {  useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import actions from '../actions/orderActions';
// import add from '../assets/add.png'
// import {useHistory} from 'react-router-dom'

function AddOrder() {
    // const [menu, setMenu] = useState('');
    // const [order, setOrder] = useState('');
    const [selection, setSelection] = useState('');
    // const currentOrder = useSelector((state) => { return state.order})
    const userId = useSelector((state) => { return state.userId})   
    const history = useHistory();


    // This sets local selection value
    function inputChange({target}) {
        setSelection(target.value)
    }

  
//      This adds to the order
//     function addToOrder() {
//         console.log('currentOrder=', currentOrder);
//         currentOrder.push(selection);
//         setOrder(currentOrder)
//     }
    
    function checkout() {
        // post userId + order information to order API endpoint
        // console.log('order=', order);
        // console.log('userId=', userId);
         history.push('/Cart');
    }

    return (
        <section className="addtomenu">
         <div>         
            <button onClick={ checkout }>Checkout</button>
        </div>
        </section>
    )
}

export default AddOrder;