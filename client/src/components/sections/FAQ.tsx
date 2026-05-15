import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "I've never had vocal training. Is this for me?",
    a: "Absolutely. A large part of what I teach is foundational technique — breath, posture, pitch, tone. You don't need any prior training to start. We meet you wherever you are.",
  },
  {
    q: "What does a first lesson look like?",
    a: "We talk about your goals, listen to your current voice, and run a few simple exercises so I can hear where you naturally sit and what would help most. By the end of the first lesson you'll have at least one technique you can practice on your own.",
  },
  {
    q: "Do you teach in person and online?",
    a: "Both. In-person lessons are at the studio in Mount Juliet, TN. Online lessons are over Zoom — same curriculum, same price.",
  },
  {
    q: "What ages do you teach?",
    a: "Kids, teens, and adults. Most students fall between 10 and 60, but I've taught both younger and older.",
  },
  {
    q: "How long until I notice improvement?",
    a: "Most students hear a difference in their own voice within the first 3–4 lessons, especially in range and breath control. Performance-level results take consistent practice over months — there's no shortcut, but there is a path.",
  },
  {
    q: "Do I need to be able to read music?",
    a: "No. Reading music helps over time, but it's not required to start. We work by ear first.",
  },
  {
    q: "How do I book?",
    a: "Fill out the contact form below or email tiff@mjvoice.com. I'll reply within 24 hours to schedule.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions from students before their first lesson
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-lg font-semibold">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 text-base leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
