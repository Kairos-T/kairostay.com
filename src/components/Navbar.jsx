import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import "./Navbar.scss";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initial check for mobile view
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    setActive(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {/* Mobile View */}
      {isMobile && (
        <div
          className={`${
            styles.paddingX
          } w-full flex items-center py-3 fixed top-0 z-20 ${
            scrolled ? "translucent" : "bg-transparent"
          }`}
        >
          <p className="sm:block text-white text-[18px] font-bold cursor-pointer flex ">
            root@kairos:~
          </p>
          <div className="cursor-pointer ml-auto" onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>
          {menuOpen && (
            <div className="absolute top-16 right-0 translucent shadow-md">
              <div
                className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer p-2`}
              >
                <a
                  href="#experience"
                  className={`nav-link ns-blue ${
                    active === "experience" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("experience");
                    toggleMobileMenu();
                  }}
                >
                  ./Experience
                </a>
              </div>

              <div
                className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer p-2`}
              >
                <a
                  href="#project"
                  className={`nav-link ${active === "project" ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("project");
                    toggleMobileMenu();
                  }}
                >
                  ./Projects
                </a>
              </div>

              <div
                className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer p-2`}
              >
                <a
                  href="#contact"
                  className={` ${active === "contact" ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contact");
                    toggleMobileMenu();
                  }}
                >
                  ./Contact
                </a>
              </div>

              <div
                className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer p-2`}
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
          )}
        </div>
      )}

      {/* Desktop View */}
      {!isMobile && (
        <div
          className={`${
            styles.paddingX
          } w-full flex items-center py-3 fixed top-0 z-20 ${
            scrolled ? "translucent" : "bg-transparent"
          }`}
        >
          <div className="w-full flex justify-between px-16 items-center max-w-7xl mx-auto">
            <div className="flex items-center gap-5">
              <div
                className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer text-decoration-none`}
              >
                <a
                  href="#experience"
                  className={`nav-link ns-blue ${
                    active === "experience" ? "active" : ""
                  }`}
                  onClick={() => {
                    scrollToSection("experience");
                    toggleMobileMenu();
                  }}
                >
                  ./Experience
                </a>
              </div>

              <div
                className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer text-decoration-none`}
              >
                <a
                  href="#project"
                  className={`nav-link ${active === "project" ? "active" : ""}`}
                  onClick={() => {
                    scrollToSection("project");
                    toggleMobileMenu();
                  }}
                >
                  ./Projects
                </a>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <p className="sm:block text-white text-[18px] font-bold cursor-pointer flex ">
                root@kairos:~
              </p>
            </div>

            <div className="sm:flex gap-5">
              <div
                className={`top2 ${"text-secondary"} hover:text-white text-[15px] font-medium cursor-pointer text-decoration-none`}
              >
                <a
                  href="#contact"
                  className={` ${active === "contact" ? "active" : ""}`}
                  onClick={() => {
                    scrollToSection("contact");
                    toggleMobileMenu();
                  }}
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
        </div>
      )}
    </>
  );
};

export default Navbar;
