import React from 'react';
import banner1 from '../../../asset/Banner/banner-1.jpg'
import banner2 from '../../../asset/Banner/banner-2.jpg'
import banner3 from '../../../asset/Banner/banner-3.jpg'
import banner4 from '../../../asset/Banner/banner-4.jpg'

const Banner = () => {
    return (
        <div>
            <div class="carousel w-full">
                <div id="item1" class="carousel-item w-full">
                    <img src={banner1} class="w-full" />
                </div>
                <div id="item2" class="carousel-item w-full">
                    <img src={banner2} class="w-full" />
                </div>
                <div id="item3" class="carousel-item w-full">
                    <img src={banner3} class="w-full" />
                </div>
                <div id="item4" class="carousel-item w-full">
                    <img src={banner4} class="w-full" />
                </div>
            </div>
            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;