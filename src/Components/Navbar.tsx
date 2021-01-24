import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { List } from "react-bootstrap-icons";

import "./Navbar.css";
import useWidth from "./hooks/useWidth";

const Navbar: React.FC = () => {
  const [menuHidden, setMenuHidden] = useState(true);
  const [collapseNavbar] = useWidth(768);
  const [navPosition, setNavPosition] = useState("top");
  const navMenu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    //@ts-ignore
    const onBodyClick = (event) => {
      if (navMenu.current && navMenu.current.contains(event.target)) {
        return;
      }
      setMenuHidden(true);
    };

    document.body.addEventListener("click", onBodyClick);

    const handleScroll = () => {
      if (window.pageYOffset <= 200) {
        return setNavPosition("top");
      }
      if (window.pageYOffset < 826) {
        return setNavPosition("header");
      }
      if (window.pageYOffset >= 826) {
        return setNavPosition("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.body.removeEventListener("click", onBodyClick);
    };
  }, []);

  const sections = [
    "home",
    "about",
    "education",
    "experience",
    "skills",
    "certifications",
    "works",
    "contact",
  ];
  const navitems = sections.map((section) => (
    <Link
      key={section}
      to={section}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      activeClass="active"
    >
      <li className="nav-item" key={section}>
        {section}
      </li>
    </Link>
  ));

  const navScrollStyles = {
    top: { opacity: 1, visibility: "visible" },
    header: { opacity: 0, visibility: "invisible" },
    scrolled: { display: "block", backgroundColor: "#333333" },
  };

  const renderMenu = () => {
    if (collapseNavbar) {
      return (
        <div
          className="sticky-top navbarfull"
          //@ts-ignore
          style={navScrollStyles[navPosition]}
        >
          <div className="row">
            <div className="col-md-12">
              <ul className={`item-list`}>{navitems}</ul>
            </div>
          </div>
        </div>
      );
    }
    return (
      <>
        <div
          className="sticky-top"
          //@ts-ignore
        >
          <div className="row">
            <div className="col navigation-wrapped">
              <span
                className="nav-button"
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuHidden(!menuHidden);
                }}
              >
                <List />
              </span>
              <ul
                //@ts-ignore
                ref={navMenu}
                className={`item-list-vertical ${menuHidden ? "hidden" : ""}`}
                onClick={() => {
                  setMenuHidden(true);
                  console.log("click!");
                }}
              >
                {navitems}
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  };

  return <> {renderMenu()}</>;
};

export default Navbar;
