import './App.css';
import {Switch, Route, BrowserRouter} from 'react-router-dom'
import About from './views/About'
import Menu from './views/Menu'
import Status from './views/Status'
import Profile from './views/Profile'
// import LandingPage from './views/LandingPage';
import Order from './views/Order'
import NavBar from './components/NavBar';
// import Login from './views/Login';
import Login from './components/Login'



function App() {

  return (
<div className="App">
      <BrowserRouter>
      <Switch>
        
        <Route path="/About" component={ About } />
        <Route path="/" component={ NavBar } exact/>
        <Route path="/Menu" component={ Menu } />
        <Route path="/Profile" component={ Login } /> 
        <Route path="/Status" component={ Status } />
        <Route path="/Order" component={ Order } />        
        
      </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App