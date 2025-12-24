import { useState } from 'react';
import { Link } from 'react-router-dom';

// Team members data with their projects
const teamMembers = [
  {
    id: 'kartik',
    name: 'Kartik Mishra',
    role: 'Frontend Developer',
    portfolio: 'https://kaartikmishra-portfolio.vercel.app/',
    photo: '/kartik.jpg',
    projects: [
      {
        name: 'Weather Forecast App',
        description: 'Weather app with forecasts and interactive maps',
        liveDemo: 'https://weather-pro.netlify.app',
        github: 'https://github.com/kaartik-mishra/weather-app',
        icon: '🌤️'
      },
      {
        name: 'Crypto Tracker Pro',
        description: 'Real-time crypto portfolio tracking',
        liveDemo: 'https://crypto-tracker-pro.vercel.app',
        github: 'https://github.com/kaartik-mishra/crypto-tracker',
        icon: '📈'
      },
      {
        name: 'Social Media Analytics',
        description: 'Social analytics platform with reporting',
        liveDemo: 'https://social-insights.herokuapp.com',
        github: 'https://github.com/kaartik-mishra/social-analytics',
        icon: '📊'
      }
    ]
  },
  {
    id: 'devansh',
    name: 'Devansh Jaiswal',
    role: 'Full Stack Developer',
    portfolio: 'https://devansh-portfolio-zeta.vercel.app/',
    photo: '/devansh.png',
    projects: [
      {
        name: 'FoodBites - Food Delivery',
        description: 'Full-stack food delivery app',
        liveDemo: 'https://client-iota-lyart.vercel.app/login',
        github: 'https://github.com/Jazz7-Dev/FoodBites',
        icon: '🍔'
      },
      {
        name: 'CineMate - Movie Discovery',
        description: 'Movie recommendations & discovery',
        liveDemo: 'https://cine-mate-black.vercel.app/',
        github: 'https://github.com/Jazz7-Dev/cineMate',
        icon: '🎬'
      },
      {
        name: 'Fund2Play - Crowdfunding',
        description: 'Crowdfunding platform for athletes',
        liveDemo: 'https://fund2player.vercel.app/',
        github: 'https://github.com/Jazz7-Dev/fund2player',
        icon: '⚽'
      }
    ]
  }
];

const About: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<string>('kartik');

  const values = [
    {
      title: 'Client-Focused',
      description: 'Your success is our success. We align every strategy and solution with your business goals.',
      color: 'bg-brutal-pink'
    },
    {
      title: 'Innovative',
      description: 'We stay ahead of industry trends and bring creative, forward-thinking solutions to every project.',
      color: 'bg-brutal-blue'
    },
    {
      title: 'Execution-Driven',
      description: 'Ideas mean nothing without execution. We deliver results that move the needle for your business.',
      color: 'bg-brutal-yellow'
    },
    {
      title: 'Collaborative',
      description: 'We work as an extension of your team, maintaining transparent communication throughout the journey.',
      color: 'bg-brutal-green'
    }
  ];

  const currentMember = teamMembers.find(m => m.id === selectedMember) || teamMembers[0];

  return (
    <div className="min-h-screen bg-brutal-bg pt-24 sm:pt-32 pb-16 sm:pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <span className="brutal-tag-pink mb-4 sm:mb-6 inline-block text-xs sm:text-sm">
            ✦ About Us
          </span>
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-black text-brutal-black mb-6 sm:mb-8 tracking-tight">
            We're <span className="highlight-blue">CROFT</span>
          </h1>
          <p className="text-base sm:text-xl lg:text-2xl text-neutral-600 leading-relaxed font-medium">
            A web development and social media marketing studio dedicated to helping ambitious businesses grow their digital presence.
          </p>
        </div>

        {/* Team Portfolio Section */}
        <div className="mb-16 sm:mb-24">
          <h2 className="section-title mb-8 sm:mb-12">
            Our <span className="highlight-yellow">Portfolio</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-start">
            {/* Portfolio Card */}
            <div className="brutal-card-static p-4 sm:p-6">
              {/* Team Member Tabs */}
              <div className="flex gap-2 mb-6">
                {teamMembers.map((member) => (
                  <button
                    key={member.id}
                    onClick={() => setSelectedMember(member.id)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 font-bold text-xs sm:text-sm border-3 border-brutal-black rounded-full transition-all ${selectedMember === member.id
                      ? 'bg-brutal-black text-white'
                      : 'bg-white text-brutal-black hover:bg-neutral-100'
                      }`}
                  >
                    {member.name.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Member Info */}
              <div className="mb-6 pb-4 border-b-3 border-brutal-black">
                <h3 className="text-xl sm:text-2xl font-black text-brutal-black">{currentMember.name}</h3>
                <p className="text-sm sm:text-base text-neutral-600 font-medium">{currentMember.role}</p>
              </div>

              {/* Projects List */}
              <div className="space-y-3 sm:space-y-4">
                {currentMember.projects.map((project, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white border-3 border-brutal-black rounded-xl hover:translate-x-1 hover:shadow-brutal-sm transition-all"
                  >
                    {/* Project Icon/Thumbnail */}
                    <div className="w-12 h-12 sm:w-16 sm:h-16 bg-neutral-100 border-2 border-brutal-black rounded-lg flex items-center justify-center text-xl sm:text-2xl flex-shrink-0">
                      {project.icon}
                    </div>

                    {/* Project Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="font-black text-brutal-black text-sm sm:text-base truncate">{project.name}</h4>
                      <p className="text-xs sm:text-sm text-neutral-500 font-medium hidden sm:block">{project.description}</p>
                    </div>

                    {/* View Button */}
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 sm:px-4 py-1.5 sm:py-2 bg-brutal-yellow border-2 border-brutal-black rounded-lg font-bold text-xs sm:text-sm text-brutal-black hover:translate-x-0.5 hover:translate-y-0.5 transition-transform flex-shrink-0"
                    >
                      View
                    </a>
                  </div>
                ))}
              </div>

              {/* View Full Portfolio Link */}
              <a
                href={currentMember.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 text-sm font-bold text-brutal-black hover:text-brutal-blue transition-colors underline underline-offset-2"
              >
                View Full Portfolio →
              </a>
            </div>

            {/* Team Member Photo Card with Flip Animation */}
            <div className="flip-container border-3 sm:border-4 border-brutal-black rounded-brutal overflow-hidden shadow-brutal-sm sm:shadow-brutal h-[300px] sm:h-[400px] lg:h-[500px]">
              <div className={`flip-card relative w-full h-full ${selectedMember === 'devansh' ? 'flipped' : ''}`}>
                {/* Kartik Photo (Front) */}
                <div className="flip-card-front w-full h-full">
                  <img
                    src="/kartik.jpg"
                    alt="Kartik Mishra"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Devansh Photo (Back) */}
                <div className="flip-card-back w-full h-full">
                  <img
                    src="/devansh.png"
                    alt="Devansh Jaiswal"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-start mb-16 sm:mb-24">
          <div className="brutal-card-static p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-black text-brutal-black mb-4 sm:mb-6">Our Story</h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed font-medium text-base sm:text-lg">
              <p>
                CROFT was founded with a simple belief: great design and strategic marketing, when combined, create transformative results.
              </p>
              <p>
                We noticed a gap in the market—companies struggled to find partners who could bridge web development and digital marketing effectively. So we built CROFT.
              </p>
              <p>
                Today, we're proud to have worked with over <span className="highlight-yellow">50 companies</span> across various industries, helping them establish powerful digital presences.
              </p>
            </div>
          </div>
          <div className="border-3 sm:border-4 border-brutal-black rounded-brutal overflow-hidden shadow-brutal-sm sm:shadow-brutal">
            <img
              src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Team collaboration"
              className="w-full h-[300px] sm:h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16 sm:mb-24">
          <h2 className="section-title mb-8 sm:mb-12">
            Our <span className="highlight-green">Values</span>
          </h2>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="border-3 sm:border-4 border-brutal-black rounded-brutal overflow-hidden shadow-brutal-sm sm:shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-all"
              >
                <div className={`${value.color} px-4 sm:px-6 py-3 sm:py-4 border-b-3 sm:border-b-4 border-brutal-black`}>
                  <div className="flex items-center justify-between">
                    <span className="text-xs sm:text-sm font-black text-brutal-black bg-white px-2 sm:px-3 py-1 rounded-full border-2 border-brutal-black">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="bg-white p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-black text-brutal-black mb-2 sm:mb-3">{value.title}</h3>
                  <p className="text-sm sm:text-base text-neutral-600 leading-relaxed font-medium">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brutal-black border-3 sm:border-4 border-brutal-black rounded-brutal p-8 sm:p-12 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white mb-3 sm:mb-4">Ready to Work Together?</h2>
          <p className="text-neutral-400 mb-6 sm:mb-8 max-w-xl mx-auto text-base sm:text-lg font-medium">
            Let's discuss how CROFT can help transform your digital presence and drive your business forward.
          </p>
          <Link
            to="/contact"
            className="brutal-button-yellow inline-block"
          >
            Get In Touch →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

