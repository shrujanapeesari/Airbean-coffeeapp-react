// import {  useDispatch } from 'react-redux';
import {  useDispatch ,useSelector} from 'react-redux';
import { useEffect } from 'react';
// import OrderItem from '../components/OrderItem';
import {userId} from '../actions/orderActions';
import { useState } from 'react';

function Orderid() {
  // const order = useState('')
  // const dispatch = useDispatch()

//   const [userid, Userid] = useState('')
  const [data, setData] = useState('')
const userId = useSelector((state) => { return state.userId})

  
  function Status() {          
       console.log('userId', userId)
        fetch('http://localhost:8000/api/order', {
           
            body: JSON.stringify({"userId": userId, "id": []}),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST'
        })
            .then((response) => response.json())
            .then(result => {
                setData(result)                
                console.log('Thank you for your order. Enjoy our coffee', result)
                // history.push("/")
            })           

  }

    useEffect(() => {
        Status()
    }, []);

    return (
        <div>
           {data.ETA}
           </div>
    )
}

export default Orderid