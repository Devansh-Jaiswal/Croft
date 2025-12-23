import { Testimonial } from '../../types';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const accentColors = ['bg-brutal-pink', 'bg-brutal-blue', 'bg-brutal-yellow', 'bg-brutal-green'];

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const colorIndex = testimonial.id.charCodeAt(0) % accentColors.length;
  const accentColor = accentColors[colorIndex];

  return (
    <div className="border-4 border-brutal-black rounded-brutal bg-white shadow-brutal p-8 h-full flex flex-col justify-between hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-all duration-200">
      {/* Quote Mark */}
      <div className="mb-4">
        <span className={`inline-block text-5xl font-black ${accentColor} text-brutal-black px-4 py-2 rounded-xl border-3 border-brutal-black`}>
          "
        </span>
      </div>

      {/* Quote Text */}
      <blockquote className="text-lg font-medium text-brutal-black leading-relaxed mb-8">
        {testimonial.quote}
      </blockquote>

      {/* Author Info */}
      <div className="flex items-center gap-4 border-t-4 border-brutal-black pt-6">
        <div className="border-3 border-brutal-black rounded-full overflow-hidden shadow-brutal-sm">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-14 h-14 object-cover"
          />
        </div>
        <div>
          <p className="font-black text-brutal-black text-lg">{testimonial.name}</p>
          <p className="text-sm font-medium text-neutral-600">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
