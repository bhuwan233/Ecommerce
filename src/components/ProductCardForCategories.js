import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../css/ProductCardForCategories.css'
import { Link } from 'react-router-dom';

const ProductCardForCategories = ({category}) => {
    const [productList, setProductList] = useState([]);
    useEffect(()=>{
        (async function (){
            const {data:{products}} = await axios.get('https://dummyjson.com/products/category/'+category);
            setProductList(products);
        })()
    },[]);
                
    return (
    <div className='categoryproductcard-maincontainer'>
        {
            productList.map((product)=>{
                return (
                    <div key={product.id}>
                    <Link to={`/product/${product.id}`} className='home-link'>
                    <div className='categoryproductcard-container' key={product.id}>
                    <div className='categoryproductcard-image'><img src={product.thumbnail}/></div>
                    <div className='categoryproductcard-details'>
                        <div className='categoryproductcard-title'>{product.brand} {product.title}</div>
                        <div className='categoryproductcard-productdetail'>
                        <div className='categoryproductcard-price'>
                            <p>Price: ${product.price}</p>
                            <p>Discount: {product.discountPercentage}%</p>
                        </div>
                        <div className='categoryproductcard-description'>
                            <p style={{fontSize:'10px'}}>{product.description}</p>
                            <p>free delievery</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    </Link>
                    </div>
                )
            })
        }
        </div>
        )
    }
export default ProductCardForCategories