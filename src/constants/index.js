import {
    aisp,
    cddc,
    dso,
    dsta,
    dstalogo,
    gcc,
    github,
    np,
    ensign,
    scs,
    sentinel,
    smp,
    stem,
    wss
} from "../assets";

const heroRoles = [
    "Y1 @ NUS InfoSec",
];

const navLinks = [
    {
        id: "experience",
        title: "./experience",
    },
    {
        id: "project",
        title: "./highlights",
    },
];

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
        title: "Cybersecurity Researcher",
        company_name: "DSO National Laboratories",
        icon: dso,
        iconBg: "#ffffff",
        date: "Apr 2026 - Jul 2026",
        points: [
            "Researched and developed a novel approach to automate large-scale code auditing to ensure the quality and security of software systems.",
        ],
    },
    {
        title: "Cybersecurity Engineer",
        company_name: "Defence Science and Technology Agency",
        icon: dstalogo,
        iconBg: "#ffffff",
        date: "Mar 2025 - Mar 2026",
        points: [
            "Developed a full-stack malware analysis pipeline using `Vue.js`, `Python`, `Docker`, and Kong API Gateway, enabling automated submission, orchestration, and reporting of malware analysis workflows.",
            "Engineered and maintained malware unpacking, deobfuscation, and decompilation tools, reducing manual analysis time by over **10x**"
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
            "CGPA: **4.0/4.0** (Top in cohort)",
            "Awards: CSIT Gold Medal & Prize, Group-IB Prize",
            "Scholarship: DSTA Polytechnic Digital Scholar",
            "Leadership: President, NullSec: Led CTFs, cybersecurity workshops, and YCEP in collaboration with CSA.",
            "Competitions: WorldSkills Singapore 2025 — **3rd**; CDDC 2024 — **3rd**; GreyCTF 2025 — **6th**",
            "Represented Singapore at the [Global Cybersecurity Camp 2025](https://blog.kairostay.com/posts/gcc-2025/), winning the \"Best Project\" award"
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
];

const cves = [
    {
        id: "CVE-2026-59834",
        product: "SiYuan",
        severity: "High",
        cvss: "7.5",
        title: "SQL injection in the publish service",
        description:
            "Unauthenticated visitors to the publish service can read hidden note content via UNION-based SQL injection in path handling.",
        link: "https://github.com/siyuan-note/siyuan/security/advisories/GHSA-h89q-4j2h-7h88#advisory-comment-245307",
    },
    {
        id: "CVE-2026-58412",
        product: "Filecoin Pin",
        severity: "High",
        cvss: "8.2",
        title: "Fork bypass in privileged GitHub Actions workflow",
        description:
            "The upload workflow fails to detect fork pull requests triggered via workflow_run, letting external contributors publish artifacts through the maintainers' Filecoin wallet.",
        link: "https://github.com/filecoin-project/filecoin-pin/security/advisories/GHSA-4rpx-vcp4-863j",
    },
    {
        id: "CVE-2026-55679",
        product: "WeGIA",
        severity: "Medium",
        cvss: "6.5",
        title: "Arbitrary PHP Code Injection",
        description:
            "The pre-configuration installer endpoint allows OS command execution, arbitrary PHP code injection, and SQL injection before any authentication exists.",
        link: "https://github.com/labredescefetrj/wegia/security/advisories/GHSA-wm6j-4rfm-399q#advisory-comment-233031",
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
    navLinks,
    heroRoles,
    list,
    experiences,
    awards,
    cves,
    profiles,
};
