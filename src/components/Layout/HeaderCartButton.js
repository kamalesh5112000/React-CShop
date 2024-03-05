import React,{useContext} from 'react';
import classes from './HeaderCartButton.module.css';
import CartContext from '../store/cart-context';

const HeaderCartButton = (props) => {
    const cartCtx=useContext(CartContext)
    const numberOfCartItem=cartCtx.items.reduce((curNumer,item)=>{
        return curNumer+item.amount;
    },0);
  return (
    <button className={classes.button} onClick={props.onClick}>
      
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};

export default HeaderCartButton;