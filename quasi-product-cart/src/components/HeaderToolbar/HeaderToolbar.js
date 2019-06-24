import React from 'react';
import { connect } from 'react-redux';
import './HeaderToolbar.scss';

const HeaderToolbar = (props) => {
    return (
        <div className="header-toolbar">
            <div className="shopping-cart">
                {/* <i className="material-icons" onMouseEnter={props.showShoppingCart} onMouseOut={props.hideShoppingCart}>shopping_cart</i> */}
                <img src="images/icons/shopping-cart.svg" alt="shopping cart icon" className="shopping-cart-svg" onMouseEnter={props.showShoppingCart} onMouseOut={props.hideShoppingCart}></img>
                
            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        showShoppingCart: () => dispatch({type: 'SET_ICON_HOVER', data: true}),
        hideShoppingCart: () => dispatch({type: 'SET_ICON_HOVER', data: false}),
    }
}

export default connect(null, mapDispatchToProps)(HeaderToolbar);