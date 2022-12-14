import React from 'react';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://autoparts.onrender.com/service`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                const {data} = result;
                if(!data){
                    toast("Your Product is Uploaded")
                } else{
                    toast("Your Product is Not Uploaded !")
                }
            })
    };


    return (
        <div className='p-5 bg-white rounded m-5'>
                <h2 className="text-center text-2xl font-bold">Add To Card</h2>
                <form onSubmit={handleSubmit(onSubmit)} 
                className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5 ">

                    <div className="border-b-2 border-green-500">
                        <input type="text"   placeholder="Type Name" {...register("Type Name", { required: true, maxLength: 20 })} className="input bg-white  w-full max-w-xs" />
                    </div>
                    <div className="border-b-2 border-green-500">
                      <textarea className="input bg-white w-full max-w-xs" placeholder='Type Description' {...register("description")} />

                    </div>
                    <div className="border-b-2 border-green-500">
                        <input placeholder='Type PhotoURL'  type="text"{...register("image")}  className="input bg-white w-full max-w-xs" />
                    </div>
                    <div className="border-b-2 border-green-500">
                        <input type="number"  placeholder='Type Price' {...register("price")} className="input bg-white w-full max-w-xs" />
                    </div>
                    <div className="border-b-2 border-green-500">
                        <input type="number"  placeholder='Type Minimum Order' {...register("minimumOrder")}  className="input bg-white w-full max-w-xs"  />
                    </div>
                    <div className="border-b-2 border-green-500">
                        <input type="number" placeholder='Type Quantity' {...register("quantity")}  className="input bg-white w-full max-w-xs" />
                    </div>
                   
                </form>
                   <span className='mt-5 flex items-end justify-end'>
                  <div className='w-40 p-3  rounded  bg-green-400 hover:bg-green-800 flex'>
                  <input className='mr-2 text-green-900 text-lg hover:text-white' type="submit" value="Add Product" />
                  <img src="https://img.icons8.com/ios/30/null/add-property.png"/>

                  </div>
                    </span>
        </div>
    );
};

export default AddService;