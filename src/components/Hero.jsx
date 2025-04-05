import React, { useState } from "react";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      {isLoading && <div>LOADING</div>}
      <div
        id="#main-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg"
      >
        <img
          src="img/hero.png"
          alt="hero"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        <h1 className="special-font hero-heading absolute z-40 uppercase text-end left-30 top-30 text-red-dark">
          <b>The</b> ultimate <br /> refreshing <br />
          <b>ride</b>
        </h1>
      </div>
    </div>
  );
};

export default Hero;
