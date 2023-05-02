import React, { useState } from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { filterProducts } from '../redux/action/Product';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const productInCartCount = useSelector(store=>store.cartState.totalItemsInCart);
  const dispatch = useDispatch();
  function handleActiveMenu(index){
    let elements = document.getElementsByClassName('nav-link');
    console.log(elements);
    for(let i = 0; i < elements.length; i++){
        elements[i].className = 'nav-link';
    }
    if(index == 2)
      elements[index].className += ' cart-active';
    else
      elements[index].className += ' active';

  }
  function handleProductSearch(productTitle){
    dispatch(filterProducts(productTitle));
  }
  return (
    <div className='nav-maincontainer'>
        <div className='nav-logo_navigation'>
            <div className='nav-logo'><img src={'https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png'} /></div>
            <nav >
                <ul className='nav-navigation'>
                    <Link to={'/'} className='nav-link active' onClick={(e)=>handleActiveMenu(0)} ><li>Home</li></Link>
                    <Link to={'/categories'} className='nav-link' onClick={(e)=>handleActiveMenu(1)}><li>Categories</li></Link>
                    {/* <li>Button3</li> */}
                </ul>
            </nav>
        </div>
        <div className='nav-search_input'><input type='text' placeholder='Search...' onChange={(e)=>handleProductSearch(e.target.value)} /></div>
        <div className='nav-buttons_container'>
            <div>
                <div style={{display:'inline-block', marginRight:'30px', position:'relative'}}>
                  <div className='nav-carticon-count'>{productInCartCount}</div>
                    <Link to={'/cart'} className='nav-link' onClick={()=>handleActiveMenu(2)}>
                      <FontAwesomeIcon icon={faCartShopping} className='nav-carticon' />
                    </Link>
                </div>
                <Link to={'/login/user'}><button style={{backgroundColor:'#00e943bd'}}>Login</button></Link> 
                <Link to={'/register/user'}><button style={{backgroundColor:'#ff373794'}}>Sign Up</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar