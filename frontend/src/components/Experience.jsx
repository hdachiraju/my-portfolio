import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const Experience = () => {
  const experiences = [
    {
      company: 'Accenture Pvt. Ltd.',
      location: 'Hyderabad, India',
      role: 'Site Reliability Engineer',
      period: 'March 2024 – August 2024',
      responsibilities: [
        'Developed and implemented Synthetic Monitors using JavaScript and NodeJS with Selenium web drivers to test and replicate user journeys on e-commerce web pages',
        'Enhanced site reliability and performance through comprehensive monitoring solutions',
        'Identified root causes of incidents and enhanced monitoring tools, significantly reducing recurrence of similar issues',
        'Improved site uptime through proactive incident management and resolution'
      ],
      color: 'cyan'
    },
    {
      company: 'Accenture Pvt. Ltd.',
      location: 'Hyderabad, India',
      role: 'Network Operations Advisor',
      period: 'July 2023 – February 2024',
      responsibilities: [
        'Diagnosed and resolved complex networking problems as a Level 2 Engineer, enhancing system reliability and performance',
        'Expertly utilized Cisco, Meraki, and Juniper technologies to address and mitigate network complications',
        'Ensured robust and efficient network operations across enterprise infrastructure',
        'Implemented ServiceNow for incident ticket management, streamlining the process of raising and monitoring tickets for quicker resolution'
      ],
      color: 'blue'
    },
    {
      company: 'Accenture Pvt. Ltd.',
      location: 'Hyderabad, India',
      role: 'Application Developer (Entry Level)',
      period: 'January 2023 – July 2023',
      responsibilities: [
        'Developed and deployed a web application using the MEAN Stack on Microsoft Azure Cloud',
        'Significantly enhanced application usability and performance through optimized architecture',
        'Received comprehensive training in Microsoft Azure Cloud services',
        'Gained proficiency in cloud-based application deployment and management'
      ],
      color: 'purple'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-[#1a1c1b]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Work <span className="text-cyan-400">Experience</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto"></div>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <div key={index} className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Content */}
                  <div className="flex-1">
                    <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-400 transition-all duration-300 transform hover:scale-105">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                            <p className="text-cyan-400 font-semibold">{exp.company}</p>
                            <p className="text-gray-400 text-sm">{exp.location}</p>
                          </div>
                          <div className="text-cyan-400">
                            <Briefcase size={24} />
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2 text-gray-400 mb-4">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>

                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                              <span className="text-cyan-400 mt-1">•</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden md:flex items-center justify-center">
                    <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-[#1a1c1b] z-10"></div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;