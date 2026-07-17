import { GrOrganization } from "react-icons/gr";
import { PiCertificateFill } from "react-icons/pi";

export default function Experience() {
  return (
    <>
      <section id="experience">
        <div className="mt-20 w-full flex flex-col items-center gap-4 my-6">
          <div>
            <h1 className="section-title">EXPERIENCE</h1>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6 justify-evenly px-6 my-6">
            <div className="card-blu">
              <div className="card-inner">
                <h1 className="text-xl">Smartwebin - Web Developer Intern</h1>
                <p className="italic">
                  <b>November 2025 - June 2026</b>
                </p>
                <ul className=" list-disc my-6">
                  <li>
                    Developed responsive web applications using{" "}
                    <b>Next.js, React, PHP, JavaScript, Tailwind CSS,</b> and
                    <b>MySQL</b>.
                  </li>
                  <li>
                    Built a business website with dynamic inquiry forms and
                    backend integration.
                  </li>
                  <li>
                    Developed and integrated REST APIs for customer inquiry
                    management.
                  </li>
                  <li>
                    Optimized SQL queries and backend logic to improve
                    application performance.
                  </li>
                </ul>
                <div className="flex gap-3 flex-wrap">
                  <a
                    className="card-link"
                    href="https://www.smartwebin.com/"
                    target="none"
                  >
                    <span className="flex items-center gap-2 justify-evenly " >
                      <GrOrganization /> Company
                    </span>
                  </a>
                  <a
                    className="card-link"
                    href="https://drive.google.com/file/d/1IHLav0v4jBFHvIQvxKSVQrwD7qseDO5x/view"
                    target="none"
                  >
                    <span className="flex items-center gap-2 justify-evenly " >
                      <PiCertificateFill />
                      Certificate
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
