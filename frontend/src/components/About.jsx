import React from 'react';
import { Code, Server, Cloud, Award } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const About = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Full-Stack Development',
      description: 'Expert in MEAN Stack with hands-on experience building scalable web applications'
    },
    {
      icon: <Server size={32} />,
      title: 'Site Reliability',
      description: 'Specialized in monitoring, incident management, and ensuring system uptime'
    },
    {
      icon: <Cloud size={32} />,
      title: 'Cloud Computing',
      description: 'Microsoft Azure certified with experience in cloud-based deployments'
    },
    {
      icon: <Award size={32} />,
      title: 'Problem Solver',
      description: 'Award-winning projects with focus on innovative solutions and best practices'
    }
  ];

  return (
    <section id="about" className="py-20 bg-[#0f0f10]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-cyan-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">My Journey</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm a passionate software engineer currently pursuing my Master's degree in Computer and Information Sciences 
                at the University of Alabama at Birmingham, maintaining a 3.55 GPA.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                My professional journey at Accenture has been diverse and enriching. I started as an Application Developer, 
                where I developed and deployed web applications using the MEAN Stack on Microsoft Azure Cloud. I then 
                transitioned to a Network Operations Advisor role, where I honed my skills in diagnosing complex networking 
                problems and managing enterprise-level infrastructure.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Most recently, as a Site Reliability Engineer, I've been focused on developing synthetic monitors, 
                identifying root causes of incidents, and enhancing system reliability. I'm passionate about building 
                robust, scalable solutions and ensuring seamless user experiences.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-white mb-4">What I Bring</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With a strong foundation in both software development and system reliability, I bridge the gap between 
                development and operations. My experience spans across full-stack development, cloud technologies, 
                network operations, and site reliability engineering.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Strong problem-solving abilities with focus on root cause analysis</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Experience in building award-winning projects with innovative approaches</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Certified in Microsoft Azure and Security fundamentals</p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
                  <p className="text-gray-300">Team player with experience leading and collaborating on complex projects</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center">
                    {highlight.icon}
                  </div>
                  <h4 className="text-white font-semibold mb-2">{highlight.title}</h4>
                  <p className="text-gray-400 text-sm">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;