import React, { useState } from 'react';
import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'hdachiraju@gmail.com',
      link: 'mailto:hdachiraju@gmail.com'
    },
    {
      icon: <Phone size={24} />,
      label: 'Phone',
      value: '+1 (659) 253-8760',
      link: 'tel:+16592538760'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect with me',
      link: 'https://www.linkedin.com/in/hemanth-kumar-dachiraju-bb6a75184'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: '@hdachiraju',
      link: 'https://github.com/hdachiraju'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const mailtoLink = `mailto:hdachiraju@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Opening email client...",
      description: "Your default email application will open with the pre-filled message.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-[#1a1c1b]">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get In <span className="text-cyan-400">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-cyan-400 mx-auto mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, interesting projects, or potential collaborations.
              Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                Whether you have a question, want to collaborate on a project, or just want to connect, 
                I'd love to hear from you. Choose your preferred method of contact below.
              </p>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-gray-900/50 border-gray-800 hover:border-cyan-400 transition-all duration-300">
                    <CardContent className="p-4">
                      <a 
                        href={info.link} 
                        target={info.link.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 group"
                      >
                        <div className="text-cyan-400 group-hover:scale-110 transition-transform">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-gray-400 text-sm">{info.label}</p>
                          <p className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 rounded-lg">
                <div className="flex items-start gap-3">
                  <MapPin className="text-cyan-400 mt-1" size={20} />
                  <div>
                    <p className="text-white font-semibold mb-1">Current Location</p>
                    <p className="text-gray-300">Birmingham, Alabama, USA</p>
                    <p className="text-gray-400 text-sm mt-1">Open to remote opportunities</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
              
              <Card className="bg-gray-900/50 border-gray-800">
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-white text-sm font-semibold mb-2 block">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-white text-sm font-semibold mb-2 block">
                        Your Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="text-white text-sm font-semibold mb-2 block">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="What's this about?"
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-white text-sm font-semibold mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500 focus:border-cyan-400 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold text-lg py-6"
                    >
                      Send Message
                      <Send size={18} className="ml-2" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;