import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Product from './components/Product'
import ProductDetails from './components/ProductDetails'
import SearchItem from './components/searchItem'
import Cart from './components/cart'
import { items } from './components/Data'
import {Route,Routes,Link,BrowserRouter as Router} from 'react-router-dom'
import Slideshow from './components/slideshow'


const App = () => {
 const [data, setData] = useState({...items})
 const[cart,setCart]=useState([])
  return (
  
  <div>
    <Router>
    <Navbar cart={cart} setData={setData}/>
    <Slideshow/>
    <Routes>
       <Route path="/" element={<Product cart={cart} setCart={setCart} items={data}/>}/>
       <Route path="/Product/:id" element={<ProductDetails cart={cart} setCart={setCart}/>}/>
       <Route path="/search/:term" element={<SearchItem cart={cart} setCart={setCart}/>}/>
       <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}/>
    </Routes>
    
    </Router>
  </div>
  )
}

export default App