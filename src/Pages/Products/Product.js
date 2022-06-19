import React from 'react';
import {  useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const {_id, name, image, description, price, minimumOrder, quantity } = product;
    const navigate = useNavigate();

    const navigateToServiceDetail = id =>{
        navigate(`/service/${id}`);
    }
    return (
        <div className="card lg:max-w-lg bg-base-100  shadow-xl">
            <div className="card-body text-center">
                <img src={image} alt="" />
                <h2 className="text-xl font-bold ">{name}</h2>
                <h4 className='text-sm text-accent-content'>{description.slice(0, 100)}</h4>
                <div className="card-actions justify-end">
                    <div className="badge ">Price: {price}$</div>
                    <div className="badge ">Minimum Order: {minimumOrder}</div>
                </div>
                <div className="card-actions justify-end">
                    <div className="badge">Available Quantity: {quantity}</div>
                <button  onClick={() => navigateToServiceDetail(_id)}  className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Purchase</button>
                </div>
            </div>
        </div>
    );
};

export default Product;