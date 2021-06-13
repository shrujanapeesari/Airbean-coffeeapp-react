import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import actions from '../actions/orderActions';

function AddOrder() {
    const [menu, setMenu] = useState('');
    const [order, setOrder] = useState('');
    const dispatch = useDispatch();
    // const history = useHistory()

    function updateOrder() {
     dispatch(actions.updateOrder(menu))  
     console.log('sucess', menu) 
    }

    function handleClick() {
        // order = useSelector((state) => { return state.order})

    //   dispatch(actions.addOrder(menu))
    //   history.push('/order')
    }

    return (
        <section className="add-tomenu">
            <input className="input-field" placeholder="add your order" 
            onKeyUp={ (event) => { setMenu(event.target.value) }} />
            <button onClick={ handleClick }>order now</button>
            <div className="plus" onClick={() => updateOrder()}></div>


        </section>
    )
}

export default AddOrder;