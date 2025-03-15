import React, { useContext } from 'react'
import "./Product.css"
import ProductsContext from '../../contexts/ProductsContext'
const Product = () => {
  const contextData = useContext(ProductsContext)

  const addToCart = (event,pro) => {
    event.preventDefault()

    contextData.setIsShowToast(true)

    setTimeout(() => {
      contextData.setIsShowToast(false)
    }, 3000);
    const isInUserCart = contextData.userCart.some(bagPro => bagPro.title === pro.title)
    
    if (!isInUserCart) {

      let newUserCartProduct = {
        id: contextData.userCart.length + 1,
        title: pro.title,
        price: pro.price,
        count: 1
      }
      contextData.setUserCart(previousProduct => [...previousProduct, newUserCartProduct])
    } else {
      let userCart = [...contextData.userCart]
      userCart.some(bagProduct => {
        if (bagProduct.title === pro.title) {
          bagProduct.count += 1
          return true
        }
      })
      contextData.setUserCart(userCart)

    }
}

  return (
    <>
      {contextData.allProducts.map((productSection,index) => (
        <div className="row justify-content-center mt-5" key={index}>
          <h3 className='text-center'>{productSection.title}</h3>
          {productSection.info.map(pro => (
            <div key={pro.id} className="col-xl-3 col-lg-4 col-sm-10 mt-5">
              <div className="card py-3 px-3">
                <div className="col-12 text-center">
                  <img src="/images/1.jpg" alt="Card-image" className="card-img-top w-75" />
                </div>
                <div className="card-body  text-center d-flex flex-column justify-content-center  align-items-center mx-auto p-5 ">
                  <p className="card-text fw-bold">{pro.title}</p>
                  <p className="price mx-auto p-1">{pro.price}$</p>
                  <br />
                  <a href="#" className='btn btn-danger ' onClick={() => addToCart(event,pro) }>Add to Card</a>
                  <a href='#' className='btn btn-info btn-outline-dark text-capitalize mt-3' onClick={(event)=>event.preventDefault()}>
                    More Info
                  </a>
                  <p className="number mt-3">Number: {pro.count}</p>
                </div>
              </div>
            </div>

          ))
          }
        </div>
      ))}


    </>
  )
}

export default Product
