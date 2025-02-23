import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Mic2, Users, Music, Presentation } from "lucide-react";

const categories = [
  {
    icon: <Mic2 className="h-8 w-8" />,
    title: "Beginners to Advanced",
    description: "Start your journey or perfect your craft"
  },
  {
    icon: <Music className="h-8 w-8" />,
    title: "Professional Singers",
    description: "Take your career to the next level"
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Kids, Teens & Adults",
    description: "All ages and skill levels welcome"
  },
  {
    icon: <Presentation className="h-8 w-8" />,
    title: "Public Speakers",
    description: "Improve your speaking voice"
  }
];

export function WhoIsItFor() {
  return (
    <section id="who" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Who is MJVoice For?
          </h2>
          <p className="text-xl text-gray-600">
            Our programs are designed for everyone who wants to improve their voice
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600">
                    {category.description}
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
