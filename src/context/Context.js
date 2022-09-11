import React, { createContext, useContext, useReducer } from 'react';
import products from './data.json';
import { cartReducer, filterReducer } from './Reducers';

const Cart =  createContext()
const Context = ({ children }) => {
   
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart : []
    })
    const [filterState, filterDispatch] = useReducer(filterReducer, {
        byCategory: "",
        byBrand: "",
        reset: '',
        bySearch : ""
    })
    // console.log(state)
    return (
        <Cart.Provider value={{ state, dispatch, filterState, filterDispatch }}>{children}</Cart.Provider>
    );
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
}
