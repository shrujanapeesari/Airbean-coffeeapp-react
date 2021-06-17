// import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'
import "../styles/cart.css";
import {  useDispatch, useSelector } from 'react-redux';
import CartItem from "../components/CartItem";
import Menu from './Menu';
import { useHistory } from "react-router-dom";

function PayClick() {
const cart = useSelector((state) => { return state.cart})
const history = useHistory()


 function checkout() {
     
history.push("/Order")
   
  }

  return (
    <section className="cartContainer">
      <h1 className="cartTitle">Din Beställning</h1>
      <div className="allItemsContainer">
        {cart.items.map((items, index) => {
          return (
           <CartItem
                item={items.title}
                item1={items.price}
                item2={items.total}

                
                           
                key={index}
              />
          );
        })}
      </div>
      <section className="totalAmount">
        <h1 className="totalTitle">Total {cart.total}</h1>
        <h1 className="orderTotal">

        </h1>
        <p className="orderInk">inkl. moms + drönarleverans</p>
      </section>
      <button className="paynow" onClick={checkout}>
        Take my money!
      </button>
    </section>
  );
}




export default PayClick;