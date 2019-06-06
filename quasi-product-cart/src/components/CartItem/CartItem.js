import React from 'react';
import './CartItem.scss';

const CartItem = ({ item }) => {
    return (
        <div className="CartItem">
            <div className="image-container">
                <img className="image" src={item.imageUrl} title={item.name} alt={item.name} />
            </div>
            <div className="details">
                <div className="price">
                    ${item.cost.toFixed(2)}
                </div>
                <div className="name">
                    {item.name}
                </div>
                <div className="specs">
                    qty: {item.quantity} | {item.details.join(" | ")}
                </div>
            </div>
            <div className="close-button">x</div>
        </div>
    );
}

export default CartItem;