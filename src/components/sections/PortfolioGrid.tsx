import { useState } from 'react';
import PortfolioCard from './PortfolioCard';
import Modal from '../ui/Modal';
import { portfolioItems } from '../../data/portfolio';
import { Portfolio } from '../../types';

const PortfolioGrid: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Portfolio | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All', color: 'bg-brutal-black text-white' },
    { id: 'web-development', label: 'Web', color: 'bg-brutal-blue text-white' },
    { id: 'social-media', label: 'Social', color: 'bg-brutal-pink' },
    { id: 'branding', label: 'Branding', color: 'bg-brutal-yellow' }
  ];

  const filteredProjects = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === filter);

  return (
    <section id="work" className="py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 lg:mb-16">
          <div className="max-w-xl">
            <span className="brutal-tag-blue mb-6 inline-block">
              ✦ Portfolio
            </span>
            <h2 className="section-title">
              Selected <span className="highlight-pink">Work</span>
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <div className="flex gap-2 p-2 bg-white border-4 border-brutal-black rounded-brutal shadow-brutal min-w-max">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setFilter(category.id)}
                  className={`px-5 py-2.5 text-sm font-bold transition-all duration-200 rounded-xl border-2 border-brutal-black whitespace-nowrap ${filter === category.id
                      ? category.color
                      : 'bg-white text-brutal-black hover:bg-neutral-100'
                    }`}
                  aria-pressed={filter === category.id}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((item, index) => (
            <PortfolioCard
              key={item.id}
              item={item}
              index={index}
              onClick={() => setSelectedProject(item)}
            />
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Modal
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        title={selectedProject?.title}
        size="lg"
      >
        {selectedProject && (
          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border-4 border-brutal-black rounded-brutal overflow-hidden shadow-brutal">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div>
                <span className="brutal-tag mb-4 inline-block">
                  {selectedProject.client}
                </span>
                <h3 className="text-2xl font-black text-brutal-black mb-4">
                  {selectedProject.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed mb-6 font-medium">
                  {selectedProject.fullDescription}
                </p>
                <div className="p-4 bg-brutal-green border-4 border-brutal-black rounded-xl">
                  <p className="text-sm font-black text-brutal-black mb-1">Results</p>
                  <p className="text-sm font-medium text-brutal-black">{selectedProject.results}</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-lg font-black text-brutal-black mb-4">Gallery</p>
              <div className="grid grid-cols-2 gap-4">
                {selectedProject.gallery.map((img, index) => (
                  <div key={index} className="border-4 border-brutal-black rounded-xl overflow-hidden shadow-brutal-sm">
                    <img
                      src={img}
                      alt={`${selectedProject.title} ${index + 1}`}
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {selectedProject.link && (
              <a
                href={selectedProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="brutal-button-primary inline-block"
              >
                Visit Project →
              </a>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
};

export default PortfolioGrid;
