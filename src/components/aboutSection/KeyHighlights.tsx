'use client';

import React from 'react';

const KeyHighlights: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Key Highlights</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-center mb-4">Awards & Recognition</h3>
          <p className="text-lg text-gray-700">
            We’ve received numerous national and international accolades for excellence in academics and community engagement.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-center mb-4">Cutting-Edge Facilities</h3>
          <p className="text-lg text-gray-700">
            Our school boasts state-of-the-art classrooms, sports facilities, and art studios to nurture creativity and innovation.
          </p>
        </div>
        <div className="bg-white p-6 shadow-lg rounded-lg">
          <h3 className="text-2xl font-semibold text-center mb-4">Community Engagement</h3>
          <p className="text-lg text-gray-700">
            We believe in holistic development, and our students actively participate in various community outreach programs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default KeyHighlights;
