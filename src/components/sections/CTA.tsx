import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brutal-pink border-3 sm:border-4 border-brutal-black rounded-brutal sm:rounded-brutal-lg shadow-brutal-sm sm:shadow-brutal-lg p-6 sm:p-12 md:p-16 relative overflow-hidden">
          {/* Decorative Elements - Hidden on mobile */}
          <div className="absolute top-6 right-6 w-12 h-12 sm:w-20 sm:h-20 bg-brutal-yellow border-3 sm:border-4 border-brutal-black rounded-full hidden sm:block" />
          <div className="absolute bottom-6 left-6 w-10 h-10 sm:w-16 sm:h-16 bg-brutal-blue border-3 sm:border-4 border-brutal-black rounded-xl rotate-12 hidden sm:block" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <span className="brutal-tag mb-4 sm:mb-6 inline-block text-xs sm:text-sm">
              ✨ Let's Work Together
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-brutal-black mb-4 sm:mb-6 leading-tight">
              Ready to start your <span className="highlight-yellow">project</span>?
            </h2>
            <p className="text-base sm:text-xl font-medium text-brutal-black opacity-90 leading-relaxed mb-6 sm:mb-10">
              Let's discuss how we can help transform your digital presence and drive meaningful results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="brutal-button-primary"
              >
                Get in Touch →
              </Link>
              <a
                href="mailto:hello@croft.studio"
                className="brutal-button text-sm sm:text-base"
              >
                hello@croft.studio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
