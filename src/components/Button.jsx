import React from "react";

const Button = ({ title, id, rightIcon, leftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full border border-white dark:border-red-dark px-7 py-3 text-black ${containerClass}`}
    >
      {leftIcon && leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon && rightIcon}
    </button>
  );
};

export default Button;
