import pic from "../assets/image.jpg";
import pic2 from "../assets/photo.png";
import { motion } from "motion/react";
import { fadeRight, fadeUp, MotionDiv, widthGrow } from "./utils/Animations";

export default function About() {
  return (
    <>
      <section id="about" className="min-h-dvh flex flex-col justify-evenly ">
        <MotionDiv variants={fadeUp} className="section-title">
          ABOUT ME
        </MotionDiv>
        <div className=" w-full lg:max-w-2/3 h-full flex flex-col items-center justify-evenly gap-5 py-6 md:flex-row md:w-[80vw] mx-auto">
          <MotionDiv
            variants={fadeRight}
            transition={{ duration: 0.5 }}
            className="border relative border-[var(--accent)] rounded-2xl p-1 "
          >
            <img
              src={pic2}
              alt="Profile"
              className="z-10 relative object-cover md:w-70 sm:w-48 w-32 rounded-xl "
            />
          </MotionDiv>

          <MotionDiv
            variants={fadeUp}
            transition={{ duration: 0.5 }}
            className=" sm:w-2/3 mx-5 sm:mx-0 flex flex-col"
          >
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
              transition={{ delay: 0.5, duration: 0.5 }}
              className=" origin-left my-5 h-1 w-full bg-[var(--accent)]"
            />
            <MotionDiv
              transition={{ delay: 0.5, duration: 0.5 }}
              variants={fadeUp}
            >
              <a href="#contact" className="card-link ">
                <span>CONTACT ME</span>
              </a>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>
    </>
  );
}
