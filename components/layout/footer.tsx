import Image from "next/image";
import { Github, Mail, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900 border-t border-purple-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">
          <div className="md:col-span-6">
            <Image
              src="/assets/images/logo/logo.png"
              alt="Blockistry Logo"
              width={240}
              height={50}
              className="h-10 w-auto object-contain mb-4"
              unoptimized
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Transform your business operations with cutting-edge blockchain technology. 
              We deliver secure, scalable, and innovative solutions for the modern industrial landscape.
            </p>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-purple-400 transition-colors duration-200">Home</a>
              <a href="#services" className="block text-gray-300 hover:text-purple-400 transition-colors duration-200">Services</a>
              <a href="#projects" className="block text-gray-300 hover:text-purple-400 transition-colors duration-200">Projects</a>
              <a href="#contact" className="block text-gray-300 hover:text-purple-400 transition-colors duration-200">Contact</a>
            </div>
          </div>
          
          <div className="md:col-span-3">
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="space-y-3">
              <a 
                href="https://github.com/Blockistry" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <Github className="w-5 h-5 mr-2" />
                github.com/Blockistry
              </a>
              <a 
                href="mailto:contact@blockistry.io"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <Mail className="w-5 h-5 mr-2" />
                contact@blockistry.io
              </a>
              <a 
                href="https://www.blockistry.io" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
              >
                <Globe className="w-5 h-5 mr-2" />
                www.blockistry.io
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-purple-900/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Blockistry. All rights reserved.
            </div>
            <div className="text-gray-400 text-xs">
              Blockchain | Industrial
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 