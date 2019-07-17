import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import './ProductPage.scss';

const ProductPage = (props) => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        (async function fetchData() {
            const response = await fetch('http://localhost:3001/products');
            const data = await response.json();
            setProductList(data);
        }())
    }, [])


    return (
        <div className="ProductPage">
            {productList.map(product => {
                return <div key={product.id} className="ProductPage-product-container"><Product product={product} addItemToCart={props.addItemToCart} /></div>
            })}
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        addItemToCart: (item) => dispatch({ type: 'ADD_ITEM', data: item }),
    }
}

export default connect(null, mapDispatchToProps)(ProductPage);