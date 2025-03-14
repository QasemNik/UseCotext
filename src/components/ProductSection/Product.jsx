import React from 'react'
import "./Product.css"
function Product({title}) {
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <h3 className='text-center'>{title}</h3>
        <div className="col-xl-3 col-lg-4 col-sm-10 mt-5">
            <div className="card py-3 px-3">
                <div className="col-12 text-center">
                    <img src="/images/1.jpg" alt="Card-image" className="card-img-top w-75"/>
                </div>
                      <div className="card-body  text-center d-flex flex-column justify-content-center  align-items-center mx-auto p-5 ">
                    <p className="card-text fw-bold">Samsung a3</p>
                          <p className="price mx-auto p-1">999$</p>
                    <br />
                    <a href="#" className='btn btn-danger'>Add to Card</a>
                    <a href="#" className='btn btn-info btn-outline-dark text-capitalize mt-3'>
                        More Info 
                    </a>
                    <p className="number mt-3">Number: 15</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Product
