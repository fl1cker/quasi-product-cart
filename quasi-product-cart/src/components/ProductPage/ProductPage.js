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
        imageUrl: 'images/products/breath-of-the-wild-game.webp',
        cost: 60.00,
        name: 'Breath Of The Wild',
        description: 'Nintendo',
        details: ["physical", "Spec. Ed."],
        quantity: 0,
    },
    {
        id: 2,
        imageUrl: 'images/products/halo-5.jfif',
        cost: 45.00,
        name: 'Halo 5',
        description: '343 Studios',
        details: ["physical"],
        quantity: 0,
    },
    {
        id: 10,
        imageUrl: 'images/products/mad-catz.jfif',
        cost: 24.99,
        name: 'Wired Xbox One Controller',
        description: 'Mad Catz',
        details: ['Color: Blue Ocean'],
        quantity: 0,
    },
    {
        id: 11,
        imageUrl: 'images/products/xbox-one-wireless-controller.jfif',
        cost: 60.00,
        name: 'Wireless Xbox One Controller',
        description: 'Microsoft',
        details: ['2nd Ed.', 'Bluetooth Enabled', 'Color: Overwatch Edition'],
        quantity: 0,
    },
    {
    id: 13,
        imageUrl: 'images/products/switch-controllers-green-pink.jfif',
        cost: 76.49,
        name: 'Switch Joy-Cons',
        description: 'Nintendo',
        details: ['Color: Neon Green/Neon Pink'],
        quantity: 0,
    }
]

const ProductPage = (props) => {

    function generateProductList() {
        return listOfProducts.map(product => {
            return <div key={product.id} className="ProductPage-product-container"><Product product={product} addItemToCart={props.addItemToCart} /></div>
        })
    }

    return (
        <div className="ProductPage">
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