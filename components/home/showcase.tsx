"use client";

const projects = [
  {
    name: "Tenzura Wallet",
    image: "/assets/images/showcase/tenzura-wallet.png",
    url: "https://www.tenzura.io"
  },
  {
    name: "Tenzura Coin",
    image: "/assets/images/showcase/tenzura-coin.png",
    url: "https://www.tenzura.org"
  }
];

export default function Showcase() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Main Heading */}
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
              Projects
            </h2>
          </div>
          
          {/* Subtitle */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light">
              Trusted by industry leaders in{" "}
              <span className="text-purple-300 font-medium">blockchain and enterprise solutions</span>
            </p>
          </div>
          
          {/* Logos Grid */}
          <div className="flex flex-wrap justify-center items-center gap-20 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {projects.map((project, index) => (
              <a 
                key={index}
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="relative w-[400px] h-[120px] flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                    style={{ 
                      imageRendering: '-webkit-optimize-contrast'
                    }}
                  />
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-transparent via-purple-500/10 to-transparent rounded-2xl"></div>
                </div>
              </a>
            ))}
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