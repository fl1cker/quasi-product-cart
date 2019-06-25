import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartPopulated from '../ShoppingCartPopulated/ShoppingCartPopulated';
import ShoppingCartEmpty from '../ShoppingCartEmpty/ShoppingCartEmpty';
import { isShoppingCartPopulated } from '../../redux/selectors';

import './ShoppingCartPreview.scss';

const ShoppingCartPreview = (props) => {
    const render = () => {
        return props.isShoppingCartPopulated()
            ? <ShoppingCartPopulated />
            : <ShoppingCartEmpty />
    }

    return (
        <React.Fragment>
            <div className="preview-panel" onMouseEnter={props.setShowShoppingCart} onMouseLeave={props.setHideShoppingCart}>
                {render()}
            </div>
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return {
        shoppingCartList: state.shoppingCartList,
        isShoppingCartPopulated: () => isShoppingCartPopulated(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setShowShoppingCart: () => dispatch({ type: 'SET_SHOPPING_CART_HOVER', data: true }),
        setHideShoppingCart: () => dispatch({ type: 'SET_SHOPPING_CART_HOVER', data: false }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartPreview);