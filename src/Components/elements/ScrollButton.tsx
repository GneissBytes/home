import React from "react";
import { ArrowDown, ArrowUp } from "react-bootstrap-icons";
import { Link } from "react-scroll";

import "./ScrollButton.css";

interface props {
  direction: 'top' | 'bottom';
}

const ScrollButton: React.FC<props> = ({ direction }) => {
  const renderButton = () => {
    if (direction === "top") {
      return (
        <Link
          className="scroll-button"
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <ArrowUp className="arrow" />
        </Link>
      );
    }
    if (direction === "bottom") {
      return (
        <Link
          className="scroll-button"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <ArrowDown className="arrow" />
        </Link>
      );
    }
    return <></>;
  };
  return renderButton();
};

export default ScrollButton;
