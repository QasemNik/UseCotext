import React, { useContext } from 'react'
import { BsBag } from 'react-icons/bs'
import { AiOutlineClose } from 'react-icons/ai'
import './Cart.css'
import productsContext from '../../contexts/ProductsContext'

export default function Cart() {
    const contextData = useContext(productsContext)
    return (
        <aside className={`${contextData.isShowCart ? 'active' : ''} bag-sidebar`}>
            <h3 className="bag-title">
                <span>
                    <BsBag />
                    Bag
                </span>
                <span>
                    <AiOutlineClose className='close-icon' onClick={()=>{contextData.setIsShowCart(false)}}/>
                </span>
            </h3>

            <div className="row bag-wrapper">
                {contextData.userCart.map(pro => (<div className='col-12 mt-5' key={pro.id}>
                    <div className='card py-3 px-3'>
                        <div className='col-12 text-center'>
                            <img src="/images/1.jpg" alt="Product Image" className='cart-img-top w-75' />
                        </div>
                        <div className='card-body d-flex flex-column justify-content-center align-items-center'>
                            <p className="card-text">{pro.title}</p>
                            <p className="price">{pro.price}$</p>
                            <br />
                            <a href="#" className='btn btn-danger'>Buy</a>
                            <a href="#" className='btn btn-outline-dark mt-3 text-capitalize'>
                                More Information
                            </a>
                            <p className="number">{pro.count}</p>
                        </div>
                    </div>
                </div>))}
            </div>
        </aside>
    )
}
