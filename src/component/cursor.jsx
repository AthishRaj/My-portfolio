import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Cursor() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, {
    stiffness: 500,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 500,
    damping: 30,
  });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX - 120);
      mouseY.set(e.clientY - 120);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      style={{ x, y }}
      className="fixed top-0 left-0 w-60 h-60 rounded-full pointer-events-none z-[9999]
      bg-radial from-sky-400/20 to-transparent blur-xl"
    />
  );
}
