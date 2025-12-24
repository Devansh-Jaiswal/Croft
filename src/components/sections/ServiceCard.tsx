import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const accentColors = [
  { bg: 'bg-brutal-pink', shadow: 'shadow-brutal-pink' },
  { bg: 'bg-brutal-blue', shadow: 'shadow-brutal-blue' },
  { bg: 'bg-brutal-yellow', shadow: 'shadow-brutal-yellow' },
  { bg: 'bg-brutal-green', shadow: 'shadow-brutal-green' },
];

const icons: Record<string, string> = {
  'Code2': '💻',
  'Share2': '📱',
  'Palette': '🎨',
  'PenTool': '✏️',
};

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => {
  const colorScheme = accentColors[index % accentColors.length];

  return (
    <div
      className="group border-3 sm:border-4 border-brutal-black rounded-brutal overflow-hidden shadow-brutal-sm sm:shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-all duration-200"
    >
      {/* Colored Top Section */}
      <div className={`${colorScheme.bg} p-4 sm:p-6 border-b-3 sm:border-b-4 border-brutal-black`}>
        <div className="flex items-center justify-between">
          <span className="text-2xl sm:text-4xl">{icons[service.icon] || '⚡'}</span>
          <span className="text-xs sm:text-sm font-bold text-brutal-black bg-white/50 px-2 sm:px-3 py-1 rounded-full">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>
      </div>

      {/* White Bottom Section */}
      <div className="bg-white p-4 sm:p-6">
        <h3 className="text-lg sm:text-xl font-black text-brutal-black mb-2 sm:mb-3 group-hover:text-neutral-600 transition-colors">
          {service.title}
        </h3>

        <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-5 leading-relaxed font-medium">
          {service.description}
        </p>

        <ul className="space-y-1.5 sm:space-y-2">
          {service.features.slice(0, 4).map((feature, idx) => (
            <li key={idx} className="text-xs sm:text-sm text-neutral-700 flex items-center gap-2 font-medium">
              <span className={`w-1.5 sm:w-2 h-1.5 sm:h-2 ${colorScheme.bg} rounded-full border border-brutal-black`} />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ServiceCard;
