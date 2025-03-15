import React, { useContext } from 'react'
import { IoBagOutline } from "react-icons/io5";
import './Navbar.css'
import productsContext from '../../contexts/ProductsContext';
const Navbar=() =>{
  const contextData = useContext(productsContext)
  
  return (
    <div>
      <nav className='navbar navbar-expand-sm p-3 d-flex position-fixed '>
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
                          <IoBagOutline className='text-white' onClick={(e)=>{
                            e.preventDefault()
                            contextData.setIsShowCart(true)
                            
                          }}/>
              {contextData.userCart.length > 0 && (
                <span className='bag-product-counter'>
                  {contextData.userCart.length}
                </span>
              )}
                </a>
            </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
