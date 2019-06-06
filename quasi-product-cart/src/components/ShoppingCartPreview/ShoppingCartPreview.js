import React from 'react';
import CartItem from '../CartItem/CartItem';
import './ShoppingCartPreview.scss';


const ShoppingCartPreview = (props) => {

        const calculateCartTotal = (shoppingCartList) => {
            const value = shoppingCartList.reduce((a,b) => a + (b.cost * b.quantity), 0);
            
            return value.toFixed(2);
        }

        return (
        <div className="preview-panel">
            <div className="cost-section">
                <p><span className="bold-text">cart total:</span> ${calculateCartTotal(props.shoppingCartList)}</p>
            </div>
            <div className="item-list">
                {props.shoppingCartList.map(item => <CartItem key={item.id} className="CartItem" item={item} />)}
            </div>
            <div className="checkout-section">
                <button className="submit-button" onClick={() => props.proceedToCheckout()}>View Cart and Checkout</button>
            </div>
        </div>
    )
}

export default ShoppingCartPreview;