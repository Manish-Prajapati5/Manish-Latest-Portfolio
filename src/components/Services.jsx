import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: 'code',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies.',
      features: ['Custom Web Apps', 'E-commerce', 'CMS Development', 'API Integration'],
      color: 'blue',
    },
    {
      icon: 'palette',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive user interfaces for exceptional experiences.',
      features: ['Wireframing', 'User Research', 'Design Systems', 'Prototyping'],
      color: 'purple',
    },
    {
      icon: 'smartphone',
      title: 'Responsive Design',
      description: 'Fully responsive websites that work on all devices.',
      features: ['Mobile-First', 'Cross-browser', 'Performance', 'Adaptive Layouts'],
      color: 'cyan',
    },
    {
      icon: 'web',
      title: 'Single Page Apps',
      description: 'Fast, dynamic SPAs built with React and modern frameworks.',
      features: ['SPA Development', 'State Management', 'Lazy Loading', 'SEO'],
      color: 'pink',
    },
    {
      icon: 'bolt',
      title: 'Performance',
      description: 'Optimized websites with fast load times and smooth animations.',
      features: ['Code Splitting', 'Image Optimization', 'Caching', 'CDN'],
      color: 'yellow',
    },
    {
      icon: 'security',
      title: 'Maintenance',
      description: 'Ongoing maintenance and support for your website.',
      features: ['Security Updates', 'Bug Fixes', 'Content Updates', 'Monitoring'],
      color: 'green',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'from-blue-500 to-blue-600 group-hover:from-blue-400 group-hover:to-blue-500',
      purple: 'from-purple-500 to-purple-600 group-hover:from-purple-400 group-hover:to-purple-500',
      cyan: 'from-cyan-500 to-cyan-600 group-hover:from-cyan-400 group-hover:to-cyan-500',
      pink: 'from-pink-500 to-pink-600 group-hover:from-pink-400 group-hover:to-pink-500',
      yellow: 'from-yellow-500 to-yellow-600 group-hover:from-yellow-400 group-hover:to-yellow-500',
      green: 'from-green-500 to-green-600 group-hover:from-green-400 group-hover:to-green-500',
    };
    return colors[color] || colors.blue;
  };

  return (
    <section className="min-h-screen flex flex-col py-24">
      <div className="container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Professional services tailored to bring your digital vision to life.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card-gradient group services-card hover:bg-linear-to-br hover:from-blue-500/20 hover:to-purple-500/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14  rounded-xl bg-linear-to-br ${getColorClasses(service.color)} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                <span className="material-icons  text-white text-2xl">{service.icon}</span>
              </div>

              {/* Content */}
              <h3 className="text-xl padding-y font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 mb-5 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="flex flex-col gap-2 mb-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-300">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex justify-center padding-top">
          <div className="card-gradient lg:p-14 w-full text-center">
            <h3 className="padding-top md:text-3xl text-xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 md:text-lg text-sm mb-6">
              Let's discuss how to bring your ideas to life.
            </p>
            <Link to="/contact" className="btn-primary margin group inline-flex items-center gap-2">
              <span>Get Started</span>
              <span className="material-icons transition-transform group-hover:rotate-180">refresh</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

