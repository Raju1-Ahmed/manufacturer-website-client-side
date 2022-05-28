import React from 'react';

import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BusinessSummary = () => {
    return (
        <div className="">
            <h2 className="text-center text-2xl font-bold">Business Summary...</h2>

            <div className='mb-5 w-full flex justify-center'>
                <div class="stats shadow">

                    <div class="stat">
                        <div class="stat-figure text-primary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                        </div>
                        <div class="stat-title">we served </div>
                        <div class="stat-value text-primary">100+ customers</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                        </div>
                        <div class="stat-title">Annual revenue</div>
                        <div class="stat-value text-secondary">120.6M+</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>
                    <div class="stat">
                        <div class="stat-figure text-success">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-8 h-8 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg> */}
                            <button> <FontAwesomeIcon icon={faRankingStar}></FontAwesomeIcon></button>
                        
                        </div>
                        <div class="stat-title">Customer Review</div>
                        <div class="stat-value text-success">33K+ Reviews</div>
                        <div class="stat-desc">21% more than last month</div>
                    </div>

                    <div class="stat">
                        <div class="stat-figure text-secondary">
                            <div class="avatar online">
                                <div class="w-16 rounded-full">
                                    <img src="https://api.lorem.space/image/face?w=128&h=128" />
                                </div>
                            </div>
                        </div>
                        <div class="stat-value">86%</div>
                        <div class="stat-title">Tasks done</div>
                        <div class="stat-desc text-secondary">31 tasks remaining</div>
                    </div>

                </div>
            </div>
        </div>

    );
};

export default BusinessSummary;