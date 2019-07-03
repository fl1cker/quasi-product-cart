import { createStore } from 'redux';
import cartManager from './cart-manager';

const store = createStore(cartManager);

export default store;