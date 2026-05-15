import { motion } from "framer-motion";
import { Music } from "lucide-react";
import { asset } from "@/lib/asset";

const tracks = [
  {
    title: "I'm the Greatest Star",
    show: "from Funny Girl",
    src: asset("/audio/im-the-greatest-star.m4a"),
  },
  {
    title: "As If We Never Said Goodbye",
    show: "from Sunset Boulevard",
    src: asset("/audio/as-if-we-never-said-goodbye.m4a"),
  },
];

export function HearTiffini() {
  return (
    <section id="listen" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Hear Tiffini Sing
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A couple of favorites from Tiffini's repertoire
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col sm:flex-row sm:items-center gap-5"
            >
              <div className="flex items-center gap-4 sm:min-w-[280px]">
                <div className="rounded-full bg-black/5 p-3 flex-shrink-0">
                  <Music className="h-6 w-6 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-tight">
                    {track.title}
                  </h3>
                  <p className="text-sm text-gray-500 italic">{track.show}</p>
                </div>
              </div>
              <audio
                controls
                preload="none"
                src={track.src}
                className="w-full sm:flex-1 min-w-0"
              >
                Your browser doesn't support audio playback.
              </audio>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 mt-8 italic">
          More recordings coming soon — including a personal welcome from Tiffini
        </p>
      </div>
    </section>
  );
}
