import React, { useState } from "react";
import Testimonials from "./Testimonials";

const Hero = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section
      className="relative h-dvh w-screen overflow-x-hidden"
      aria-label="Presentacion del vehiculo"
    >
      {isLoading && <div>LOADING</div>}

      <img src="/img/border.svg" className="h-full absolute-center z-40" />

      {/* VIDEO DE PARTICULAS EN LOOP */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-40 opacity-20"
        src="/videos/particles-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsLoading(false)}
        onLoadStart={() => setIsLoading(true)}
        aria-hidden="true"
      >
        Tu navegador no soporta la reproducción de video.
      </video>

      <div className="relative h-dvh w-screen overflow-hidden rounded-lg">
        <img
          src="img/hero.png"
          alt="hero"
          className="absolute left-0 top-0 size-full object-cover object-center"
        />

        <div className="special-font hero-heading dark:text-red-dark relative text-end w-screen h-screen z-40">
          <h1 className="relative">
            <span className="block absolute flex flex-row gap-0 top-[25vh] right-[9vw]">
              <b>The</b> ultimate
            </span>
            <span className="z-40 block relative">
              <span className="block absolute top-[34vh] left-[8vw] leading-[0.5]">
                refreshing
              </span>
              <span className="block absolute top-[39vh] right-[14vw]">
                <b>ride</b>
              </span>
            </span>
          </h1>

          <img
            src="/img/vehicle.png"
            alt="Auto futurista"
            className="absolute z-20 bottom-0 right-0 max-w-[1920px] max-h-[1080px] w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <Testimonials />
    </section>
  );
};

export default Hero;
