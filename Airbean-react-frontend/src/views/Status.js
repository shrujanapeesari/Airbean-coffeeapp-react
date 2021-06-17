import Header from "../components/Header";
import Footer from "../components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import navicon from "../assets/navicon.png";
import OrderItem from "../components/OrderItem";
import { Link } from "react-router-dom";
import Profileimage from "../assets/Profileimage.svg";
import "../styles/status.css";
// import {useHistory} from 'react-router-dom'

function OrderStatus() {
  const [orderResponse, setOrderRes] = useState("");
  // const order = useSelector((state) => { return state.order})
  const userId = useSelector((state) => {
    return state.userId;
  });
  const dispatch = useDispatch();
  // const history = useHistory()

  async function getOrder() {
    let url = `http://localhost:8000/api/order/${userId}`;
    //  let url='http://localhost:8000/api/order/kVTa-fThM90';

    console.log("userId", userId);
    const response = await fetch(url);
    const data = await response.json();
    if (data) {
      console.log("data==", data.order);

      setOrderRes(data.order);
    }
  }

  useEffect(() => {
    getOrder();
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <div id="statushistory">
      <div>
        <article className="statusorder">
          <Header />
          <div id="statusnavicon"></div>
          <Link to="/Navbar">
            <img src={navicon} alt="Logo" />
          </Link>
          <h1>Order history</h1>
          <img id="profileimage" src={Profileimage} alt="Logo" />
          <div>Shrujana Peesari</div>
          <div>shrujana.peesari@iths.se</div>

          <div className="statusmenu">
            {orderResponse &&
              orderResponse.map((orderlist, index) => {
                return (
                  <OrderItem
                    id="statusitem"
                    order1={orderlist.userId}
                    order2={orderlist.orderTime}
                    key={index}
                  />
                );
              })}
          </div>
        </article>

        <Footer />
      </div>
    </div>
  );
}

export default OrderStatus;
