import { useState } from 'react';
import { useDispatch } from 'react-redux';
import orderActions from '../actions/orderActions';

function getMenu() {
    const [menu, setMenu] = useState('');
    const dispatch = useDispatch();

    function handleClick() {
      dispatch(actions.getMenu(menu))
    }

    return (
        <section className="add-todo">
            <input className="input-field" placeholder="Skriv in en todo" 
            onKeyUp={ (event) => { setMenu(event.target.value) }} />
            <button onClick={ handleClick }>Lägg till ny todo</button>
        </section>
    )
}

export default getMenu;