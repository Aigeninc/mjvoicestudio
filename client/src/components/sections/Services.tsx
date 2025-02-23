import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    title: "Private Singing Lessons",
    description: "One-on-one instruction tailored to your goals",
    price: "Starting at $60/hour"
  },
  {
    title: "Online Singing Classes",
    description: "Learn from anywhere with virtual lessons",
    price: "Starting at $50/hour"
  },
  {
    title: "Group Classes",
    description: "Learn and perform with others",
    price: "Starting at $40/person"
  },
  {
    title: "Artist Development",
    description: "Comprehensive program for aspiring professionals",
    price: "Custom packages available"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect program for your vocal journey
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-lg font-semibold mb-4">{service.price}</p>
                  <Button className="w-full" asChild>
                    <a href="#contact">Book Now</a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
