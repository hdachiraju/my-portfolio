import React from 'react';
import { Code, Database, Cloud, Wrench, Shield, Laptop } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={28} />,
      title: 'Programming Languages',
      skills: ['JavaScript', 'Python', 'Java', 'C', 'TypeScript', 'SQL'],
      color: 'cyan'
    },
    {
      icon: <Laptop size={28} />,
      title: 'Web Development',
      skills: ['HTML5', 'CSS3', 'React', 'Angular', 'Node.js', 'Express.js', 'Bootstrap', 'RESTful APIs'],
      color: 'blue'
    },
    {
      icon: <Database size={28} />,
      title: 'Databases',
      skills: ['MongoDB', 'SQL', 'MySQL', 'Database Design', 'Query Optimization'],
      color: 'green'
    },
    {
      icon: <Cloud size={28} />,
      title: 'Cloud & DevOps',
      skills: ['Microsoft Azure', 'Azure Functions', 'Cloud Deployment', 'CI/CD', 'Docker'],
      color: 'purple'
    },
    {
      icon: <Wrench size={28} />,
      title: 'Tools & Technologies',
      skills: ['Git', 'ServiceNow', 'Selenium', 'Cisco', 'Meraki', 'Juniper', 'VS Code'],
      color: 'orange'
    },
    {
      icon: <Shield size={28} />,
      title: 'Site Reliability & Security',
      skills: ['Monitoring', 'Incident Management', 'Root Cause Analysis', 'Network Security', 'System Reliability'],
      color: 'red'
    }
  ];

  const certifications = [
    {
      name: 'Microsoft Certified: Azure Fundamentals',
      code: 'AZ-900',
      issuer: 'Microsoft',
      icon: '☁️'
    },
    {
      name: 'Microsoft Certified: Security, Compliance, and Identity Fundamentals',
      code: 'SC-900',
      issuer: 'Microsoft',
      icon: '🔒'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-[#1a1c1b]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Skills & <span className="text-cyan-400">Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive overview of my technical skills and professional certifications.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillCategories.map((category, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-cyan-400">
                      {category.icon}
                    </div>
                    <h3 className="text-white font-bold text-lg">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <Badge 
                        key={idx} 
                        variant="secondary" 
                        className="bg-cyan-400/10 text-gray-300 hover:bg-cyan-400/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 text-center">
              Professional <span className="text-cyan-400">Certifications</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <Card key={index} className="bg-gradient-to-br from-cyan-500/5 to-blue-500/5 border-cyan-400/30 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="text-4xl">{cert.icon}</div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge className="bg-cyan-500 text-black font-semibold">
                            {cert.code}
                          </Badge>
                        </div>
                        <h4 className="text-white font-semibold mb-1">{cert.name}</h4>
                        <p className="text-gray-400 text-sm">Issued by {cert.issuer}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;