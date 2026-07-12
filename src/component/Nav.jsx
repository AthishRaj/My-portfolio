import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { IoClose } from "react-icons/io5";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Project", href: "#project" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gray-950 h-14 flex">
        <div className="mx-auto flex h-14 items-center w-full justify-between px-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1162.18 903"
              width="25"
              height="25"
              className="transform hover:scale-110 transition duration-300 ease-linear sm:size-7"
            >
              <path
                fill="#fff"
                stroke="#29abe2"
                strokeMiterlimit="10"
                strokeWidth="3"
                d="M716.43,401.5l86.67-299.99c14.46-50.06-23.1-100.01-75.2-100.01h-407.04c-34.87,0-65.53,23.06-75.2,56.55l-12.55,43.45-57.78,200h0c59.23,0,111.32-39.17,127.75-96.07l30.03-103.93h370l-86.67,300H250.52c-61.65,0-115.86,40.77-132.97,100h0S1.99,901.5,1.99,901.5h465.92c61.64,0,115.85-40.77,132.96-99.99h0s86.67-300.01,86.67-300.01h370l-58.92,203.93c-13.89,48.09,22.19,96.07,72.24,96.07h0l86.67-300h0c14.46-50.06-23.11-100-75.21-100h-365.91ZM422.71,801.5H130.88l64.97-224.9c12.85-44.48,53.57-75.1,99.87-75.1h291.82l-64.97,224.9c-12.85,44.48-53.57,75.1-99.87,75.1Z"
              />
            </svg>
          </div>

          <ul className="hidden sm:flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="hover:text-cyan-400">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          {/* Mobile Button */}
          <button className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
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

          <div className="fixed top-14 right-0 w-1/2 bg-gray-900 z-50 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="border-b border-gray-800 px-4 py-3 hover:bg-gray-800"
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
