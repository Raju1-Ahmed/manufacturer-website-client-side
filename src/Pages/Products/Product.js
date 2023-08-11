import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, name, image, description, price, minimumOrder, quantity } = product;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={image} alt="" className="w-full h-40 object-cover" />
        <div className="p-6">
            <h2 className="text-xl font-bold text-gray-800">{name}</h2>
            <p className="text-sm text-gray-600 mt-2">{description.slice(0, 100)}</p>
            <div className="flex mt-4 space-x-4">
                <div className="text-gray-700">
                    <p className="text-gray-500 font-semibold">Price</p>
                    {price}$
                </div>
                <div className="text-gray-700">
                    <p className="text-gray-500 font-semibold">Minimum Order</p>
                    {minimumOrder}
                </div>
                <div className="text-gray-700">
                    <p className="text-gray-500 font-semibold">Available Quantity</p>
                    {quantity}
                </div>
            </div>
            <button
                onClick={() => navigateToServiceDetail(_id)}
                className="mt-6 py-2 px-4 flex items-center bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full hover:from-green-600 hover:to-green-700 focus:outline-none focus:ring focus:ring-green-300"
            >
                Purchase
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 ml-2"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M10 2a2 2 0 00-2 2v1H4.388l-1.464 8.001A2 2 0 005.884 15H15v-1a2 2 0 00-2-2H6.707l.293-1.586A1 1 0 006.999 10H13V7a2 2 0 00-2-2H8V4a2 2 0 002-2z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
        </div>
    </div>
    );
};

export default Product;