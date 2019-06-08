import React from 'react';
import ReactDOM from 'react-dom';
import HeaderToolbar from './HeaderToolbar';

describe('HeaderToolbar.js', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HeaderToolbar />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})