import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('App.js', () => {
  let shoppingCartList = [];

  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App shoppingCartList={shoppingCartList}/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
})

