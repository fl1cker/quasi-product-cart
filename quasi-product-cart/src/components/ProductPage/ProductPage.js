import React from 'react';
import { connect } from 'react-redux';
import './ProductPage.scss';

const mockProductList = [{
    id: 0,
    imageUrl: 'images/products/just-shapes-and-beats.jfif',
    cost: 8.00,
    name: 'Just Shapes and Beats',
    description: 'Beserk Studios',
    details: ["digital"],
},
{
    id: 1,
    imageUrl: 'images/products/breath-of-the-wild.jpg',
    cost: 60.00,
    name: 'Breath Of The Wild',
    description: 'Nintendo',
    details: ["physical", "Spec. Ed."],
}];


const ProductPage = (props) => {
    return (
        <div className="product-body">
            <div className="product-container">

            </div>
        </div>
    )
}

function mapStateToProps(state) {

}

function mapDispatchToProps(dispatch) {

}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);