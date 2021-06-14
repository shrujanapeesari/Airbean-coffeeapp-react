import Header from '../components/Header';
// import drone from '../assets/drone.svg'
import Footer from '../components/Footer';
import {  useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import OrderItem from '../components/OrderItem';
import actions from '../actions/orderActions';
// import { useState } from 'react';
// import '../styles/global.scss'
import {useHistory} from 'react-router-dom'
 

function OrderStatus () {
  const [orderResponse, setOrderRes] = useState('');
  const order = useSelector((state) => { return state.order})
  const userId = useSelector((state) => { return state.userId})
  console.log('user id in order = ', order);
  console.log('user id in userId = ', userId);
  const dispatch = useDispatch()
  const history = useHistory()

  async function getOrder() {
       let url=`http://localhost:8000/api/order/${userId}`
      //  let url='http://localhost:8000/api/order/kVTa-fThM90';
      //  let url = 'localhost/order' + userId
       console.log('userId', userId)
      const response = await fetch(url);
        const data = await response.json();
        if(data)
        {
        console.log('data==', data.order);
      // .then(result => {
        setOrderRes(data.order);
      //             console.log('Thank you for your order. Enjoy our coffee', data)
      //             //document.write('You have placed the order of ', order);
      //          //  history.push("/status")
      //       })           
                // setData(result)                
                // history.push("/Status")
        }

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

            { order && order.map((orderlist, index) => {            
              return <OrderItem  order1={orderlist}  key={ index } />            
              
            }) }
        </ul>
        <ul className="menu-list">

            { orderResponse && orderResponse.map((orderlist, index) => {            
              return <OrderItem  order1={orderlist.ETA}  key={ index } />            
              
            }) }
        </ul>
       
      </article>
     
      <Footer />
       </section>
       </div>
  );
}

export default OrderStatus;


   