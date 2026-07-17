import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Full Stack Developer",
  "MERN Stack Developer",
  "PHP Developer",
  "Web Designer",
];

export default function FlipText() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-16 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.h2
          key={words[index]}
          initial={{
            rotateX: -90,
            y: 20,
            opacity: 0,
          }}
          animate={{
            rotateX: 0,
            y: 0,
            opacity: 1,
          }}
          exit={{
            rotateX: 90,
            y: -20,
            opacity: 0,
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={{ transformPerspective: 1000 }}
          className="text-2xl sm:text-4xl font-bold text-[var(--accent)]"
        >
          {words[index]}
        </motion.h2>
      </AnimatePresence>
    </div>
  );
}