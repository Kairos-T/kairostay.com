import React from "react";
import {motion, useScroll, useTransform} from "framer-motion";
import {AiOutlineGithub} from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import {BiLinkAlt} from "react-icons/bi";
import {heroRoles} from "../constants";
import useTypewriter from "../hooks/useTypewriter";
import "./Hero.scss";

const socials = [
    {
        name: "GitHub",
        link: "https://github.com/kairos-t",
        Icon: AiOutlineGithub,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kairostay/",
        Icon: ImLinkedin,
    },
    {
        name: "Blog",
        link: "https://blog.kairostay.com",
        Icon: BiLinkAlt,
    },
];

// outer layer handles scroll parallax, inner layer plays the entrance animation
const ParallaxItem = ({y, opacity, delay, children}) => (
    <motion.div style={{y, opacity}}>
        <motion.div
            initial={{opacity: 0, y: 24}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.6, delay}}
        >
            {children}
        </motion.div>
    </motion.div>
);

// a single mountain-ridge layer, drawn as an SVG silhouette
const Ridge = ({y, fill, d, className}) => (
    <motion.svg
        className={`ridge ${className}`}
        style={{y}}
        viewBox="0 0 1440 320"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden="true"
    >
        <path d={d} fill={fill}/>
    </motion.svg>
);

const Hero = () => {
    const typedRole = useTypewriter(heroRoles);

    const {scrollY} = useScroll();

    // content: drifts in layers, fades out on scroll
    const eyebrowY = useTransform(scrollY, [0, 600], [0, 190]);
    const nameY = useTransform(scrollY, [0, 600], [0, 110]);
    const roleY = useTransform(scrollY, [0, 600], [0, 250]);
    const socialsY = useTransform(scrollY, [0, 600], [0, 320]);
    const fade = useTransform(scrollY, [0, 420], [1, 0]);

    // mountains: farther layers lag more (move down slower) for depth
    const farY = useTransform(scrollY, [0, 800], [0, 140]);
    const midY = useTransform(scrollY, [0, 800], [0, 80]);
    const frontY = useTransform(scrollY, [0, 800], [0, 10]);

    return (
        <section className="hero">
            <div className="hero-bg" aria-hidden="true">
                <div className="sky"></div>
                <Ridge
                    className="ridge-far"
                    y={farY}
                    fill="#2e3234"
                    d="M0,200 C 240,168 430,208 620,190 C 820,171 1010,150 1230,178 C 1330,190 1400,196 1440,192 L1440,320 L0,320 Z"
                />
                <Ridge
                    className="ridge-mid"
                    y={midY}
                    fill="#1c1f21"
                    d="M0,244 C 260,206 430,250 640,228 C 850,206 1050,240 1250,220 C 1350,210 1410,232 1440,228 L1440,320 L0,320 Z"
                />
                <Ridge
                    className="ridge-front"
                    y={frontY}
                    fill="#0a0b0c"
                    d="M0,300 L0,236 C 200,212 360,286 540,262 C 720,238 880,150 1080,196 C 1250,234 1360,290 1440,270 L1440,320 L0,320 Z"
                />
            </div>

            <div className="hero-content">
                <ParallaxItem y={eyebrowY} opacity={fade} delay={0.1}>
                    <p className="hero-eyebrow">root@kairos:~# whoami</p>
                </ParallaxItem>

                <ParallaxItem y={nameY} opacity={fade} delay={0.25}>
                    <h1 className="hero-name">Kairos Tay</h1>
                </ParallaxItem>

                <ParallaxItem y={roleY} opacity={fade} delay={0.4}>
                    <p className="hero-role">
                        {typedRole}
                        <span className="typed-cursor" aria-hidden="true"></span>
                    </p>
                </ParallaxItem>

                <ParallaxItem y={socialsY} opacity={fade} delay={0.55}>
                    <div className="hero-socials">
                        {socials.map(({name, link, Icon}) => (
                            <a
                                key={name}
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={name}
                                className="icon-link"
                            >
                                <Icon/>
                            </a>
                        ))}
                    </div>
                </ParallaxItem>
            </div>

            <motion.a
                href="#experience"
                className="scroll-hint"
                aria-label="Scroll to experience"
                style={{opacity: fade}}
            >
                <span className="chevron"></span>
            </motion.a>
        </section>
    );
};

export default Hero;
