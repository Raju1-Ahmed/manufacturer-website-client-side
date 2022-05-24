import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [user] = useAuthState(auth);
    console.log(user);
    useEffect(() => {
        const url = `http://localhost:5000/service/${serviceId}`;
        console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data));

    }, [])

    const handlePlaceOrder = event => {
        event.preventDefault();
        const order = {
            email: user.email,
            img: service.img,
            service: service.name,
            quantity: service.quantity,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('http://localhost:5000/order', order)
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
                <h2 className="text-center text-2xl font-bold">Add To Card</h2>
                <form onSubmit={handlePlaceOrder}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                        <input type="email"value={user?.displayName} name="name" placeholder="name" className="input input-bordered w-full max-w-xs" required readOnly  />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                        <input type="email" value={user?.email} name="email" placeholder="name" className="input input-bordered w-full max-w-xs" required readOnly />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                        <input type="text" value={service.name} name="service"  className="input input-bordered w-full max-w-xs" required readOnly />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                            <span> Quantity:</span>
                        </label>
                        <input type="text" value={service.availableQuantity} name="Quantity" className="input input-bordered w-full max-w-xs" required readOnly />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                        <input type="text" placeholder='Address' name="address"  className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className="form-control w-full max-w-xs">
                        <label className="label">
                        </label>
                        <input type="text" name="phone" placeholder='Phone' className="input input-bordered w-full max-w-xs" />
                    </div>

                    <input className='btn mt-3 w-full max-w-xs text-white' type="submit" value="Get Products" />
                </form>
            </div>
        </div>
    </div >
    );
};

export default ServiceDetails;