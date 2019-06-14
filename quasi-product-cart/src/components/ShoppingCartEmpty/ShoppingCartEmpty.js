import React from 'react';
import './ShoppingCartEmpty.scss';

const ShoppingCartEmpty = () => {
    return (
        <React.Fragment>
            <p className="empty-cart-message">Your cart is empty.</p>
            <p className="shopping-link">Time to start <a href="JavaScript:void(0)">shopping!</a></p>
        </React.Fragment>
    )
}

export default ShoppingCartEmpty;