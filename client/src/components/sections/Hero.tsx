import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white pt-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Find Your Voice at MJVoice Studio
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional vocal training in Mount Juliet, Tennessee with Tiffini Lindsay
            </p>
            <Button asChild size="lg">
              <a href="#contact">Start Your Journey</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
              {/* Musical note decorative elements */}
              <svg
                className="absolute -top-10 -right-10 w-32 h-32 text-gray-200"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
