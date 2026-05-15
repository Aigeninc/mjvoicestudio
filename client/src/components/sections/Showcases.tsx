import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Theater, Church } from "lucide-react";

const showcases = [
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Individual Student Showcases",
    description:
      "Students get opportunities to shine as solo performers in local showcases — sharing their growth, confidence, and talent with the community.",
  },
  {
    icon: <Theater className="h-8 w-8" />,
    title: "Best of Broadway",
    description:
      "Group musical theatre lessons where students work together to create exciting Broadway-inspired numbers to perform at local events, showcases, and competitions.",
  },
  {
    icon: <Church className="h-8 w-8" />,
    title: "Sermon Showstoppers",
    description:
      "A joyful gospel performance group featuring uplifting “surprise” musical appearances at local churches and community gatherings.",
  },
];

export function Showcases() {
  return (
    <section id="showcases" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Showcase Spotlights</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real performance opportunities — the moments students actually train
            for
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {showcases.map((s, index) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full glam-card">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-white/10 border border-white/20 text-white">
                      {s.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4 text-white">
                    {s.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {s.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
