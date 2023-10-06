import React from "react";

const Hero = () => {
  return (
    <div className="max-w-[1680px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="rounded-xl absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Your Home <span className="text-emerald-300	">Groceries</span>,{" "}
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-emerald-300">Anywhere</span>.
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hero" className="max-h-[500px] w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
