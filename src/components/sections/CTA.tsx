import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Digital Presence?
        </h2>
        <p className="text-xl text-blue-100 mb-10 leading-relaxed">
          Let's work together to create something extraordinary. Get in touch with our team today to discuss your project and discover how CROFT can help your business thrive.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-300 font-semibold text-lg hover:shadow-lg"
        >
          Get in Touch
          <ArrowRight size={20} />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
