import { Navbar } from "@/components/layout/Navbar";
import { StickyBookCTA } from "@/components/layout/StickyBookCTA";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { MeetTiffini } from "@/components/sections/MeetTiffini";
import { HearTiffini } from "@/components/sections/HearTiffini";
import { Showcases } from "@/components/sections/Showcases";
import { TypesOfLessons } from "@/components/sections/TypesOfLessons";
import { WhatYouLearn } from "@/components/sections/WhatYouLearn";
import { WhoIsItFor } from "@/components/sections/WhoIsItFor";
import { VocalAdvantage } from "@/components/sections/VocalAdvantage";
import { Studio } from "@/components/sections/Studio";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <MeetTiffini />
        <HearTiffini />
        <Showcases />
        <TypesOfLessons />
        <WhatYouLearn />
        <WhoIsItFor />
        <VocalAdvantage />
        <Studio />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyBookCTA />
    </div>
  );
}
