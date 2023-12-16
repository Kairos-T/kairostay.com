import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { achievements } from "../constants";
import { awards } from "../constants";
import "./Achievement.scss";

const Achievement = () => {
  return (
    <div className={`mt-12 bg-additional rounded-[20px]`}>
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

      <div className={`justify-center p-6 ${styles.paddingX} gap7`}>
        <div className={`${styles.sectionSubText} text-center`}>Awards:</div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {awards.map((awards) => (
            <div className="text-white-100 text-[15px] pl-1  text-center">
              {awards.title}
            </div>
          ))}
        </ul>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          <div className={`${styles.sectionSubText} text-center`}>
            Certifications:
          </div>
          {achievements.map((achievement) => (
            <div className="text-white-100 text-[15px] pl-1  text-center">
              {achievement.title}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SectionWrapper(Achievement, "");
