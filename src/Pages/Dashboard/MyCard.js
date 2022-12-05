import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import ShowMyCard from './ShowMyCard';


const MyCard = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    useEffect(() => {

        const getOrders = async () => {
            const email = user.email;
            const url = `https://autoparts.onrender.com/order?email=${email}`;
            const { data } = await axios.get(url, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            }
            );
            setOrders(data)
        };
        getOrders();
    }, [user])

    return (
        // <div>
        //     <h2>My All Products: {orders.length}</h2>
        //     <div className="overflow-x-auto">
        //         <table className="table w-full">
        //             <thead>
        //                 <tr>
        //                     <th></th>
        //                     <th>Service Name</th>
        //                     <th>Provider Address</th>
        //                     <th>Provider Email</th>
        //                     <th>Provider Mobile</th>
        //                     <th>Order Quantity</th>
        //                 </tr>
        //             </thead>
                   
        //         </table>
        //     </div>
        // </div>
    //     <tbody>
    //     {
    //         orders.map((a, index) => <tr>
    //             <th>{index + 1}</th>
    //             <td>{a.service}</td>
    //             <td>{a.address}</td>
    //             <td>{a.email}</td>
    //             <td>{a.phone}</td>
    //             <td>{a.quantity}</td>
    //         </tr>)
    //     }
    // </tbody>
    <div className="overflow-x-auto w-full">
    <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
            <tr>
                <th>Product Name</th>
                <th>Order Quantity</th>
                <th>Products Price</th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
            {
                orders.map((order, index) => <ShowMyCard
                key={order._id}
                index={index}
                order={order}
                >

                </ShowMyCard>)
            }
        </tbody>

    </table>
</div>
    );
};

export default MyCard;