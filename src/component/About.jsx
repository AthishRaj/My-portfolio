import pic from "../assets/image.jpg";
import pic2 from "../assets/photo.png";
import { motion } from "motion/react";

export default function About() {
  return (
    <>
      <section id="about">
        <div className=" flex justify-center text-3xl font-bold">ABOUT ME</div>
        <div className=" w-full h-max flex flex-col items-center justify-around gap-5 py-6 sm:flex-row md:w-[80vw] mx-auto">
          <img
            src={pic2}
            alt="Profile"
            className="w-32 h-32 object-cover sm:w-48 sm:h-48 bg-sky-400 rounded-full "
          />

          <div className=" w-2/3 text-justify">
            <p className="group">
              Recent Computer Science graduate with hands-on experience in
              full-stack web development through an internship and personal
              projects. Proficient in <span className="bolds">React.js</span>,{" "}
              <span className="bolds">Next.js</span>,{" "}
              <span className="bolds">Node.js</span>,{" "}
              <span className="bolds">PHP</span>,{" "}
              <span className="bolds">JavaScript</span>,{" "}
              <span className="bolds">MySQL</span>, and{" "}
              <span className="bolds">MongoDB</span>, with experience
              building responsive web applications, REST APIs, and real-time
              collaborative systems. Passionate about writing clean,
              maintainable code and developing user-focused solutions while
              continuously learning modern web technologies.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
