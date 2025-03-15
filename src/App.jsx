import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Product from './components/ProductSection/Product'
import productData from './data/products'
import Toast from './components/toast/toast'
import ProductsContext from './contexts/ProductsContext'
import Cart from './components/Cart/cart'


function App() {
  const [allProducts] = useState(productData)
  const [userCart, setUserCart] = useState([])
  const [isShowToast, setIsShowToast] = useState(false)
  const [isShowCart, setIsShowCart] = useState(false)

  return (
    <>
      <ProductsContext.Provider value={{
        allProducts,
        isShowToast, setIsShowToast,
        userCart, setUserCart,
        isShowCart, setIsShowCart,

      }}>
        <Navbar />
        <main className='pb-5'>
          <div className="container">
            <h1 className='main-title text-center'>All Products</h1>
            <Product />
          </div>
        </main>
        <Toast />

        
        <Cart />
      </ProductsContext.Provider>
    </>


  )
}

export default App
