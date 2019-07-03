import React from 'react';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { calculateCartTotal } from '../../redux/selectors';
import './ShoppingCartPopulated.scss';

const ShoppingCartPopulated = (props) => {

    const poplateShoppingList = (shoppingCartList) => {
        return shoppingCartList.map((item, index) => <CartItem key={item.id} className="ShoppingCartPopulated-CartItem" item={item} index={index} />)
    }

    return (
        <React.Fragment>
            <div className="ShoppingCartPopulated-cost-section">
                <p><span className="bold">cart total:</span> ${props.calculateCartTotal()}</p>
            </div>
            <div className="ShoppingCartPopulated-item-list">
                {poplateShoppingList(props.shoppingCartList)}
            </div>
            <div className="ShoppingCartPopulated-checkout-section">
                <button className="ShoppingCartPopulated-submit-button" onClick={() => console.log('Clicked Checkout')}>view cart and checkout</button>
            </div>
        </React.Fragment>
    )
}

function mapStateToProps(state) {
    return {
        shoppingCartList: state.shoppingCartList,
        calculateCartTotal: () => calculateCartTotal(state)
    }
}

export default connect(mapStateToProps)(ShoppingCartPopulated);