import React from 'react';
import clothingWerehouse from '../../../asset/portfulioImg/clothingWerehouse.png'
import TeslaReview from '../../../asset/portfulioImg/tesla-review.png'
import homeshop from '../../../asset/portfulioImg/Home-shop.png'
import profile from '../../../asset/portfulioImg/profile.JPG'

import { faLocation, faLocationArrow, faMapLocation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Portfolio = () => {
    return (
        <div>

            <div class="hero min-h-screen ">
                <div class="hero-content text-center">
                    <div class="max-w-md bg-base-200 shadow-xl rounded-xl">
                        <div class="avatar">
                            <div class="w-32 rounded">
                                <img src={profile} />
                            </div>
                        </div>
                        <h1 class="text-5xl font-bold">Robius Sani Raju</h1>
                        <div class="card-actions justify-end">
                            <button class="btn">
                                <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
                            </button>
                            <button class="btn btn-ghost">
                                <p>Mymensingh Sadar Upazila, Bangladesh </p>
                            </button>
                        </div>
                        <p class="py-6 text-white">
                            <p> Hello ..</p>
                            <p>How are you?</p>
                            <p>my name is Raju. </p>
                            I have a only 6.month of experience in web development. I will make your own website in your budget. My packages price are very reliable, if you think that my packages price are highly in your budget you can order with custom price                        </p>
                    </div>
                </div>
            </div>

            <div className='my-10'>
                {/* profile area  */}
                <h4 className='text-xl font-bold text-center my-12'>My Portfolio..</h4>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    <div class="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={clothingWerehouse} alt="clothingWerehouse" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Clothing Werehouse WebSide</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn"> <a href="https://capable-platypus-3d6bf1.netlify.app/">Preview</a> </button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={TeslaReview} alt="TeslaReview" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">TeslaReview Webside!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn"> <a href="https://kaleidoscopic-florentine-a83530.netlify.app">
                                Preview
                                    </a> 
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={homeshop} alt="homeshop" /></figure>
                        <div class="card-body">
                            <h2 class="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn "> <a href="https://fascinating-haupia-fb5176.netlify.app/">Preview</a> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className='text-xl font-bold text-center my-12'>Skills...!</h4>

            <footer class="footer p-6 mb-10 bg-base-200 text-base-content">
                <div>

                    <div class="badge badge-lg">HTML</div>
                    <div class="badge badge-lg">CSS</div>
                    <div class="badge badge-lg">BOOSTRAP</div>
                </div>
                <div>
                    <div class="badge badge-lg">REACT-BOOSTRAP</div>
                    <div class="badge badge-lg">TAILWIND CSS</div>
                    <div class="badge badge-lg">REACT-DAISYUI</div>
                </div>
                <div>
                    <div class="badge badge-lg">JAVASCRIPT</div>
                    <div class="badge badge-lg">REACT-JS</div>
                    <div class="badge badge-lg">MONGO-DB</div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;