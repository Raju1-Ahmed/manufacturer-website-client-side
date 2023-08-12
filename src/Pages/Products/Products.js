import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://autoparts.onrender.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, []);

    return (
        <div className='my-10'>
            <h4 className='text-xl font-bold text-center my-12 text-white'>Our Popular Products</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {loading ? (
                    <div className='flex justify-center items-center h-40'>
                    <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-50 h-12 w-12"></div>                   
                </div>
                ) : (
                    // Display products once data is ready
                    products.map(product => (
                        <Product
                            key={product._id}
                            product={product}
                        ></Product>
                    ))
                )}
            </div>
        </div>
    );
};

export default Products;
