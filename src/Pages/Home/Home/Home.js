import React from 'react';
import IntimateService from '../../Products/IntimateService';
import Products from '../../Products/Products';
import Footer from '../../Shared/Footer/Footer';
import Banner from '../Banner/Banner';
import BusinessSummary from '../BusinessSummary/BusinessSummary';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <IntimateService/>
            <BusinessSummary></BusinessSummary>
            <Footer></Footer>
        </div>
    );
};

export default Home;