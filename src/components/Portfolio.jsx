import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with shopping cart, payment integration, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: '🛒',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates and team features.',
      tags: ['React', 'Firebase', 'Tailwind'],
      image: '📋',
    },
    {
      title: 'Weather Dashboard',
      description: 'Beautiful weather application with forecasts, maps, and location-based alerts.',
      tags: ['React', 'API', 'CSS3'],
      image: '🌤️',
    },
    {
      title: 'Social Media App',
      description: 'Full social platform with posts, comments, likes, and user profiles.',
      tags: ['React', 'Node.js', 'Socket.io'],
      image: '📱',
    },
    {
      title: 'Portfolio Website',
      description: 'Interactive portfolio with 3D animations and smooth transitions.',
      tags: ['React', 'Three.js', 'Motion'],
      image: '💼',
    },
    {
      title: 'Chat Application',
      description: 'Real-time messaging app with group chats and file sharing.',
      tags: ['React', 'Socket.io', 'Express'],
      image: '💬',
    },
  ];

  const filters = ['All', 'React', 'Node.js', 'JavaScript'];

  return (
    <section className="min-h-screen  flex flex-col py-24 px-4">
      {/* Background Blobs */}
      {/* <div className="blob blob-1"></div>
      <div className="blob blob-3"></div> */}

      <div className="container relative top-30  z-10">
        {/* Section Title */}
        <div className="text-center   ">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Portfolio</span>
          </h2>
          <p className="text-gray-400 relative  top-2   text-center leading-relaxed">
            A showcase of my recent work and projects. Each project represents unique challenges and solutions.
          </p>
        </div>

        {/* Filter Tags */}
        <div className="flex flex-wrap gap-3 justify-center relative top-5   mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`w-20 h-7 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${filter === 'All'
                  ? 'bg-blue-500 text-white'
                  : 'glass text-gray-300 border border-white/10 hover:bg-white/10'
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="min-h-screen relative top-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {projects.map((project) => (
            <div key={project.title} className="glass-card overflow-hidden group">
              {/* Project Image */}
              <div className="h-52 bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center relative text-5xl">
                <span>{project.image}</span>

                {/* Overlay Links */}
                <div className="absolute  inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a href="#" className="p-3 bg-white/20 rounded-full backdrop-blur-sm hover:bg-white/30 transition-colors">
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="glass px-3 py-1 text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center flex justify-center relative top-25">
          <button className="btn-secondary">
            <span className=''> View More Projects </span>
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;

