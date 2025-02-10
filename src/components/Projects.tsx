
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
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-gray-200 rounded-full px-4 py-1.5 text-sm font-medium text-gray-600 mb-4">
            Projects
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured Work
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-gray-600 transition-colors"
                  >
                    <Github size={16} />
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
