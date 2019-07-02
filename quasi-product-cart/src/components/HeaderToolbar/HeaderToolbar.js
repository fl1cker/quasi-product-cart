import React from 'react';
import { connect } from 'react-redux';
import './HeaderToolbar.scss';

const HeaderToolbar = (props) => {
    let shouldShowShoppingCart = false;
    const showShoppingCartOnDelay = () => {
        shouldShowShoppingCart = false;
        setTimeout(() => {
            if (!shouldShowShoppingCart) {
                props.showShoppingCart();
            }
        }, 150)
    }

    const hideShoppingCart = () => {
        shouldShowShoppingCart = true;
        props.hideShoppingCart();
    }

    return (
        <div className="HeaderToolbar">
            <div className="HeaderToolbar-title">
                <img src="images/logo/puerile-logo.svg" alt="puerile logo" className="HeaderToolbar-logo-svg"></img>
            </div>
            <div className="HeaderToolbar-shopping-cart">
                <img src="images/icons/shopping-cart.svg" alt="shopping cart icon" className="HeaderToolbar-shopping-cart-svg" onMouseEnter={() => showShoppingCartOnDelay()} onMouseOut={() => hideShoppingCart()}></img>
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        showShoppingCart: () => dispatch({ type: 'SET_ICON_HOVER', data: true }),
        hideShoppingCart: () => dispatch({ type: 'SET_ICON_HOVER', data: false }),
    }
}

export default connect(null, mapDispatchToProps)(HeaderToolbar);