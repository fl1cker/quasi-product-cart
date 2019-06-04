import React from 'react';
import './CartItem.js';

const CartItem = ({item}) => {
    return (
        <div>
            <span>{item.image}</span>
            <span>| {item.name}</span>
            <span>| {item.description}</span>
        </div>
    )
}

export default CartItem;