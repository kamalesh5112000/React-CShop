import './App.css';
import React,{useState} from 'react';
import ProductForm from './components/Form/ProductForm';
import ProductProvider from './components/store/ProductProvider';
import Products from './components/Products/Products';
import Header from './components/Layout/Header';
import CartProvider from './components/store/CartProvider';
import Cart from './components/Cart/Cart';


function App() {
  const [cartIsShown,setCartIsShown]=useState(false);

  const showCartHandler=()=>{
    setCartIsShown(true)
  }
  const hideCartHandler=()=>{
    setCartIsShown(false);
  }
  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <main>
      <ProductProvider>
        <ProductForm />
        <Products/>
      </ProductProvider>

      </main>
      
    </CartProvider>
  );
}

export default App;
