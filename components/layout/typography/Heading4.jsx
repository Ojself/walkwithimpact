import React from "react";

const Heading4 = ({ text, className, italic }) => {
  return (
    <h4
      className={`${className} text-xl font-m-medium${italic ? "Italic" : ""}`}
    >
      {text}
    </h4>
  );
};

export default Heading4;
