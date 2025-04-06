import React from "react";

const Features = ({ videoTargetRef }) => {
  return (
    <section className="bg-black px-8 py-32 flex flex-col gap-10 h-dvh w-screen overflow-hidden">
      <div className="">
        <h1 className="special-font text-6xl text-start text-white dark:text-red-dark">
          Features
        </h1>
      </div>
      <div className="grid grid-cols-5 gap-4 w-full h-full">
        <div className="col-span-3 p-4 border dark:border-red-dark p-8 h-fit">
          <h2 className="text-3xl font-porsche-regular text-start text-white dark:text-red-dark">
            The Coca-Cola Car combines eco-conscious technology with innovative
            daily solutions to redefine urban mobility.
          </h2>
        </div>
        <div className=" col-span-2 relative grid grid-cols-1 grid-rows-2 gap-4 w-full h-full">
          <div
            ref={videoTargetRef}
            id="video-container"
            className="relative w-full h-full"
          ></div>

          <div className="h-20 w-full border dark:border-red-dark p-8 h-fit">
            <h2 className="text-3xl font-porsche-regular text-start text-white dark:text-red-dark">
              Holographic Display
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
