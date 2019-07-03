import './App.scss';
import React from 'react';
import { connect } from 'react-redux';
import HeaderToolbar from './components/HeaderToolbar/HeaderToolbar';
import ShoppingCartPreview from './components/ShoppingCartPreview/ShoppingCartPreview';
import FilterPanel from './components/FilterPanel/FilterPanel';
import ProductPage from './components/ProductPage/ProductPage';
import { showShoppingCart } from './redux/selectors';

const App = (props) => {
  const renderShoppingCart = () => {
    if (props.showShoppingCart()) {
      return (
          <div className="App-ShoppingCartPreview-container">
            <ShoppingCartPreview />
          </div>
      )
    }
    return <div />
  }

  return (
    <div className="App">
      <div className="App-HeaderToolbar-container">
        <HeaderToolbar />
      </div>
      <div className="App-body">
        <div className="App-FilterPanel-container">
          <FilterPanel />
        </div>
        <div className="App-ProductPage-container">
          <ProductPage />
        </div>
      </div>
      {renderShoppingCart()}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    showShoppingCart: () => showShoppingCart(state),
  }
}

export default connect(mapStateToProps)(App);