import {
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  mongodb,
  git,
  threejs,
  hf,
  holopin,
  school,
  be,
  np,
  scs,
  aisp,
  dsta,
  ductf,
  sentinel,
  bb84,
  blog,
  portfolio,
  nltk,
  malware,
  smp,
  stem,
  rportfolio,
  freelance,
} from "../assets";

const profiles = [
  {
    link: "https://auth.geeksforgeeks.org/user/aarti_rathi",
    icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
  },
  {
    link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
    icon: "https://img.icons8.com/fluency/344/google-cloud.png",
  },
  {
    link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
  },
  {
    link: "https://www.hackerrank.com/_shinchancode",
    icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
  },
  {
    link: "https://dev.to/shinchancode",
    icon: hf,
  },
  {
    link: "https://www.holopin.io/@shinchancode#badges",
    icon: holopin,
  },
];

const achievements = [
  {
    title:
      "8th Position : Selected for the final round of 12th CSI InApp International Student Project awards 2023.",
  },
  {
    title: "Twice State level Table-Tennis Winner (2021 and 2022)",
  },
  {
    title:
      "1st Position : Consecutive four times Winner of UdChalo Scholarship (2019 - 2023)",
  },
  {
    title: "Branch Head of Information Technology Department (2021 - 2022)",
  },
  {
    title:
      "Selected in top 100 candidates for Google Cloud Training among 20k Students.",
  },
  {
    title:
      "Got Education Scholarship Scheme for Army Personnel(ESSA) Scholarship (2015 - 2023)",
  },
  {
    title: "Played Nationals in Throwball for U-14 category. (2015)",
  },
];

const technologies = [
  {
    name: "Python",
    icon: "https://img.icons8.com/color/480/000000/python.png",
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
    name: "Google Cloud",
    icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
  },
  {
    name: "C++ tool",
    icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "MySql",
    icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
  },
];

const list = [
  {
    id: "event",
    title: "Events",
  },
  {
    id: "prg",
    title: "Programming",
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
    source_code_link: "https://github.com/shinchancode/Cryptography",
  },
  {
    name: "DSTA Award Ceremony",
    description:
      "Really honoured to have received the DSTA Scholarship after my first semester. Getting this felt like a big confidence boost for my constant efforts in growing my skills in cybersecurity, and I am stoked to continue honing my skills!",
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
    source_link: "https://github.com/shinchancode/Snake-Yaml-Project",
  },
  {
    name: "Down Under CTF",
    description:
      "This was a two-day CTF that I participated with one of my friends. I managed to explore GSMA's Location API, which allowed me to 'track' a target's location using their phone number, which was really intriguing.",
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
        name: "OSINT",
        color: "pink-text-gradient",
      },
    ],
    image: ductf,
    source_link: "https://github.com/shinchancode/CRUD-Operation",
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
    source_link: "",
  },
];

export const prgProject = [
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
      "This blog is built with Hexo, an SSG. I use it to write about things that interest me (like quantum!), and to track my progress in my cybersecurity journey :D",
    tags: [
      {
        name: "Hexo",
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
    source_link: "",
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
    source_link: "",
  },
];

const experiences = [
  {
    title: "Cybersecurity & Digital Forensics Student",
    company_name: "Ngee Ann Polytechnic",
    icon: np,
    iconBg: "#ffffff",
    date: "Apr 2023 - Present",
    points: [
      "cGPA: 4.00",
      "DSTA Polytechnic Digital Scholar",
      "NullSec Tech Intern EXCO: Led workshop on OSINT; Created crypto, forensics and miscellaneous challenges for interpoly CTF, Lag and Crash.",
      "Participated in various CTFs: Cyber:100, CDDC, GreyCTF, SEETF, AYCEP, and many others. ",
      "Participated in MINDEF's Sentinel Programme, simulating real-world CTI and threat hunting exercises. ",
    ],
  },
  {
    title: "Research Intern",
    company_name: "Science Centre Singapore",
    icon: scs,
    iconBg: "#ffffff",
    date: "Jan 2021 - Feb 2022",
    // link: "",
    points: [
      "Developed methodologies to minimise experimental discrepancies to a 1% error margin. ",
      "Leveraged tools such as LibreCAD, Arduino, and Excel to enhance data analysis efficiency and accuracy. ",
      "Authored a paper, presenting research findings to panel and attendees at the Youth Science Conference. ",
    ],
    // link: "https://",
  },
  {
    title: "Student Researcher",
    company_name: "Commonwealth Secondary School",
    icon: school,
    iconBg: "#FFFFFF",
    date: "Dec 2020 - July 2022",
    // link: "",
    points: [
      "Conducted an independent research project investigating the correlation between the degradability of plastic and its tensile strength.",
      "Leveraged Microsoft Excel to optimize data collection, analysis, and creating visualisations.",
      "Presented research findings to 200+, including school leaders, the student body and the wider public at CWSS events.",
    ],
    // link: "https://",
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
    // link: "https://www.cloudskillsboost.google/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
  },
];

const educations = [
  {
    degree: "Dip",
    branch: "Cybersecurity & Digital Forensics",
    marks: "cGPA: 4.00",
    name: "Ngee Ann Polytechnic",
    year: "2023-Present",
    image: np,
  },
  {
    branch: "O Level",
    marks: "6 Distinctions",
    name: "Commonwealth Secondary School",
    year: "2018-2022",
    image: school,
  },
];

export { list, profiles, technologies, experiences, educations, achievements };
