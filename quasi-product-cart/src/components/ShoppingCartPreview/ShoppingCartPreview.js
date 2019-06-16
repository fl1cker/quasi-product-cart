import React from 'react';
import { connect } from 'react-redux';
import ShoppingCartPopulated from '../ShoppingCartPopulated/ShoppingCartPopulated';
import ShoppingCartEmpty from '../ShoppingCartEmpty/ShoppingCartEmpty';
import { isShoppingCartPopulated } from '../../redux/selectors';

import './ShoppingCartPreview.scss';

const ShoppingCartPreview = (props) => {
    return (
        <div className="preview-panel">
            {
                props.isShoppingCartPopulated()
                    ? <ShoppingCartPopulated />
                    : <ShoppingCartEmpty />
            }
        </div>
    )
}

function mapStateToProps(state) {
    return {
        shoppingCartList: state.shoppingCartList,
        isShoppingCartPopulated: () => isShoppingCartPopulated(state)
    };
}

export default connect(mapStateToProps)(ShoppingCartPreview);