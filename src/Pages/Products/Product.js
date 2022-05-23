import React from 'react';


const Product = ({ product }) => {
    const { name, image, description, price, minimumOrder, availableQuantity } = product;
    return (
        <div className="card lg:max-w-lg bg-base-100  shadow-xl">
            <div className="card-body text-center">
                <img src={image} alt="" />
                <h2 className="text-xl font-bold ">{name}</h2>
                <h4 className='text-sm'>{description.slice(0, 100)}</h4>
                <div class="card-actions justify-end">
                    <div class="badge ">Price: {price}$</div>
                    <div class="badge ">Minimum Order: {minimumOrder}</div>
                </div>
                <div class="card-actions justify-end">
                    <div class="badge">Available Quantity: {availableQuantity}</div>
                    <button class="btn btn-outline">Purches</button>

                </div>
            </div>
        </div>
    );
};

export default Product;