import {
    aisp,
    autopsy,
    bb84,
    blog,
    css,
    cddc,
    dsta,
    dstalogo,
    gcc,
    git,
    github,
    html,
    javascript,
    np,
    ensign,
    reactjs,
    school,
    scs,
    sentinel,
    smp,
    stem,
    wss
} from "../assets";

const awards = [
    {
        title: "CSIT Gold Medal & Prize (Most Outstanding Achievement)",
    },
    {
        title: "Group-IB Prize (Most Outstanding Academic Achievement)"
    },
    {
        title: "DSTA Polytechnic Digital Scholarship",
    },
    {
        title: "AiSP SVRP Bronze Award 2023",
    },
];

const technologies = [
    {
        name: "Python",
        icon: "https://img.icons8.com/color/480/000000/python.png",
    },
    {
        name: "C#",
        icon: "https://img.icons8.com/color/240/c-sharp-logo.png",
    },
    {
        name: "C++",
        icon: "https://img.icons8.com/?size=100&id=40669&format=png&color=000000"
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "Bootstrap",
        icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "bash",
        icon: "https://img.icons8.com/color/240/bash.png",
    },
    {
        name: "Kali Linux Tools",
        icon: "https://img.icons8.com/plasticine/200/kali-linux.png",
    },
    {
        name: "Autopsy",
        icon: autopsy,
    },
];

const list = [
    {
        id: "event",
        title: "Events",
    },
    {
        id: "research",
        title: "Research",
    },
];

export const eventProject = [
   {
        name: "WorldSkills Singapore 2025",
        description:
            "I competed in WorldSkills Singapore under Cyber Security trade, clinching the Bronze medal. I gained invaluable experience through the rigorous training and competition, enhancing my skills in various domains including sysadmin, CTI, pentesting and more.",
        tags: [
            {
                name: "Cybersecurity",
                color: "blue-text-gradient",
            },
            {
                name: "CTF",
                color: "green-text-gradient",
            },
        ],
        image: wss,
        source_link: "https://www.linkedin.com/posts/kairostay_extremely-grateful-to-have-represented-ngee-activity-7315715287780052993-l465",
    },
    {
        name: "Global Cybersecurity Camp 2025",
        description:
            "I am grateful to have represented Singapore at GCC 2025 in Taiwan. I was exposed to trainings on various niche topics including Threat Modelling, Car Hacking, Kernel Exploitation, and more. My group also managed to clinch best project for the project work! ",
        tags: [
            {
                name: "Cybersecurity",
                color: "blue-text-gradient",
            }
        ],
        image: gcc,
        source_link: "https://blog.kairostay.com/posts/gcc-2025/",
    },
    {
        name: "CDDC 2024",
        description:
            "I participated in the Cyber Defenders Discovery Camp 2024, where I was exposed to various cybersecurity domains. I played with 404Unfound, and we managed to secure the 3rd!",
        tags: [
            {
                name: "Cybersecurity",
                color: "blue-text-gradient",
            },
            {
                name: "CTF",
                color: "green-text-gradient",
            },
            {
                name: "CDDC",
                color: "pink-text-gradient",
            }
        ],
        image: cddc,
        source_link: "https://www.linkedin.com/posts/kairostay_brainhack-cddc-finals-at-the-start-of-activity-7209771568086802433-Iz34?utm_source=share&utm_medium=member_desktop",

    },
    {
        name: "AiSP SVRP",
        description:
            "I am rather proud to have received the AiSP SVRP Bronze Award for my contributions throughout my first semester in NP. I hope to continue to contribute to the cybersecurity landscape!",
        tags: [
            {
                name: "AiSP",
                color: "blue-text-gradient",
            },
            {
                name: "Cybersecurity",
                color: "green-text-gradient",
            },
        ],
        image: aisp,
        source_link:
            "https://www.facebook.com/media/set/?set=a.726877879476044&type=3",
    },
    {
        name: "DSTA Award Ceremony",
        description:
            "I am really honoured to have received the DSTA Scholarship after my first semester. This scholarship has provided me with ample opportunities to learn and grow in the field of cybersecurity and defence.",
        tags: [
            {
                name: "DSTA",
                color: "blue-text-gradient",
            },
            {
                name: "Cybersecurity",
                color: "green-text-gradient",
            },
        ],
        image: dsta,
        source_link:
            "https://www.linkedin.com/posts/kairoshestiatay_i-remember-jumping-for-joy-a-few-weeks-ago-activity-7125109433042403328-M4m6?utm_source=share&utm_medium=member_desktop",
    },
    {
        name: "Sentinel Programme - CTI",
        description:
            "Grateful to have been selected by MINDEF for this programme. It provided valuable insights into threat intel using Splunk, and threat hunting using Snort and Yara. I analysed a malware sample and its traffic on a Windows system! :D",
        tags: [
            {
                name: "Cybersecurity",
                color: "blue-text-gradient",
            },
            {
                name: "Cyber Threat Intel",
                color: "green-text-gradient",
            },
            {
                name: "Threat Hunting",
                color: "pink-text-gradient",
            },
        ],
        image: sentinel,
        source_link: "/files/events/SentinelCertificate.png",
    },
];

export const researchProject = [
    {
        name: "Capstone Project",
        description:
            "I conducted research on the correlation between strength and degradability of various plastics. After collecting the results, I utilised Excel to model trends and create visualisations to showcase the results.",
        tags: [
            {
                name: "STEM_Elective",
                color: "blue-text-gradient",
            },
            {
                name: "Data_Science",
                color: "green-text-gradient",
            },
        ],
        image: stem,
        source_link: "/files/research/Capstone Research Paper.pdf",
    },
    {
        name: "Science Mentorship Programme",
        description:
            "Under this internship, I investigated the utilisation of Arduino to streamline physical data collection to reduce experimental errors to a 1% margin. Harnessing this methodology, I researched into the kinetics of chemistry reactions.",
        tags: [
            {
                name: "Data_Science",
                color: "blue-text-gradient",
            },
            {
                name: "Arduino",
                color: "green-text-gradient",
            },
        ],
        image: smp,
        source_link: "/files/research/21CWSS02 Research Paper.pdf",
    },
];

const experiences = [
    {
        title: "Cybersecurity Engineer",
        company_name: "Defence Science and Technology Agency",
        icon: dstalogo,
        iconBg: "#ffffff",
        date: "Mar 2025 - Present",
        points: [
            "Developed a full-stack malware analysis pipeline using Vue.js, Python, Docker, and Kong API Gateway, enabling automated submission, orchestration, and reporting of malware analysis workflows.",
            "Engineered and maintained malware unpacking, deobfuscation, and decompilation tools, reducing manual analysis time by over 10x"
        ]
    }
    ,
    {
        title: "DevSecOps Engineer",
        company_name: "Ensign InfoSecurity Pte. Ltd.",
        icon: ensign,
        iconBg: "#ffffff",
        date: "Aug 2024 - Feb 2025",
        points: [
            "Drove R&D for proactive cybersecurity solutions to safeguard client infrastructure",
            "Engineered attack surface management and web defacement monitoring tools to continuously discover exposed assets, detect compromise, and support proactive remediation for client environments."
        ],
    },
    {
        title: "Cybersecurity & Digital Forensics Student",
        company_name: "Ngee Ann Polytechnic",
        icon: np,
        iconBg: "#ffffff",
        date: "Apr 2023 - Present",
        points: [
            "CGPA: 4.0/4.0 (Top in cohort)", 
            "Awards: CSIT Gold Medal & Prize, Group-IB Prize",
            "Scholarship: DSTA Polytechnic Digital Scholar",
            "Leadership: President, NullSec: Led CTFs, cybersecurity workshops, and YCEP in collaboration with CSA.",
            "Competitions: WorldSkills Singapore 2025 — 3rd; CDDC 2024 — 3rd; GreyCTF 2025 — 6th",
            "Represented Singapore at the Global Cybersecurity Camp 2025, winning the \"Best Project\" award"
        ],
    },
    {
        title: "Research Intern",
        company_name: "Science Centre Singapore",
        icon: scs,
        iconBg: "#ffffff",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Engineered an embedded systems solution (Arduino, C++) to minimise experimental error in kinetic studies to ±1% precision",
            "Authored and presented a research paper at the 28th Youth Science Conference.",
        ],
    },

    {
        title: "Student",
        company_name: "Commonwealth Secondary School",
        icon: school,
        iconBg: "#ffffff",
        date: "Jan 2019 - Nov 2022",
        link: "",
        points: [
            "6 Distinctions in O Level, 'A' for STEM Elective Programme",
            "STEM Elective Programme 2021-2022",
            "A*STAR's Scientist-in-Schools Programme 2021-2022",
            "Math Talent Development Programme 2022",
        ],
    },
];

const profiles = [
    {
        name: "GitHub",
        link: "https://github.com/kairos-t",
        icon: github,
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/kairostay/",
        icon: "https://img.icons8.com/ios-filled/FFFFFF/linkedin.png",
    },
    {
        name: "Email",
        link: "mailto:contact@kairostay.com",
        icon: "https://img.icons8.com/ios-filled/FFFFFF/message-squared.png",
    }
];

export {
    list,
    technologies,
    experiences,
    awards,
    profiles,
};
