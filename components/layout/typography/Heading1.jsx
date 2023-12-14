import React from "react";

const Heading1 = ({ text, className }) => {
  return (
    <h1
      className={`${className} text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-m-medium`}
    >
      {text}
    </h1>
  );
};

export default Heading1;
