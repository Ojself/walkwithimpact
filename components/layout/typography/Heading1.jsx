import React from "react";

const Heading1 = ({ text, className }) => {
  return <h1 className={`${className} text-6xl font-m-medium`}>{text}</h1>;
};

export default Heading1;
