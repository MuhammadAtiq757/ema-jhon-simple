import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './review-items.css'

const ReviewItems = ({product, handleRemoveFromCart}) => {
    const {id, img, price, name, quantity} = product;

    return (
        <div className='review-items'>
            <img src={img} alt="" />
            <div className='review-details'>
                <p className='product-title'>{name}</p>
        <p>price: <span className='orange-text'>${price}</span></p>
        <p>Order Quantity: <span className='orange-text'>{quantity}</span></p>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} className='btn-delete'> 
            <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItems;