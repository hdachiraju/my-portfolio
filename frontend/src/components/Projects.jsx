import React from 'react';
import { Github, ExternalLink, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  const projects = [
    {
      title: 'Certificate Verification and Validation Using Blockchain',
      role: 'Team Member',
      date: 'March 2022',
      description: 'Engineered a MEAN Stack web application to verify and validate certificates, integrating Blockchain technology to enhance security and authenticity. This project was awarded first prize at the University Project Fest for outstanding project execution and innovation.',
      technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'Blockchain', 'Web3'],
      github: 'https://github.com/hdachiraju/Certificate-V---Blockchain',
      demo: 'https://hdachiraju.github.io/Certificate-V---Blockchain/',
      award: 'First Prize at University Project Fest',
      highlights: [
        'Implemented blockchain technology for tamper-proof certificate storage',
        'Designed intuitive user interface for certificate verification',
        'Integrated smart contracts for automated validation',
        'Ensured data integrity and authenticity through decentralized ledger'
      ]
    },
    {
      title: 'Car Sales and Rentals Platform',
      role: 'Team Lead',
      date: 'March 2021',
      description: 'Led a team of four developers to create a comprehensive car sales and rentals website. Focused on user interface design and front-end development, delivering a seamless user experience with modern web technologies.',
      technologies: ['MongoDB', 'Express.js', 'Angular', 'Node.js', 'Bootstrap', 'RESTful API'],
      github: 'https://github.com/hdachiraju/Car',
      demo: 'https://hdachiraju.github.io/Car/',
      award: null,
      highlights: [
        'Led team of 4 developers in full project lifecycle',
        'Designed responsive UI with Bootstrap for optimal user experience',
        'Implemented comprehensive booking and payment system',
        'Created RESTful APIs for efficient data management'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-[#0f0f10]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-cyan-400">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Here are some of my notable projects that showcase my skills in full-stack development, 
              blockchain technology, and team leadership.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-cyan-400 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-5 gap-6">
                    {/* Project Image/Icon Section */}
                    <div className="md:col-span-2 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 flex items-center justify-center relative overflow-hidden">
                      <div className="text-cyan-400 opacity-20 absolute transform rotate-12 scale-150">
                        {index === 0 ? (
                          <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18c-4 0-7-3-7-7V8.3l7-3.5 7 3.5V13c0 4-3 7-7 7z"/>
                          </svg>
                        ) : (
                          <svg width="200" height="200" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/>
                          </svg>
                        )}
                      </div>
                      <div className="relative z-10 text-center">
                        <div className="text-6xl mb-4 text-cyan-400">
                          {index === 0 ? '🔐' : '🚗'}
                        </div>
                        {project.award && (
                          <div className="flex items-center justify-center gap-2 text-yellow-400">
                            <Award size={20} />
                            <span className="text-sm font-semibold">Award Winner</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Project Details Section */}
                    <div className="md:col-span-3 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {project.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-gray-400">
                            <span className="font-semibold">{project.role}</span>
                            <span>•</span>
                            <span>{project.date}</span>
                          </div>
                        </div>
                      </div>

                      {project.award && (
                        <div className="mb-4 p-3 bg-yellow-400/10 border border-yellow-400/30 rounded-lg">
                          <p className="text-yellow-400 text-sm font-semibold flex items-center gap-2">
                            <Award size={16} />
                            {project.award}
                          </p>
                        </div>
                      )}

                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 text-sm">Key Highlights:</h4>
                        <ul className="space-y-1">
                          {project.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-400 text-sm">
                              <span className="text-cyan-400 mt-1">→</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2 text-sm">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-cyan-400/10 text-cyan-400 border-cyan-400/30">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <Button 
                          asChild
                          className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={18} className="mr-2" />
                            View Code
                          </a>
                        </Button>
                        {project.demo && (
                          <Button 
                            asChild
                            variant="outline" 
                            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink size={18} className="mr-2" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;