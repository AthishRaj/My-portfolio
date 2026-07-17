import pic from "../assets/image.jpg";
import pic2 from "../assets/photo.png";
import { motion } from "motion/react";
import { fadeRight, fadeUp, MotionDiv, widthGrow } from "./utils/Animations";

export default function About() {
  return (
    <>
      <section id="about" className="min-h-dvh flex flex-col justify-evenly ">
        <MotionDiv
          variants={fadeUp}
          className="mt-3 text-center text-6xl font-bold"
        >
          ABOUT ME
        </MotionDiv>
        <div className=" w-full lg:max-w-2/3 h-full flex flex-col items-center justify-evenly gap-5 py-6 md:flex-row md:w-[80vw] mx-auto">
          <MotionDiv
            variants={fadeRight}
            className="border border-sky-400 rounded-2xl p-1 "
          >
            <img
              src={pic2}
              alt="Profile"
              className=" object-cover md:w-70 sm:w-48 w-32 rounded-xl "
            />
          </MotionDiv>

          <MotionDiv variants={fadeUp} className=" sm:w-2/3 mx-5 sm:mx-0 flex flex-col">
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
            <MotionDiv
              variants={widthGrow}
              className=" origin-left mt-5 h-0.5 w-full bg-sky-400"
            />
            <MotionDiv variants={fadeUp}>
              <a
                href="#contact"
                className="inline-block mt-3 px-2 py-1 border rounded-2xl border-sky-400 hover:bg-sky-500 transition "
              >
                CONTACT ME
              </a>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
