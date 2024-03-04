import './App.css';
import React from 'react';
import ProductForm from './components/Form/ProductForm';
import ProductProvider from './components/store/ProductProvider';
import Products from './components/Products/Products';
import Header from './components/Layout/Header';

function App() {
  return (
    <React.Fragment>
      <Header onShowCart={showCartHandler}/>
      <ProductProvider>
        <ProductForm />
        <Products/>
      </ProductProvider>
    </React.Fragment>
  );
}

export default App;
