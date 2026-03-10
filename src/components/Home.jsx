import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const skills = ['React', 'JavaScript', 'TypeScript', 'Node.js', 'CSS/Tailwind'];

  return (
    <section className="min-h-screen flex items-center py-24">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            <div className="animate-slide-up">
              <p className="text-blue-400 text-lg mb-4 font-medium tracking-wide">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-size-[200%_auto] bg-clip-text text-transparent animate-gradient">
                  Creative
                </span>
                <br />
                <span className="text-white">Developer</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Building stunning digital experiences with modern technologies.
                Passionate about creating interactive, user-friendly applications.
              </p>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-3 padding-x  justify-center lg:justify-start mb-8">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="card-gradient padding-10 inline-flex justify-center items-center h-8 text-sm cursor-default hover:scale-105 transition-transform"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex  flex-wrap gap-4 justify-center lg:justify-start">
                <Link to="/projects" className="btn-primary group">
                  <span>View Work</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
                </Link>
                <Link to="/contact" className="btn-secondary">
                  Contact Me
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-5  padding-top justify-center lg:justify-start">
                {[
                  { icon: <Github/>, href: 'https://github.com/Manish-Prajapati5', label: 'GitHub' },
                  { icon: <Linkedin/>, href: 'https://www.linkedin.com/in/manish-prajapati-bb99832a6/', label: 'LinkedIn' },
                  { icon: <Twitter/>, href: 'https://twitter.com', label: 'Twitter' },
                ]?.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-gradient w-12 h-12 flex justify-center items-center rounded-xl text-gray-400 hover:text-white hover:bg-linear-to-r hover:from-blue-500/30 hover:to-purple-500/30 transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <span className="material-icons ">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Lightweight Animated Element */}
          <div className="flex overflow-x-clip items-center justify-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-3xl scale-75 animate-pulse-glow" />

              {/* Lightweight Animated Circle */}
              <div className="h-64 w-64 lg:h-96 lg:w-96 relative z-10">
                <div className="w-full h-full relative">
                  {/* Core circle */}
                  <div className="absolute inset-8 rounded-full bg-linear-to-br from-blue-500 via-purple-500 to-pink-500 animate-pulse-glow flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full bg-linear-to-br from-blue-400 to-purple-400 animate-pulse" />
                  </div>
                  {/* Orbiting circles */}
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-400/60" />
                  </div>
                  <div className="absolute inset-0 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                    <div className="absolute -bottom-4 right-1/4 w-6 h-6 rounded-full bg-purple-400/60" />
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-blue-500/30 rounded-full animate-spin" style={{ animationDuration: '10s' }} />
              <div className="absolute -bottom-6 -left-6 w-16 h-16 border-2 border-purple-500/30 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <a
            href="#footer"
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors"
          >
            <span className="text-sm font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center pt-2 animate-bounce-subtle">
              <div className="w-1 h-2 bg-current rounded-full" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

