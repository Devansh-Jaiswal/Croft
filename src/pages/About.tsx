import { Link } from 'react-router-dom';

const About: React.FC = () => {
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

  return (
    <div className="min-h-screen bg-brutal-bg pt-32 pb-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-3xl mb-20">
          <span className="brutal-tag-pink mb-6 inline-block">
            ✦ About Us
          </span>
          <h1 className="text-5xl lg:text-7xl font-black text-brutal-black mb-8 tracking-tight">
            We're <span className="highlight-blue">CROFT</span>
          </h1>
          <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed font-medium">
            A web development and social media marketing studio dedicated to helping ambitious businesses grow their digital presence.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="brutal-card-static p-8">
            <h2 className="text-3xl font-black text-brutal-black mb-6">Our Story</h2>
            <div className="space-y-4 text-neutral-600 leading-relaxed font-medium text-lg">
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
          <div className="border-4 border-brutal-black rounded-brutal overflow-hidden shadow-brutal">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="CROFT team"
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <h2 className="section-title mb-12">
            Our <span className="highlight-green">Values</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="border-4 border-brutal-black rounded-brutal overflow-hidden shadow-brutal hover:translate-x-1 hover:translate-y-1 hover:shadow-brutal-sm transition-all"
              >
                <div className={`${value.color} px-6 py-4 border-b-4 border-brutal-black`}>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-brutal-black bg-white px-3 py-1 rounded-full border-2 border-brutal-black">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                <div className="bg-white p-6">
                  <h3 className="text-xl font-black text-brutal-black mb-3">{value.title}</h3>
                  <p className="text-neutral-600 leading-relaxed font-medium">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-brutal-black border-4 border-brutal-black rounded-brutal p-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-black text-white mb-4">Ready to Work Together?</h2>
          <p className="text-neutral-400 mb-8 max-w-xl mx-auto text-lg font-medium">
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
