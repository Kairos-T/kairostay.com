import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { init } from "ityped";
import { useEffect } from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { BiLinkAlt } from "react-icons/bi";
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
    <section className={`relative w-full h-screen flex mx-auto`}>
      <div
        className={`head1 max-w-7xl mx-auto ${styles.paddingX} flex justify-center items-center flex-row gap-5`}
      >
        <div className="flex flex-col mt-5"></div>

        <div className="head2 text-center">
          <h1 className={`${styles.heroHeadText} text-white heroHeadText`}>
            root@kairos:~# whoami
          </h1>
          <h3 className="heroHeadText text-white" style={{fontSize: '2rem'}}>
            Hi! I'm Kairos. I'm:
          </h3>
          <h3>
            <span
              ref={textRef}
              className={`${styles.heroSubText} mt-2 green-text-gradient heroHeadText`}
            ></span>
          </h3>
          <div className="link1 mt-4">
            <a href="https://github.com/kairos-t" target="_blank">
              <AiOutlineGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/kairoshestiatay/"
              target="_blank"
            >
              <ImLinkedin />
            </a>
            {
              <a href="https://blog.kairostay.com" target="_blank">
                <BiLinkAlt />
              </a>
            }
          </div>
        </div>
      </div>

      {/* <ComputersCanvas /> */}
      <div className="absolute xs:bottom-10 bottom-32 w-10 flex justify-end items-center">
        <a href="#education">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
