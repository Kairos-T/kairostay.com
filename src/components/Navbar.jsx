import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActive(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "translucent" : "bg-transparent "
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center gap-5">
          {/*<a*/}
          {/*    href="#"*/}
          {/*    className={`nav-link ns-blue ${active === "" ? "active" : ""}`}*/}
          {/*    onClick={() => scrollToSection("")}*/}
          {/*>*/}
          {/*  ./Home*/}
          {/*</a>*/}
          <div
            className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer text-decoration-none`}
          >
            {" "}
            <a
              href="#experience"
              className={`nav-link ns-blue ${
                active === "experience" ? "active" : ""
              }`}
              onClick={() => scrollToSection("experience")}
            >
              ./Experience
            </a>
          </div>

          <div
            className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer text-decoration-none`}
          >
            {" "}
            <a
              href="#project"
              className={`nav-link ${active === "project" ? "active" : ""}`}
              onClick={() => scrollToSection("project")}
            >
              ./Projects
            </a>
          </div>
        </div>

        <a
          href="#"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* <img src={logo} alt="logo" className="w-9 h-9 object-contain logo" /> */}
          <p className="sm:block text-white text-[18px] font-bold cursor-pointer flex ">
            root@kairos:~
          </p>
        </a>

        <div className="sm:flex gap-5 ">
          <div
            className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer text-decoration-none`}
          >
            <a
              href="#contact"
              className={` ${active === "contact" ? "active" : ""}`}
              onClick={() => scrollToSection("contact")}
            >
              ./Contact
            </a>
          </div>

          <div
            className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer`}
          >
            <a
              href="/files/resume/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              &gt; Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
