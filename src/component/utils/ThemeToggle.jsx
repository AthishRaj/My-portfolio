import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle() {
  const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <motion.button
      onClick={() => setDark(!dark)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="relative flex sm:h-11 h-7 w-7 sm:w-11 items-center justify-center rounded-full
                 border border-[var(--accent)]/40
                 bg-[var(--bg-dark)]/10 backdrop-blur-md
                 text-[var(--accent)] shadow-lg
                 transition-colors duration-300
                 hover:border-[var(--accent)] hover:bg-[var(--accent)]/10"
    >
      <AnimatePresence mode="wait">
        {dark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: 90, scale: 0 }}
            transition={{ duration: 0.25 }}
          >
            <FaSun className="sm:text-xl text-lg" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            exit={{ rotate: -90, scale: 0 }}
            transition={{ duration: 0.25 }}
          >
            <FaMoon className="sm:text-xl text-lg" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
}
