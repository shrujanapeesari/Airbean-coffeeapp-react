import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import menuItem from './components/MenuItem';
import actions from './actions/orderActions';

function App() {
  const menu = useSelector((state) => { return state.menu});
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMenu() {
      const response = await fetch('http://localhost:8000/api/coffee');
      const data = await response.json();
      console.log('getMenu', data);
      dispatch(actions.getMenu(data.menu));
    }

    getMenu();
  }, [dispatch])

  return (
    <section>
      <article className="coffeeshop-app">
        <h1>The Coffee Shop</h1>
        <ul className="menu-list">
            { menu.map((menu1) => {
                return <menuItem task={ menu1.task } key={ menu1.id } />
            }) }
        </ul>
        
      </article>
      
    </section>
  );
}

export default App;
