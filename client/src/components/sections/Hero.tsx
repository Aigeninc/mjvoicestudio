import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MusicalNotes } from "@/components/ui/musical-notes";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white pt-16 relative overflow-hidden">
      {/* Musical Notes Background */}
      <div className="musical-notes-bg">
        {[...Array(6)].map((_, i) => (
          <MusicalNotes
            key={i}
            variant={i % 2 === 0 ? "single" : "double"}
            className="musical-notes-pattern w-24 h-24"
            style={{
              top: `${Math.floor(i / 2) * 33}%`,
              left: `${(i % 3) * 33}%`,
              animationDelay: `${i * 2}s`,
              zIndex: i,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Find Your Voice at MJVoice Studio
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional vocal training in Mount Juliet, Tennessee with Tiffini Lindsay
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button size="lg" className="bg-white text-black hover:bg-gray-200" asChild>
                <a href="#contact">Start Your Journey</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden border border-gray-800 shadow-2xl">
              <MusicalNotes 
                variant="group" 
                className="absolute -top-10 -right-10 w-32 h-32 text-gray-800" 
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}