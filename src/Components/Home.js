import { default as React } from 'react';
import { CartState } from '../context/Context';
import SingleProduct from './SingleProduct';


const Home = () => {
    const { state:{products} } = CartState()
    console.log(products)

    return (
        <div>
            <div class="flex flex-col">
                <div>
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="bg-white border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Image
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Name
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Stock
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            price
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Buy
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        products.map(prod => <SingleProduct prod ={prod} key={prod.id}></SingleProduct> )
                                    }
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;