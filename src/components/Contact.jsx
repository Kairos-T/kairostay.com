import React from "react";
import {motion} from "framer-motion";
import {SectionWrapper} from "../hoc";
import {profiles} from "../constants";
import {slideIn} from "../utils/motion";
import {EarthCanvas} from "./canvas";
import SectionHeader from "./SectionHeader";

import "./Contact.scss";

const Contact = () => {
    return (
        <>
            <SectionHeader id="contact" command="./contact"/>

            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto h-[350px]"
            >
                <EarthCanvas/>
            </motion.div>

            <div className="contact-links">
                {profiles.map((profile) => (
                    <a
                        key={profile.name}
                        href={profile.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={profile.name}
                        className="contact-chip"
                    >
                        <img src={profile.icon} alt=""/>
                        <span>{profile.name}</span>
                    </a>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Contact, "");
