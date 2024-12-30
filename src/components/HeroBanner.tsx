'use client';

import React from 'react';

const HeroBanner: React.FC = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{
        backgroundImage: 'url(/assets/campasin.png)', // Update this to your image path
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-60">
        <div className="text-white px-4 py-6 md:px-8 md:py-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to Our School</h1>
          <p className="text-lg md:text-xl mb-6">
            Educating the future leaders, innovators, and thinkers of tomorrow.
          </p>
          <a
            href="/admissions"
            className="inline-block px-8 py-3 bg-green-600 text-white text-lg font-bold rounded-md hover:bg-green-700 transition duration-300"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
