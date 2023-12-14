import React from "react";

const Heading2 = ({ text, className }) => {
  return (
    <h2
      className={`${className} text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl`}
    >
      {text}
    </h2>
  );
};

export default Heading2;
