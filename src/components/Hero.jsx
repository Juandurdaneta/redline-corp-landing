import React, { useState } from "react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section
      className="relative h-dvh w-screen overflow-x-hidden"
      aria-label="Presentacion del vehiculo"
    >
      {isLoading && <div>LOADING</div>}

      <div className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg">
        <img
          src="img/hero.png"
          alt="hero"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        <div className="special-font hero-heading text-red-dark relative text-end w-screen h-screen z-40">
          <h1 className="relative">
            <span className="block absolute flex flex-row gap-0 top-[25vh] right-[9vw]">
              <b>The</b> ultimate
            </span>
            <span className="block absolute top-[34vh] left-[8vw] leading-[0.5]">
              refreshing
            </span>
            <span className="block absolute top-[39vh] right-[14vw]">
              <b>ride</b>
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
