import React from 'react';
import ReactDOM from 'react-dom';
import ShoppingCartPreview from './ShoppingCartPreview';

describe('ShoppingCartPreview.js', () => {

    let shoppingCartList = [];
    beforeAll(() => {
        shoppingCartList = [{
            id: 0,
            imageUrl: 'images/products/just-shapes-and-beats.jfif',
            cost: 8.00,
            name: 'Just Shapes and Beats',
            description: 'Beserk Studios',
            details: ["digital"],
            quantity: 1,
        },
        {
            id: 1,
            imageUrl: 'images/products/breath-of-the-wild.jpg',
            cost: 60.00,
            name: 'Breath Of The Wild',
            description: 'Nintendo',
            details: ["physical", "Spec. Ed."],
            quantity: 2,
        }];
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ShoppingCartPreview proceedToCheckout={console.log} shoppingCartList={[]}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})