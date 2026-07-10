import React, {useState} from "react";
import Tilt from "react-parallax-tilt";
import {motion} from "framer-motion";
import {FiExternalLink} from "react-icons/fi";
import {SectionWrapper} from "../hoc";
import {eventProject, list, researchProject} from "../constants";
import {fadeIn} from "../utils/motion";
import SectionHeader from "./SectionHeader";
import ProjectList from "./ProjectList";
import "./Project.scss";

const projectsByCategory = {
    event: eventProject,
    research: researchProject,
};

const ProjectCard = ({index, name, description, tags, image, source_link}) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.15, 0.75)}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25}}
        >
            <Tilt
                tiltMaxAngleX={7}
                tiltMaxAngleY={7}
                glareEnable
                glareMaxOpacity={0.08}
                glareBorderRadius="16px"
                className="project-card sm:w-[350px] w-full"
            >
                <a
                    href={source_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-inner"
                >
                    <div className="thumb">
                        <img src={image} alt={name}/>
                        <span className="ext-icon" aria-hidden="true">
                            <FiExternalLink/>
                        </span>
                    </div>

                    <div className="card-content">
                        <h3 className="card-title">{name}</h3>
                        <p className="card-desc">{description}</p>
                        <div className="card-tags">
                            {tags.map((tag) => (
                                <span key={`${name}-${tag.name}`} className={`tag ${tag.color}`}>
                                    ./{tag.name}
                                </span>
                            ))}
                        </div>
                    </div>
                </a>
            </Tilt>
        </motion.div>
    );
};

const Project = () => {
    const [selected, setSelected] = useState("event");
    const data = projectsByCategory[selected] ?? eventProject;

    return (
        <>
            <SectionHeader id="project" command="./highlights"/>

            <div className="project w-full flex">
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 w-full"
                >
                    <ul className="tab-list">
                        {list.map((item) => (
                            <ProjectList
                                key={item.id}
                                title={item.title}
                                active={selected === item.id}
                                setSelected={setSelected}
                                id={item.id}
                            />
                        ))}
                    </ul>

                    <div className="box mt-16 flex flex-wrap justify-center">
                        {data.map((project, index) => (
                            <ProjectCard
                                key={project.name}
                                index={index}
                                {...project}
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(Project, "project");
