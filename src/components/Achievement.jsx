import React from "react";
import {motion} from "framer-motion";

import {SectionWrapper} from "../hoc";
import {fadeIn} from "../utils/motion";
import {awards} from "../constants";
import SectionHeader from "./SectionHeader";
import "./Achievement.scss";

const Achievement = () => {
    return (
        <>
            <SectionHeader command="./awards"/>

            <motion.div
                variants={fadeIn("up", "tween", 0.2, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.2}}
                className="terminal-window achievements-terminal max-w-4xl mx-auto mt-16"
            >
                <div className="terminal-bar">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="terminal-title">kairos@sec: ~/awards</span>
                </div>

                <div className="terminal-body">
                    <p className="line">
                        <span className="prompt">$</span> ls awards/
                    </p>
                    <ul className="output-list">
                        {awards.map((award) => (
                            <li key={award.title}>{award.title}</li>
                        ))}
                    </ul>
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Achievement, "");
