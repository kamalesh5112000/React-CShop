import { useContext } from "react";
import Card from "../UI/Card"
import './ProductItem.css';
import CartContext from "../store/cart-context";

const ProductItem=(props)=>{
    const cartCtx = useContext(CartContext)
    const buyOneHandler=()=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:1,
            price:props.price
        })
    }
    const buytwoHandler=()=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:2,
            price:props.price
        })

    }
    const buythreeHandler=()=>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:3,
            price:props.price
        })

    }

    
    return (
        <div className="product-item">
            <Card>
                <div className="product-info">
                    <span>Name: {props.name}</span>
                    <span>Description: {props.description}</span>
                    <span>Price: {props.price}</span>
                    <button className="add-button" onClick={buyOneHandler}>Buy 1</button>
                    <button className="add-button" onClick={buytwoHandler}>Buy 2</button>
                    <button className="add-button"onClick={buythreeHandler}>Buy 3</button>
                </div>
            </Card>
        </div>
    );

}

export default ProductItem;