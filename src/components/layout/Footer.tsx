import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About', path: '/about' },
      { label: 'Blog', path: '/blog' },
      { label: 'Contact', path: '/contact' }
    ],
    services: [
      { label: 'Web Development', path: '/contact' },
      { label: 'Social Media', path: '/contact' },
      { label: 'Branding', path: '/contact' }
    ],
    social: [
      { label: 'Twitter', href: 'https://twitter.com/croft' },
      { label: 'LinkedIn', href: 'https://linkedin.com/company/croft' },
      { label: 'Instagram', href: 'https://instagram.com/croft' }
    ]
  };

  return (
    <footer className="bg-brutal-black mt-16 sm:mt-20">
      {/* CTA Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -translate-y-12 sm:-translate-y-16">
        <div className="bg-brutal-yellow border-3 sm:border-4 border-brutal-black rounded-brutal shadow-brutal-sm sm:shadow-brutal-lg p-5 sm:p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-brutal-black mb-1 sm:mb-2">
                Ready to start a project?
              </h3>
              <p className="text-sm sm:text-lg font-medium text-brutal-black opacity-80">
                Let's create something amazing together.
              </p>
            </div>
            <Link
              to="/contact"
              className="brutal-button-primary whitespace-nowrap"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12 lg:mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link
              to="/"
              className="font-black text-2xl sm:text-3xl tracking-tight text-white mb-4 sm:mb-6 inline-block hover:text-brutal-yellow transition-colors"
            >
              CROFT
            </Link>
            <p className="text-neutral-400 leading-relaxed text-sm sm:text-lg">
              A digital studio focused on creating impactful web experiences.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <p className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg">Company</p>
            <ul className="space-y-2 sm:space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.path + link.label}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-brutal-pink transition-colors font-medium text-sm sm:text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <p className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg">Services</p>
            <ul className="space-y-2 sm:space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-neutral-400 hover:text-brutal-blue transition-colors font-medium text-sm sm:text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <p className="font-bold text-white mb-4 sm:mb-6 text-base sm:text-lg">Social</p>
            <ul className="space-y-2 sm:space-y-4">
              {footerLinks.social.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-brutal-green transition-colors font-medium text-sm sm:text-lg"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t-3 sm:border-t-4 border-neutral-800 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-neutral-500 font-medium text-sm sm:text-base">
            © {currentYear} CROFT. All rights reserved.
          </p>
          <a
            href="mailto:hello@croft.studio"
            className="text-white font-bold hover:text-brutal-yellow transition-colors text-sm sm:text-lg"
          >
            hello@croft.studio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
