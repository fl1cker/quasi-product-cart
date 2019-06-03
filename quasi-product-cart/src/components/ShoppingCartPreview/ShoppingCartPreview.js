import React from 'react';
import './ShoppingCartPreview.scss';

const ShoppingCartPreview = (props) => {



    return (
        <div className="preview-panel">
            <div>Total Cost</div>
            <div>Items</div>
            <button className="submit-button" onClick={() => props.proceedToCheckout()}>View Cart and Checkout</button>
        </div>
    )
}

export default ShoppingCartPreview;