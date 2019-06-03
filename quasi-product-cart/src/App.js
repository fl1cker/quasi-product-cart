import './App.scss';
import React from 'react';
import HeaderToolbar from './components/HeaderToolbar/HeaderToolbar';
import ShoppingCartPreview from './components/ShoppingCartPreview/ShoppingCartPreview';

function App() {

  const proceedToCheckout = () => {
    console.log('proceeding to checkout');
  }

  return (
    <div className="App">
      <div className="HeaderToolbar">
        <HeaderToolbar />
      </div>
      <div className="body">
        <ShoppingCartPreview proceedToCheckout={proceedToCheckout}/>
      </div>
    </div>
  );
}

export default App;
