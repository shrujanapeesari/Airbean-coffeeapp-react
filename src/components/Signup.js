import { useState } from "react";
import { Link } from "react-router-dom";
import navicon from "../assets/navicon.png";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/profile.css";

function Profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
//    const [Id, setId] = useState("");
  const [data, setData] = useState("");
 
  function getProfile() {
    fetch("http://localhost:8000/api/account", {
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

        console.log("WORKS", result);
        
        
        if (result.success) {
          setData({ message: "Sucessfully created account" });
        } else {
          setData({ message: "Username exits, please try another" });
        }
      });
  }

  return (
    <div className="mainsignup">
      <Header />
      <Link to="/Navbar">
        <img id="navicon" src={navicon} alt="Logo" />
      </Link>

      <form className="signup-form">
        <h1 className="signup-title">Sign Up</h1>
        <h1>Välkommen till AirBean-familjen!</h1>
        <div className="textgroup">
          <input
            className="textgroup"
            type="username"
            placeholder="Name"
            value={username}
            onChange={(task) => setUsername(task.target.value)}
          ></input>

          <input
            className="textgroup"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(task) => setPassword(task.target.value)}
          ></input>

          <div>
            <button
              id="form-btn"
              type="button"
              className="submit_btn"
              onClick={getProfile}
            >
              {" "}
              Signup
            </button>
          </div>
          <div> {data.message} </div>
          <Footer />
        </div>
      </form>
    </div>
  );
}

export default Profile;
