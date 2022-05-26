import React, { useState } from 'react';
import UseProduct from '../../hooks/UseProduct';

const ManageOrders = () => {
    const [products, setProducts] = UseProduct([]);
    console.log(products);
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/products/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);
                })
        }
    }
    return (
        //     <div className='col-sm-w-50 '>
        //     <h2 className='d-inline mt-5 mx-auto clr'>Manage your services</h2>
        //     {
        //         products.map(product => <div
        //             key={product._id}>

        //             <div className='d-flex '>
        //                 <img className=' mt-2 ' width={100} height={100} src={product.image} alt="" />
        //                 <h5 className='manageh2'> name: {product.name} <button className='mx-2 w-25  border btnBG' onClick={() => handleDelete(product._id)}>
        //                     <a>x</a>
        //                 </button></h5>
        //             </div>
        //         </div>)
        //     }
        // </div>

        <div class="overflow-x-auto w-full">
            <table class="table w-full">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <th>image or Name </th>
                        <th>Available Quantity or MInimum Order</th>
                        <th>Manage Item</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                {
            products.map(product =><tr 
            key={product._id}>
                        <th>
                            <label>
                                <input type="checkbox" class="checkbox" />
                            </label>
                        </th>
                        <td>
                            <div class="flex items-center space-x-3">
                                <div class="avatar">
                                    <div class="mask mask-squircle w-12 h-12">
                                        <img src={product.image} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>
                                <div>
                                    <div class="font-bold">{product.name}</div>
                                    <div class="text-sm opacity-50">United States</div>
                                </div>
                            </div>
                        </td>
                        <td>
                            <br/>
                                <span class="badge badge-success badge-x">
                                   Available Quantity<h1 className='text-primary font-bold'>${product.quantity}</h1> MInimum Order: <h1 className='text-primary font-bold'>${product.minimumOrder}</h1> 
                                </span>
                        </td>
                        <th>
                            <button onClick={() => handleDelete(product._id)} class="btn btn-primary btn-xs">details</button>
                        </th>
                    </tr>
            )}
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;