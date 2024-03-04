import React, { useContext } from 'react';
import Card from '../UI/Card';
import ProductItem from './ProductItem';
import './Products.css'
import ProductContext from '../store/product-context';


const Products=(props)=>{
    
    const productCtx =useContext(ProductContext);
    const productList=productCtx.items.map((item)=><ProductItem key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} />)
    return (
        <div className='products'>
            <Card >
            {
                <ul>{productList}</ul>
            }
        </Card>

        </div>
        
    );

}

export default Products