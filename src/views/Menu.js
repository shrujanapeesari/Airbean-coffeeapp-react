import Header from '../components/Header';
// import '../styles/global.scss'

import Footer from '../components/Footer';
import {  useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
import MenuItem from '../components/MenuItem';
import actions from '../actions/orderActions';
import AddOrder from '../components/AddOrder';


function App() {
  const menu = useSelector((state) => { return state.menu})
  const dispatch = useDispatch()

  useEffect(() => {
    async function getMenu() {
      const response = await fetch('http://localhost:8000/api/coffee')
      const data = await response.json()
      console.log('getMenu', data)
      dispatch(actions.getMenu(data))
    }
        getMenu()
  }, [dispatch])

  return (
    <section>
      <article className="menu-app">
        <Header />     
    
        
        <h1>MENU</h1>
        <ul className="menu-list">
            { menu.map((menulist, index) => {
              return <MenuItem tasks={menulist.id}  task1={menulist.title} task2={menulist.desc} task3={menulist.price}  key ={ index } />              
              
            }) }
        </ul>
       
      </article>
      <AddOrder />
      <Footer />
       </section>
  );
}

export default App;