'use client';

import React from 'react';
import SchoolOverview from './SchoolOverview';
import PrincipalsMessage from './PrincipalsMessage';
import KeyHighlights from './KeyHighlights';

const AboutSection: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      {/* School Overview */}
      <SchoolOverview />
      
      {/* Principal's Message */}
      <PrincipalsMessage />
      
      {/* Key Highlights */}
      <KeyHighlights />
    </section>
  );
};

export default AboutSection;
