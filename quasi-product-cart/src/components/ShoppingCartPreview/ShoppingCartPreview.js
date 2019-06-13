import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartPopulated from '../ShoppingCartPopulated/ShoppingCartPopulated';
import ShoppingCartEmpty from '../ShoppingCartEmpty/ShoppingCartEmpty';

const ShoppingCartPreview = (props) => {
    return (
        <div>
            {
                props.isShoppingCartPopulated(props.shoppingCartList)
                    ? <ShoppingCartPopulated />
                    : <ShoppingCartEmpty />
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        shoppingCartList: state.shoppingCartList,
        isShoppingCartPopulated: state.isShoppingCartPopulated
    };
}

export default connect(mapStateToProps)(ShoppingCartPreview);