import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { items } from './Data';
import Product from './Product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ProductDetails = ({ cart, setCart }) => {
  const { id } = useParams()

  const [product, setProduct] = useState({})
  const [relatedProduct, setRelatedProduct] = useState({})

  useEffect(() => {
    const filterProduct = items.filter((Products) => Products.id == id)
    setProduct(filterProduct[0])

    const relatedProduct = items.filter((suman) => suman.category === product.category)
    console.log("RelatedProduct", relatedProduct);
    setRelatedProduct(relatedProduct)
  }, [id, relatedProduct]);

  const addTocart = (id, price, title, description, imgSrc) => {
    const obj = {
      id, price, title, description, imgSrc
    }
    setCart([...cart, obj]);
    console.log("cart element", cart);
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

      <div className="container con">
        <div className="img">
          <img src={product.imgSrc} />
        </div>
        <div className='disc text-center'>
          <h1 className="card-title">{product.title}</h1>
          <p className="card-text">{product.description}</p>
          <button className='btn btn-primary mx-3'>{product.price}{" "}₹</button>
          <button
            onClick={() => addTocart(product.id, product.price, product.title, product.description, product.imgSrc)}
            className='btn btn-warning'>Add to Cart</button>
        </div>

      </div>
      <h1 className='text-center'>Related Products</h1>
      <Product cart={cart} setCart={setCart} items={relatedProduct} />
    </>
  )
}

export default ProductDetails