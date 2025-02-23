import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mic2, Music, Heart, Star, Lightbulb, Target } from "lucide-react";

const methodPoints = [
  {
    icon: <Mic2 className="h-8 w-8" />,
    title: "Personalized Approach",
    description: "Every voice is unique. We tailor our teaching methods to your individual needs and goals."
  },
  {
    icon: <Music className="h-8 w-8" />,
    title: "Technical Excellence",
    description: "Master proper breathing, pitch control, and vocal techniques through proven methods."
  },
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Supportive Environment",
    description: "Grow your confidence in a nurturing space designed for artistic development."
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Performance Ready",
    description: "Develop the skills and confidence needed for exceptional performances."
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovative Techniques",
    description: "Learn cutting-edge vocal methods backed by years of experience."
  },
  {
    icon: <Target className="h-8 w-8" />,
    title: "Goal-Oriented Training",
    description: "Focus on achieving your specific vocal aspirations and career goals."
  }
];

export function VocalMethod() {
  return (
    <section className="py-20 gradient-animate">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title shimmer-text">Our Vocal Method</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A comprehensive approach to vocal training that nurtures your unique voice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methodPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full bg-black/40 border border-white/10">
                <CardContent className="p-8 text-center">
                  <motion.div 
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="p-4 rounded-full bg-white/10 border border-white/20">
                      <motion.div className="text-white">
                        {point.icon}
                      </motion.div>
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-4 text-white">{point.title}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}