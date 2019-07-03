import React from 'react';
import './CartItem.scss';
import { connect } from 'react-redux';

const CartItem = (props) => {
    return (
        <div className="CartItem">
            <div className="CartItem-close-button" onClick={() => {props.removeItemFromCart(props.index)}}>x</div>
            <div className="CartItem-image-container">
                <img className="CartItem-image" src={props.item.imageUrl} title={props.item.name} alt={props.item.name} />
            </div>
            <div className="CartItem-details">
                <div className="CartItem-section CartItem-price">
                    ${props.item.cost.toFixed(2)}
                </div>
                <div className="CartItem-section CartItem-name">
                    {props.item.name}
                </div>
                <div className="CartItem-section CartItem-specs">
                    <span className="CartItem-quantity">{props.item.quantity}</span><span>qty | {props.item.details.join(" | ")}</span> 
                </div>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        removeItemFromCart: (index) => dispatch({type: 'REMOVE_ITEM', index: index}, )
    }
}

export default connect(null, mapDispatchToProps)(CartItem);