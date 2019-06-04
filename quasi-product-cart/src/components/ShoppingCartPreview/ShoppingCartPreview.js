import React from 'react';
import CartItem from '../CartItem/CartItem';
import './ShoppingCartPreview.scss';

const ShoppingCartPreview = (props) => {
    const sampleItems = [{
        image: 'IMAGE',
        name: 'Just Shapes and Beats',
        description: 'Beserk Studios',
        cost: 5.27
    }];

    return (
        <div className="preview-panel">
            <div>Total Cost: ${sampleItems[0].cost}</div>
            {sampleItems.map(item => <CartItem item={item}/>)}
            <button className="submit-button" onClick={() => props.proceedToCheckout()}>View Cart and Checkout</button>
        </div>
    )
}

export default ShoppingCartPreview;