import React from "react";

const Features = ({ videoTargetRef }) => {
  return (
    <section className="bg-black pb-52 px-8">
      <div className="">
        <h1 className="special-font text-6xl text-start text-white dark:text-red-dark">
          Features
        </h1>
        <div
          ref={videoTargetRef}
          className="w-96 h-56 mx-auto my-10 relative"
        ></div>
      </div>
    </section>
  );
};

export default Features;
