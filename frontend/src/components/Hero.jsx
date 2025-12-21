import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0f10] via-[#1a1c1b] to-[#0f0f10] pt-20">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-6 animate-fade-in">
            <span className="text-cyan-400 text-sm font-semibold tracking-wider uppercase">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-slide-up">
            Hemanth Kumar
            <br />
            <span className="text-cyan-400">Dachiraju</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Site Reliability Engineer & Full-Stack Developer
          </p>
          
          <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate about building scalable web applications and ensuring robust system reliability. 
            Currently pursuing MS in Computer Science at University of Alabama at Birmingham.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <Button 
              onClick={() => scrollToSection('projects')} 
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-lg px-8 py-6 group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              variant="outline" 
              className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black text-lg px-8 py-6"
            >
              Get in Touch
            </Button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a 
              href="https://github.com/hdachiraju" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 transition-transform"
            >
              <Github size={28} />
            </a>
            <a 
              href="https://www.linkedin.com/in/hemanth-kumar-dachiraju-bb6a75184" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 transition-transform"
            >
              <Linkedin size={28} />
            </a>
            <a 
              href="mailto:hdachiraju@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors transform hover:scale-110 transition-transform"
            >
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;