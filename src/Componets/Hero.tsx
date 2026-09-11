import bannerImage from "../assets/banner-stack.png";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-10">

        <div className="w-full md:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="text-gray-500 text-sm md:text-base leading-6 mt-5 max-w-lg">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="flex flex-wrap items-center gap-3 mt-7">
            <button className="text-sm text-white px-5 py-2.5 rounded-md bg-linear-to-r from-orange-500 via-pink-500 to-violet-500 cursor-pointer">
              Explore Technologies
            </button>

            <button className="text-sm text-gray-600 px-5 py-2.5 rounded-md border border-gray-200 hover:border-pink-300 cursor-pointer">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={bannerImage}
            alt="Development Stack"
            className="w-64 md:w-80 lg:w-96 object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;