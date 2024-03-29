import React from "react";

const SectionDefaultLayout = ({ children, className = "" }) => {
  return (
    <section
      className={`${className} flex justify-center w-full px-14 sm:px-24 md:px-36 py-20 sm:py-24 md:py-28`}
    >
      {children}
    </section>
  );
};

export default SectionDefaultLayout;
