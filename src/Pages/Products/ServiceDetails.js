import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import 'react-toastify/dist/ReactToastify.css';


const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    const [user] = useAuthState(auth);
    useEffect(() => {
        const url = `https://autoparts.onrender.com/service/${serviceId}`;
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
            price: service.price,
            minimumOrder: service.minimumOrder,
            quantity: service.quantity,
            serviceId: serviceId,
            address: event.target.address.value,
            phone: event.target.phone.value
        }
        axios.post('https://autoparts.onrender.com/order', order)
            .then(response => {
                const { data } = response;
                if (data.insertedId) {
                    toast('Your order is booked!!!')
                    event.target.reset();
                }
            })
    }
    return (
        <div className=''>
            <div className="container mt-16 mb-48 bg-base-100 shadow-xl p-5">
                <h2 className="text-center text-2xl font-bold">Add To Card</h2>
                <form onSubmit={handlePlaceOrder}>

                    <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-5">
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                User Name:
                            </label>
                            <input type="email" value={user?.displayName} name="name" placeholder="name" className="input input-bordered w-full max-w-xs" required readOnly />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                User Email:
                            </label>
                            <input type="email" value={user?.email} name="email" placeholder="name" className="input input-bordered w-full max-w-xs" required readOnly />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                Product name:
                            </label>
                            <input type="text" value={service.name} name="service" className="input input-bordered w-full max-w-xs" required readOnly />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span> Price:</span>
                            </label>
                            <input type="text" value={service.price} name="price" className="input input-bordered w-full max-w-xs" required readOnly />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span> Minimum Orders:</span>
                            </label>
                            <input type="text" value={service.minimumOrder} name="minimumOrder" className="input input-bordered w-full max-w-xs" required readOnly />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span> Quantity:</span>
                            </label>
                            <input type="text" value={service.quantity} name="quantity" className="input input-bordered w-full max-w-xs" required readOnly />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                            </label>
                            <input type="text" placeholder='Type Your Address' name="address" className="input input-bordered w-full max-w-xs" />
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                            </label>
                            <input type="text"  name="phone" placeholder='Type Your Phono Number' className="input input-bordered w-full max-w-xs" />
                        </div>
                    </div>
                    <span className='mt-5 flex items-end justify-end'>
                  <div className='w-36 p-2 rounded  bg-green-400 hover:bg-green-800 flex'>
                  <input className=' text-green-900 text-lg hover:text-white' type="submit" value="Get Products" />
                    <img src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/32/null/external-add-product-shopping-and-commerce-smashingstocks-glyph-smashing-stocks.png"/>
                  </div>
                    </span>
                </form>
            </div>
        </div >
    );
};

export default ServiceDetails;