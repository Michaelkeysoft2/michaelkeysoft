import React from 'react';
import { GitBranch, Globe, Monitor, Code, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center p-2 shadow-lg">
                <div 
                  className="w-full h-full bg-white"
                  style={{ 
                    maskImage: 'url(/logo.jpg)', 
                    WebkitMaskImage: 'url(/logo.jpg)',
                    maskSize: 'contain',
                    WebkitMaskSize: 'contain',
                    maskRepeat: 'no-repeat',
                    WebkitMaskRepeat: 'no-repeat',
                    maskPosition: 'center',
                    WebkitMaskPosition: 'center'
                  }}
                />
              </div>
              <span className="text-2xl font-bold text-primary tracking-tight">MichaelKeysoft</span>
            </div>
            <p className="text-gray-500 max-w-sm mb-8 leading-relaxed">
              Premium software engineering and digital design services tailored to your business needs. Building the future of the web, one pixel at a time.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all">
                <GitBranch size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all">
                <Monitor size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-gray-400 hover:text-accent transition-all">
                <Code size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-500 hover:text-accent transition-colors">Home</a></li>
              <li><a href="#services" className="text-gray-500 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#projects" className="text-gray-500 hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-gray-500 hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-primary font-bold mb-6">Newsletter</h4>
            <p className="text-gray-500 text-sm mb-6">Subscribe to get the latest updates and digital insights.</p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full px-4 py-3 bg-white border border-gray-100 rounded-l-xl focus:outline-none focus:ring-1 focus:ring-accent/30"
              />
              <button className="px-4 py-3 bg-primary text-white rounded-r-xl font-bold hover:bg-primary-light transition-colors">
                Go
              </button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} MichaelKeysoft. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Made with <Heart size={14} className="mx-1 text-red-500 fill-current" /> in Nigeria
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
