import Header from '../components/Header';
// import drone from '../assets/drone.svg'
import Footer from '../components/Footer';
import {  useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import OrderItem from '../components/OrderItem';
import actions from '../actions/orderActions';
// import { useState } from 'react';
// import '../styles/global.scss'

function Status () {
  const order = useSelector((state) => { return state.order})
  const dispatch = useDispatch()

  useEffect(() => {
    async function getOrder() {
      const response = await fetch('http://localhost:8000/api/order/:id')
      const data = await response.json()
      console.log('getOrder', data)
      dispatch(actions.getOrder(data.order))
    }
        getOrder()
  }, [dispatch])

  return (
    <div>
    <section>
      <article className="menu-app">
        <Header />     
       
        <h1>MENU</h1>
        <ul className="menu-list">

            { order.map((orderlist, index) => {            
              return <OrderItem  order1={orderlist.ETA}  key ={ index } />            
              
            }) }
        </ul>
       
      </article>
     
      <Footer />
       </section>
       </div>
  );
}

export default Status;


   