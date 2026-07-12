import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="mt-20 w-full flex flex-col gap-6 items-center">
          <div className="justify-items-center">
            <h1 className="text-2xl font-bold">CONTACT ME</h1>
            <p className="my-6 mx-6 text-center">'m currently open to internships, full-time opportunities, freelance projects, and collaborations. If you'd like to work together or simply say hello, feel free to reach out.</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:9074652931"
              className="flex gap-3 justify-center items-center footer-link">
              <FaPhoneAlt />+91 9074652931</a>
            <a href="mailto:athishraj88@gmail.com"
              className="flex gap-3 justify-center items-center footer-link">
              <SiGmail />athishraj88@gmail.com</a>
            <div className="flex gap-6 my-3 justify-evenly ">
              <a href="https://github.com/AthishRaj">
                <FaGithub className="transform scale-200 footer-link" /></a>
              <a href="https://www.linkedin.com/in/athish-raj">
                <FaLinkedin className="scale-200 footer-link" /></a>
            </div>
          </div>
          <div >
            <p className="mt-20 mb-5 text-sm text-gray-400">
              &copy;{new Date().getFullYear()}<span className="text-white">Athish Raj U K</span>. All rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  )
}