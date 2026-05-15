import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { asset } from "@/lib/asset";

export function MeetTiffini() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Meet Tiffini</h2>
          <p className="text-xl text-gray-600">
            Professional singer, performer, and vocal coach
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10 lg:gap-14 items-start max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2"
          >
            <div className="relative">
              <img
                src={asset("/tiffini-headshot.jpg")}
                alt="Tiffini Lindsay — headshot"
                className="w-full rounded-lg shadow-xl object-cover aspect-[3/4]"
              />
            </div>
            <div className="mt-6">
              <Button asChild size="lg" variant="outline" className="w-full">
                <a
                  href={asset("/tiffini-resume.pdf")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-5 w-5" />
                  View Tiffini's Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-3 space-y-5 text-gray-700 leading-relaxed text-[1.05rem]"
          >
            <p>
              Tiffini is a professional singer, performer, and vocal coach whose
              lifelong passion for music and storytelling has taken her across
              the country — and around the world. A graduate of{" "}
              <strong>Belmont University</strong> with a Bachelor of Music
              emphasizing Musical Theatre, she has spent years performing on
              professional stages while helping others discover their own voice
              and confidence through music.
            </p>
            <p>
              Her performing career has included living and working in both{" "}
              <strong>New York City</strong> and <strong>Las Vegas</strong>,
              traveling internationally as a professional singer, and appearing
              in productions and events across the entertainment industry.
              Tiffini toured nationally as{" "}
              <strong>Mary Magdalene in the Broadway national tour of </strong>
              <em>Jesus Christ Superstar</em> alongside{" "}
              <strong>Ted Neeley</strong>. She was also selected as the lead
              singer for <strong>Oprah Winfrey's "Trip of a Lifetime"</strong>{" "}
              two-week cruise experience.
            </p>
            <p>
              Additional performance highlights include singing the National
              Anthem for the <strong>Nashville Predators</strong> and performing
              on the main stage at <strong>City Winery Nashville</strong>.
            </p>
            <p>
              Today, Tiffini combines her professional experience with her
              greatest role — being a mom to three energetic young boys, two of
              whom are currently rehearsing for a local musical production. Her
              home is filled with music, creativity, imagination, and the joy
              of performance, and she loves helping students experience that
              same excitement and confidence for themselves.
            </p>
            <p>
              Tiffini's greatest passion is watching others grow and learn
              through music while developing their own love for singing and
              performing. She believes there is nothing more rewarding than
              seeing someone gain confidence in life while nurturing their
              God-given gifts in singing, acting, and self-expression.
            </p>
            <p className="italic text-gray-600">
              "My goal is to create a safe, encouraging space where students
              can explore their talents, build confidence, and create something
              meaningful to share with the world."
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
