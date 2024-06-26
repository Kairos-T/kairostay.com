import React from "react";
import {VerticalTimeline, VerticalTimelineElement,} from "react-vertical-timeline-component";
import {motion} from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import {styles} from "../styles";
import {experiences} from "../constants";
import {SectionWrapper} from "../hoc";
import {textVariant} from "../utils/motion";

import "./Experience.scss";

const ExperienceCard = ({experience}) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#343a40",
                color: "#fff",
            }}
            contentArrowStyle={{borderRight: "7px solid  #343a40"}}
            date={experience.date}
            iconStyle={{background: experience.iconBg}}
            icon={
                <div className="flex justify-center items-center w-full h-full">
                    <img
                        src={experience.icon}
                        alt={experience.company_name}
                        className="w-[75%] h-[75%] object-contain"
                    />
                </div>
            }
        >
            <div>
                <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
                <p
                    className="text-secondary text-[16px] font-semibold"
                    style={{margin: 0}}
                >
                    {experience.company_name}
                    <br></br>
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wider"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div id="experience" variants={textVariant()}>
                <p className={`${styles.sectionSubText} sectionHeadText text-center`}>
                    root@kairos:~#
                </p>
                <h2 className={`${styles.sectionHeadText} sectionHeadText text-center`}>
                    ./Education && ./Experience
                </h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
