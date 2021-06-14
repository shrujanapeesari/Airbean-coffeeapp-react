import { useState } from 'react';
import vector from '../assets/Vector.png'
import Header from './Header'
// import NavBar from '../components/NavBar';
import { useEffect } from 'react';
// import {useHistory} from 'react-router-dom'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [data, setData] = useState('')
    
    // const history = useHistory()

    function getLogin() {
        fetch('http://localhost:8000/api/login', {
            body: JSON.stringify({ username: username, password: password}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then((response) => response.json())
            .then(result => { 
                setData(result)
                

               
            })           

  }

  useEffect(() => {
        getLogin()
    }, []);




    return (
        <div className="login">
            <Header />
            

            <img src={ vector } alt="phone logo"/>
            <div>Välkommen till AirBean-familjen!</div>
            
            <div id="profile">
              
                <input type="username" placeholder="Name" value={username} onChange={(task) => setUsername(task.target.value)}></input>
                <div>
                <input type="password" placeholder="Password" value={password} onChange={(task) => setPassword(task.target.value)}></input>
                 </div>  
                 <div>
                 </div> 
                                                         
                <button type="button" className="submit_btn" onClick={getLogin}> Login</button>
                
                </div>
                <div> {data.message} </div>
        </div>
    )
}

export default Login