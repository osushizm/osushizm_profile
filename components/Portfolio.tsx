
import React from 'react';
import type { PortfolioItem } from '../types';
import { GalleryIcon } from './IconComponents';

interface PortfolioProps {
  portfolioItems: PortfolioItem[];
}

const PortfolioCard: React.FC<{ item: PortfolioItem }> = ({ item }) => {
  const cardContent = (
    <>
      <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold font-orbitron text-text-dark mb-2">{item.title}</h3>
        <p className="text-text-light text-sm">{item.description}</p>
      </div>
    </>
  );

  const commonClasses = "bg-soft-card rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg hover:-translate-y-1 block";

  if (item.url && item.url !== '#') {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={commonClasses}
      >
        {cardContent}
      </a>
    );
  }

  return (
    <div className={commonClasses}>
      {cardContent}
    </div>
  );
};

const Portfolio: React.FC<PortfolioProps> = ({ portfolioItems }) => {
  return (
    <section id="portfolio">
      <h2 className="text-2xl md:text-3xl font-bold font-orbitron text-brand-secondary mb-6 flex items-center">
        <GalleryIcon className="w-8 h-8 mr-3" />
        Highlights & Works
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioItems.map((item, index) => (
          <PortfolioCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;