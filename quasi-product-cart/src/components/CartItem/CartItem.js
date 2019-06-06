import React from 'react';
import './CartItem.scss';

const CartItem = ({ item }) => {
    return (
        <div className="CartItem">
            <div className="image">
                {item.image}
            </div>
            <div className="details">
                <div className="price">
                    ${item.cost.toFixed(2)}
                </div>
                <div className="name">
                    {item.name + ' ' + item.description}
                </div>
                <div className="details">
                    qty: {item.quantity} | {item.details.join(" | ")}
                </div>
            </div>
            <div className="close-button">x</div>
        </div>
    );
}

export default CartItem;