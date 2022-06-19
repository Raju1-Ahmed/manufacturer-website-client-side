import React from 'react';
import { Button } from 'react-bootstrap';
import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ShowReview = ({ review }) => {
    const { reviewerName, reviewDescription, reviewRate } = review;
    return (
        <div className="card-body shadow-xl">
            <h2 className="card-title"><span className='text-primary'>{reviewerName}</span> </h2>
            <p className='text-accent-content'>{reviewDescription.slice(0, 150)}</p>
            <div className="card-actions justify-end">
                <Button> <FontAwesomeIcon icon={faRankingStar}></FontAwesomeIcon>{reviewRate} </Button>
                
            </div>
        </div>
    );
};

export default ShowReview;