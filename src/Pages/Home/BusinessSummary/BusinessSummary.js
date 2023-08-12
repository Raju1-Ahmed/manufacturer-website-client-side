import React from 'react';

import { faRankingStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BusinessSummary = () => {
    return (
        

<section class="container mx-auto px-4 py-16">
<h2 className='text-center text-white font-black'>OUR BUSINESS SUMMARY</h2>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

  {/* <!-- Customer Reviews --> */}
  <div class="bg-slates-900 p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-2">Customer Reviews</h2>
    <p class="text-gray-600 mb-2">"Excellent service and top-notch quality parts. Will definitely buy from them again!"</p>
    <p class="text-gray-500">- John Doe</p>
  </div>

  {/* <!-- Secure Shopping --> */}
  <div class="bg-slates-900  p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-2">Secure Shopping</h2>
    <p class="text-gray-600 mb-2">Shop with confidence knowing that your data is secure.</p>
    <ul class="list-disc list-inside text-gray-600">
      <li>Secure Payment Gateway</li>
      <li>SSL Encryption</li>
      <li>Industry Standard Security Practices</li>
    </ul>
  </div>

  {/* <!-- Fast Shipping --> */}
  <div class="bg-slates-900  p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-2">Fast Shipping</h2>
    <p class="text-gray-600 mb-2">Get your auto car repair parts quickly.</p>
    <p class="text-gray-600">Estimated Delivery Times:</p>
    <ul class="list-disc list-inside text-gray-600">
      <li>Standard Shipping: 3-5 Business Days</li>
      <li>Express Shipping: 1-2 Business Days</li>
    </ul>
  </div>

  {/* <!-- Easy Returns and Refunds --> */}
  <div class="bg-slates-900  p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-2">Easy Returns and Refunds</h2>
    <p class="text-gray-600 mb-2">Not satisfied with your purchase? We've got you covered.</p>
    <p class="text-gray-600">Return Process:</p>
    <ul class="list-disc list-inside text-gray-600">
      <li>Contact Customer Support</li>
      <li>Receive Return Authorization</li>
      <li>Ship the Item Back</li>
    </ul>
    <p class="text-gray-600">Refund Policy:</p>
    <p class="text-gray-600">Refunds processed within 5 business days of receiving the returned item.</p>
  </div>

  {/* <!-- Knowledgeable Resources --> */}
  <div class="bg-slates-900  p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-2">Knowledgeable Resources</h2>
    <p class="text-gray-600 mb-2">Empowering you with valuable car repair information.</p>
    <p class="text-gray-600">Explore our:</p>
    <ul class="list-disc list-inside text-gray-600">
      <li>Car Repair Guides</li>
      <li>Video Tutorials</li>
      <li>Informative Blog Posts</li>
    </ul>
  </div>

  {/* <!-- Responsive Customer Support --> */}
  <div class="bg-slates-900  p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-2">Responsive Customer Support</h2>
    <p class="text-gray-600 mb-2">We're here to help you every step of the way.</p>
    <p class="text-gray-600">Contact us via:</p>
    <ul class="list-disc list-inside text-gray-600">
      <li>Live Chat</li>
      <li>Email: support@example.com</li>
      <li>Phone: 1-800-123-4567</li>
    </ul>
    <p class="text-gray-600">Our team typically responds within 24 hours.</p>
  </div>

  {/* <!-- Eco-Friendly Practices --> */}
  <div class="bg-slates-900  p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-2">Eco-Friendly Practices</h2>
    <p class="text-gray-600 mb-2">Committed to sustainability and environmental responsibility.</p>
    <p class="text-gray-600">Our Initiatives:</p>
    <ul class="list-disc list-inside text-gray-600">
      <li>Use of Recycled Packaging Materials</li>
      <li>Supporting Local Green Initiatives</li>
    </ul>
  </div>

  {/* <!-- Warranty and Quality Guarantee --> */}
  <div class="bg-slates-900  p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-2">Warranty and Quality Guarantee</h2>
    <p class="text-gray-600 mb-2">We stand by the quality of our products.</p>
    <p class="text-gray-600">Our Guarantee:</p>
    <ul class="list-disc list-inside text-gray-600">
      <li>High-Quality Genuine Parts</li>
      <li>1-Year Warranty on All Parts</li>
    </ul>
  </div>

  {/* <!-- Compatibility Assistance --> */}
  <div class="bg-slates-900  p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-2">Part Compatibility Assistance</h2>
    <p class="text-gray-600 mb-2">Ensuring the right fit for your vehicle.</p>
    <p class="text-gray-600">Use our:</p>
    <ul class="list-disc list-inside text-gray-600">
      <li>Car Make and Model Search</li>
      <li>Interactive Compatibility Tool</li>
    </ul>
    <p class="text-gray-600">Find the perfect parts for your vehicle.</p>
  </div>

  {/* <!-- Social Responsibility --> */}
  <div class="bg-slates-900  p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-2">Social Responsibility</h2>
    <p class="text-gray-600 mb-2">Contributing to a better community and world.</p>
    <p class="text-gray-600">Our Initiatives:</p>
    <ul class="list-disc list-inside text-gray-600">
      <li>Supporting Local Charities</li>
      <li>Volunteer Programs</li>
    </ul>
  </div>

  {/* <!-- Exclusive Discounts and Offers --> */}
  <div class="bg-slates-900  p-6 rounded shadow">
    <h2 class="text-xl font-semibold mb-2">Exclusive Discounts and Offers</h2>
    <p class="text-gray-600 mb-2">Save on high-quality auto car repair parts.</p>
    <p class="text-gray-600">Limited-Time Offers:</p>
    <ul class="list-disc list-inside text-gray-600">
      <li>20% Off on Brake Components</li>
      <li>Buy One, Get One 50% Off on Filters</li>
    </ul>
    <p class="text-gray-600">Shop now and take advantage of these deals!</p>
  </div>

</div>

</section>


    );
};

export default BusinessSummary;