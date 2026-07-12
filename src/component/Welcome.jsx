import { useRef } from "react";

export default function Welcome() {
  const boundRef = useRef(null);

  const mouseLeaveHandle = () =>{boundRef.current = null}
  const mouseEnterHandle = (e) =>{boundRef.current = e.currentTarget.getBoundingClientRect()} 
  const mouseMoveHandle = (e) => {
   if(!boundRef.current) return;
   const x = e.clientX - boundRef.current.left; 
   const y = e.clientY - boundRef.current.top;
   const xPercent = x / boundRef.current.width;
   const yPercent = y / boundRef.current.height;
   const xRotate = (xPercent - 0.5) * 40;
   const yRotate = (0.5 - yPercent) * 40

   e.currentTarget.style.setProperty("--x-rotate",`${yRotate}deg`)
   e.currentTarget.style.setProperty("--y-rotate",`${xRotate}deg`)
  }
  return (
    <>
      <div className="[perspective:800px]">
        <div 
        onMouseLeave={mouseLeaveHandle}
        onMouseEnter={mouseEnterHandle}
        onMouseMove={mouseMoveHandle}
        className=" h-[60dvh] md:h-[95dvh] w-dvw flex flex-col gap-4 sm:gap-8 justify-center items-center hover:[transform:rotatex(var(--x-rotate))_rotatey(var(--y-rotate))] transition duration-200 ease-linear ">
          <h1 className="text-2xl sm:text-4xl">I am </h1>
          <div className="">
            <h1 className="">
              <span className="text-5xl font-bold sm:text-7xl lg:text-9xl">
                <span className="text-sky-400">A</span>
                thish
                <span className="text-sky-400">R</span>
                aj U K
              </span>
            </h1>
          </div>
          <h1 className="text-2xl sm:text-4xl">MERN Stack Developer</h1>
        </div>
      </div>
    </>
  );
}
