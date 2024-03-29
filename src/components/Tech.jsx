import React from "react";

import {BallCanvas} from "./canvas";
import {SectionWrapper} from "../hoc";
import {technologies} from "../constants";
import {textVariant} from "../utils/motion";
import {motion} from "framer-motion";
import {styles} from "../styles";

const Tech = () => {
    return (
        <>
            <motion.div id="tech" variants={textVariant()}>
                <p className={`${styles.sectionSubText} sectionHeadText text-center`}>
                    root@kairos:~#
                </p>
                <h2 className={`${styles.sectionHeadText} sectionHeadText text-center`}>
                    ./skills
                </h2>
            </motion.div>
            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology) => (
                    <div style={{height: "5rem", width: "5rem"}} key={technology.name}>
                        <BallCanvas icon={technology.icon}/>
                    </div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Tech, "");
