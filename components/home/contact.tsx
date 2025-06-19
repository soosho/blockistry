"use client";

import { Mail, Globe, Github, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements - Matching Hero Style */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl sm:text-2xl text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
            Let&apos;s discuss how{" "}
            <span className="text-purple-300 font-medium">blockchain technology</span> can revolutionize your operations
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">Get in Touch</h3>
              <p className="text-gray-300 text-lg mb-8">
                Ready to start your blockchain journey? We&apos;re here to help you every step of the way.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative flex items-center p-6 bg-gradient-to-br from-gray-900/60 via-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Mail className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Email</div>
                    <div className="text-gray-300">contact@blockistry.io</div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative flex items-center p-6 bg-gradient-to-br from-gray-900/60 via-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Globe className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">Website</div>
                    <div className="text-gray-300">www.blockistry.io</div>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <div className="relative flex items-center p-6 bg-gradient-to-br from-gray-900/60 via-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl hover:border-purple-500/30 transition-all duration-300">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Github className="w-7 h-7 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">GitHub</div>
                    <div className="text-gray-300">github.com/Blockistry</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-8">
              <h4 className="text-2xl font-bold text-white mb-6">Follow Us</h4>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/Blockistry" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-16 h-16 bg-gradient-to-br from-gray-900/60 via-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl flex items-center justify-center hover:border-purple-500/30 hover:scale-110 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <Github className="w-8 h-8 text-purple-400 relative z-10" />
                </a>
                <a 
                  href="https://www.blockistry.io" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative w-16 h-16 bg-gradient-to-br from-gray-900/60 via-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl flex items-center justify-center hover:border-purple-500/30 hover:scale-110 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <Globe className="w-8 h-8 text-purple-400 relative z-10" />
                </a>
                <a 
                  href="mailto:contact@blockistry.io"
                  className="group relative w-16 h-16 bg-gradient-to-br from-gray-900/60 via-gray-800/60 to-gray-900/60 backdrop-blur-xl border border-gray-700/50 rounded-2xl flex items-center justify-center hover:border-purple-500/30 hover:scale-110 transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <Mail className="w-8 h-8 text-purple-400 relative z-10" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-600/10 to-blue-500/20 rounded-3xl blur-xl opacity-0 hover:opacity-100 transition-all duration-700"></div>
            <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transition-all duration-500 hover:border-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Send us a Message</h3>
                <p className="text-gray-300">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-6 py-4 bg-black/30 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/40 transition-all duration-200 text-lg backdrop-blur-sm"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-6 py-4 bg-black/30 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/40 transition-all duration-200 text-lg backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Company (Optional)"
                    className="w-full px-6 py-4 bg-black/30 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/40 transition-all duration-200 text-lg backdrop-blur-sm"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Tell us about your project and requirements..."
                    rows={6}
                    className="w-full px-6 py-4 bg-black/30 border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-black/40 transition-all duration-200 text-lg resize-none backdrop-blur-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="group relative w-full bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 hover:from-purple-500 hover:via-purple-600 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 text-lg shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 flex items-center justify-center"
                >
                  <span className="relative z-10 flex items-center">
                    Send Message
                    <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 