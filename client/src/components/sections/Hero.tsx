import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const quote = {
  text: "Every voice has a story. Let's make yours extraordinary.",
  author: "Tiffini Lindsay"
};

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white pt-16 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/IMG_8302_1740350116075.jpeg")' }}
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70"></div>

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            {/* Unified Frosted Glass Container */}
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="glam-border p-8 backdrop-blur-sm bg-white/5 mb-8"
            >
              <motion.span 
                className="text-xl mb-4 inline-block text-primary-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                Welcome to
              </motion.span>
              <motion.h1
                className="hero-title mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
                  Greatest Star Studio
                </span>
              </motion.h1>

              <motion.blockquote 
                className="text-xl italic text-gray-300 border-l-2 border-white/20 pl-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
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
              transition={{ delay: 1.2 }}
            >
              Professional vocal training in Mount Juliet, Tennessee with Tiffini Lindsay.
              Transform your voice and unlock your true potential.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
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
                className="border-white text-black hover:bg-gray-200" 
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
            className="relative z-10 hidden lg:block"
          >
            <div className="glam-card aspect-video p-1">
              <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}