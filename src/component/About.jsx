import pic from '../assets/image.jpg'

export default function About() {
  return (
    <>
      <section id="about">
        <div className='flex justify-center'>
          <h1 className='text-3xl font-bold'>
            ABOUT ME
          </h1>
        </div>
        <div className='w-full h-max flex flex-col items-center justify-between gap-5 py-6 sm:flex-row md:w-[80vw] mx-auto' >
          <div>
            <img
              src={pic}
              alt="Profile"
              className="w-32 h-32 sm:w-48 sm:h-48 object-cover rounded-full m-6 sm:mx-16 hover:shadow-[0_0_20px_#2563eb] transform hover:scale-110 transition duration-200 ease-linear" />
          </div>
          <div className='w-2/3 m-6 text-justify sm:mx-16' >
            <p>As a curious and detail-oriented problem-solver, I thrive on creating—from coding efficient backends to designing intuitive user interfaces. Skilled in Python, C, and web technologies, I combine technical depth with a passion for user-centric design supported by solid foundations in data structures and databases.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}