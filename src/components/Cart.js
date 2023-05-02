import React from 'react'
import '../css/Cart.css';
import { useSelector } from 'react-redux';
import CartItemDetail from './CartItemDetail';

const Cart = () => {
    const cartItems = useSelector(store=>store.cartState);
    
    if(cartItems.totalItemsInCart != 0){
      return (
        <div className='cart-maincontainer'>
          <h1>Cart Items</h1><br/> 
          <div className='cart-items-section'>
          {cartItems.cart.map((item, i)=>
            <CartItemDetail cartItem={item} key={item.id} index={i}/>
          )}
          </div>
          <div className='cart-table-container'>
            <table className='cart-table'>
              <caption>Place Order</caption>
              <tbody>
              <tr>
                <td>Total Items in Cart: </td>
                <td>{cartItems.totalItemsInCart}</td>
              </tr>
              <tr>
                <td>Total Price: </td>
                <td>${cartItems.totalPrice}</td>
              </tr>
              <tr>
                <td colSpan={2}><button className='cart-table-button'> Checkout </button> </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>
      )
    }
    else{
      return (<div className='cart-maincontainer'>
        <h1 style={{textAlign:'center', lineHeight:'calc(100vh - 120px)'}}> Cart is empty.... </h1>
        </div>);
    }
  
}

export default Cart;