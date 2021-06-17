// import {useHistory} from 'react-router-dom'
import { Link } from 'react-router-dom'
import "../styles/cart.css";

function PayClick() {
//   const history = useHistory()
// history.push("/Order") 
function onClick() {}
  return (
    <section id ="cart">
      <h1 className="Title">Din Beställning</h1>

      <div className="Container">
       
         
            <section className="Container" >
              <h1 className="orderTitle">Bryggkaffe...............................1</h1>
              <p className="orderPrice">98 kr</p>
              
            </section>
          
          
       
      </div>
      <section className="totalAmount">
        <h1 className="Title1">Total....................................98kr</h1>
        
        <p className="orderdelivery">inkl. moms + drönarleverans</p>
      </section>
                

      <button id="payclick" onClick={PayClick}> <Link onClick={onClick} className='link' to='/status'>
                   Take my money!
                </Link> 
       
      </button>
    </section>
  );
}

export default PayClick;