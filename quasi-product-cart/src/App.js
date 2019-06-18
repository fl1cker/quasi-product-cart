import './App.scss';
import React from 'react';
import HeaderToolbar from './components/HeaderToolbar/HeaderToolbar';
import ShoppingCartPreview from './components/ShoppingCartPreview/ShoppingCartPreview';
import FilterPanel from './components/FilterPanel/FilterPanel';
import ProductPage from './components/ProductPage/ProductPage';

const App = () => {
  return (
    <div className="App">
      <div className="HeaderToolbar">
        <HeaderToolbar />
      </div>
      <div className="application-body">
        <div className="FilterPanel">
          <FilterPanel />
        </div>
        <div className="ProductPage">
          <ProductPage />
        </div>
      </div>
      {/* <div className="ShoppingCartPreview">
        <ShoppingCartPreview />
      </div> */}
    </div>
  );
}

export default App;