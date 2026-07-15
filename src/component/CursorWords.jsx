import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const words = [
  "React",
  "Next.js",
  "Node",
  "Creative",
  "JavaScript",
  "Design",
];

export default function CursorWords() {
  const [items, setItems] = useState([]);

  const handleMove = (e) => {
    // Spawn occasionally instead of every mouse event
    if (Math.random() > 0.1) return;

    const id = Date.now() + Math.random();

    setItems((prev) => [
      ...prev,
      {
        id,
        x: e.clientX,
        y: e.clientY,
        text: words[Math.floor(Math.random() * words.length)],
      },
    ]);

    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id));
    }, 1200);
  };

  return (
    <div
      onMouseMove={handleMove}
      className="fixed inset-0 "
    >
      <AnimatePresence>
        {items.map((item) => (
          <motion.span
            key={item.id}
            initial={{
              opacity: 1,
              scale: 0.8,
              x: item.x,
              y: item.y,
            }}
            animate={{
              opacity: 0,
              scale: 1.3,
              y: item.y - 60,
              rotate: Math.random() * 20 - 10,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="fixed text-sky-400 font-semibold"
          >
            {item.text}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}