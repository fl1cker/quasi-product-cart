import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import './ProductPage.scss';

const listOfProducts = [
    {
        id: 0,
        imageUrl: 'images/products/just-shapes-and-beats.jfif',
        cost: 8.00,
        name: 'Just Shapes and Beats',
        description: 'Berzerk Studios',
        details: ["digital"],
        quantity: 0,
    },
    {
        id: 1,
        imageUrl: 'images/products/breath-of-the-wild.jpg',
        cost: 60.00,
        name: 'Breath Of The Wild',
        description: 'Nintendo',
        details: ["physical", "Spec. Ed."],
        quantity: 0,
    },
    {
        id: 2,
        imageUrl: 'images/products/halo-reach.png',
        cost: 8.00,
        name: 'Halo Reach',
        description: 'Bungie Studios',
        details: ["physical"],
        quantity: 0,
    },
    {
        id: 10,
        imageUrl: 'images/products/just-shapes-and-beats.jfif',
        cost: 8.00,
        name: 'zzJust Shapes and Beats',
        description: 'Berzerk Studios',
        details: ["digital"],
        quantity: 0,
    },
    {
        id: 11,
        imageUrl: 'images/products/breath-of-the-wild.jpg',
        cost: 60.00,
        name: 'zzBreath Of The Wild',
        description: 'Nintendo',
        details: ["physical", "Spec. Ed."],
        quantity: 0,
    }
]

const ProductPage = (props) => {

    function generateProductList() {
        return listOfProducts.map(product => {
            return <div key={product.id} className="product-container"><Product product={product} addItemToCart={props.addItemToCart} /></div>
        })
    }

    return (
        <div className="product-body">
                {generateProductList()}
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addItemToCart: (item) => dispatch({ type: 'ADD_ITEM', data: item }),
    }
}

export default connect(null, mapDispatchToProps)(ProductPage);