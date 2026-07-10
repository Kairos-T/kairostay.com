import React from "react";
import {motion} from "framer-motion";
import {textVariant} from "../utils/motion";
import "./SectionHeader.scss";

const SectionHeader = ({command, id}) => (
    <motion.div
        id={id}
        variants={textVariant()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true, amount: 0.6}}
        className="section-header text-center"
    >
        <p className="section-prompt">root@kairos:~#</p>
        <h2 className="section-command">{command}</h2>
    </motion.div>
);

export default SectionHeader;
