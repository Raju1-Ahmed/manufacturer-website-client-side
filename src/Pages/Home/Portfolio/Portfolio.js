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

            <div className="hero min-h-screen ">
                <div className="hero-content text-center">
                    <div className="max-w-md bg-base-200 shadow-xl rounded-xl">
                        <div className="avatar">
                            <div className="w-32 rounded">
                                <img src={profile} />
                            </div>
                        </div>
                        <h1 className="text-5xl font-bold">Robius Sani Raju</h1>
                        <div className="card-actions justify-end">
                            <button className="btn">
                                <FontAwesomeIcon icon={faLocationArrow}></FontAwesomeIcon>
                            </button>
                            <button className="btn btn-ghost">
                                <p>Mymensingh Sadar Upazila, Bangladesh </p>
                            </button>
                        </div>
                        <p className="py-6 text-white">
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

                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={clothingWerehouse} alt="clothingWerehouse" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Clothing Werehouse WebSide</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn"> <a href="https://capable-platypus-3d6bf1.netlify.app/">Preview</a> </button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={TeslaReview} alt="TeslaReview" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">TeslaReview Webside!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn"> <a href="https://kaleidoscopic-florentine-a83530.netlify.app">
                                Preview
                                    </a> 
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src={homeshop} alt="homeshop" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Shoes!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn "> <a href="https://fascinating-haupia-fb5176.netlify.app/">Preview</a> </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className='text-xl font-bold text-center my-12'>Skills...!</h4>

            <footer className="footer p-6 mb-10 bg-base-200 text-base-content">
                <div>

                    <div className="badge badge-lg">HTML</div>
                    <div className="badge badge-lg">CSS</div>
                    <div className="badge badge-lg">BOOSTRAP</div>
                </div>
                <div>
                    <div className="badge badge-lg">REACT-BOOSTRAP</div>
                    <div className="badge badge-lg">TAILWIND CSS</div>
                    <div className="badge badge-lg">REACT-DAISYUI</div>
                </div>
                <div>
                    <div className="badge badge-lg">JAVASCRIPT</div>
                    <div className="badge badge-lg">REACT-JS</div>
                    <div className="badge badge-lg">MONGO-DB</div>
                </div>
            </footer>
        </div>
    );
};

export default Portfolio;