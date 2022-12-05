import React, { useEffect, useState } from 'react';
import ShowReview from '../Review/ShowReview'
const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://autoparts.onrender.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);
    return (
        <div className='my-10'>
            <h4 className='text-xl font-bold text-center text-accent-content my-12'>Customer Reviews...</h4>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-5'>
            {reviews.map(review =>  <ShowReview
            key={review._id}
            review={review}
            />)}
    </div>
    </div>
    );
};

export default Review;