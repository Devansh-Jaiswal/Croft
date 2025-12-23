import TestimonialCard from './TestimonialCard';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="brutal-tag-green mb-6 inline-block">
            ✦ Testimonials
          </span>
          <h2 className="section-title mb-4">
            What clients <span className="highlight-blue">say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
