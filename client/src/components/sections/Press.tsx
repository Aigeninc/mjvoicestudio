import { motion } from "framer-motion";
import { SiCbs, SiNbc, SiApplemusic, SiSpotify, SiYoutube, SiBillboard } from "react-icons/si";

const pressLogos = [
  { icon: SiCbs, name: "CBS" },
  { icon: SiNbc, name: "NBC" },
  { icon: SiApplemusic, name: "Apple Music" },
  { icon: SiSpotify, name: "Spotify" },
  { icon: SiYoutube, name: "YouTube" },
  { icon: SiBillboard, name: "Billboard" }
];

export function Press() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">As Featured In</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our vocal training expertise has been recognized by leading media and music industry organizations
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12">
          {pressLogos.map((Logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="glam-card p-4 w-full aspect-square flex items-center justify-center">
                <Logo.icon className="w-12 h-12 md:w-16 md:h-16 text-gray-400 hover:text-white transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}