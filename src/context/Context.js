import React, { createContext, useContext, useReducer } from 'react';
import products from './data.json';
import { cartReducer } from './Reducers';

const Cart =  createContext()
const Context = ({ children }) => {
   
    const [state, dispatch] = useReducer(cartReducer, {
        products: products,
        cart : []
    })
    // console.log(state)
    return (
        <Cart.Provider value={{ state, dispatch}}>{children}</Cart.Provider>
    );
};

export default Context;

export const CartState = () => {
    return useContext(Cart);
}



 //===============================================================
    // let allData = [];
    // const getProducts = async () => {
    //     const res = await fetch('https://dummyjson.com/products')
    //     const data = await res.json()
    //     return allData.push(data.products)
    // }
    //===================================================

//     const getProducts =  () => {
//         let allData
//            fetch('https://dummyjson.com/products')
//                .then(response => response.json())
//                .then(data => {
//                    allData = data.products
//                })
//        }
// getProducts()