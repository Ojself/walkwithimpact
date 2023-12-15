import React from "react";

const Paragraph = ({ text, italic, className }) => {
  return (
    <p
      className={`${className} text-base font-m-${
        italic ? "italic" : "regular"
      }`}
    >
      {text}
    </p>
  );
};

export default Paragraph;
