import React from 'react';
import { Target, Lightbulb, Zap, Users } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Client-Focused',
      description: 'Your success is our success. We align every strategy and solution with your business goals.'
    },
    {
      icon: Lightbulb,
      title: 'Innovative',
      description: 'We stay ahead of industry trends and bring creative, forward-thinking solutions to every project.'
    },
    {
      icon: Zap,
      title: 'Execution-Driven',
      description: 'Ideas mean nothing without execution. We deliver results that move the needle for your business.'
    },
    {
      icon: Users,
      title: 'Collaborative',
      description: 'We work as an extension of your team, maintaining transparent communication throughout the journey.'
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About CROFT</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're a web development and social media marketing studio dedicated to helping ambitious businesses grow their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              CROFT was founded with a simple belief: great design and strategic marketing, when combined, create transformative results. We noticed a gap in the market—companies struggled to find partners who could bridge web development and digital marketing effectively.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              So we built CROFT. A studio where talented designers, developers, and marketers work together to create cohesive digital strategies that drive real business growth. Every project we take on is an opportunity to prove that excellence is not a luxury—it's an expectation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Today, we're proud to have worked with over 50 companies across various industries, helping them establish powerful digital presences and achieve their ambitious goals.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="CROFT team working together"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-lg overflow-hidden shadow-xl order-last lg:order-first">
            <img
              src="https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="CROFT office and workspace"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To empower businesses of all sizes with strategic digital solutions that drive measurable growth and sustainable success. We believe that every business deserves access to world-class digital expertise.
            </p>
            <p className="text-gray-700 leading-relaxed">
              By combining creative excellence with data-driven strategy, we help our clients stand out in competitive markets, connect authentically with their audiences, and achieve their most ambitious business objectives.
            </p>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-lg p-8 border border-gray-200">
                  <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                    <Icon className="text-blue-600" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Work Together?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Let's discuss how CROFT can help transform your digital presence and drive your business forward.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
