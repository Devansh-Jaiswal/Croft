import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-slide-up text-center lg:text-left">
            {/* Tag */}
            <div className="inline-block">
              <span className="brutal-tag">
                ✦ Digital Studio
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-brutal-black leading-[1.1] tracking-tight">
                We craft{' '}
                <span className="highlight-pink">digital</span>{' '}
                experiences that{' '}
                <span className="highlight-blue">matter</span>
              </h1>
              <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium">
                Strategic web development and marketing solutions for ambitious businesses ready to grow.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="brutal-button-primary"
              >
                Start a Project →
              </Link>
              <a
                href="#work"
                className="brutal-button"
              >
                View Work
              </a>
            </div>

            {/* Stats Cards */}
            <div className="flex flex-wrap gap-4 pt-8 justify-center lg:justify-start">
              {[
                { label: 'Projects Delivered', value: '50+', color: 'bg-brutal-green' },
                { label: 'Client Retention', value: '95%', color: 'bg-brutal-pink' },
                { label: 'Years Experience', value: '5+', color: 'bg-brutal-blue' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="brutal-card-sm p-5 flex-1 min-w-[140px] text-center lg:text-left"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className={`inline-block px-3 py-1 ${stat.color} rounded-lg mb-2`}>
                    <p className="text-3xl font-black text-brutal-black">{stat.value}</p>
                  </div>
                  <p className="text-sm font-bold text-neutral-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Avatar/Illustration Card */}
          <div className="relative hidden lg:block animate-fade-in">
            <div className="brutal-card-static overflow-hidden p-3">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team collaboration"
                className="w-full h-[500px] object-cover rounded-[20px]"
              />
              {/* Floating Tag */}
              <div className="absolute bottom-8 left-8 bg-brutal-yellow border-3 border-brutal-black rounded-xl px-4 py-3 shadow-brutal-sm">
                <p className="text-sm font-bold text-brutal-black">📍 Based in India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
