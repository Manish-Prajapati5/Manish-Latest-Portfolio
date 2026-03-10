import React from "react";
import profile from '../assets/images/profile.png'
import resume from '../assets/images/Manish_resume.pdf'

const About = () => {
  const stats = [
    { icon: 'emoji_events', label: 'Experience', value: '1+' },
    { icon: 'folder', label: 'Projects', value: '50+' },
    { icon: 'people', label: 'Clients', value: '5+' },
  ];

  return (
    <section id="about" className="min-h-screen flex flex-col relative">
      <div className="container relative z-10">
        {/* Section Title */}
        <div className="text-center padding-top">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-gray-400 padding-x mx-auto leading-relaxed">
            Passionate Frontend Developer with a keen eye for design and a love for creating
            seamless user experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center drop-shadow-2xl">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="relative ">
              {/* Decorative gradient effects */}
              <div className="absolute -top-8 -left-8 w-25 h-25 bg-blue-500/20 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -right-8 w-25 h-25 bg-purple-500/20 rounded-full blur-3xl" />

              {/* Main image container */}
              <div className="card-gradient relative  hover:scale-[1.02] transition-transform duration-500">
                <div className="  rounded-2xl bg-linear-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 flex items-center justify-center overflow-hidden">
                  <div className="">
                    <img className=" w-90 text-blue-400" src={profile} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex padding-top flex-col items-center lg:items-start text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-semibold mb-6">
              I'm a <span className="text-blue-400">Frontend Developer</span>
            </h3>

            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 1 years of experience in web development, I specialize in building
              responsive, user-friendly websites and applications. My expertise spans across
              modern JavaScript frameworks, particularly React, along with CSS frameworks like Tailwind CSS.
              I believe in writing clean, maintainable code and creating intuitive user
              interfaces that provide memorable experiences.
            </p>

            <p className="text-gray-300 mb-8 leading-relaxed">
              I love turning complex problems into simple, beautiful interface designs.
              When I'm not coding, you can find me exploring new technologies or contributing
              to open-source projects.
            </p>

            {/* Stats Grid */}
            <div className="grid padding-x grid-cols-3 gap-4 w-full max-w-lg mb-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="card-gradient p-4 text-center hover:-translate-y-2 transition-transform duration-300"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-linear-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                    <span className="material-icons text-blue-400">{stat.icon}</span>
                  </div>
                  <p className="text-2xl font-bold text-white">{stat.value}</p>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Download CV Button */}
            <a
              href={resume}
              download
              target="_blank"
              rel="noopener noreferrer" >
              <button className="btn-primary group ">
                <span className="material-icons">download</span>
                <span>Download CV</span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

