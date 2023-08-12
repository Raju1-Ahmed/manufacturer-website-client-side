import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaStar } from 'react-icons/fa';

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://autoparts.onrender.com/review')
            .then((res) => res.json())
            .then((data) => {
                setReviews(data);
                setLoading(false);
            });
    }, []);

    const sliderSettings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span key={i} className={i <= rating ? 'text-accent-content' : 'text-gray-400'}>
                    <FaStar />
                </span>
            );
        }
        return stars;
    };

    return (
        <div className='container mx-auto'>
            <h4 className='text-xl font-bold text-accent-content mb-4'>Customer Reviews</h4>

            <div className='bg-slates-900 rounded-lg shadow-md'>
                {loading ? (
                    <div className='flex justify-center items-center h-40'>
                        <div className="animate-spin rounded-full border-t-4 border-blue-500 border-opacity-50 h-12 w-12"></div>                   
                    </div>
                ) : (
                    <Slider {...sliderSettings}>
                        {reviews.map((review) => (
                            <div key={review._id}>
                                <div className='flex flex-col justify-center items-center h-[250px] w-[250px] bg-slates-800 border border-red rounded-lg shadow-md'>
                                    <p className='text-left text-white p-1'>{review.reviewDescription.slice(0, 150)}</p>
                                    <p className='mt-2 text-sm text-left text-white'>{review.reviewerName}</p>
                                    <div className='flex justify-start items-center mt-1 text-sm text-left text-white'>
                                        {renderStars(review.reviewRate)}
                                        <span className='ml-2'>{review.reviewRate} / 5</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                )}
            </div>
        </div>
    );
};

export default Review;
