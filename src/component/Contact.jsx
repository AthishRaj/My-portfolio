import { FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="mt-20 w-full flex flex-col gap-6 items-center">
          <div className="justify-items-center">
            <h1 className="section-title">CONTACT ME</h1>
            <p className="my-6 mx-6 text-center">
              'm currently open to internships, full-time opportunities,
              freelance projects, and collaborations. If you'd like to work
              together or simply say hello, feel free to reach out.
            </p>
          </div>
          <div className="flex gap-3 my-3 justify-evenly flex-wrap">
            <a href="tel:9074652931" className=" footer-link group">
              <FaPhoneAlt className="text-2xl shrink-0" /> <span>Phone</span>
            </a>
            <a href="mailto:athishraj88@gmail.com" className="footer-link group">
              <SiGmail className="text-2xl shrink-0" /> <span>Mail</span>
            </a>
            <a href="https://github.com/AthishRaj" className="footer-link group">
              <FiGithub className="text-2xl shrink-0" /> <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/athish-raj"
              className="footer-link group"
            >
              <FaLinkedinIn className="text-2xl shrink-0" /> <span>LinkedIn</span>
            </a>
          </div>
          <div>
            <p className="mt-20 mb-5 text-sm text-gray-600">
              &copy;{new Date().getFullYear()}
              <span className="text-[var(--text)]">Athish Raj U K</span>. All
              rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
