import React, {useEffect, useState} from "react";
import {styles} from "../styles";
import {navLinks} from "../constants";
import "./Navbar.scss";

const NavLink = ({id, title, active, onClick}) => (
    <a
        href={`#${id}`}
        className={`nav-link text-[15px] font-medium ${active === id ? "active" : ""}`}
        onClick={(e) => {
            e.preventDefault();
            onClick(id);
        }}
    >
        {title}
    </a>
);

const Navbar = () => {
    const [active, setActive] = useState("");
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 100);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // highlight the section currently in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            {rootMargin: "-35% 0px -60% 0px"}
        );
        ["experience", "project", "contact"].forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    const scrollToSection = (sectionId) => {
        setActive(sectionId);
        setMenuOpen(false);
        document.getElementById(sectionId)?.scrollIntoView({behavior: "smooth"});
    };

    const scrollToTop = () => {
        setActive("");
        setMenuOpen(false);
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 transition-colors duration-300 ${
                scrolled || menuOpen ? "translucent" : "bg-transparent"
            }`}
        >
            <div className="relative w-full max-w-7xl mx-auto lg:px-10 flex items-center justify-between lg:grid lg:grid-cols-[1fr_auto_1fr]">
                {/* Desktop: left links */}
                <div className="hidden lg:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <NavLink key={link.id} {...link} active={active} onClick={scrollToSection}/>
                    ))}
                </div>

                {/* Brand */}
                <a
                    href="#"
                    className="brand text-white text-[18px] font-bold lg:justify-self-center"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToTop();
                    }}
                >
                    root@kairos:~
                </a>

                {/* Desktop: right links */}
                <div className="hidden lg:flex items-center gap-6 lg:justify-self-end">
                    <NavLink id="contact" title="./contact" active={active} onClick={scrollToSection}/>
                    <a
                        href="/files/resume/Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="nav-link text-[15px] font-medium"
                    >
                        ./resume
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    type="button"
                    aria-label="Toggle navigation menu"
                    aria-expanded={menuOpen}
                    className="lg:hidden ml-auto text-white"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        {menuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"/>
                        )}
                    </svg>
                </button>

                {/* Mobile dropdown */}
                {menuOpen && (
                    <div className="lg:hidden absolute top-full right-0 mt-3 min-w-[190px] translucent shadow-md rounded-xl flex flex-col p-4 gap-3">
                        {navLinks.map((link) => (
                            <NavLink key={link.id} {...link} active={active} onClick={scrollToSection}/>
                        ))}
                        <NavLink id="contact" title="./contact" active={active} onClick={scrollToSection}/>
                        <a
                            href="/files/resume/Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="nav-link text-[15px] font-medium"
                        >
                            ./resume
                        </a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
