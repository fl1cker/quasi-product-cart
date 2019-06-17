import React from 'react';
import { connect } from 'react-redux'

const listOfProducts = [
{
    id: 0,
    imageUrl: 'images/products/just-shapes-and-beats.jfif',
    cost: 8.00,
    name: 'Just Shapes and Beats',
    description: 'Beserk Studios',
    details: ["digital"],
    quantity: 1,
  },
  {
    id: 1,
    imageUrl: 'images/products/breath-of-the-wild.jpg',
    cost: 60.00,
    name: 'Breath Of The Wild',
    description: 'Nintendo',
    details: ["physical", "Spec. Ed."],
    quantity: 2,
  },
  {
    id: 2,
    imageUrl: 'images/products/halo-reach.png',
    cost: 8.00,
    name: 'Halo Reach',
    description: 'Bungie Studios',
    details: ["physical"],
    quantity: 1,
  },
  {
    id: 10,
    imageUrl: 'images/products/just-shapes-and-beats.jfif',
    cost: 8.00,
    name: 'zzJust Shapes and Beats',
    description: 'Beserk Studios',
    details: ["digital"],
    quantity: 1,
  },
  {
    id: 11,
    imageUrl: 'images/products/breath-of-the-wild.jpg',
    cost: 60.00,
    name: 'zzBreath Of The Wild',
    description: 'Nintendo',
    details: ["physical", "Spec. Ed."],
    quantity: 2,
  }
]

const ProductList = (props) => {
    return (
        <ul>{listOfProducts.map(product => <li onClick={() => props.addItemToCart(product)}>product.name</li>)}</ul>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addItemToCart: (item) => dispatch({type: 'ADD_ITEM', data: item})
    }
}

export default connect(null, mapDispatchToProps)(ProductList);