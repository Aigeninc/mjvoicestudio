import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MusicalNotes } from "@/components/ui/musical-notes";

const quote = {
  text: "Every voice has a story. Let's make yours extraordinary.",
  author: "Tiffini Lindsay"
};

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white pt-16 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

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
            className="relative z-10"
          >
            <motion.span 
              className="text-xl mb-4 inline-block text-primary-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to
            </motion.span>
            <motion.h1
              className="hero-title mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
                MJVoice Studio
              </span>
            </motion.h1>

            {/* Animated Quote */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
              className="mb-8 glam-border p-6 backdrop-blur-sm bg-white/5"
            >
              <motion.blockquote 
                className="text-xl italic text-gray-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                "{quote.text}"
                <footer className="mt-2 text-sm text-gray-400">
                  — {quote.author}
                </footer>
              </motion.blockquote>
            </motion.div>

            <motion.p
              className="text-xl text-gray-300 mb-8 max-w-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              Professional vocal training in Mount Juliet, Tennessee with Tiffini Lindsay.
              Transform your voice and unlock your true potential.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6 }}
              className="space-x-4"
            >
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200" 
                asChild
              >
                <a href="#contact">Start Your Journey</a>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10" 
                asChild
              >
                <a href="#services">Explore Services</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10"
          >
            <div className="glam-card aspect-video p-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
              <div className="relative h-full bg-gray-900 rounded-lg overflow-hidden">
                <MusicalNotes 
                  variant="group" 
                  className="absolute -top-10 -right-10 w-32 h-32 text-gray-800" 
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}