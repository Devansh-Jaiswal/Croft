import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100 hover:shadow-lg transition-shadow">
      <div className="flex gap-1 mb-6">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}
          />
        ))}
      </div>

      <p className="text-gray-700 text-lg mb-8 leading-relaxed italic">"{testimonial.quote}"</p>

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="font-bold text-gray-900">{testimonial.name}</p>
          <p className="text-gray-600 text-sm">{testimonial.role}</p>
          <p className="text-gray-500 text-xs">{testimonial.company}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
