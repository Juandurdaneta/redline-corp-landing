import React, { useState } from "react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && <div>LOADING</div>}

      <div className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg">
        <img
          src="img/hero.png"
          alt="hero"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        <div className="special-font hero-heading text-red-dark relative text-end w-screen h-screen z-40">
          <h1 className="absolute top-[25vh] right-[9vw] flex gap-0 items-end">
            <b>The</b> ultimate
          </h1>
          <h1 className="absolute top-[34vh] left-[8vw] leading-[0.5]">
            refreshing
          </h1>
          <h1 className="absolute top-[39vh] right-49"><b>ride</b></h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
