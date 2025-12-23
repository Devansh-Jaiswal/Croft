import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Elevate Your Digital Presence
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                CROFT combines strategic web development and social media marketing to help your business reach new heights. We transform ideas into exceptional digital experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-semibold text-lg hover:shadow-lg"
              >
                Start Your Project
                <ArrowRight size={20} />
              </Link>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-300 font-semibold text-lg"
              >
                Explore Services
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div>
                <p className="text-3xl font-bold text-gray-900">50+</p>
                <p className="text-gray-600 text-sm">Successful Projects</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">30</p>
                <p className="text-gray-600 text-sm">Team Members</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">95%</p>
                <p className="text-gray-600 text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Team collaboration"
                className="w-full h-96 object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-400 rounded-full opacity-10 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
