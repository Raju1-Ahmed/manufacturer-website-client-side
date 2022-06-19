import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3QC3Kn3y7yc6KFiVkjcQcPsm9xnNNybEWaEBz0QzPMbc4BtdS5SABBa2HE8EnBI7DcHbXY3QXnGw3IZ0gBV4uw00h7oDWtcr');


const Payment = () => {
    const { id } = useParams();
    const url = `http://localhost:5000/order/${id}`;
    console.log(url);

    const { data: detail, isLoading } = useQuery(['Order', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
        <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div className="card-body">
                <p className="text-success font-bold">Hello, {detail.name}</p>
                <h2 className="card-title">Please Pay for {detail.service}</h2>
                <p>Please pay: ${detail.price}</p>
            </div>
        </div>
        <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div className="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm detail={detail} />
                </Elements>
            </div>
        </div>
    </div>
    );
};

export default Payment;