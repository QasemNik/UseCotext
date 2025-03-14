import './App.css'
import Navbar from './components/Navbar/Navbar'
import Product from './components/ProductSection/Product'

function App() {

  return (
    <>
      <Navbar />
      <main className='pb-5'>
        <div className="container">
          <h1 className='main-title text-center'>All Products</h1>
          <Product title="Phone"/>
          <Product title="Phone"/>
          <Product title="Phone"/>
        </div>
      </main>
    </>
  )
}

export default App
