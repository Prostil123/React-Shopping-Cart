import React from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ items,cart,setCart }) => {
 const addTocart=(id,price,title,description,imgSrc)=>{
    const obj={
        id,price,title,description,imgSrc
    }
    setCart([...cart,obj]);
    console.log("cart element",cart);
    toast.success('Added to Cart', {
        position: "top-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        
        });
 }

     // Check if items is an object
     if (typeof items !== 'object'||items===null ) {
        return (<div>
          
             </div>); // Or handle differently as per your requirement
    }  

    return (
        <>
        <ToastContainer
position="top-center"
autoClose={1500}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"

/>
        <div className="container">
            <div className="row my-5">
                {Object.keys(items).map((key) => {
                    const product = items[key];
                    return (
                        <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                            <div className="card" style={{ width: '18rem' }}>
                                <Link to={`Product/${product.id}`} style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <img src={product.imgSrc} className="card-img-top" alt="..." />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <button className='btn btn-primary mx-3'>{product.price}{" "}₹</button>
                                    <button 
                                    onClick={()=>addTocart(product.id,product.price,product.title,product.description,product.imgSrc)}
                                    className='btn btn-warning'>Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    );
};

export default Product;
