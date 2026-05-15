import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CalendarHeart } from "lucide-react";

export function StickyBookCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-5 left-1/2 -translate-x-1/2 sm:left-auto sm:right-6 sm:translate-x-0 z-50 inline-flex items-center gap-2 bg-black text-white px-6 py-3.5 rounded-full shadow-2xl font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
          aria-label="Book a free trial lesson"
        >
          <CalendarHeart className="h-5 w-5" />
          Book Free Trial Lesson
        </motion.a>
      )}
    </AnimatePresence>
  );
}
