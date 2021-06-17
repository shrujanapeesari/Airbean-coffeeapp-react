import { useState } from "react";
import { Link } from "react-router-dom";
import vector from "../assets/Vector.png";
import Ellipse from "../assets/Ellipse 17.png";
import navicon from "../assets/navicon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import actions from "../actions/orderActions";
import { useDispatch } from "react-redux";
// import NavBar from '../components/NavBar';
// import { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import "../styles/profile.css";

function Profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [email, setEmail] = useState('')
  // eslint-disable-next-line
  const [Id, setId] = useState("");
  const [data, setData] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function getProfile() {
    fetch("http://localhost:8000/api/login", {
      body: JSON.stringify({ username: username, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    })
      .then((response) => response.json())
      .then((result) => {
        // setData(result)
        // setUserId(result.userId)
        // history.push()
        console.log(result);
        if (result.loggedIn) {
          setId(result.id);
          // alert(result)
          // console.log(result.id)
          dispatch(actions.setUserId(result.id)); //use cookies to over come the refresh issue.

          history.push("/menu");
        } else {
          setData({ message: "Credentials not found." });
        }
      });
  }

  return (
    <div id="image1">
      <Header />
      <Link to="/Navbar">
        <img id="navicon" src={navicon} alt="Logo" />
      </Link>

      <div className="wrapper">
        <div>
          {" "}
          <img src={vector} alt="logo" />{" "}
        </div>

        <h1>Välkommen till AirBean-familjen!</h1>
        <p id="text-signup">
          Genom att skapa ett konto nedan kan du spara och se din orderhistorik.
        </p>

        <form className="login_form">
          <label>
            <p className="label"></p>
            <input
              type="username"
              placeholder="Name"
              value={username}
              onChange={(task) => setUsername(task.target.value)}
            ></input>
          </label>
          <br></br>
          <label>
            <p className="label"></p>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(task) => setPassword(task.target.value)}
            ></input>
          </label>
          <br></br>

          <label>
            <div type="GPDR">
              <img src={Ellipse} alt="phone logo" />
              GPDR OK
            </div>
          </label>
          <br></br>

          <button
            id="button"
            type="button"
            className="submit_btn"
            onClick={getProfile}
          >
            {" "}
            Login
          </button>
          <div> {data.message} </div>
          <Link to="/Signup">SignUp Here</Link>
          <Footer />
        </form>
      </div>
    </div>
  );
}

export default Profile;
