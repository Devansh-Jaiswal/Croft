import { Link } from 'react-router-dom';

const CTA: React.FC = () => {
  return (
    <section className="py-24 lg:py-32">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="bg-brutal-pink border-4 border-brutal-black rounded-brutal-lg shadow-brutal-lg p-12 md:p-16 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-6 right-6 w-20 h-20 bg-brutal-yellow border-4 border-brutal-black rounded-full" />
          <div className="absolute bottom-6 left-6 w-16 h-16 bg-brutal-blue border-4 border-brutal-black rounded-xl rotate-12" />

          {/* Content */}
          <div className="relative z-10 max-w-2xl">
            <span className="brutal-tag mb-6 inline-block">
              ✨ Let's Work Together
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-brutal-black mb-6 leading-tight">
              Ready to start your <span className="highlight-yellow">project</span>?
            </h2>
            <p className="text-xl font-medium text-brutal-black opacity-90 leading-relaxed mb-10">
              Let's discuss how we can help transform your digital presence and drive meaningful results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="brutal-button-primary"
              >
                Get in Touch →
              </Link>
              <a
                href="mailto:hello@croft.studio"
                className="brutal-button"
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
