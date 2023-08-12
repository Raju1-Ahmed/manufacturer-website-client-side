import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, name, image, description, price, minimumOrder, quantity } = product;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className="bg-dark shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt="" className="w-full h-40 object-cover" />
        <div className="p-6">
            <h2 className="text-xl font-bold text-white">{name}</h2>
            <p className="text-sm text-white mt-2">{description.slice(0, 100)}</p>
            <div className="flex mt-4 space-x-4">
                <div className="text-white">
                    <p className="text-white font-semibold">Price</p>
                    {price}$
                </div>
                <div className="text-white">
                    <p className="text-white font-semibold">Minimum Order</p>
                    {minimumOrder}
                </div>
                <div className="text-white">
                    <p className="text-white font-semibold">Available Quantity</p>
                    {quantity}
                </div>
            </div>
            <button
                onClick={() => navigateToServiceDetail(_id)}
                className="mt-6 py-2 px-4 flex items-center bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
                Purchase
                <img src="https://img.icons8.com/nolan/30/fast-cart.png" className=' ml-1 text-black '/>
            </button>
        </div>
    </div>
    );
};

export default Product;








