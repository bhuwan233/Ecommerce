import React from 'react'
import '../css/ProductCard.css'
const ProductCard = ({product}) => {
  return (
    <div className='productcard-maincontainer'>
        <div className='productcard-image'><img src={product.thumbnail}/></div>
        <div className='productcard-details'>
        <div className='productcard-price'>
            <p style={{marginBottom:'5px'}}>Price: {product.price}</p>
            <p>Discount: {product.discountPercentage}%</p>
        </div>
        <div className='productcard-description'>
            <p style={{fontWeight:800}}>{product.title}</p>
            <hr/>
            <p style={{fontSize:'10px'}}>{product.description}</p>
            <p>free delievery</p>
        </div>
        </div>
        {/* ProductCard:
        <div>Product Id : {product.id}</div>
        <div>Product Name : {product.name}</div>
        <div>Product Category : {product.category}</div> */}
    </div>
  )
}

export default ProductCard