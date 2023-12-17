import React from "react";

const ParagraphBold = ({ text, className, italic }) => {
  return (
    <p
      className={`${className} text-lg font-m-semiBold${
        italic ? "Italic" : ""
      }`}
    >
      {text}
    </p>
  );
};

export default ParagraphBold;
