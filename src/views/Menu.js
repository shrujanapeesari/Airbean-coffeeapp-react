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
      //let menuItemsMap = new Map();
      const response = await fetch("http://localhost:8000/api/coffee");
      const data = await response.json();
      // This is to extract each menu item id and their price, title and desc
        // This makes it easier to reference total calculation and the cart display easy
        // The final format will be {id => {price, title, desc}}
      console.log("getMenu", data);
      dispatch(actions.getMenu(data));
    }
    getMenu();
  }, [dispatch]);

  const history = useHistory();

  function inputChange({ target }) {
    setSelection(target.value);
  }

  function addToOrder(id) {
    console.log("currentOrder=", currentOrder);
    currentOrder.push(id);
    setOrder(currentOrder);
  }

  function renderCart() {
    let menuItemsMap = {};
    // read order array - this is currentOrder 
    // read menuItemsMap  - this is menuItems
    // extract totals and price total from menu items map and order array
    // calculate running total
    menu.forEach((item) => { 
        let menuItem = {"price": item.price, "desc": item.desc, "title": item.title}
        console.log(menuItem)
        menuItemsMap[item.id] = menuItem
    })
    let cart = {};
    cart["total"] = 0;
    cart["items"] = [];
    var i;
    for(i=0; i<order.length; i++) {
        let selection = order[i]
        if(cart["items"][selection]) {
          cart["items"][selection]["count"]++;
        } else {
          cart["items"][selection] = {"price": menuItemsMap[selection].price, "desc": menuItemsMap[selection].desc, "title": menuItemsMap[selection].title, "count": 1}
        }
        cart["total"] += menuItemsMap[selection].price;
    }
    console.log("cart: " + JSON.stringify(cart));
    console.log("ordertotal: " + cart["total"]);
  }


  return (
    <section className="menu-app">
      <article>
        <Header />

        <Link to="/Navbar">
          <img id="navicon1" src={navicon} alt="Logo" />
        </Link>

        <Link id="" to="/Cart">
          <img id="bag" src={bag} alt="add to cart" /></Link>
       

        <h1>MENU</h1>

        <ul className="menulist">
          {menu.map((menulist, index) => {
            return (
              <MenuItem
                tasks={
                  <img
                    role="button"
                    onClick={() => addToOrder(menulist.id)}
                    id={menulist.id}
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
      {renderCart()}
      <AddOrder />
      <Footer />
    </section>
  );
}

export default Menu;
