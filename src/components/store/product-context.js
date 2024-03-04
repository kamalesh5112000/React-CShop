import React from "react";

const ProductContext= React.createContext({
    items:[],
    addItem:(item)=>{},
});

export default ProductContext