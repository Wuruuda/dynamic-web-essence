
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with React and Node.js',
    image: '/placeholder.svg',
    tags: ['React', 'Node.js', 'MongoDB'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A minimal portfolio website for a photographer',
    image: '/placeholder.svg',
    tags: ['Next.js', 'Tailwind CSS'],
    demoLink: '#',
    githubLink: '#',
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task management application',
    image: '/placeholder.svg',
    tags: ['React', 'Firebase', 'Material-UI'],
    demoLink: '#',
    githubLink: '#',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <span className="inline-block bg-purple-50 text-purple-600 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            Projects
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Featured Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-6">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors font-medium"
                  >
                    <Github size={18} />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
