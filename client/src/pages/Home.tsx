import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatYouLearn } from "@/components/sections/WhatYouLearn";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { VocalMethod } from "@/components/sections/VocalMethod";
import { VocalAdvantage } from "@/components/sections/VocalAdvantage";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Press } from "@/components/sections/Press";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <WhatYouLearn />
        <WhoIsItFor />
        <VocalMethod />
        <VocalAdvantage />
        <Services />
        <Testimonials />
        <Press />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}