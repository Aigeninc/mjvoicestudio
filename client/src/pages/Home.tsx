import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { WhatYouLearn } from "@/components/sections/WhatYouLearn";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { Services } from "@/components/sections/Services";
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
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
