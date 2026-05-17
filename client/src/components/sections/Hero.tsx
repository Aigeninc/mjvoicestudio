import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { asset } from "@/lib/asset";

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
        style={{ backgroundImage: `url("${asset("/IMG_8302_1740350116075.jpeg")}")` }}
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70"></div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Unified Frosted Glass Container */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="glam-border p-6 sm:p-8 md:p-12 backdrop-blur-sm bg-white/5 mb-8"
          >
            <motion.span 
              className="text-lg sm:text-xl mb-2 sm:mb-4 inline-block text-primary-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Welcome to
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 sm:mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-white">
                MJ Voice Studio
              </span>
            </motion.h1>

            <motion.blockquote 
              className="text-lg sm:text-xl italic text-gray-300 border-l-2 border-white/20 pl-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              "{quote.text}"
              <footer className="mt-2 text-sm sm:text-base text-gray-400">
                — {quote.author}
              </footer>
            </motion.blockquote>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto text-center"
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
            className="flex flex-col sm:flex-row justify-center items-center gap-4"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 font-semibold text-base px-8 py-6 w-full sm:w-auto shadow-xl"
              asChild
            >
              <a href="#contact">Book a Free Trial Lesson</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white bg-transparent hover:bg-white hover:text-black font-medium text-base px-8 py-6 w-full sm:w-auto"
              asChild
            >
              <a href="#lessons">Explore Lessons</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}