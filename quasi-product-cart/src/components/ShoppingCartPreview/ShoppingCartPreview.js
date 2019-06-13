import React from 'react';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import './ShoppingCartPreview.scss';

const ShoppingCartPreview = (props) => {
    console.log(props);
    const poplateShoppingList = (shoppingCartList) => {
        return shoppingCartList.length > 0
            ? shoppingCartList.map((item, index) => <CartItem key={item.id} className="CartItem" item={item} index={index} />)
            : <div>Girl, you need to start shopping!!!!!</div>
    }

    return (
        <div className="preview-panel">
            <div className="cost-section">
                <p><span className="bold-text">cart total:</span> ${props.calculateCartTotal(props.shoppingCartList)}</p>
            </div>
            <div className="item-list">
                {poplateShoppingList(props.shoppingCartList)}        
            </div>
            <div className="checkout-section">
                <button className="submit-button" onClick={() => console.log('Clicked Checkout')}>view cart and checkout</button>
            </div>
        </div>
    )
}

function mapStateToProps(state) {
    return {
        shoppingCartList: state.shoppingCartList,
        calculateCartTotal: state.calculateCartTotal
    }
}

export default connect(mapStateToProps)(ShoppingCartPreview);