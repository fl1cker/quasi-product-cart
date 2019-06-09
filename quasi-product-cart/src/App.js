import './App.scss';
import React, { useState } from 'react';
import HeaderToolbar from './components/HeaderToolbar/HeaderToolbar';
import ShoppingCartPreview from './components/ShoppingCartPreview/ShoppingCartPreview';

function App() {

  const sampleItems = [{
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
  },
  {
    id: 2,
    imageUrl: 'images/products/halo-reach.png',
    cost: 8.00,
    name: 'Halo Reach',
    description: 'Bungie Studios',
    details: ["physical"],
    quantity: 1,
  },];

  const [shoppingCartList, setShoppingCartList] = useState(sampleItems);

  const removeItemFromCart = (itemIndex) => {
      shoppingCartList.splice(itemIndex, 1);
      setShoppingCartList([shoppingCartList]);
      console.log('state is now equal to ', shoppingCartList)

  }
  
  const proceedToCheckout = () => {
    console.log('proceeding to checkout');
  }

  return (
    <div className="App">
      <div className="HeaderToolbar">
        <HeaderToolbar />
      </div>
      <div className="body">
        <ShoppingCartPreview proceedToCheckout={proceedToCheckout} shoppingCartList={shoppingCartList} removeItemFromCart={removeItemFromCart}/>
      </div>
    </div>
  );
}

export default App;
