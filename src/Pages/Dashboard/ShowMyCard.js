import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ShowMyCard = ({ order, index }) => {
    const [products, setProducts] = useState([]);
    const [updated, setUpdated] = useState(false);

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure?');
        if (proceed) {
            const url = `http://localhost:5000/order/${id}`;
            console.log(url);
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    const remaining = products.filter(service => service._id !== id);
                    setProducts(remaining);
                    setUpdated(!updated)

                })
        }
    }
    const {_id, service, quantity, price } = order;
    return (
        <tr>
            <td>
                <div class="flex items-center space-x-3">
                    <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                            <span>{index + 1}</span>
                        </div>
                    </div>
                    <div>
                        <div class="font-bold">{service}</div>
                    </div>
                </div>

            </td>
            <td>
                <span class="badge badge-accent badge-x">{quantity}</span>
            </td>
            <td>
                <span class="badge badge-accent badge-x">{price}</span>
            </td>
            <td>
                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}>
                <button className='btn btn-xs btn-success'>pay</button></Link>}
                {(order.price && order.paid) && <div>
                <p><span className='text-success'>Paid</span></p>
                </div>
                }
            </td>
            <td>
                                    <button
                                        href="#" alt=''
                                        className="btn btn-xs font-medium text-blue-600 dark:text-blue-500 hover:underline"
                                        onClick={() => handleDelete(order._id)}
                                    >
                                        Delete
                                    </button>
                                </td>

        </tr>
    );
};

export default ShowMyCard;