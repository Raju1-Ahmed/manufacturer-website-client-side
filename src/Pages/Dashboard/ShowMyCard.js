import React from 'react';
import { Link } from 'react-router-dom';

const ShowMyCard = ({ order, index }) => {
    console.log(order);
    const {_id, service, quantity, price } = order;
    console.log(order._id);
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
                
                    {/* <p>Transaction id: <span className='text-success'>{a.transactionId}</span></p> */}
                </div>}
            </td>
            {/* <th>
                   <button class="btn btn-success btn-xs">Payment</button>
               </th>
               <th>
                   <button class="btn btn-primary btn-xs">Remove item</button>
               </th> */}

        </tr>
    );
};

export default ShowMyCard;