'use client';

import React from 'react';

const SchoolOverview: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-center mb-6">School Overview</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-semibold mb-4">Mission</h3>
          <p className="text-lg text-gray-700">
            Our mission is to provide quality education that nurtures young minds, empowering them to excel and contribute to society.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Vision</h3>
          <p className="text-lg text-gray-700">
            We envision a community where every student’s potential is realized, where creativity and critical thinking thrive in a world of lifelong learning.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Values</h3>
          <ul className="list-disc ml-6 text-lg text-gray-700">
            <li>Integrity</li>
            <li>Excellence</li>
            <li>Empathy</li>
            <li>Innovation</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-4">Brief History</h3>
          <p className="text-lg text-gray-700">
            Established in 1980, our school has grown from a small community to an institution dedicated to academic excellence and student welfare. 
          </p>
        </div>
      </div>
    </section>
  );
};

export default SchoolOverview;
