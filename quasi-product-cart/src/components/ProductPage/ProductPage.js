import React from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import locallyInitializeProductList from '../../locally-initialize-product-list';
import './ProductPage.scss';


const listOfProducts = locallyInitializeProductList();

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