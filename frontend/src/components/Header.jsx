import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0f0f10]/95 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-bold text-white">
            HK<span className="text-cyan-400">.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors">
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold"
            >
              Let's Connect
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 flex flex-col gap-4">
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              About
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              Experience
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              Skills
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-cyan-400 transition-colors text-left">
              Contact
            </button>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;