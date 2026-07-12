import { FaGithub } from "react-icons/fa";

export default function Project() {
  return (
    <>
      <section id="project">
        <div className="mt-20 w-full flex flex-col items-center gap-4 my-6">
          <div>
            <h1 className="text-3xl font-bold">PROJECTS</h1>
          </div>
          <div className="w-full flex flex-col md:flex-row gap-6 justify-evenly px-6 my-6">
            <div className="card-blu">
              <div className="card-inner">
                <h1 className="text-xl">
                  CoDoco - Collaborative Document Editor
                </h1>
                <p className="italic">
                  <b>Frontend:</b> React | <b>Backend:</b> Node.js |{" "}
                  <b>DataBase:</b> MongoDB
                </p>
                <ul className=" list-disc my-6">
                  <li>
                    Implemented live document editing using WebSockets
                    (Socket.IO) to ensure multiple users can view and edit
                    documents simultaneously with instant updates.
                  </li>
                  <li>
                    Designed a MongoDB-based system to save changes, manage
                    document history, and prevent data loss during concurrent
                    edits.
                  </li>
                  <li>
                    Added an in-app real-time chat system that allows
                    collaborators to exchange messages instantly, improving
                    teamwork and user engagement.
                  </li>
                </ul>
                <div className="flex gap-3">
                  <a
                    className="card-link"
                    href="https://github.com/AthishRaj/codoco"
                    target="none"
                  >
                    <FaGithub /> Github
                  </a>
                </div>
              </div>
            </div>
            <div className="card-blu">
              <div className="card-inner">
                <h1 className="text-xl">Time Buddy - Time Table Management</h1>
                <p className="italic">
                  <b>Frontend:</b> HTML, CSS, JavaScript | <b>Backend:</b> PHP
                </p>
                <ul className="list-disc my-6">
                  <li>
                    Prevents overlapping periods for the same teacher and
                    ensures workload balance across the week.
                  </li>
                  <li>
                    Considers teacher specialization and preferences while
                    adhering to school hours and period limits.
                  </li>
                  <li>
                    Maintains flexibility for changes due to absences or
                    schedule adjustments.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
