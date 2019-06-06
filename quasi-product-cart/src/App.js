import './App.scss';
import React from 'react';
import HeaderToolbar from './components/HeaderToolbar/HeaderToolbar';
import ShoppingCartPreview from './components/ShoppingCartPreview/ShoppingCartPreview';
import ShoppingCartService from './classes/shopping-cart-service';
function App() {

  const shoppingService = ShoppingCartService();
  shoppingService.initializeMockCart();
  
  const proceedToCheckout = () => {
    console.log('proceeding to checkout');
  }

  return (
    <div className="App">
      <div className="HeaderToolbar">
        <HeaderToolbar />
      </div>
      <div className="body">
        <ShoppingCartPreview proceedToCheckout={proceedToCheckout} shoppingCartList={shoppingService.shoppingCartList}/>
      </div>
    </div>
  );
}

export default App;
