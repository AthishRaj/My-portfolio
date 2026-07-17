import { motion } from "motion/react";

export const fadeUp = {
  hidden: { opacity: 0, y: 75 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: -75 },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const widthGrow = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1 },
};

export function MotionDiv({ variants, children, className, ...props }) {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
