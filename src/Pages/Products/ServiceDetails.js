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
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-3xl font-semibold mb-6 text-center">Add To Cart</h2>
          <form onSubmit={handlePlaceOrder} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="userName" className="block text-sm font-medium text-gray-700">
                  User Name:
                </label>
                <input
                  type="text"
                  id="userName"
                  value={user?.displayName}
                  name="name"
                  className="input input-bordered w-full"
                  required
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="userEmail" className="block text-sm font-medium text-gray-700">
                  User Email:
                </label>
                <input
                  type="email"
                  id="userEmail"
                  value={user?.email}
                  name="email"
                  className="input input-bordered w-full"
                  required
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                  Product Name:
                </label>
                <input
                  type="text"
                  id="productName"
                  value={service.name}
                  name="service"
                  className="input input-bordered w-full"
                  required
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="productPrice" className="block text-sm font-medium text-gray-700">
                  Price:
                </label>
                <input
                  type="text"
                  id="productPrice"
                  value={service.price}
                  name="price"
                  className="input input-bordered w-full"
                  required
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="minOrders" className="block text-sm font-medium text-gray-700">
                  Minimum Orders:
                </label>
                <input
                  type="text"
                  id="minOrders"
                  value={service.minimumOrder}
                  name="minimumOrder"
                  className="input input-bordered w-full"
                  required
                  readOnly
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                  Quantity:
                </label>
                <input
                  type="text"
                  id="quantity"
                  value={service.quantity}
                  name="quantity"
                  className="input input-bordered w-full"
                  required
                  readOnly
                />
              </div>
              <div className="space-y-2 col-span-2">
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address:
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Type Your Address"
                  name="address"
                  className="input input-bordered w-full"
                  required
                />
              </div>
              <div className="space-y-2 col-span-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number:
                </label>
                <input
                  type="text"
                  id="phone"
                  placeholder="Type Your Phone Number"
                  name="phone"
                  className="input input-bordered w-full"
                  required
                />
              </div>
            </div>
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="btn btn-primary flex items-center space-x-2 px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white"
              >
                Get Products
                <img
                  src="https://img.icons8.com/external-smashingstocks-glyph-smashing-stocks/32/null/external-add-product-shopping-and-commerce-smashingstocks-glyph-smashing-stocks.png"
                  alt="Add Product"
                  className="w-6 h-6 ml-2"
                />
              </button>
            </div>
          </form>
        </div>
      </div>
      
      
    );
};

export default ServiceDetails;