import React from 'react'
import '../css/Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav-maincontainer'>
        <div className='nav-logo_navigation'>
            <div className='nav-logo'><img src={'https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png'} /></div>
            <nav >
                <ul className='nav-navigation'>
                    <Link to={'/products'} className='nav-link'><li className='active'>Home</li></Link>
                    <li>Categories</li>
                    {/* <li>Button3</li> */}
                </ul>
            </nav>
        </div>
        <div className='nav-search_input'><input type='text' placeholder='Search...'/></div>
        <div className='nav-buttons_container'>
            <div>
                <button style={{backgroundColor:'#00e943bd'}}>Login</button> 
                <button style={{backgroundColor:'#ff373794'}}>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar