import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with shopping cart, cart components, form handling and filter.',
      tags: ['React', 'Node.js', 'MongoDB'],
      projectLink: 'https://ecommerce-mstore.netlify.app/',
      sourceCode: 'https://github.com/Manish-Prajapati5/react-ecommerce-shopping-',
      image: '🛒',
    },
    {
      title: 'Video Call Website',
      description: 'Collaborative project management tool with real-time updates and team features.',
      tags: ['React', 'ZegoCloud', 'Tailwind'],
      projectLink: 'https://videocallwebsite.netlify.app/',
      sourceCode: 'https://github.com/Manish-Prajapati5/VideoCall-website',
      image: '📋',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather application that shows temperature, humidity, and wind speed using a weather API.',
      tags: ['React', 'API', 'CSS3'],
      projectLink: '/projects',
      sourceCode: 'https://github.com/Manish-Prajapati5/Weather-app-clone',
      image: '🌤️',
    },
    {
      title: 'EMI Calculator',
      description: 'A simple EMI calculator that instantly calculates monthly loan payments based on amount, interest rate, and tenure.',
      tags: ['React', 'Wheather API', 'JavaScript'],
      projectLink: 'https://cerulean-conkies-0f8d54.netlify.app/',
      sourceCode: 'https://github.com/Manish-Prajapati5/EMI-calculator',
      image: '📱',
    },
    {
      title: 'Portfolio Website',
      description: 'Interactive portfolio with 3D animations and smooth transitions.',
      tags: ['React', 'Three.js', 'Motion'],
      projectLink: 'https://manishprj-portfolio.netlify.app/',
      sourceCode: 'https://github.com/Manish-Prajapati5/Manish-portfolio',
      image: '💼',
    },
    {
      title: 'Buzzthrough Template',
      description: 'A modern and responsive website template built with pure HTML, CSS, and JavaScript.',
      tags: ['Html', 'Css', 'JavaScript'],
      projectLink: 'https://buzzthrough-template.netlify.app/',
      sourceCode: 'https://buzzthrough-template.netlify.app/',
      image: '💬',
    },
  ];

  const filters = ['All', 'React', 'Node.js', 'JavaScript'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section className="project padding min-h-screen flex flex-col">
      <div className="container relative z-10">
        {/* Section Title */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 padding-top leading-relaxed">
            A showcase of my recent work. Each project represents unique challenges and creative solutions.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 justify-center mb-12 mt-6">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`project-filter rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${activeFilter === filter
                ? 'bg-linear-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                : 'card-gradient hover:bg-linear-to-r hover:from-blue-500/20 hover:to-purple-500/20 text-gray-300 hover:text-white'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className="card-gradient padding group overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-52 bg-linear-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden">
                <span className="text-5xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  {project.image}
                </span>

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <Link
                    to={project.projectLink}
                    target='_blank'
                    rel=''

                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <span className="material-icons text-white">open_in_new</span>
                  </Link>
                  <Link
                    to={project.sourceCode}
                    target='_blank'
                    rel=''
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-all duration-300 hover:scale-110"
                  >
                    <span className="material-icons text-white">code</span>
                  </Link>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 padding-x">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="card-gradient padding-10 text-xs text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center padding">
          <Link to={'/'}>
            <button className="btn-secondary group">
              <span className='text-xs sm:text-lg '>View More Projects</span>
              <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;

