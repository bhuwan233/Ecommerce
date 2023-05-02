import React from 'react'
import '../css/CartItemDetail.css';
import { useDispatch } from 'react-redux';
import { removeItemFromCart } from '../redux/action/Cart';

const CartItemDetail = ({cartItem, index}) => {
  const dispatch = useDispatch();
  return (
    <div className='cartitem-maincontainer'>
        <div className='cartitem-container'>
            <div className='cartitem-cross-icon' onClick={(e)=>dispatch(removeItemFromCart(index))}>X</div>
            <div className='cartitem-image'><img src={cartItem.thumbnail}/></div>
            <div className='cartitem-details'>
                <div className='cartitem-title'>{cartItem.brand} {cartItem.title}</div>
                <div className='cartitem-itemdetail'>
                    <p>Price: ${cartItem.price}</p>
                    <p>Qty: {cartItem.quantity}</p>
                </div>
                <div className='cartitem-footer'>
                    <p> Total Price: ${cartItem.price * cartItem.quantity} </p>
                </div>
            </div>
        </div>
    </div>
      )
}

export default CartItemDetail