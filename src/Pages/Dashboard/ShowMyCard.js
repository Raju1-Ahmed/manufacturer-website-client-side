import React from 'react';

const ShowMyCard = ({order, index}) => {
    console.log(order);
    const {service, quantity} = order;
    
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
                    <span class="badge badge-ghost badge-sm">{quantity}</span>
               </td>
              
               <th>
                   <button class="btn btn-success btn-xs">Payment</button>
               </th>
               <th>
                   <button class="btn btn-primary btn-xs">Remove item</button>
               </th>
               
           </tr>
    );
};

export default ShowMyCard;