import React from 'react';
import './ShoppingCartEmpty.scss';

const ShoppingCartEmpty = () => {
    return (
        <div className="ShoppingCartEmpty">
            <p className="ShoppingCartEmpty-message">Your cart is empty.</p>
            <button className="ShoppingCartEmpty-shopping-button Index-shopping-button" onClick={() => console.log('Clicked Shopping!')}>Let's Start Shopping!!!</button>
        </div>
    )
}

export default ShoppingCartEmpty;