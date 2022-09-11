import React from 'react';
import { CartState } from '../context/Context';

const SingleProduct = ({ prod }) => {
    const { state: { cart }, dispatch } = CartState();
    return (
        <tr class="bg-white border-b transition duration-300 ease-in-out hover:bg-gray-100">
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <img className='w-24' src={prod.thumbnail} alt="" />
            </td>
            <td class="text-xl text-gray-900 font-light px-6 py-4 ">
                {prod.title}
            </td>
            <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {prod.stock > 0 ? prod.stock : <span>Out Of Stock</span> }
            </td>
            <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {prod.rating}
            </td>
            <td class="text-xl text-gray-900 font-light px-6 py-4 whitespace-nowrap">
               $ {prod.price}
            </td>
            <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                {
                    cart.some((p) => p.id === prod.id) ? (
                        <input
                            onClick={() => {
                                dispatch(
                                    {
                                        type: "UNCHECK_FROM_ADDCART",
                                        payload: prod,
                                    }
                                )
                            }}
                            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    ) : (
                            <input
                                onClick={() => {
                                    dispatch(
                                        {
                                            type: "CHECK_TO_ADDCART",
                                            payload: prod,
                                        }
                                    )
                                }}
                                class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer" type="checkbox" value="" id="flexCheckDefault" />
                    )
                    }
                        
            </td>
        </tr>
    );
};

export default SingleProduct;

