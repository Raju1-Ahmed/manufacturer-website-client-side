import React from 'react';

const blogData = [
    {
      id: 1,
      title: 'The Importance of Regular Car Maintenance',
      date: 'August 1, 2023',
      content: `
        Regular car maintenance is essential to ensure the longevity and optimal performance of your vehicle. 
        Neglecting maintenance tasks can lead to costly repairs down the road. Learn about the key maintenance 
        tasks you should never ignore and how they can save you money in the long run.`,
      category: 'Car Maintenance',
    },
    {
      id: 2,
      title: 'Top 10 Must-Have Auto Car Parts for DIY Repairs',
      date: 'August 5, 2023',
      content: `
        If you enjoy working on your car and performing DIY repairs, having the right auto parts on hand is crucial. 
        Discover our list of the top 10 essential car parts that every DIY enthusiast should have in their toolkit.`,
      category: 'Car Parts',
    },
    {
      id: 3,
      title: 'How to Change Your Car Oil',
      date: 'August 10, 2023',
      content: `
        In this comprehensive step-by-step guide, we will walk you through the process of changing your car's oil. 
        Regular oil changes are vital for maintaining engine health and performance. Follow our instructions and keep your engine running smoothly.`,
      category: 'Car Maintenance',
    },
    {
      id: 4,
      title: 'Choosing the Right Tires for Your Car',
      date: 'August 15, 2023',
      content: `
        Your car's tires play a crucial role in safety and performance. Learn how to select the best tires for your vehicle 
        based on factors like weather conditions, driving habits, and road terrain.`,
      category: 'Car Parts',
    },
    {
      id: 5,
      title: 'DIY Brake Replacement: Step-by-Step Guide',
      date: 'August 20, 2023',
      content: `
        Proper brake maintenance is vital for safe driving. Follow our detailed guide to replace your car's brake pads and 
        ensure optimal braking performance. Save money by doing it yourself with our easy-to-follow instructions.`,
      category: 'DIY Repairs',
    },
    // Add more blog posts here
  ];

const BlogPost = ({ title, date, content, category }) => {
  return (
    <div className="bg-white p-6 shadow-lg rounded-lg mb-8">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-500 text-sm mb-1">{date}</p>
      <p className="text-indigo-600 text-sm font-medium">{category}</p>
      <p className="text-gray-700 mt-4">{content}</p>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="bg-gray-100 min-h-screen font-sans">
      <header className="bg-blue-700 text-white py-6">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-semibold">Auto Parts Blog</h1>
        </div>
      </header>
      <main>
        <div className="container mx-auto mt-16">
          <h1 className="text-4xl font-bold mb-10">Welcome to Our Auto Parts Blog</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogData.map((post) => (
              <BlogPost key={post.id} {...post} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Blog;
