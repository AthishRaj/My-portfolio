export default function Education() {
  return (
    <>
      <section id="education">
        <div className=" w-full flex flex-col items-center gap-4 my-6">
          <div>
            <h1 className="text-3xl font-bold">EDUCATION</h1>
          </div>
          <div className="w-full flex flex-col md:flex-row justify-evenly gap-6 px-6">
            <div className="card-blu  ">
              <div className="card-inner">
                <h2>College of Engineering Vadakara</h2>
                <p className=" italic"> Bachelor of Technology in Computer Science</p>
                <div className="text-sm text-gray-400 flex justify-between">
                  <span>2021 - 2025</span>
                  <span>Kozhikode, Kerala</span>
                </div>
              </div>
            </div>
            <div className="card-blu">
              <div className="card-inner">
                <h2>Jawahar Navodaya Vidyalaya Calicut</h2>
                <p className="italic">Biology Science</p>
                <div className="text-sm text-gray-400 flex justify-between">
                  <span>2019 - 2021</span>
                  <span>Kozhikode, Kerala</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}