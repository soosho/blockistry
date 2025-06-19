"use client";

import { Star, ChevronRight, ArrowRight, Sparkles, Zap } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-48 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="mb-8 animate-fade-in">
            <div className="inline-flex items-center px-6 py-3 rounded-full glass-purple text-purple-300 text-sm font-medium animate-pulse-purple border border-purple-500/30">
              <Sparkles className="w-4 h-4 mr-2 text-purple-400 animate-spin" style={{ animationDuration: '3s' }} />
              Trusted by Fortune 5 Companies
              <Star className="w-4 h-4 ml-2 text-purple-400" />
            </div>
          </div>
          
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-6xl sm:text-8xl lg:text-9xl font-black mb-4 leading-none tracking-tight">
              <span className="text-white block">Blockchain</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 block">
                Industrial
              </span>
            </h1>
          </div>
          
          {/* Subtitle */}
          <div className="mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 max-w-5xl mx-auto leading-relaxed font-light">
              Transform your business operations with cutting-edge{" "}
              <span className="text-purple-300 font-medium">blockchain technology</span>. 
              We deliver secure, scalable, and innovative solutions for the modern industrial landscape.
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <button className="group relative bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 text-white font-bold py-5 px-10 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40">
              <span className="relative z-10 flex items-center">
                Get Started
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button className="group relative border-2 border-purple-500/40 text-purple-300 font-bold py-5 px-10 rounded-2xl hover:bg-purple-500/10 hover:border-purple-400/60 transition-all duration-300 glass backdrop-blur-sm">
              <span className="relative z-10 flex items-center">
                View Our Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </span>
            </button>
          </div>

          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">50+</div>
              <div className="text-gray-400 text-sm font-medium">Enterprise Clients</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">$1M</div>
              <div className="text-gray-400 text-sm font-medium">Value Transacted</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">99.9%</div>
              <div className="text-gray-400 text-sm font-medium">Uptime</div>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">24/7</div>
              <div className="text-gray-400 text-sm font-medium">Support</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-purple-500/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </section>
  );
} 