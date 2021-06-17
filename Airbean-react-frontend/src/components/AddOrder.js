import {  useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
// import actions from '../actions/orderActions';
import add from '../assets/add.png'
import { Link } from "react-router-dom";
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
         history.push('/Cart');
    }

   
}

export default AddOrder;