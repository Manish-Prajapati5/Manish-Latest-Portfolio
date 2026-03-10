import { Code, Database, Terminal } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'React', level: 95 },
        { name: 'JavaScript', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Tailwind CSS', level: 90 },
      ],
    },
    {
      title: 'Backend',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Express', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'REST APIs', level: 85 },
        { name: 'GraphQL', level: 65 },
      ],
    },
    {
      title: 'Tools',
      icon: Terminal,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 80 },
        { name: 'Vite', level: 85 },
      ],
    },
  ];

  return (
    <section className="min-h-screen flex flex-col py-24 px-4">
      {/* Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <div className="container relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the technologies I work with.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title} className="glass-card p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <category.icon className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>

              <div className="flex flex-col gap-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-blue-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-linear-to-r from-blue-500 to-purple-500 rounded-full"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Tags */}
        <div>
          <h3 className="text-xl font-semibold text-center mb-8">
            Technologies I <span className="text-blue-400">Work With</span>
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              'React', 'Next.js', 'TypeScript', 'JavaScript',
              'Node.js', 'Tailwind CSS', 'Sass/SCSS', 'Bootstrap', 'Material UI',
              'Framer Motion', 'Three.js', 'Git', 'GitHub', 'Vite',
            ].map((tech) => (
              <span key={tech} className="glass px-4 py-2 text-sm text-gray-300">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

