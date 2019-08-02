import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Product from '../Product/Product';
import './ProductPage.scss';

const ProductPage = (props) => {

    const [productList, setProductList] = useState([]);

    useEffect(() => {
        (async function fetchData() {
            const response = await fetch('https://15dzqlyk7l.execute-api.us-east-1.amazonaws.com/prod/products');
            const responseJson = await response.json();
            const inboundProductList = JSON.parse(responseJson.body);
            setProductList(inboundProductList);
        }())
    }, []);

    function getProducts() {
        return productList.filter(product => {
            const filterText = (props.filterText || '').toLocaleLowerCase();
            const formattedCost = `$${product.cost.toFixed(2)}`;
            const searchStr = ([product.cost, formattedCost, product.name, product.manufacturer, product.details.join()].join()).toLocaleLowerCase();
            return searchStr.includes(filterText)
        }).map(product => {
            return <div key={product.id} className="ProductPage-product-container"><Product product={product} addItemToCart={props.addItemToCart} /></div>
        })
    }

    return (
        <div className="ProductPage">
            {getProducts()}
        </div>
    )
}

function mapStateToProps(state) {
    return {
        filterText: state.filterText,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addItemToCart: (item) => dispatch({ type: 'ADD_ITEM', data: item }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);