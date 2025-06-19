"use client";

import { Shield, Zap, Globe, Users, BarChart3, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Custom Blockchain Networks",
    description: "Fork and maintain custom blockchain networks (coins, not just tokens). Build Proof-of-Work (PoW) and Proof-of-Stake (PoS) chains from scratch."
  },
  {
    icon: Zap,
    title: "Mining Pool Infrastructure",
    description: "Set up and optimize mining pools (Miningcore, Yiimp, node-pools). Deploy and manage full nodes, seed nodes, and explorers."
  },
  {
    icon: Globe,
    title: "Consensus & Algorithms",
    description: "Customize consensus algorithms (KawPoW, RandomX, Ethash). Implement on-chain staking, masternodes, and reward systems."
  },
  {
    icon: Users,
    title: "Wallet Development",
    description: "Create secure wallets (core, web, mobile) and key management. Token layer development (sub-assets, NFTs) on native chains."
  },
  {
    icon: BarChart3,
    title: "Infrastructure & DevOps",
    description: "Blockchain package deployment (Dockerized, CI/CD pipelines). RPC/API interfaces for DApp and wallet integrations."
  },
  {
    icon: CheckCircle,
    title: "Security & Monitoring",
    description: "Security hardening (DoS protection, replay attack mitigation). Analytics dashboards for network health and stats."
  }
];

export default function WhatWeDo() {
  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background Elements - Matching Hero Style */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500/10 via-purple-600/10 to-purple-500/10 border border-purple-500/20 text-purple-300 mb-8 backdrop-blur-sm">
            Our Services
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-8">
            What We Do
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Comprehensive blockchain solutions tailored for industrial applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card Background with Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-purple-600/10 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                
                {/* Main Card */}
                <div className="relative bg-gradient-to-br from-gray-900/80 via-gray-800/80 to-gray-900/80 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 h-full transition-all duration-500 group-hover:border-purple-500/30 group-hover:shadow-2xl group-hover:shadow-purple-500/20 group-hover:-translate-y-2">
                  
                  {/* Icon Container with centered glow */}
                  <div className="relative w-16 h-16 mb-8 isolate">
                    {/* Centered glow effect */}
                    <div className="absolute inset-0 bg-purple-500/20 rounded-2xl blur-[6px] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-110"></div>
                    {/* Icon background */}
                    <div className="relative h-full bg-gradient-to-br from-purple-500/10 via-purple-600/10 to-blue-500/10 border border-purple-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:border-purple-400/40 transition-all duration-500">
                      <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 transition-all duration-500">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 