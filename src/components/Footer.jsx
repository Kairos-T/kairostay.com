import React from "react";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./Footer.scss";

config.autoAddCss = false;

const Footer = () => {
  return (
    <div className="footer text-center">
      <p>
        &#x3c;&#47;&#x3e; with{" "}
        <FontAwesomeIcon
          icon={faHeart}
          className="fa-beat"
          style={{
            "--fa-animation-duration": "0.8s",
            color: "#f54545",
          }}
        />{" "}
        by
        <a href="https://github.com/kairos-t" target="_blank">
          {" "}
          Kairos Tay
        </a>
      </p>
      <p className="green-text-gradient">
        No. of Visitors |{" "}
        <img
          className="visitcounter"
          src="https://hitwebcounter.com/counter/counter.php?page=10365307&style=0025&nbdigits=5&type=page&initCount=100"
          title="Counter Widget"
          border="0"
        />
      </p>
    </div>
  );
};

export default Footer;
