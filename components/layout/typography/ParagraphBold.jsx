import React from "react";

const ParagraphBold = ({ text, className, italic, iconRight }) => {
  return (
    <p
      className={`${className} text-lg font-m-semiBold${
        italic ? "Italic" : ""
      }`}
    >
      {text}
      {iconRight && iconRight}
    </p>
  );
};

export default ParagraphBold;
