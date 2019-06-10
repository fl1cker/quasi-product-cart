import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.scss';
//import 'bootstrap/dist/css/boostrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';

import App from './App';
import { shoppingCartList } from 'src/classes/ShoppingCartService';


ReactDOM.render(<App shoppingCartList={shoppingCartList}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
