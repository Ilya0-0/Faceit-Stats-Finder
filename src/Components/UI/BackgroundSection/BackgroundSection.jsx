import React from "react";

const BackgroundSection = ({ image, className, children }) => {
  return (
    <section style={{ backgroundImage: `url(${image})` }} className={className}>
      {children}
    </section>
  );
};

export default BackgroundSection;
