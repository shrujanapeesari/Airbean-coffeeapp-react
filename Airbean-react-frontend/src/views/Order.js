import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import drone from "../assets/drone.svg";
import "../styles/order.css";
import { useHistory } from "react-router-dom";

function Orderid() {
  const [data, setData] = useState("");
  const history = useHistory();
  const userId = useSelector((state) => {
    return state.userId;
  });

  function onClick() {
    history.push("/Status");
  }

  function Status() {
    console.log("userId", userId);
    fetch("http://localhost:8000/api/order", {
      body: JSON.stringify({ userId: userId, id: [] }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        console.log("works", result);
      });
  }

  useEffect(() => {
    Status();
    // eslint-disable-next-line
  }, []);

  return (
    <div id="OrderStatus">
      <div className="orderNumber"> Ordernummer #{data.orderNumber} </div>
      <div id="image">
        <img src={drone} alt="drone logo" />
      </div>

      <h1 id="orderRoute">Din beställning är på väg!</h1>
      <div id="delivery">{data.ETA} </div>
      <button id="okclick" onClick={onClick}>
        Ok, cool!
      </button>
    </div>
  );
}

export default Orderid;
