import React from "react";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

import {experiences} from "../constants";
import {SectionWrapper} from "../hoc";
import SectionHeader from "./SectionHeader";
import InlineMarkdown from "./InlineMarkdown";
import "./Experience.scss";

const ExperienceCard = ({experience}) => {
    return (
        <VerticalTimelineElement
            className="experience-card"
            contentArrowStyle={{borderRight: "7px solid rgba(255, 255, 255, 0.12)"}}
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
                <h3 className="text-white-100 text-[22px] font-bold">{experience.title}</h3>
                <p className="company text-[15px] font-semibold" style={{margin: 0}}>
                    {experience.company_name}
                </p>
            </div>

            <ul className="mt-5 list-disc ml-5 space-y-2">
                {experience.points.map((point, index) => (
                    <li
                        key={`experience-point-${index}`}
                        className="text-white-100 text-[14px] pl-1 tracking-wide"
                    >
                        <InlineMarkdown text={point}/>
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <SectionHeader id="experience" command="./experience"/>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline lineColor="rgba(255, 255, 255, 0.1)">
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
