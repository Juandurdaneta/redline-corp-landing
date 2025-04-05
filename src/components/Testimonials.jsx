import React from "react";

const Testimonials = () => {
  return (
    <section
      className="absolute bottom-10 left-10 
                 flex items-center gap-4
                 p-4"
      aria-label="Testimonios"
    >
      {/* Avatares */}
      <div className="flex -space-x-3">
        <img
          src="/img/testimonial-1.png"
          alt="Testimonial 1"
          className="h-10 w-10 rounded-full dark:bg-red-900 bg-gray-900"
        />
        <img
          src="/img/testimonial-2.png"
          alt="Testimonial 2"
          className="h-10 w-10 rounded-full dark:bg-red-700 bg-gray-700"
        />
        <img
          src="/img/testimonial-3.png"
          alt="Testimonial 3"
          className="h-10 w-10 rounded-full dark:bg-red-dark bg-white"
        />
      </div>

      {/* Texto */}
      <p className="text-xs md:text-sm max-w-xs dark:text-red-dark-50 font-tekur">
        These people have tested the prototype <br />
        and are satisfied with the innovation.
      </p>
    </section>
  );
};

export default Testimonials;
