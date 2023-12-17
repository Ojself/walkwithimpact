import React from "react";

const Heading5 = ({ text, className }) => {
  return (
    <h5
      className={`${className} text-base sm:text-base md-text-base lg:text-lg xl:text-lg`}
    >
      {text}
    </h5>
  );
};

export default Heading5;
