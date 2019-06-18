import React from 'react';
import './Product.scss';

const Product = (props) => {
    return (
        <div>{props.product.id}</div>
    )
}

export default Product;