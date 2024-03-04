import { useReducer } from "react";
import ProductContext from "./product-context";


const defaultItemsState={
    items:[]
}

const productReducer=(state,action)=>{
    if (action.type === 'ADD'){
        

        
        const newItem = {
            id: action.item.id,
            name: action.item.name,
            description: action.item.description,
            price: action.item.price
        };


        const updatedItems = [...state.items, newItem];
        return { ...state, items: updatedItems };
    }

    return defaultItemsState;
}

const ProductProvider=props=>{
    const [itemsState,dispatchItemState]=useReducer(productReducer,defaultItemsState);

    const addProductHandler=item=>{
        dispatchItemState({type:'ADD',item:item})
        
    }

    const productContext={
        items:itemsState.items,
        addItem:addProductHandler,
    }
    console.log(productContext.items)
    return <ProductContext.Provider value={productContext}>{props.children}</ProductContext.Provider>
}

export default ProductProvider