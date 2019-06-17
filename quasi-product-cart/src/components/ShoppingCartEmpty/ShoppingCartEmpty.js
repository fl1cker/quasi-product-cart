import React from 'react';
import './ShoppingCartEmpty.scss';

const ShoppingCartEmpty = () => {
    return (
        <div className="empty-cart">
            <p className="empty-cart-message">Your cart is empty.</p>
            <button className="shopping-button" onClick={() => console.log('Clicked Shopping!')}>Let's Start Shopping!!!</button>
        </div>
    )
}

export default ShoppingCartEmpty;