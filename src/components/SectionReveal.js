import React from "react";
import { useInView } from "react-intersection-observer";

function SectionReveal({ section, direction }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={
        inView
          ? "section--reveal"
          : `${direction ? `section--hidden-${direction}` : "section--hidden"}`
      }
    >
      {section}
    </div>
  );
}

export default SectionReveal;
