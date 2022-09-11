import React, { useEffect, useState } from 'react';
import { TiDeleteOutline } from 'react-icons/ti';
import { CartState } from '../context/Context';

const Checkout = () => {
    const { state: { cart }, dispatch } = CartState()
    console.log(cart.qty)
    const [total, setTotal] = useState()
    useEffect(() => {
        const totalPrice= cart.reduce((prev, current) => prev + Number(current.price) * current.qty, 0)
        setTotal(totalPrice)
    }, [cart])
    console.log()
    return (
        <div className='flex mx-12 justify-around'>
            <table class="mt-12" style={{width: 800}}>
                <thead class="bg-white border-b">
                    <tr>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Product
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Price
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Quantity
                        </th>
                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Subtotal
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(prod => <tr>
                            <td>
                                <button onClick={() => {
                                    dispatch(
                                        {
                                            type: "UNCHECK_FROM_ADDCART",
                                            payload: prod,
                                        }
                                    )
                                }}>
                                    <TiDeleteOutline size={20}></TiDeleteOutline>
                                </button>
                            </td>
                            <td>{prod.title }</td>
                            <td>{prod.price }</td>
                            <td>
                                <select onChange={(e) =>
                                    dispatch({
                                        type: 'QUANTITY',
                                        payload: {
                                            id: prod.id,
                                            qty : e.target.value
                                        }
                                })
                                } type="number" value={prod.qty} className="w-24" >
                                    {
                                        [...Array(prod.stock).keys()].map((st) => (
                                            <option key={st + 1}>{st + 1 }</option>
                                        ))
                                    }
                            </select>
                                
                            </td>
                            <td>{} </td>
                        </tr>)
                    }

                </tbody>
            </table>
            <div className='w-96 border border-gray-200 py-12 px-6 mt-12'>
                <h2 className='text-3xl'> Cart Totals</h2>
                <div className='flex justify-between mb-3'>
                    <p>Sub-total</p>
                    <p>Price : { cart.price}</p>
                </div>
                <hr />
                <div className='flex justify-between'>
                    <p className='text-xl font-bold'>Total</p>
                    <p>Price : {total}</p>
                </div>
                
            </div>
        </div>
    );
};

export default Checkout;