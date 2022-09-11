import React from 'react';
import { AiTwotoneDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';

const Filters = () => {
    const { state: { products, cart }, dispatch } = CartState()
    console.log(cart)
    return (
        <div className='mx-12 mt-12'>
            <div className='flex justify-between'>
                
                <div class="flex">

                    <div class="mb-3 xl:w-36 mr-3">
                            {/* filter by category */}
                        <select class="form-select appearance-none block w-full px-3 text-base py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            <option value="smartphones">smartphones</option>
                            <option value="laptops">laptops</option>
                            <option value="fragrances">fragrances</option> 
                            <option value="skincare">skincare</option> 
                            <option value="groceries">groceries</option> 
                            <option value="home-decoration">home-decoration</option> 
                        </select>
                    </div>
                    {/* Filter by Brand */}
                    <div class="mb-3 xl:w-36">
                        <select class="form-select appearance-none block w-full px-3 text-base py-1.5 font-normal text-gray-700 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" aria-label="Default select example">
                            {/* {
                                products.map(ct => <option value="1">{ct.category}</option> )
                            } */}
                            <option value="smartphones">Apple</option>
                            <option value="laptops">Samsung</option>
                            <option value="fragrances">OPPO</option> 
                            <option value="skincare">Huawei</option> 
                            <option value="groceries">Microsoft Surface</option> 
                            <option value="home-decoration">Infinix</option> 
                            <option value="home-decoration">HP Pavilion</option> 
                        </select>
                    </div>
                    {/* Reset Button */}
                    <div class="space-x-2 my-1 ml-2">
                        <button
                            type="button"
                            data-mdb-ripple="true"
                            data-mdb-ripple-color="light"
                            class="inline-block px-6 py-2 bg-blue-600 text-white font-medium text-xs  uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        >Reset</button>
                    </div>
                </div>
                
                
                <div>
                    <div class="mb-3 xl:w-48">
                        <div class="input-group relative flex flex-wrap items-stretch w-full mb-4">
                            <input type="search" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                        </div>
                    </div>
                    {/* Dropdown */}
                    <div>
                        <div className="ml-2 dropdown">
                            
                            <label tabIndex={0} className="btn m-1"> {cart.length > 0 ? <span>{cart.length} ITEM ADDED </span> : <span>ADD TO CART {cart.length} </span> } </label>
                            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100">
                                {
                                    cart.map(c =>
                                        <div className='w-36 flex justify-between py-4'>
                                            <p>{c.title}</p>
                                            <button onClick={() => {
                                                dispatch(
                                                    {
                                                        type: "UNCHECK_FROM_ADDCART",
                                                        payload: c,
                                                    }
                                                )
                                            }}><AiTwotoneDelete size={20}></AiTwotoneDelete></button>
                                            
                                        </div>
                                    )
                                }
                                {
                                cart.length > 0 ?
                                <Link to='/checkout' className='bg-gray-600 py-3 text-white text-center'>Go to cart</Link>
                                :
                                <span>Cart is empty</span> 
                                }
                                
                            </ul>
                        </div>
                    </div>
                    </div>
                
                
            </div>
        </div>
    );
};

export default Filters;
