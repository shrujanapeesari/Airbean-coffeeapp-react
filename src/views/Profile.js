import { useState } from 'react';
import vector from '../assets/Vector.png'
import Header from '../components/Header'
// import { useEffect } from 'react';
// import {useHistory} from 'react-router-dom'

function Profile() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [userId, setUserId] = useState('')
    const [data, setData] = useState('')
    
    // const history = useHistory()

    function getProfile() {
        fetch('http://localhost:8000/api/account', {
            body: JSON.stringify({ username: username, password: password, email: email}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then((response) => response.json())
            .then(result => { 
                setData(result)
                setUserId(result.userId)

                console.log('Successfully created account', result)
                // history.push()
            })           

  }

//   useEffect(() => {
//         getProfile()
//     }, []);




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
                <input type="email" placeholder="Email" value={email} onChange={(task) => setEmail(task.target.value)}></input>

                 </div> 
                 
                                           
                <button type="button" className="submit_btn" onClick={getProfile}> Login</button>
                
                </div>
                <div> {data.message} </div>
        </div>
    )
}

export default Profile