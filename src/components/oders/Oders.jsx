import React, { useState } from 'react';
import Cart from '../cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItems from '../reviewItems/ReviewItems';
import './Order.css'
import { removeFromDb } from '../../utilities/fakedb';


const Oders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart);
const handleRemoveFromCart = (id) =>{
    const remaining= cart.filter(product => product.id !== id) 
   setCart(remaining);
   removeFromDb(id)


}


    return (
        <div className='shop-container'>
            <div className='review-container'>
               
{
    cart.map(product=> <ReviewItems
    key={product.id}
    product={product}
    handleRemoveFromCart={handleRemoveFromCart}
    ></ReviewItems>)
}

            </div>
            <div className='cart-container'>
                <Cart cart = {cart}></Cart>

            </div>

        </div>
    );
};

export default Oders;