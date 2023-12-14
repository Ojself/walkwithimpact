import React from "react";

const Heading3 = ({ text, className }) => {
  return (
    <h3
      className={`${className} text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl`}
    >
      {text}
    </h3>
  );
};

export default Heading3;
