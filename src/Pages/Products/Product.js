import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, name, image, description, price, minimumOrder, quantity } = product;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className="card lg:max-w-lg bg-base-100  shadow-xl p-0">
            <div className="card-body text-center">
                <img src={image} alt=""  className='w-76'/>
                <h2 className="text-xl font-bold text-left ">{name}</h2>
                <h4 className='text-sm text-accent-content text-left'>{description.slice(0, 100)}</h4>
                <div className="card-actions justify-start">
                    <div className="badge">Price: {price}$</div>
                    <div className="badge ">Minimum Order: {minimumOrder}</div>
                    <div className="badge">Available Quantity: {quantity}</div>
                </div>
                <div className="card-actions justify-start">
                <button  onClick={() => navigateToServiceDetail(_id)}  className="btn btn-xs text-green-400 sm:btn-sm md:btn-md lg:btn-lg">Purchase
                <img src="https://img.icons8.com/nolan/40/fast-cart.png" className='p-3'/>                </button>
                </div>
            </div>
        </div>
    );
};

export default Product;