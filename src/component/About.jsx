import pic from "../assets/image.jpg";
import pic2 from "../assets/photo.png";
import { motion } from "motion/react";

export default function About() {
  return (
    <>
      <section id="about" className="min-h-dvh">
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-3 text-center text-6xl font-bold text-transparent [-webkit-text-stroke:1px_white]"
        >
          ABOUT ME
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: .3 }}
          viewport={{ once: true, amount: 0.3 }}
          className=" w-full lg:max-w-2/3 h-max flex flex-col items-center justify-around gap-5 py-6 md:flex-row md:w-[80vw] mx-auto"
        >
          <div className="border border-sky-400 rounded-full p-1 ">
            <img
              src={pic2}
              alt="Profile"
              className=" object-cover object-top md:w-70 md:h-70 sm:w-48 sm:h-48 w-32 h-32 rounded-full bg-sky-400 transition "
            />
          </div>

          <div className=" sm:w-2/3 mx-5 sm:mx-0 flex flex-col">
            <p className="group">
              Recent Computer Science graduate with hands-on experience in
              full-stack web development through an internship and personal
              projects. Proficient in <span className="bolds">React.js</span>,{" "}
              <span className="bolds">Next.js</span>,{" "}
              <span className="bolds">Node.js</span>,{" "}
              <span className="bolds">PHP</span>,{" "}
              <span className="bolds">JavaScript</span>,{" "}
              <span className="bolds">MySQL</span>, and{" "}
              <span className="bolds">MongoDB</span>, with experience building
              responsive web applications, REST APIs, and real-time
              collaborative systems. Passionate about writing clean,
              maintainable code and developing user-focused solutions while
              continuously learning modern web technologies.
            </p>
            <div className=" mt-5 h-0.5 w-full bg-sky-400" />
            <div>
              <a
                href="#contact"
                className="inline-block mt-3 px-2 py-1 border rounded-2xl border-sky-400 hover:bg-sky-500 transition "
              >
                CONTACT ME
              </a>
            </div>
          </div>
        </motion.div>
      </section>
    </>
  );
}
