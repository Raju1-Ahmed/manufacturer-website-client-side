import axios from 'axios';
import React from 'react';
import { toast } from 'react-toastify';

const AddReview = () => {
    const handlePlaceOrder = event => {
        event.preventDefault();
        const reviewCollect = {
            reviewerName: event.target.reviewerName.value,
            reviewDescription: event.target.reviewDescription.value,
            reviewRate: event.target.reviewRate.value
        }
        axios.post('http://localhost:5000/review', reviewCollect)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!');
                    event.target.reset();
                }
            })
    }
    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Add To Review</h2>
                <form onSubmit={handlePlaceOrder}>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                      <textarea  type="text"   name="reviewerName" className="input input-bordered w-full max-w-xs" placeholder='Reviewer Name' />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                      <textarea  type="text"   name="reviewDescription" className="input input-bordered w-full max-w-xs" placeholder='Review Description' />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                        <input type="number" name="reviewRate" placeholder='Review Rating' className="input input-bordered w-full max-w-xs" />
                    </div>

                    <input className='btn mt-3 w-full max-w-xs text-white' type="submit" value="Add" />
                </form>
            </div>
        </div>
    </div >
    );
};

export default AddReview;