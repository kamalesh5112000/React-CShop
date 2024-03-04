import React,{useContext, useEffect, useReducer,useRef, useState} from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import './ProductFrom.css';
import ProductContext from '../store/product-context';

const productNameReducer=(state,action)=>{
    if(action.type==='USER_INPUT'){
        
        return {value:action.value,isValid:action.value.trim().length>0}
    }
    if(action.type==='INPUT_BLUR'){
        return {value:state.value,isValid:state.value.trim().length>0}
    }
    if(action.type==='NEW_FORM'){
        return {value:'',isValid:null}
    }
    return {value:'',isValid:false}
}

const productDescReducer=(state,action)=>{
    if(action.type==='USER_INPUT'){
        return {value:action.value,isValid:action.value.trim().length>2}
    }
    if(action.type==='INPUT_BLUR'){
        return {value:state.value,isValid:state.value.trim().length>2}
    }
    if(action.type==='NEW_FORM'){
        return {value:'',isValid:null}
    }
    return {value:'',isValid:false}
}

const productPriceReducer=(state,action)=>{
    if(action.type==='USER_INPUT'){
        return {value:action.value,isValid:+action.value.trim()>0}
    }
    if(action.type==='INPUT_BLUR'){
        return {value:state.value,isValid:+state.value.trim()>0}
    }
    if(action.type==='NEW_FORM'){
        return {value:'',isValid:null}
    }
    return {value:'',isValid:false}
}

const ProductForm=(props)=>{
    const productCtx=useContext(ProductContext);
    const addItem=item=>{
        productCtx.addItem(item)
    }

    const productNameInputRef=useRef();
    const productDescInputRef=useRef();
    const productPriceInputRef=useRef();

    const [productNameState,dispatchProductID]=useReducer(productNameReducer,{value:'',isValid:null})
    const [productDescState,dispatchProductName]=useReducer(productDescReducer,{value:'',isValid:null})
    const [productPriceState,dispatchProductPrice]=useReducer(productPriceReducer,{value:'',isValid:null})

    const [buttonIsValid,setButtonIsValid]=useState(false);

    useEffect(()=>{

        const buttonValidationTimer=setTimeout(()=>{
            setButtonIsValid(productNameState.isValid && productDescState.isValid && productPriceState.isValid)
        },500);

        return ()=>{
            clearTimeout(buttonValidationTimer)
        }

    },[productNameState,productDescState,productPriceState]);


    const productIdChangeHandler= () =>{
        dispatchProductID({type:'USER_INPUT',value:productNameInputRef.current.value});

    }
    const validateProductIdHandler=()=>{
        dispatchProductID({type:'INPUT_BLUR'})
    }

    const productNameChangeHandler= () =>{
        dispatchProductName({type:'USER_INPUT',value:productDescInputRef.current.value});

    }
    const validateProductNameHandler=()=>{
        dispatchProductName({type:'INPUT_BLUR'})
    }

    const productPriceChangeHandler= () =>{
        dispatchProductPrice({type:'USER_INPUT',value:productPriceInputRef.current.value});

    }
    const validateProductPriceHandler=()=>{
        dispatchProductPrice({type:'INPUT_BLUR'})
    }

    

    const submitHandler=e=>{
        e.preventDefault();
        
        const item={
            id:productCtx.items.length+1,
            name:productNameState.value,
            description:productDescState.value,
            price:productPriceState.value

        }
        addItem(item)
        productNameInputRef.current.value='';
        dispatchProductID({type:'NEW_FORM'})
        productDescInputRef.current.value='';
        dispatchProductName({type:'NEW_FORM'})
        productPriceInputRef.current.value='';
        dispatchProductPrice({type:'NEW_FORM'})
    }




    return(
        <Card>
            <form onSubmit={submitHandler}>
                <div className='productform'>
                    <div className='productform-controls'>
                        <div className='productform-control'>
                            <label>Product Name</label>
                            <input type='text' ref={productNameInputRef} onChange={productIdChangeHandler} className={productNameState.isValid===false? 'invalid' : ''} onBlur={validateProductIdHandler} />
                        </div>
                        <div className='productform-control'>
                            <label>Product Description</label>
                            <input type="text" ref={productDescInputRef} onChange={productNameChangeHandler} className={productDescState.isValid===false? 'invalid' : ''} onBlur={validateProductNameHandler} />
                        </div>
                        <div className='productform-control'>
                            <label>Price</label>
                            <input type="number" ref={productPriceInputRef} onChange={productPriceChangeHandler} className={productPriceState.isValid===false? 'invalid' : ''} onBlur={validateProductPriceHandler} />
                            
                        </div>
                        
                    </div>

                    <Button type='submit' className={'button'} disabled={!buttonIsValid}>Add Product</Button>

                </div>
            </form>
        </Card>
    )

}

export default ProductForm;