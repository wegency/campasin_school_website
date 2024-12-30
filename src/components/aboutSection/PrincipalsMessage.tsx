'use client';

import React from 'react';

const PrincipalsMessage: React.FC = () => {
  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:space-x-16 space-y-8 lg:space-y-0">
        {/* Principal's Image */}
        <div className="w-full lg:w-1/3">
        <div className="relative w-full h-48 lg:h-[350px] mb-6 lg:mb-0">
            <img 
              src="/assets/campasin.png"  // Replace with the actual image path
              alt="Principal"
              className="object-cover w-full h-full rounded-lg shadow-xl"
            />
          </div>
        </div>

        {/* Principal's Message Text */}
        <div className="text-center lg:text-left lg:w-2/3">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Principal’s Message</h2>
          <p className="text-xl text-gray-700 mb-6">
            Welcome to our school! As the Principal, I’m proud to lead this amazing community of learners, educators, and parents. We strive for a culture of excellence, ensuring that every student achieves their highest potential.
          </p>
          <p className="text-xl text-gray-700 mb-6">
            Our teachers and staff work relentlessly to inspire each child and guide them through every learning milestone. With cutting-edge facilities and a focus on holistic education, we aim to shape leaders of tomorrow.
          </p>
          <p className="text-xl text-gray-700">
            We look forward to continuing this journey of success with you. Together, let's achieve new heights!
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrincipalsMessage;
