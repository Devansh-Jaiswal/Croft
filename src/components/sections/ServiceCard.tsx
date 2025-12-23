import React from 'react';
import * as LucideIcons from 'lucide-react';
import { Service } from '../../types';

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const icons = LucideIcons as unknown as Record<string, React.ComponentType<{ size?: number; className?: string }>>;
  const IconComponent = icons[service.icon] || LucideIcons.Star;

  return (
    <div className="group h-full bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200">
      <div className="mb-6 inline-flex p-4 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
        <IconComponent size={32} className="text-blue-600" />
      </div>

      <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
      <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>

      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
