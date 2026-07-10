import React, {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import {FiArrowUpRight, FiChevronDown} from "react-icons/fi";
import {SectionWrapper} from "../hoc";
import {fadeIn} from "../utils/motion";
import {cves} from "../constants";
import SectionHeader from "./SectionHeader";
import "./Cve.scss";

const projects = [...new Map(cves.map((c) => [c.product, null])).keys()].map((name) => ({
    name,
    slug: name.toLowerCase().replace(/\s+/g, "-"),
    items: cves.filter((c) => c.product === name),
}));

const CveEntry = ({cve, open, onToggle}) => (
    <div className={`entry ${open ? "open" : ""}`}>
        <button type="button" className="entry-head" aria-expanded={open} onClick={onToggle}>
            <span className="entry-meta">
                <span className="cve-id">{cve.id}</span>
                <span className={`severity ${cve.severity.toLowerCase()}`}>{cve.severity}</span>
                {cve.cvss && (
                    <span className="cvss" title="CVSS base score">{cve.cvss}</span>
                )}
            </span>
            <span className="entry-title">{cve.title}</span>
            <FiChevronDown className="entry-chevron" aria-hidden="true"/>
        </button>

        <AnimatePresence initial={false}>
            {open && (
                <motion.div
                    initial={{height: 0, opacity: 0}}
                    animate={{height: "auto", opacity: 1}}
                    exit={{height: 0, opacity: 0}}
                    transition={{duration: 0.25, ease: "easeInOut"}}
                    className="entry-body"
                >
                    <div className="entry-body-inner">
                        <p className="entry-desc">{cve.description}</p>
                        <a
                            href={cve.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="cve-ref"
                        >
                            view advisory <FiArrowUpRight aria-hidden="true"/>
                        </a>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </div>
);

const Cve = () => {
    const [selectedProject, setSelectedProject] = useState(0);
    const [expanded, setExpanded] = useState(null); // all collapsed by default

    const selectProject = (index) => {
        setSelectedProject(index);
        setExpanded(null);
    };

    return (
        <>
            <SectionHeader id="cves" command="./cves"/>

            <motion.div
                variants={fadeIn("up", "tween", 0.2, 0.8)}
                initial="hidden"
                whileInView="show"
                viewport={{once: true, amount: 0.2}}
                className="terminal-window cve-terminal max-w-4xl mx-auto mt-16"
            >
                <div className="terminal-bar">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                    <span className="terminal-title">kairos@sec: ~/cves</span>
                </div>

                <div className="cve-terminal-body">
                    <aside className="project-pane">
                        <p className="pane-label">
                            <span className="prompt">$</span> ls ~/cves
                        </p>
                        <ul className="project-list" role="tablist" aria-label="Affected projects">
                            {projects.map((project, index) => (
                                <li key={project.slug} role="presentation">
                                    <button
                                        type="button"
                                        role="tab"
                                        id={`cve-tab-${project.slug}`}
                                        aria-selected={index === selectedProject}
                                        aria-controls="cve-entries-panel"
                                        className={`project-tab ${index === selectedProject ? "active" : ""}`}
                                        onClick={() => selectProject(index)}
                                    >
                                        <span className="project-name">{project.slug}</span>
                                        <span className="project-count">{project.items.length}</span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </aside>

                    <motion.div
                        key={selectedProject}
                        id="cve-entries-panel"
                        role="tabpanel"
                        aria-labelledby={`cve-tab-${projects[selectedProject].slug}`}
                        initial={{opacity: 0, y: 8}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.25}}
                        className="entries-pane"
                    >
                        {projects[selectedProject].items.map((cve, index) => (
                            <CveEntry
                                key={cve.id}
                                cve={cve}
                                open={expanded === index}
                                onToggle={() => setExpanded(expanded === index ? null : index)}
                            />
                        ))}
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
};

export default SectionWrapper(Cve, "");
