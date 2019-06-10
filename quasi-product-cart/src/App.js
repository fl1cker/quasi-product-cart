import './App.scss';
import React from 'react';
import HeaderToolbar from './components/HeaderToolbar/HeaderToolbar';
import ShoppingCartPreview from './components/ShoppingCartPreview/ShoppingCartPreview';

const App = (props) => {

  return (
    <div className="App">
      <div className="HeaderToolbar">
        <HeaderToolbar />
      </div>
      <div className="body">
        <ShoppingCartPreview proceedToCheckout={() => console.log('checking out')} shoppingCartList={props.shoppingCartList}/>
      </div>
    </div>
  );
}

export default App;
