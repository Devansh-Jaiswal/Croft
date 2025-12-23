import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Portfolio } from '../../types';

interface PortfolioCardProps {
  item: Portfolio;
  onClick: () => void;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer h-full"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      aria-label={`View ${item.title} project details`}
    >
      <div className="relative overflow-hidden rounded-lg h-64 mb-4">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end p-6">
          <div className="flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <span className="font-semibold">View Details</span>
            <ArrowRight size={20} />
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {item.title}
      </h3>
      <p className="text-gray-600 text-sm mb-3">{item.client}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {item.tags.slice(0, 3).map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      <p className="text-gray-600 text-sm line-clamp-2">{item.description}</p>
    </div>
  );
};

export default PortfolioCard;
