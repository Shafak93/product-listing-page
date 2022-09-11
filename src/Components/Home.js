import { default as React } from 'react';
import { CartState } from '../context/Context';
import Filters from './Filters';
import SingleProduct from './SingleProduct';


const Home = () => {
    const { state: { products }, filterState: { byCategory, byBrand, bySearch }, filterDispatch } = CartState()
  
    const filterFunc = () => {
        let filterProducts = products;
        if (byCategory) {
            filterProducts = filterProducts.filter((prod)=> prod.category.toLowerCase().includes(byCategory))
        }
        if (byBrand) {
            filterProducts = filterProducts.filter((prod) => prod.brand.includes(byBrand))
        }
        if (bySearch) {
            filterProducts = filterProducts.filter((prod) => prod.title.toLowerCase().includes(bySearch))
        }
        return filterProducts
    }
    return (
        <div>
            <Filters />
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
                                            Rating
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Price
                                            
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Buy
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        filterFunc().map(prod => <SingleProduct prod ={prod} key={prod.id}></SingleProduct> )
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