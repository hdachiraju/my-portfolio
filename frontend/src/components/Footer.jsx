import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f0f10] border-t border-gray-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">
                HK<span className="text-cyan-400">.</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Site Reliability Engineer & Full-Stack Developer passionate about building 
                scalable solutions and ensuring system reliability.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    About Me
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Experience
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    Skills
                  </button>
                </li>
              </ul>
            </div>

            {/* Connect Section */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
              <div className="flex gap-4 mb-4">
                <a 
                  href="https://github.com/hdachiraju" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110"
                  aria-label="GitHub"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://www.linkedin.com/in/hemanth-kumar-dachiraju-bb6a75184" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:hdachiraju@gmail.com"
                  className="text-gray-400 hover:text-cyan-400 transition-all transform hover:scale-110"
                  aria-label="Email"
                >
                  <Mail size={24} />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                <a href="mailto:hdachiraju@gmail.com" className="hover:text-cyan-400 transition-colors">
                  hdachiraju@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm text-center md:text-left">
                © {currentYear} Hemanth Kumar Dachiraju. All rights reserved.
              </p>
              <p className="text-gray-400 text-sm flex items-center gap-1">
                Built with <Heart size={14} className="text-cyan-400 fill-cyan-400" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;