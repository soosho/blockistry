"use client";

import Hero from "@/components/home/hero";
import WhatWeDo from "@/components/home/whatwedo";
import Showcase from "@/components/home/showcase";
import Contact from "@/components/home/contact";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

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
