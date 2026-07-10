import React from "react";
import {FaHeart} from "react-icons/fa";
import "./Footer.scss";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="footer text-center">
            <p>
                &#x3c;&#47;&#x3e; with <FaHeart className="heart" aria-label="love"/> by
                <a href="https://github.com/kairos-t" target="_blank" rel="noopener noreferrer">
                    {" "}
                    Kairos Tay
                </a>
            </p>
            <p className="footer-year">© 2023 - {currentYear}</p>
        </footer>
    );
};

export default Footer;
