import '../styles/nav.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Navbar() {
  const [closeBar, setBar] = useState(true)
  
  function onRoute() {
    setBar(!closeBar)
  }
  return (
    <div>
      {closeBar && (
        <div className='sideNav'>
          
          <div className='links'>
            <ul>
              <li>
                <Link onClick={onRoute} className='link' to='/menu'>
                  Meny
                </Link>
              </li>
              <li>
                <Link onClick={onRoute} className='link' to='/about'>
                  Vårt Kaffe
                </Link>
              </li>
              <li>
                <Link onClick={onRoute} className='link' to='/profile'>
                  Login
                </Link>
              </li>
              <li>
                <Link onClick={onRoute} className='link' to='/status'>
                  OrderStatus
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}

