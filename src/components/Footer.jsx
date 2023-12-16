import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {

    return (
        <div className="footer text-center">
        <p> 
          &#x3c;&#47;&#x3e; with ❤️ by
          <a href="https://github.com/kairos-t" target="_blank">
            {" "}
            Kairos Tay
          </a>
        </p>
        <p className="green-text-gradient">No. of Visitors | <img className="visitcounter" src="https://www.cutercounter.com/hits.php?id=hvxopnap&nd=6&style=16" title="Counter Widget" Alt="Visit counter For Websites"   border="0" /></p>

      </div>
    );
  };
  
  export default Footer;