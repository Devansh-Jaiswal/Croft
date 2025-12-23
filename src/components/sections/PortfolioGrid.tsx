import React, { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import Modal from '../ui/Modal';
import { portfolioItems } from '../../data/portfolio';
import { Portfolio } from '../../types';
import { ChevronRight } from 'lucide-react';

const PortfolioGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Portfolio | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'social-media', label: 'Social Media' },
    { id: 'branding', label: 'Branding' }
  ];

  const filteredProjects = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest projects and discover how we deliver exceptional results for our clients.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                filter === category.id
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 border border-gray-300 hover:border-blue-600 hover:text-blue-600'
              }`}
              aria-pressed={filter === category.id}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((item) => (
            <PortfolioCard
              key={item.id}
              item={item}
              onClick={() => setSelectedProject(item)}
            />
          ))}
        </div>
      </div>

      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        size="lg"
      >
        {selectedProject && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-600 mb-4">{selectedProject.client}</p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedProject.fullDescription}
                </p>
                <div className="flex items-start gap-2 p-4 bg-blue-50 rounded-lg">
                  <ChevronRight className="text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Key Results</p>
                    <p className="text-gray-700">{selectedProject.results}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Gallery</h4>
              <div className="grid grid-cols-2 gap-4">
                {selectedProject.gallery.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`${selectedProject.title} gallery ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {selectedProject.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                Visit Project
              </a>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default PortfolioGrid;
