
import React from 'react';
import { SparklesIcon } from './IconComponents';

interface AboutProps {
  bio: string;
}

const About: React.FC<AboutProps> = ({ bio }) => {
  return (
    <section id="about" className="p-6 bg-soft-card rounded-2xl shadow-md">
      <h2 className="text-2xl md:text-3xl font-bold font-orbitron text-brand-primary mb-4 flex items-center">
        <SparklesIcon className="w-8 h-8 mr-3" />
        About Me
      </h2>
      <p className="text-text-light leading-relaxed">
        {bio}
      </p>
    </section>
  );
};

export default About;