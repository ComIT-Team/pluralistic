

const Hero = () => {
  return (
    <div className="max-w-[1680px] mx-auto p-4">
      <div className="max-h-[500px] relative">
        <div className="rounded-xl absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
          Your <span className="text-rose-500	">local comfort</span> from
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-rose-500">anywhere</span>.
          </h1>
        </div>
        <img
          src="https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hero" className="max-h-[500px] w-full object-cover rounded-xl"
        />
      </div>
    </div>
  );
};

export default Hero;
