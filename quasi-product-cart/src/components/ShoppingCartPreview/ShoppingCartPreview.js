import React from 'react';
import CartItem from '../CartItem/CartItem';
import './ShoppingCartPreview.scss';
import { EDEADLK } from 'constants';

const ShoppingCartPreview = (props) => {
    const sampleItems = [{
        image: 'IMAGE',
        cost: 8.00,
        name: 'Just Shapes and Beats',
        description: 'Beserk Studios',
        details: ["digital"],
        quantity: 1,
    },
    {
        image: 'IMAGE2',
        cost: 60.00,
        name: 'Breath Of The Wild',
        description: 'Nintendo',
        details: ["physical", "Spec. Ed."],
        quantity: 1,
    },
    {
        image: 'IMAGE3',
        cost: 8.00,
        name: 'Just Shapes and Beats',
        description: 'Beserk Studios',
        details: ["digital"],
        quantity: 1,
    },];
    

    return (
        <div className="preview-panel">
            <div className="cost-section">
                <p><span className="bold-text">cart total:</span> ${sampleItems[0].cost.toFixed(2)}</p>
            </div>
            <div className="item-list">
                {sampleItems.map(item => <CartItem className="CartItem" item={item} />)}
            </div>
            <div className="checkout-section">
                <button className="submit-button" onClick={() => props.proceedToCheckout()}>View Cart and Checkout</button>
            </div>
        </div>
    )
}

export default ShoppingCartPreview;