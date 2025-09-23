import pic from "../assets/image.jpg";
import { motion } from "motion/react";

export default function About() {
  const variants = {
    downInitial: {
      opacity: 0,
      y: 200,
    },
    downFinal: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
    leftInitial: {
      opacity: 0,
      x: -200,
    },
    leftFinal: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
    rightInitial: {
      opacity: 0,
      x: 200,
    },
    rightFinal: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <>
      <section id="about">
        <div className=" flex justify-center">
          <motion.h1
            variants={variants}
            initial="downInitial"
            whileInView="downFinal"
            viewport={{ once: true }}
            className=" text-3xl font-bold"
          >
            ABOUT ME
          </motion.h1>
        </div>
        <div className=" w-full h-max flex flex-col items-center justify-around gap-5 py-6 sm:flex-row md:w-[80vw] mx-auto">
          <motion.div
            variants={variants}
            initial="leftInitial"
            whileInView="leftFinal"
            viewport={{once:true}}
          >
            <img
              src={pic}
              alt="Profile"
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-full  hover:shadow-[0_0_20px_#2563eb] transform hover:scale-110 transition duration-200 ease-linear"
            />
          </motion.div>
          <div className=" w-2/3 text-justify">
            <p>
              As a curious and detail-oriented problem-solver, I thrive on
              creating—from coding efficient backends to designing intuitive
              user interfaces. Skilled in Python, C, and web technologies, I
              combine technical depth with a passion for user-centric design
              supported by solid foundations in data structures and databases.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
