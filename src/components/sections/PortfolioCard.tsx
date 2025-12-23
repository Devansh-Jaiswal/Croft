import { Portfolio } from '../../types';

interface PortfolioCardProps {
  item: Portfolio;
  onClick: () => void;
  index: number;
}

const categoryColors: Record<string, string> = {
  'web-development': 'bg-brutal-blue text-white',
  'social-media': 'bg-brutal-pink',
  'branding': 'bg-brutal-yellow',
  'default': 'bg-brutal-green',
};

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item, onClick, index }) => {
  const categoryColor = categoryColors[item.category] || categoryColors.default;

  return (
    <div
      onClick={onClick}
      className="group cursor-pointer border-4 border-brutal-black rounded-brutal overflow-hidden shadow-brutal bg-white hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-all duration-200"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick();
        }
      }}
      aria-label={`View ${item.title} project details`}
    >
      {/* Image Section */}
      <div className="relative overflow-hidden aspect-[4/3] border-b-4 border-brutal-black">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Index Badge */}
        <div className="absolute top-4 left-4 bg-white border-3 border-brutal-black rounded-full px-3 py-1 shadow-brutal-sm">
          <span className="text-sm font-black text-brutal-black">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span className={`text-xs font-bold uppercase tracking-wide px-3 py-1.5 rounded-full border-2 border-brutal-black ${categoryColor}`}>
            {item.category.replace('-', ' ')}
          </span>
        </div>

        <h3 className="text-xl font-black text-brutal-black mb-2 group-hover:text-neutral-600 transition-colors">
          {item.title}
        </h3>

        <p className="text-sm font-medium text-neutral-600">{item.client}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
