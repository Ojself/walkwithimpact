import React from "react";

const SectionDefaultLayout = ({ children, className }) => {
  return (
    <section
      className={`${className} flex justify-center w-full px-14 py-20 md:px-36 md:py-28`}
    >
      {children}
    </section>
  );
};

export default SectionDefaultLayout;
