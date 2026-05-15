import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { asset } from "@/lib/asset";

export function Studio() {
  return (
    <section id="studio" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">The Studio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A dedicated space for vocal training is coming soon to the top floor
            of our Mount Juliet home
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-lg overflow-hidden shadow-2xl">
            <img
              src={asset("/studio-house.jpg")}
              alt="The Greatest Star Studio — top floor of the Mount Juliet, TN home"
              className="w-full object-cover"
            />
            {/* Floor marker overlay */}
            <div className="absolute top-[8%] left-[14%] hidden sm:flex flex-col items-center pointer-events-none">
              <div className="bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-lg font-semibold text-sm text-black">
                Studio — Top Floor
              </div>
              <ArrowDown className="h-7 w-7 text-white drop-shadow-lg mt-1 animate-bounce" />
            </div>
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-6 text-gray-700">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-gray-500" />
              <div>
                <h3 className="font-semibold text-gray-900">Mount Juliet, TN</h3>
                <p className="text-sm text-gray-600">
                  Convenient to Nashville, Lebanon, and Hermitage. Online lessons
                  available anywhere.
                </p>
              </div>
            </div>
            <div className="text-sm text-gray-600 italic sm:text-right">
              Studio photos coming once the build-out is complete. In the
              meantime, lessons are running — book a trial below.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
