import React from 'react';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Computer and Information Sciences',
      institution: 'University of Alabama at Birmingham',
      location: 'Birmingham, Alabama, USA',
      period: 'August 2024 – Present',
      gpa: '3.55 / 4.0',
      status: 'In Progress',
      color: 'cyan'
    },
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'MLR Institute of Technology',
      location: 'Telangana, India',
      period: 'Graduated May 2022',
      gpa: '3.04 / 4.0',
      status: 'Completed',
      color: 'blue'
    }
  ];

  return (
    <section id="education" className="py-20 bg-[#0f0f10]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Education & <span className="text-cyan-400">Academic Background</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My academic journey in Computer Science and Information Technology.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-cyan-400 transition-all duration-300 transform hover:-translate-y-2">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-cyan-400">
                      <GraduationCap size={32} />
                    </div>
                    <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      edu.status === 'In Progress' 
                        ? 'bg-green-500/10 text-green-400 border border-green-400/30' 
                        : 'bg-blue-500/10 text-blue-400 border border-blue-400/30'
                    }`}>
                      {edu.status}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 leading-tight">
                    {edu.degree}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <p className="text-cyan-400 font-semibold">{edu.institution}</p>
                    
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <MapPin size={14} />
                      <span>{edu.location}</span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={14} />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">GPA:</span>
                      <span className="text-white font-bold text-lg">{edu.gpa}</span>
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

export default Education;