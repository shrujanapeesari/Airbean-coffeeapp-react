import "./App.css";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import About from "./views/About";
import Menu from "./views/Menu";
import Status from "./views/Status";
import Profile from "./views/Profile";
import Order from "./views/Order";
import NavBar from "./components/NavBar";
import Signup from "./components/Signup";
import Cart from "./views/Cart";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/About" component={About} />
          <Route path="/Menu" component={Menu} />
          <Route path="/profile" component={Profile} />
          <Route path="/Status" component={Status} />
          <Route path="/Order" component={Order} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Cart" component={Cart} />
          <Route path="/" component={NavBar} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
