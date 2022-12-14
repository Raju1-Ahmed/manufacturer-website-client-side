import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';



const Products = () => {
    const [products, setProducts] = useState([]);
    console.log(products);
    useEffect(() => {
        fetch('https://autoparts.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    return (
        <div className='my-10'>
            <h4 className='text-xl font-bold text-center my-12'>Popular Products</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    products.map(product => <Product
                        key={product._id}
                        product={product}
                    ></Product>)
                }
            </div>
        </div>
    );
};

export default Products;