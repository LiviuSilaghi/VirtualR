/** @format */

const FeatureSection = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[800px]">
      <div className="text-center">
        <spam
          className="bg-neutral-900 text-orange-500 rounded-full h-6 text-sm
        font-medium px-2 uppercase"
        >
          feature
        </spam>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily built
          <spam
            className="bg-gradient-to-r from-orange-500 to-orange-800
          text-transparent bg-clip-text"
          >
            {" "}
            your code
          </spam>
        </h2>
      </div>
    </div>
  );
};

export default FeatureSection;
