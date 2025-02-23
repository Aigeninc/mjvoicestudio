import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const learningPoints = [
  {
    number: "01",
    title: "Find Your Unique Professional Singing Voice",
    description: "Discover your natural voice and develop it into a powerful instrument"
  },
  {
    number: "02",
    title: "Learn Proper Breath Control",
    description: "Master the techniques to maximize your vocal performance"
  },
  {
    number: "03",
    title: "Eliminate Stage Fright",
    description: "Build confidence and overcome performance anxiety"
  },
  {
    number: "04",
    title: "Develop a Stronger Voice",
    description: "Strengthen your voice and expand your range"
  },
  {
    number: "05",
    title: "Improve Stage Presence",
    description: "Learn to command the stage and engage your audience"
  },
  {
    number: "06",
    title: "Master Song Performance",
    description: "Perfect your dynamics and emotional expression"
  },
  {
    number: "07",
    title: "Prepare for Performances",
    description: "Get ready for auditions, live events, and studio sessions"
  }
];

export function WhatYouLearn() {
  return (
    <section id="learn" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            What Will You Learn at MJVoice
          </h2>
        </motion.div>

        <div className="space-y-6">
          {learningPoints.map((point, index) => (
            <motion.div
              key={point.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card>
                <CardContent className="flex items-center p-6">
                  <span className="text-4xl font-bold text-gray-200 mr-6">
                    {point.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
