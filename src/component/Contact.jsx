import { FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";


export default function Contact() {
  return (
    <>
      <section id="contact">
        <div className="  w-full flex flex-col gap-6 mt-6 items-center">
          <div className="justify-items-center">
            <h1 className="text-2xl font-bold">CONTACT ME</h1>
            <p className="my-6">I'd love to hear from you — whether it's about a project, a job, or just to say hi.</p>
          </div>
          <div className="flex flex-col gap-3">
            <a href="tel:9074652931"
              className="flex gap-3 justify-center items-center hover:text-base hover:text-shadow-[0_0_12px_#2563eb] transition duration-200 ease-linear">
              <FaPhoneAlt />+91 9074652931</a>
            <a href="mailto:athishraj88@gmail.com"
              className="flex gap-3 justify-center items-center hover:text-base hover:text-shadow-[0_0_12px_#2563eb] transition duration-200 ease-linear">
              <SiGmail />athishraj88@gmail.com</a>
            <div className="flex gap-6 my-3 justify-evenly ">
              <a href="https://github.com/AthishRaj">
                <FaGithub className="transform scale-200 hover:text-base hover:drop-shadow-[0_0_12px_#2563eb] transition duration-200 ease-linear" /></a>
              <a href="https://www.linkedin.com/in/athish-raj">
                <FaLinkedin className="scale-200 hover:text-base hover:drop-shadow-[0_0_12px_#2563eb] transition duration-200 ease-linear" /></a>
            </div>
          </div>
          <div>
            <p className="my-20 text-sm text-gray-400">
              &copy;{new Date().getFullYear()}<span className="text-white">Athish Raj U K</span>. All rights reserved
            </p>
          </div>
        </div>
      </section>
    </>
  )
}