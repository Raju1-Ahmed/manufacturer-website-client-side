import React from 'react';
import Slider from "react-slick";

const IntimateService = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div className='my-16 mb-16'>
      <h2 className='text-center text-white font-black my-12'>FEATURED BRANDS</h2>
      <Slider {...settings}>
        <div>
          <div className='flex justify-around items-center'>
            <div className='border rounded bg-slates-700 '>
              <img src="https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/brand-1.png" alt="" />
            </div>
            <div className='border rounded bg-slates-700 '>
              <img src="https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/brand-3.png" alt="" />
            </div>
            <div className='border rounded  '>
              <img src="https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/brand-5.png" alt="" />
            </div>
            <div className='border rounded  bg-white  '>
              <img src="https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/brand-7.png" alt="" />
            </div>
            <div className='border rounded bg-white '>
              <img src="https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/brand-9.png" alt="" />
            </div>
          </div>
        </div>

        <div>
          <div className='flex justify-around items-center'>
            <div className='border rounded bg-slates-700 '>
              <img src="https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/brand-2.png" alt="" />
            </div>
            <div className='border rounded bg-slates-700 '>
              <img src="https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/brand-4.png" alt="" />
            </div>
            <div className='border rounded  bg-white'>
              <img src="https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/brand-6.png" alt="" />
            </div>
            <div className='border rounded  bg-white  '>
              <img src="https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/brand-7.png" alt="" />
            </div>
            <div className='border rounded bg-white '>
              <img src="https://cdn11.bigcommerce.com/s-35csgqmz9s/product_images/uploaded_images/brand-8.png" alt="" />
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default IntimateService;



// https://i.ibb.co/cx4NXYQ/2-1.jpg
// https://i.ibb.co/09MDMN4/3-1.jpg
// https://i.ibb.co/0QRjnnK/4-1.jpg
// https://i.ibb.co/Nj1BywS/5.jpg