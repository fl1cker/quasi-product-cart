import React from 'react';
import './CartItem.scss';
import { connect } from 'react-redux';

const CartItem = (props) => {
    return (
        <div className="CartItem">
            <div className="close-button" onClick={() => {props.removeItemFromCart(props.index)}}>x</div>
            <div className="image-container">
                <img className="image" src={props.item.imageUrl} title={props.item.name} alt={props.item.name} />
            </div>
            <div className="details">
                <div className="section price">
                    ${props.item.cost.toFixed(2)}
                </div>
                <div className="section name">
                    {props.item.name}
                </div>
                <div className="section specs">
                    <span className="quantity">{props.item.quantity}</span><span>qty | {props.item.details.join(" | ")}</span> 
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