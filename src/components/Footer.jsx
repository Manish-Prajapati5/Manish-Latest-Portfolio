import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { icon: 'code', href: 'https://github.com/Manish-Prajapati5', label: 'GitHub' },
    { icon: 'linkedin', href: 'https://www.linkedin.com/in/manish-prajapati-bb99832a6/', label: 'LinkedIn' },
    { icon: 'flutter_dash', href: 'https://twitter.com', label: 'Twitter' },
    { icon: 'email', href: 'mailto:manojprajapati5410@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative padding-top">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-t from-blue-900/20 to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12 mb-12">
          {/* Brand */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative">
                <span className="material-icons text-4xl text-blue-400 transition-all duration-300 group-hover:scale-110">
                  code
                </span>
                <div className="absolute inset-0 w-9 h-9 bg-blue-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <span className="text-xl font-bold bg-linear-to-r from-blue-400 via-purple-400 to-blue-400 bg-size-[200%_auto] bg-clip-text text-transparent animate-gradient">
                DevPortfolio
              </span>
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Creating stunning digital experiences with modern technologies and innovative solutions.
            </p>
            <div className="flex padding-top gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center card-gradient w-11 h-11  rounded-xl text-gray-400 hover:text-white hover:bg-linear-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <span className="material-icons  w-6 h-6">{social.icon}</span>
                </a>
              ))} 
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Quick Links</h4>
            <ul className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-blue-400/50 rounded-full group-hover:bg-blue-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-5 text-white">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe for the latest updates and insights.
            </p>
            <form className="flex padding-x flex-col gap-3">
              <input
                type="email"
                placeholder="Your email"
                className="glass-input"
              />
              <button
                type="submit"
                className="btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="text-gray-400 text-sm">
              © {currentYear} Manish Portfolio. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

