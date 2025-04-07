import React, { useState } from "react";
import Testimonials from "./Testimonials";
import Border from "../assets/border.svg?react";

const Hero = ({ videoRef, handleVideoLoaded }) => {
  return (
    <section
      className="relative h-dvh w-screen overflow-x-hidden"
      aria-label="Presentacion del vehiculo"
    >
      <Border className="h-full w-full z-40 text-white dark:text-red-dark absolute-center" />

      {/* VIDEO DE PARTICULAS EN LOOP */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-40 opacity-30"
        src="/videos/particles-1.mp4"
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={handleVideoLoaded}
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
            <span className="block absolute flex flex-row gap-0 top-[22vh] right-[9vw]">
              <b>The</b> ultimate
            </span>
            <span className="z-40 block relative">
              <span className="block absolute top-[32vh] left-[8vw] leading-[0.5]">
                refreshing
              </span>
              <span className="block absolute top-[36vh] right-[14vw]">
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

      <div
        ref={videoRef}
        className="absolute right-22 bottom-10 z-40 w-64 h-34"
      ></div>
    </section>
  );
};

export default Hero;
