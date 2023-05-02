import React from 'react'
import '../css/ProductCard.css'
const ProductCard = ({product}) => {
  return (
    <div className='productcard-maincontainer'>
        <div className='productcard-image'><img src={product.thumbnail}/></div>
        <div className='productcard-details'>
          <div className='productcard-title'>{product.brand} {product.title}</div>
          <div className='productcard-productdetail'>
            <div className='productcard-price'>
                <p>Price: ${product.price}</p>
                <p>Discount: {product.discountPercentage}%</p>
            </div>
            <div className='productcard-description'>
                <p style={{fontSize:'10px'}}>{product.description}</p>
                <p>free delievery</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default ProductCard