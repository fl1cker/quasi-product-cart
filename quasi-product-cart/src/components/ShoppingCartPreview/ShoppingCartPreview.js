import React, { useState } from 'react';
import CartItem from '../CartItem/CartItem';
import './ShoppingCartPreview.scss';


const ShoppingCartPreview = (props) => {



    const calculateCartTotal = (shoppingCartList) => {
        const value = shoppingCartList.reduce((a, b) => a + (b.cost * b.quantity), 0);

        return value.toFixed(2);
    }

    const returnShoppingList = (shoppingCartList) => {

        return shoppingCartList.length > 0 
            ? shoppingCartList.map((item, index) => <CartItem key={item.id} className="CartItem" item={item} index={index} />)
            : <div>Girl, you need to start shopping!!!!!</div>
    }

    return (
        <div className="preview-panel">
            <div className="cost-section">
                <p><span className="bold-text">cart total:</span> ${calculateCartTotal(props.shoppingCartList)}</p>
            </div>
            <div className="item-list">
                {returnShoppingList(props.shoppingCartList)}        
            </div>
            <div className="checkout-section">
                <button className="submit-button" onClick={() => props.proceedToCheckout()}>view cart and checkout</button>
            </div>
        </div>
    )
}

export default ShoppingCartPreview;