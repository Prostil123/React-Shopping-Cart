import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { items } from './Data'
import Product from './Product'
import { IoMdHome } from "react-icons/io";

import { FaCartPlus } from "react-icons/fa";

const Navbar = ({setData,cart}) => {
  const location=useLocation();
const [searchTerm, setSearchTerm] = useState("")
const navigate=useNavigate();

const filterByCategory = (category)=>{
  const elements=items.filter((Products)=>Products.category==category)
  //console.log(elements);
  setData(elements);
}
const filterByPrice=(price)=>{
  const elements=items.filter((Products)=>Products.price>=price)
  setData(elements);
}

const handleSubmit=(e)=>{
  e.preventDefault();
  navigate(`/search/${searchTerm}`)
  setSearchTerm("")
}
  return (
    <div>
       <header className='sticky-top' >
        <div className="nav-bar">

        <Link to={"/"} className='home'>
            <button><IoMdHome style={{
              fontSize:'2rem'
            }}/></button>
           </Link>
           <Link to={"/"} className="brand">E-CART</Link>

           <form
           onSubmit={handleSubmit}
           className="search-bar">
               <input
               value={searchTerm}
               onChange={(e)=>setSearchTerm(e.target.value)}
                type="text" 
                placeholder='Search Product' />
           </form>

          
           <Link to={"/cart"} className="cart">
           <button type="button" className="btn btn-primary position-relative">
  <FaCartPlus style={{fontSize:'1.5rem'}}/>
  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
           </Link>
        </div>
        {
          location.pathname=='/'&&(
            <div className="nav-bar-wraper ">
            <div className="items">Filter{"->"}</div>
            
            <div 
            onClick={()=>filterByCategory('mobiles')}
            className="items">Mobiles</div>
            <div
             onClick={()=>filterByCategory('laptops')}
            className="items">Laptop</div>
            <div 
             onClick={()=>filterByCategory('tablets')}
            className="items">Tablets</div>
            <div
             onClick={()=>filterByCategory('mens')}
            className="items">Mens</div>
            <div 
             onClick={()=>filterByCategory('womens')}
            className="items">Women</div>
            <div
            onClick={()=>filterByPrice(29999)}
            className="items">{">="}29999</div>
            <div
            onClick={()=>filterByPrice(49999)}
            className="items">{">="}49999</div>

        </div>
          )
        }
        
      
        </header>   
    </div>
   
  )
}

export default Navbar