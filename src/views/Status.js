// import {  useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import OrderItem from '../components/OrderItem';
// import actions from '../actions/orderActions';
import { useState } from 'react';

function Orderid() {
  // const order = useState('')
  // const dispatch = useDispatch()

  const [userid, setUserid] = useState('')
  const [id, setId] = useState('')

  function Status() {
        fetch('http://localhost:8000/api/order', {
            body: JSON.stringify({ userid: userid, id: id}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then((response) => response.json())
            .then(result => {
                console.log('Thank you for your order. Enjoy our coffee', result)
                // history.push("/")
            })           

  }

    return (
        <div className="login">
           
            <div id="profile">
              
                <input type="userid" value={userid} onChange={(task) => setUserid(task.target.value)}></input>
                <div>
                <input type="id"  value={id} onChange={(task) => setId(task.target.value)}></input>
                 </div>                             
                <button type="button" className="submit_btn" onClick={Status}> Login</button>
                
                </div>
        </div>
    )
}

export default Orderid