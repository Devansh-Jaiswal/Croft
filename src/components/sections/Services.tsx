import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <span className="brutal-tag-pink mb-4 sm:mb-6 inline-block text-xs sm:text-sm">
            ✦ Services
          </span>
          <h2 className="section-title mb-4 sm:mb-6">
            What we <span className="highlight-yellow">do</span>
          </h2>
          <p className="section-subtitle text-balance">
            We offer comprehensive digital solutions tailored to your business needs,
            from web development to strategic marketing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
