import { useState } from 'react';
import vector from '../assets/Vector.png'
import Header from '../components/Header'
import actions from '../actions/orderActions';
import {  useDispatch ,useSelector} from 'react-redux';
// import NavBar from '../components/NavBar';
// import { useEffect } from 'react';
import {useHistory} from 'react-router-dom'

function Profile() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    // const [email, setEmail] = useState('')
    const [Id, setId] = useState('')
    const [data, setData] = useState('')
    const dispatch = useDispatch()
    const history = useHistory()

    function getProfile() {
        fetch('http://localhost:8000/api/login', {
            body: JSON.stringify({ username: username, password: password}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then((response) => response.json())
            .then(result => { 
                // setData(result)
                // setUserId(result.userId)

                console.log('Successfully created account', result)
                // history.push()
           console.log(result)
                if(result.loggedIn){
                   
                    setId(result.id)
                    // alert(result)
                    // console.log(result.id)
                    dispatch(actions.setUserId(result.id)) //use cookies to over come the refresh issue.

                    history.push('/menu')
                }
                else {
                    setData({"message": "Credentials not found"})
                    console.log('Credentials not found')
                }
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

                 </div> 
                 
                                           
                <button type="button" className="submit_btn" onClick={getProfile}> Login</button>
                
                </div>
                <div> {data.message} </div>
        </div>
    )
}

export default Profile