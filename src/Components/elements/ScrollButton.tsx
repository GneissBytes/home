import React from "react";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import { Link } from "react-scroll";

import "./ScrollButton.css";

interface props {
  direction: "top" | "bottom";
}

const ScrollButton: React.FC<props> = ({ direction }) => {
  return (
    <Link
      className={`scroll-button ${direction}`}
      to={direction === "bottom" ? "about" : "home"}
      spy={true}
      smooth={true}
      offset={-50}
      duration={500}
    >
      {direction === "bottom" ? (
        <ArrowDown className="arrow" />
      ) : (
        <ArrowUp className="arrow" />
      )}
    </Link>
  );
};

export default ScrollButton;
