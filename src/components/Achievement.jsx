import React from "react";
import {motion} from "framer-motion";

import {styles} from "../styles";
import {SectionWrapper} from "../hoc";
import {textVariant} from "../utils/motion";
import {achievements, awards} from "../constants";
import "./Achievement.scss";

const Achievement = () => {
    return (
        <div className={`mt-12 bg-additional rounded-[20px] relative`}>
            <div className="absolute top-0 left-0 flex space-x-2 p-5">
                <div className="h-4 w-4 bg-red-500 rounded-full"></div>
                <div className="h-4 w-4 bg-yellow-500 rounded-full"></div>
                <div className="h-4 w-4 bg-green-500 rounded-full"></div>
            </div>

            <div className={`bg-tertiary rounded-2xl ${styles.padding}`}>
                <motion.div variants={textVariant()}>
                    <p className={`${styles.sectionSubText} sectionHeadText text-center`}>
                        root@kairos:~#
                    </p>
                    <h2
                        className={`${styles.sectionHeadText} sectionHeadText text-center`}
                    >
                        ls Awards/ Certs/
                    </h2>
                </motion.div>
            </div>

            <div className={`justify-center p-5 ${styles.paddingX} gap7`}>
                <div className={`${styles.sectionSubText} text-center`}>Awards:</div>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    {awards.map((award, index) => (
                        <div key={index} className="text-white-100 text-[15px] pl-1  text-center">
                            {award.title}
                        </div>
                    ))}
                </ul>
                <ul className="mt-5 list-disc ml-5 space-y-2">
                    <div className={`${styles.sectionSubText} text-center`}>
                        Certifications:
                    </div>
                    {achievements.map((achievement, index) => (
                        <div key={index} className="text-white-100 text-[15px] pl-1  text-center">
                            {achievement.title}
                        </div>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SectionWrapper(Achievement, "");
