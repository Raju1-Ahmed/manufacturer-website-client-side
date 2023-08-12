import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-blue-700 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Auto Parts Store</h1>
        </div>
      </header>
      <main className="container mx-auto mt-16">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-700 leading-loose">
            At Auto Parts Store, we are dedicated to providing top-quality auto car parts and repair products to
            automotive enthusiasts, professionals, and DIY enthusiasts alike. With a deep passion for automobiles and a
            commitment to excellence, we're here to deliver the best products to keep your vehicles running smoothly.
          </p>
          <p className="text-gray-700 leading-loose mt-4">
            Our journey began with a simple idea: to create a one-stop destination for all your automotive needs. With
            years of experience and a team of experts, we carefully curate our product selection to ensure you have
            access to the most reliable and high-performance parts on the market.
          </p>
          <p className="text-gray-700 leading-loose mt-4">
            What sets us apart is our unwavering focus on quality and customer satisfaction. We understand that your
            vehicle is more than just a mode of transportation—it's a part of your lifestyle. That's why we go the extra
            mile to provide exceptional customer service, reliable products, and valuable resources to help you make
            informed decisions.
          </p>
          <p className="text-gray-700 leading-loose mt-4">
            Thank you for choosing Auto Parts Store as your trusted partner in automotive excellence. We're excited to
            serve you and contribute to your driving experience. Whether you're a gearhead, a professional mechanic, or
            someone who simply loves their car, we're here to support your passion and keep your vehicles performing at
            their best.
          </p>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
