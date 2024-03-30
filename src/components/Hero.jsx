import {motion} from "framer-motion";
import React, {useEffect, useRef} from "react";
import {styles} from "../styles";
import {init} from "ityped";
import {AiOutlineGithub} from "react-icons/ai";
import {ImLinkedin} from "react-icons/im";
import {BiLinkAlt} from "react-icons/bi";
import "./Hero.scss";

const Hero = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            showCursor: true,
            strings: [
                "A Cybersecurity Student",
                "An Aspiring Researcher",
                "A Forensics and Quantum Lover",
            ],
        });
    }, []);

    return (
        <section className={`relative w-full min-h-screen flex mx-auto`}>
            <div
                className={`head1 max-w-7xl mx-auto ${styles.paddingX} flex justify-center items-center flex-row gap-5`}>
                <div className="flex flex-col mt-5"></div>

                <div className="head2 text-center">
                    <h1 className={`${styles.heroHeadText} text-white heroHeadText`}
                        style={{fontSize: "clamp(2rem, 6vw, 4rem)"}}>
                        root@kairos:~# whoami
                    </h1>
                    <h3 className="heroHeadText text-white" style={{fontSize: "clamp(1.5rem, 4vw, 2rem)"}}>
                        Hi! I'm Kairos. I'm:
                    </h3>
                    <h3>
                        <span ref={textRef} className={`${styles.heroSubText} mt-2 green-text-gradient heroHeadText`}
                              style={{fontSize: "clamp(1rem, 2.5vw, 1.5rem)"}}></span>
                    </h3>
                    <div className="link1 mt-4 flex justify-center">
                        <a href="https://github.com/kairos-t" target="_blank" className="icon-link">
                            <AiOutlineGithub className="icon"/>
                        </a>
                        <a href="https://www.linkedin.com/in/kairoshestiatay/" target="_blank" className="icon-link">
                            <ImLinkedin className="icon"/>
                        </a>
                        <a href="https://blog.kairostay.com" target="_blank" className="icon-link">
                            <BiLinkAlt className="icon"/>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
