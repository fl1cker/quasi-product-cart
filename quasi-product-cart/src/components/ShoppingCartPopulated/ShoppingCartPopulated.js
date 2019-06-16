import React from 'react';
import CartItem from '../CartItem/CartItem';
import { connect } from 'react-redux';
import { calculateCartTotal } from '../../redux/selectors';
import './ShoppingCartPopulated.scss';

const ShoppingCartPopulated = (props) => {

    const poplateShoppingList = (shoppingCartList) => {
        return shoppingCartList.map((item, index) => <CartItem key={item.id} className="CartItem" item={item} index={index} />)
    }

    return (
        <React.Fragment>
            <div className="cost-section">
                <p><span className="bold-text">cart total:</span> ${props.calculateCartTotal()}</p>
            </div>
            <div className="item-list">
                {poplateShoppingList(props.shoppingCartList)}
            </div>
            <div className="checkout-section">
                <button className="submit-button" onClick={() => console.log('Clicked Checkout')}>view cart and checkout</button>
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