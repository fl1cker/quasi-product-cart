import React from 'react';
import ReactDOM from 'react-dom';
import CartItem from './CartItem';

describe('CartItem.js', () => {

    let sampleItem = {};

    beforeAll(() => {
        sampleItem = {
            id: 121,
            imageUrl: '',
            cost: 2,
            name: 'just shapes and beats',
            description: 'Berserk Studio',
            details: ['digital'],
            quantity: 1
        }
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<CartItem item={sampleItem} />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})