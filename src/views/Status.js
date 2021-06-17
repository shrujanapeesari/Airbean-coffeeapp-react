import Header from '../components/Header';
import Footer from '../components/Footer';
import {  useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import navicon from "../assets/navicon.png";
import OrderItem from '../components/OrderItem';
import { Link } from "react-router-dom";
import Profileimage from "../assets/Profileimage.svg";
import "../styles/status.css";



// import {useHistory} from 'react-router-dom'
 

function OrderStatus () {
  const [orderResponse, setOrderRes] = useState('');
  // const order = useSelector((state) => { return state.order})
  const userId = useSelector((state) => { return state.userId})
  const dispatch = useDispatch()
  // const history = useHistory()

  async function getOrder() {
       let url=`http://localhost:8000/api/order/${userId}`
      //  let url='http://localhost:8000/api/order/kVTa-fThM90';
     
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
                // history.push("/order")
        }

      // const data = await response.json()

     
      // dispatch(actions.getOrder(data.order))
    }

  useEffect(() => {
        getOrder()
        // eslint-disable-next-line
  }, [dispatch])

  return (
    <div id='statushistory'>
    <div>
      <article className="statusorder">
        <Header />
        <div id="statusnavicon">  
           
        
      </div>
       <Link to="/Navbar">
        <img src={navicon} alt="Logo" />
      </Link>
        <h1>Order history</h1>
        <img id="profileimage" src={Profileimage} alt="Logo" />
        <div>Shrujana Peesari</div>
        <div>shrujana.peesari@iths.se</div>
        
         
        <ul className="statusmenu">
          

            { orderResponse && orderResponse.map((orderlist, index) => {            
              return <OrderItem id ="statusitem"  order1={orderlist.ETA}
               order2={ orderlist.orderNumber}
               order3={ orderlist.price} kr key={ index } />            
              
            }) }
        </ul>
       
      </article>
     
      <Footer />
       </div>
       </div>
  );
}

export default OrderStatus;


   