import React from "react";

import { SectionWrapper } from "../hoc";
import { profiles } from "../constants";
import { textVariant } from "../utils/motion";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";

import "./Profile.scss";

const Profile = () => {
  return (
    <>
      <motion.div id="tech" variants={textVariant()}>
        <p className={`${styles.sectionSubText} sectionHeadText text-center`}>
          root@kairos:~#
        </p>
        <h2 className={`${styles.sectionHeadText} sectionHeadText text-center`}>
          ls Contacts/
        </h2>
        <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[350px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
      </motion.div>
      <div className="my-skills">
        {profiles.map((profile) => (
          <div className="skill" data-aos="fade-up" data-aos-delay="200">
            <div className="icon-container">
              <a href={profile.link} target="_blank">
                <img src={profile.icon} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(Profile, "");
