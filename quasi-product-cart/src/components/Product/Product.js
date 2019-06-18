import React from 'react';
import './Product.scss';

const Product = (props) => {
    return (
        <div className="Product-host">
            <div className="Product-image-container">
                <img className="Product-image" src={props.product.imageUrl} title={props.product.name} alt={props.product.name}/>
            </div>
            <div className="Product-item-container">
                <div className="Product-item-name-section">
                    <div className="Product-item-name bold">{props.product.name}</div>
                    <div className="Product-item-description">{props.product.description}</div>
                </div>
                <div className="Product-item-details">Details: {props.product.details.join('  |  ')}</div>
                <div className="Product-item-price">{props.product.price}</div>
                <div className="Product-add-button-container">
                    <button className="Product-add-button shopping-button">Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default Product;