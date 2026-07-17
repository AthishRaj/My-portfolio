import { useRef, useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Project", href: "#project" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className=" w-full z-50 justify-end sm:justify-center h-14 flex">
        <div className=" mt-0.5 md:mt-3 rounded-full flex items-center justify-center">
          <ul
            onMouseLeave={() => {
              setPosition((pv) => ({ ...pv, opacity: 0 }));
            }}
            className="hidden border-2 border-[var(--accent)] bg-[var(--bg-dark)] relative sm:flex items-center rounded-full h-10 md:h-14 p-1"
          >
            {navLinks.map((link) => (
              <li
                key={link.name}
                onMouseEnter={(e) => {
                  const { width } = e.currentTarget.getBoundingClientRect();

                  setPosition({
                    width,
                    opacity: 1,
                    left: e.currentTarget.offsetLeft,
                  });
                }}
                className="z-10 relative block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-3 md:text-base text-[var(--accent)] hover:text-white transition"
              >
                <a href={link.href}>{link.name}</a>
              </li>
            ))}
            <motion.li
              animate={position}
              className="z-0 absolute h-7 md:h-11 rounded-full left-0 bg-[var(--accent)] w-20"
            />
          </ul>
          {/* Mobile Button */}
          <button className="sm:hidden mx-3" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <IoClose size={26} /> : <TiThMenu size={26} />}
          </button>
        </div>
        {/* Mobile Menu */}
      </nav>
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setIsOpen(false)}
          />

          <div className="fixed top-14 right-0 w-1/2 bg-[var(--bg-light)] z-50 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-gray-800 px-4 py-3 hover:bg-[var(--bg-dark)]"
              >
                {link.name}
              </a>
            ))}
          </div>
        </>
      )}
    </>
  );
}
