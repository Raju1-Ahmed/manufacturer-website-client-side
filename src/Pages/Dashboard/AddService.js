import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `http://localhost:5000/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return (
        <div className='flex h-screen justify-center items-center'>
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-2xl font-bold">Add To Card</h2>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                        <input type="text"   placeholder="name" {...register("name", { required: true, maxLength: 20 })} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                      <textarea className="input input-bordered w-full max-w-xs" placeholder='Description' {...register("description")} />

                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                        <input placeholder='Photo URL' type="text"{...register("image")}  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span> Price:</span>
                        </label>
                        <input type="number" {...register("price")} className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span> Minimum Orders:</span>
                        </label>
                        <input type="number" {...register("minimumOrder")}  className="input input-bordered w-full max-w-xs"  />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span> Quantity:</span>
                        </label>
                        <input type="number" {...register("quantity")}  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <input className='btn mt-3 w-full max-w-xs text-white' type="submit" value="Add Product" />
                </form>
            </div>
        </div>
    </div >
    );
};

export default AddService;