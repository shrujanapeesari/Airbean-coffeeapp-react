import Header from "../components/Header";
import bag from "../assets/bag.png";
import add from "../assets/add.png";
import "../styles/menu.css";
import Footer from "../components/Footer";
import navicon from "../assets/navicon.png";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MenuItem from "../components/MenuItem";
import actions from "../actions/orderActions";
import AddOrder from "../components/AddOrder";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
// import Cart from '../components/Cart';

function Menu() {
  const menu = useSelector((state) => {
    return state.menu;
  });
  const currentOrder = useSelector((state) => {
    return state.order;
  });
  const [order, setOrder] = useState("");
  const [selection, setSelection] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    async function getMenu() {
      const response = await fetch("http://localhost:8000/api/coffee");
      const data = await response.json();
      console.log("getMenu", data);
      dispatch(actions.getMenu(data));
    }
    getMenu();
  }, [dispatch]);

  const history = useHistory();

  function inputChange({ target }) {
    setSelection(target.value);
  }

  function addToOrder() {
    console.log("currentOrder=", currentOrder);
    currentOrder.push(selection);
    setOrder(currentOrder);
  }

  return (
    <section className="menu-app">
      <article>
        <Header />

        <Link to="/Navbar">
          <img id="navicon" src={navicon} alt="Logo" />
        </Link>

        <Link to="/AddOrder">
          <img id="bag" src={bag} alt="add to cart" />
        </Link>

        <h1>MENU</h1>

        <ul className="menulist">
          {menu.map((menulist, index) => {
            return (
              <MenuItem
                tasks={
                  <img
                    role="button"
                    onClick={addToOrder}
                    id="add"
                    src={add}
                    alt="add to product"
                  />
                }
                task1={menulist.title}
                task2={menulist.desc}
                task3={menulist.price}
                key={index}
              />
            );
          })}
        </ul>
      </article>
      <AddOrder />
      <Footer />
    </section>
  );
}

export default Menu;
