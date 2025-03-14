import React from 'react'
import { IoBagOutline } from "react-icons/io5";
import './Navbar.css'
function Navbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-sm p-3 d-flex'>
        <div className="container">
                  <a href="#" className="navbar-brand text-white">  GEM SHOP</a>
          

            <ul className="navbar-nav me-auto ms-3">
                <li className="nav-item">
                    <a href="#" className="nav-link">
                    Home
                    </a>
                </li>
            </ul>
            <div className="bag-box">
                <a href="#" className="bag">
                          <IoBagOutline className='text-white'/>
                          <span className='bag-product-counter'>0</span>
                </a>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
