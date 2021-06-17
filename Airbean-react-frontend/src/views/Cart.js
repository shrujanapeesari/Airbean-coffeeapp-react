// import {useHistory} from 'react-router-dom'
// import { Link } from 'react-router-dom'
import "../styles/cart.css";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
// import Menu from './Menu';
import { useHistory } from "react-router-dom";

function PayClick() {
  const cart = useSelector((state) => {
    return state.cart;
  });
  const history = useHistory();

  function checkout() {
    history.push("/Order");
  }

  return (
    <section>
      <h1 className="carttitle">Din Beställning</h1>
      <div>
        {cart.items.map((items, index) => {
          return (
            <CartItem
              item={items.title}
              item1={items.price}
              item2={items.count}
              key={index}
            />
          );
        })}
      </div>
      <section className="totalamount">
        <h1 className="totalcart">Total.................... {cart.total} kr</h1>
        <h1 className="ordertotal"></h1>
        <p className="orderink">inkl. moms + drönarleverans</p>
      </section>
      <button className="checkoutnow" onClick={checkout}>
        Take my money!
      </button>
    </section>
  );
}

export default PayClick;
