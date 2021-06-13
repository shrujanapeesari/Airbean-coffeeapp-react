import Header from '../components/Header';
// import drone from '../assets/drone.svg'
import Footer from '../components/Footer';
import {  useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import OrderItem from '../components/OrderItem';
import actions from '../actions/orderActions';
// import { useState } from 'react';
// import '../styles/global.scss'

function OrderStatus () {
  const order = useSelector((state) => { return state.order})
  const userId=useSelector((state) => { return state.userId})
  const dispatch = useDispatch()

  async function getOrder() {
       let url=`http://localhost:8000/api/order/${userId}`
      //  let url = 'localhost/order' + userId
       console.log('userId', userId)
      const response = await fetch(url)
      .then(result => {
                  console.log('Thank you for your order. Enjoy our coffee', result)
                // history.push("/")
            })           

                // setData(result)                
                
                // history.push("/")
                     

      // const data = await response.json()

     
      // dispatch(actions.getOrder(data.order))
    }

  useEffect(() => {
   
    
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

export default OrderStatus;


   