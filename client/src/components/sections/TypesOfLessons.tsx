import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Mic2,
  Drama,
  Music,
  ClipboardCheck,
  Users,
  Church,
  PartyPopper,
} from "lucide-react";
import type { ReactNode } from "react";

type Lesson = {
  icon: ReactNode;
  title: string;
  blurb: string;
  body: string;
};

const lessons: Lesson[] = [
  {
    icon: <Mic2 className="h-5 w-5" />,
    title: "Voice Lessons",
    blurb: "For every level — beginners through experienced performers.",
    body:
      "Whether you're brand new to singing or already an experienced performer, all voices are welcome. Students will learn healthy vocal technique, breath support and control, pitch recognition, vocal strength, and how to safely explore different vocal styles including head voice, mixed voice, and belting. Lessons may also include music reading basics and performance technique.",
  },
  {
    icon: <Drama className="h-5 w-5" />,
    title: "Acting Through Song",
    blurb: "Great performers don't just sing — they tell a story.",
    body:
      "Students will learn how to connect emotionally to lyrics, develop character choices, improve stage presence, and bring songs to life through authentic acting and expression.",
  },
  {
    icon: <Music className="h-5 w-5" />,
    title: "Movement & Musical Theatre Dance",
    blurb: "For singers who want to move confidently on stage.",
    body:
      "Designed especially for singers, these lessons focus on helping performers move confidently on stage. Students will learn beginner-friendly choreography, stage movement, rhythm, and musical theatre basics to become “singers who move well” — a valuable skill often expected in auditions and productions.",
  },
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: "Audition Preparation",
    blurb: "Get confident, polished, and audition-ready.",
    body:
      "Have an audition coming up? Let's get you confident, polished, and prepared. Students receive coaching on audition songs, monologues/scripts, performance confidence, presentation skills, and audition etiquette. Headshots and resumes can also be reviewed and refined to help students feel fully ready to step into the room with confidence.",
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: "Group Musical Theatre Classes",
    blurb: "Broadway-inspired numbers, performed together.",
    body:
      "Students work together to learn and perform exciting musical numbers inspired by Broadway favorites. Group lessons encourage teamwork, confidence, stage presence, harmony work, and the joy of performing together in a fun and encouraging environment.",
  },
  {
    icon: <Church className="h-5 w-5" />,
    title: "Gospel Performance Group",
    blurb: "Harmony, joy, and uplifting gospel music.",
    body:
      "Students will learn uplifting gospel music while developing harmony, vocal confidence, and performance skills. This group may have opportunities to appear as guest performers for local churches and community events.",
  },
  {
    icon: <PartyPopper className="h-5 w-5" />,
    title: "Karaoke Superstar",
    blurb: "Build confidence in a fun, relaxed atmosphere.",
    body:
      "Perfect for students wanting to build confidence in a relaxed and exciting way. Singers rehearse and perform their favorite karaoke songs while learning microphone technique, stage confidence, crowd engagement, and performance skills in a supportive atmosphere.",
  },
];

export function TypesOfLessons() {
  return (
    <section id="lessons" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Types of Lessons
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Click any lesson to read more
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {lessons.map((lesson, index) => (
              <motion.div
                key={lesson.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
              >
                <AccordionItem
                  value={`lesson-${index}`}
                  className="bg-white rounded-lg border px-5"
                >
                  <AccordionTrigger className="hover:no-underline py-5">
                    <div className="flex items-center gap-4 text-left">
                      <div className="rounded-full bg-black/5 p-2 flex-shrink-0">
                        {lesson.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold leading-tight">
                          {lesson.title}
                        </h3>
                        <p className="text-sm text-gray-500 font-normal mt-0.5">
                          {lesson.blurb}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-700 leading-relaxed pl-14 pb-5">
                    {lesson.body}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            size="lg"
            className="bg-black hover:bg-gray-800 text-white"
          >
            <a href="#contact">Book a Free Trial Lesson</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
