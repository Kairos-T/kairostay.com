import {
    aisp,
    autopsy,
    bb84,
    blog,
    css,
    cddc,
    dsta,
    dstalogo,
    freelance,
    gcc,
    git,
    github,
    html,
    javascript,
    malware,
    nltk,
    np,
    ensign,
    portfolio,
    qrng,
    reactjs,
    rportfolio,
    school,
    scs,
    sentinel,
    smp,
    stem,
    wss
} from "../assets";

const awards = [
    {
        title: "1st in Cohort - AY24/25 Sem 1",
    },
    {
        title: "Director's List - AY24/25 Sem 1"
    },
    {
        title: "Director's List - AY23/24 Sem 2"
    },
    {
        title: "3rd in Cohort - AY23/24 Sem 1",
    },
    {
        title: "Director's List - AY23/24 Sem 1",
    },
    {
        title: "DSTA Polytechnic Digital Scholarship",
    },
    {
        title: "AiSP SVRP Bronze Award 2023",
    },
];

const achievements = [
    {
        title: "Linux Essentials - Cisco",
    },
    {
        title: "Networking Essentials - Cisco",
    },
    {
        title: "Cybersecurity Essentials - Cisco",
    },
    {
        title: "Literacy in AI - AI Singapore",
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
        id: "prg",
        title: "Python",
    },
    {
        id: "web",
        title: "Web Dev",
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

export const prgProject = [
    {
        name: "QRNG",
        description:
            "Quantum Random Number Generator using Qiskit leveraging on quantum mechanics' true randomness. This is integrated with Flask to provide a web interface.",
        tags: [
            {
                name: "Quantum",
                color: "blue-text-gradient",
            },
            {
                name: "Random Number Generator",
                color: "green-text-gradient",
            },
            {
                name: "Cybersecurity",
                color: "pink-text-gradient",
            },
        ],
        image: qrng,
        source_link: "https://github.com/Kairos-T/QRNG",
    },
    {
        name: "BB84",
        description:
            "BB84 QKD Simulator using Qiskit to simulate various environments like perfect implementations, low and high error rates, and the presence of an eavesdropper. This allows us to analyse the effects of these scenarios. ",
        tags: [
            {
                name: "Quantum",
                color: "blue-text-gradient",
            },
            {
                name: "Cryptography",
                color: "green-text-gradient",
            },
            {
                name: "Cybersecurity",
                color: "pink-text-gradient",
            },
        ],
        image: bb84,
        source_link: "https://github.com/Kairos-T/bb84-simulation",
    },
    {
        name: "NLTK Sentiment Analyser",
        description:
            "Script to analyse sentiment in text data, using the VADER (NLTK) model to evaluate how positive, neutral, and negative the text is. Then, it outputs the scores and overall labels to a CSV file.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "NLP",
                color: "green-text-gradient",
            },
        ],
        image: nltk,
        source_link: "https://github.com/Kairos-T/NLTK-Sentiment-Analyser",
    },
    {
        name: "Malware Scanner",
        description:
            "Script that leverages pyClamd and ClamAV daemon to scan files for potential malware, and generates a log detailing if files are clean or contain malware (along with details of it).",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Malware",
                color: "green-text-gradient",
            },
            {
                name: "ClamAV",
                color: "pink-text-gradient",
            },
        ],
        image: malware,
        source_link: "https://github.com/Kairos-T/Basic-Malware-Checker",
    },
];

export const webProject = [
    {
        name: "Portfolio",
        description:
            "A revamp of my old portfolio! This is built with React for amazing code reusability. It was inspired by several other React apps and my blog's landing page. This uses Parallax, iType, ThreeJS and a bunch of other libraries!",
        tags: [
            {
                name: "React",
                color: "blue-text-gradient",
            },
            {
                name: "Parallax",
                color: "green-text-gradient",
            },
            {
                name: "ThreeJS",
                color: "pink-text-gradient",
            },
        ],
        image: rportfolio,
        source_link: "https://kairostay.com/",
    },
    {
        name: "Blog",
        description:
            "A simple and intuitively designed blog, built with a Jekyll theme. I shed light on my journey in cybersecurity through writing about my experiences in CTFs and other topics that pique my interest.",
        tags: [
            {
                name: "Jekyll",
                color: "blue-text-gradient",
            },
            {
                name: "SSG",
                color: "green-text-gradient",
            },
        ],
        image: blog,
        source_link: "https://blog.kairostay.com/",
    },
    {
        name: "Deprecated Portfolio",
        description:
            "My first ever website, built with pure HTML, CSS and JS, with Bootstrap. I loved the simplicity of vanilla HTML, but as the contents grew, it had a horrible loading speed :(. So I turned to React instead!",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
        ],
        image: portfolio,
        source_link: "https://github.com/kairos-t/kairos-t.github.io",
    },
    {
        name: "Portfolio",
        description:
            "During a term break, I challenged myself to further hone my web dev skills as a beginner. I worked on projects for others, and made this (albeit still in progress) art portfolio!",
        tags: [
            {
                name: "Bootstrap",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
        ],
        image: freelance,
        source_link: "https://github.com/Kairos-T/JulianPortfolio",
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
            "Malware and Forensics Intern under the Cyber AI department",
            "R&D of security tools to streamline malware analysis and incident response processes.",
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
            "Contributed to the R&D efforts of various cybersecurity solutions.",
            "Collaborated on the development of Attack Surface Management product, enabling clients to manage their security posture by proactively identifying vulnerabilities early."
        ],
    },
    {
        title: "Cybersecurity & Digital Forensics Student",
        company_name: "Ngee Ann Polytechnic",
        icon: np,
        iconBg: "#ffffff",
        date: "Apr 2023 - Present",
        points: [
            "DSTA Polytechnic Digital Scholar",
            "cGPA: 4.00",
            "NullSec President",
            "CTF Player with 404Unfound and SSM - CDDC'24 3rd, GreyCTF'25 6th, GreyCTF'24 11th, and many more!",
        ],
    },
    {
        title: "Research Intern",
        company_name: "Science Centre Singapore",
        icon: scs,
        iconBg: "#ffffff",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Developed methodologies to minimise experimental discrepancies to a 1% error margin. ",
            "Leveraged tools such as LibreCAD, Arduino, and Excel to enhance data analysis efficiency and accuracy. ",
            "Authored a paper, presenting research findings to panel and attendees at the Youth Science Conference. ",
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
    },
    // {
    //     name: "Telegram",
    //     link: "https://t.me/kairostay",
    //     icon: "https://img.icons8.com/ios-filled/250/FFFFFF/telegram.png",
    // },
];

export {
    list,
    technologies,
    experiences,
    awards,
    achievements,
    profiles,
};
