import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Award, Star, Users } from "lucide-react";

const advantages = [
  {
    icon: <Trophy className="h-8 w-8" />,
    title: "20+ Years Experience",
    description: "Decades of expertise in vocal training and performance development"
  },
  {
    icon: <Award className="h-8 w-8" />,
    title: "Industry Recognition",
    description: "Award-winning vocal coaching methodology"
  },
  {
    icon: <Star className="h-8 w-8" />,
    title: "Success Stories",
    description: "Proven track record of transforming voices and launching careers"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Diverse Client Base",
    description: "From beginners to professional performers"
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
          <h2 className="section-title">The MJVoice Advantage</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What sets our vocal training apart from the rest
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
