export default function Project() {
  return (
    <>
    <section id="project">
      <div className=" w-full flex flex-col items-center gap-4 my-6">
        <div>
          <h1 className="text-3xl font-bold">PROJECTS</h1>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-6 justify-evenly px-6 my-6">
          <div className="card-blu">
            <h1 className="text-xl">SpotIo - IoT Based Smart Parking System</h1>
            <p className="italic"><b>Frontend:</b> Flutter | <b>Backend:</b> Firebase</p>
            <ul className=" list-disc my-6">
              <li>Developed an IoT-based system to optimize parking management
                with real-time monitoring and automation.</li>
              <li>Reduced congestion and improved convenience with a seamless
                interface and robust backend.</li>
            </ul>
          </div>
          <div className="card-blu">
            <h1 className="text-xl">Time Buddy - Time Table Management</h1>
            <p className="italic"><b>Frontend:</b> HTML, CSS, JavaScript | <b>Backend:</b> PHP</p>
            <ul className="list-disc my-6">
              <li>Prevents overlapping periods for the same teacher and ensures
                workload balance across the week.</li>
              <li>
                Considers teacher specialization and preferences while adhering
                to school hours and period limits.
              </li>
              <li>
                Maintains flexibility for changes due to absences or schedule
                adjustments.
              </li>
            </ul>
          </div>
        </div>
      </div>
      </section>
    </>
  )
}