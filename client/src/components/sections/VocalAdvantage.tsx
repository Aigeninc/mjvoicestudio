import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Laptop2, MapPin, Users } from "lucide-react";

const advantages = [
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Personalized Programs",
    description: "Every student gets a plan built around their voice, their goals, and how they learn best."
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "All Ages & Levels",
    description: "Beginners and experienced singers, kids through adults — everyone starts where they are."
  },
  {
    icon: <Laptop2 className="h-8 w-8" />,
    title: "In-Person & Online",
    description: "Train at the Mount Juliet studio or over Zoom from anywhere — same curriculum, same price."
  },
  {
    icon: <MapPin className="h-8 w-8" />,
    title: "Rooted in Middle Tennessee",
    description: "A local studio focused on building real progress, one lesson at a time."
  }
];

export function VocalAdvantage() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">The MJ Voice Studio Difference</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What you can expect from training with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full glam-card">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 rounded-full bg-black/5">
                      {advantage.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{advantage.title}</h3>
                  <p className="text-gray-600">{advantage.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
