import Card from "../UI/Card"
import './ProductItem.css';

const ProductItem=(props)=>{

    
    return (
        <div className="product-item">
            <Card>
                <div className="product-info">
                    <span>Name: {props.name}</span>
                    <span>Description: {props.description}</span>
                    <span>Price: {props.price}</span>
                    <button className="add-button">Buy 1</button>
                    <button className="add-button">Buy 2</button>
                    <button className="add-button">Buy 3</button>
                </div>
            </Card>
        </div>
    );

}

export default ProductItem;