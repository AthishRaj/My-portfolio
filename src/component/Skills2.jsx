import {
  FaBootstrap,
  FaCss3Alt,
  FaGithub,
  FaGitSquare,
  FaHtml5,
  FaNodeJs,
  FaPhp,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiMongodb, SiMysql } from "react-icons/si";
import {
  TbBrandFigma,
  TbBrandJavascript,
  TbBrandNextjs,
  TbFileTypePhp,
} from "react-icons/tb";
import { motion } from "framer-motion";

const frontendSkills = [
  { name: "HTML", icon: <FaHtml5 />, level: 75 },
  { name: "CSS", icon: <FaCss3Alt />, level: 75 },
  { name: "React", icon: <FaReact />, level: 60 },
  { name: "Next.js", icon: <TbBrandNextjs />, level: 55 },
  { name: "Bootstrap", icon: <FaBootstrap />, level: 60 },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill />, level: 60 },
];

const backendSkills = [
  { name: "Node.js", icon: <FaNodeJs />, level: 55 },
  { name: "Express", icon: <SiExpress />, level: 55 },
  { name: "PHP", icon: <FaPhp />, level: 45 },
];

const databaseSkills = [
  { name: "MongoDB", icon: <SiMongodb />, level: 55 },
  { name: "MySQL", icon: <SiMysql />, level: 60 },
];

const languageSkills = [
  { name: "JavaScript", icon: <TbBrandJavascript />, level: 65 },
  { name: "PHP", icon: <TbFileTypePhp />, level: 60 },
  { name: "Python", icon: <FaPython />, level: 50 },
];

const toolSkills = [
  { name: "Git", icon: <FaGitSquare />, level: 60 },
  { name: "GitHub", icon: <FaGithub />, level: 60 },
  { name: "Figma", icon: <TbBrandFigma />, level: 70 },
];

export default function Skills() {
  return (
    <>
      <div className="mt-20 flex flex-col">
        <h1 className="section-title">MY SKILLS</h1>

        <div className="w-full flex flex-col md:flex-row gap-6 justify-evenly px-6 my-6">
          {/* frontend skills */}
          <div className="card-blu w-full max-w-xl ">
            <div className="card-inner">
              <h3 className="text-2xl font-semibold text-center mb-8">
                Frontend
              </h3>

              <div className="space-y-6">
                {frontendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2 text-lg">
                        {skill.icon}
                        {skill.name}
                      </span>
                      <span className="text-[var(--accent)]">{skill.level}%</span>
                    </div>

                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-cyan-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* backend and database skills */}
          <div className="card-blu w-full max-w-xl">
            <div className="card-inner">
              <h3 className="text-2xl font-semibold text-center mb-8">
                Backend
              </h3>

              <div className="space-y-6">
                {backendSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2 text-lg">
                        {skill.icon}
                        {skill.name}
                      </span>
                      <span className="text-[var(--accent)]">{skill.level}%</span>
                    </div>

                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-cyan-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-center mt-8 mb-8">
                Database
              </h3>

              <div className="space-y-6">
                {databaseSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2 text-lg">
                        {skill.icon}
                        {skill.name}
                      </span>
                      <span className="text-[var(--accent)]">{skill.level}%</span>
                    </div>

                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-cyan-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* language and tools skills */}
          <div className="card-blu w-full max-w-xl">
            <div className="card-inner">
              <h3 className="text-2xl font-semibold text-center mb-8">
                Languages
              </h3>

              <div className="space-y-6">
                {languageSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2 text-lg">
                        {skill.icon}
                        {skill.name}
                      </span>
                      <span className="text-[var(--accent)]">{skill.level}%</span>
                    </div>

                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-cyan-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-semibold text-center mt-8 mb-8">
                Tools
              </h3>

              <div className="space-y-6">
                {toolSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="flex items-center gap-2 text-lg">
                        {skill.icon}
                        {skill.name}
                      </span>
                      <span className="text-[var(--accent)]">{skill.level}%</span>
                    </div>

                    <div className="w-full h-3 bg-gray-300 dark:bg-gray-800 dark:bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-cyan-400 transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
