import React from 'react';
import './CartItem.scss';

const CartItem = ({ item }) => {
    return (
        <div className="CartItem">
            <div className="close-button">x</div>
            <div className="image-container">
                <img className="image" src={item.imageUrl} title={item.name} alt={item.name} />
            </div>
            <div className="details">
                <div className="section price">
                    ${item.cost.toFixed(2)}
                </div>
                <div className="section name">
                    {item.name}
                </div>
                <div className="section specs">
                    <span className="quantity">{item.quantity}</span><span>qty | {item.details.join(" | ")}</span> 
                </div>
            </div>
            
        </div>
    );
}

export default CartItem;