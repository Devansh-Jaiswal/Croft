import ServiceCard from './ServiceCard';
import { services } from '../../data/services';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <span className="brutal-tag-pink mb-6 inline-block">
            ✦ Services
          </span>
          <h2 className="section-title mb-6">
            What we <span className="highlight-yellow">do</span>
          </h2>
          <p className="section-subtitle text-balance">
            We offer comprehensive digital solutions tailored to your business needs,
            from web development to strategic marketing.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
