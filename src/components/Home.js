import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getSelectedProduct } from '../redux/action/Product';
import ProductCard from './ProductCard';
import '../css/Home.css'
import { Link } from 'react-router-dom';

const Home = () => {
    function handleActiveMenu(){
        let elements = document.getElementsByClassName('nav-link');
        for(let i = 0; i < elements.length; i++){
            elements[i].className = 'nav-link';
        }
      }
    const dispatch = useDispatch();
    const products = useSelector(store=>store.productState.products);
    useEffect(()=>{
        dispatch(getAllProducts());
    },[]);
    if(products.length !== 0){
        return (
            <div className='home-maincontainer'>
                {products.map(prod=>
                    <Link to={`/product/${prod.id}`} key={prod.id} className='home-link' onClick={()=>handleActiveMenu()}>
                        <ProductCard product={prod} />
                    </Link>
                )}
            </div>
        );
    }else{
        return (
        <div className='home-maincontainer'>
                <h1 style={{marginLeft:'50%', transform:'translate(-25%, 0)'}}>No Products Found</h1>
        </div>
        );
    }
  
}

export default Home