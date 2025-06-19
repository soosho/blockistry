"use client";

import { 
  Mail, 
  Globe,
  Github
} from "lucide-react";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import WhatWeDo from "@/components/home/whatwedo";
import Hero from "@/components/home/hero";
import Showcase from "@/components/home/showcase";
import Contact from "@/components/home/contact";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-deep-purple text-white relative">
        <div className="relative z-10">
          <Navbar />
          <Hero />
          <WhatWeDo />
          <Showcase />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
