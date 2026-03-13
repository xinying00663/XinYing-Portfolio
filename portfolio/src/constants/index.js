const navLinks = [
  {
    name: "Education",
    link: "#education",
  },
  {
    name: "Work Experience",
    link: "#work-experience",
  },
  {
    name: "Achievement",
    link: "#achievements",
  },
  {
    name: "Extracurricular",
    link: "#extracurricular",
  },
  {
    name: "Projects",
    link: "#work",
  },
  {
    name: "Skills",
    link: "#skills",
  },
];

const words = [
  { text: "Skills", imgPath: "/images/ideas.svg" },
  { text: "Learning", imgPath: "/images/concepts.svg" },
  { text: "Design", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Skills", imgPath: "/images/ideas.svg" },
  { text: "Learning", imgPath: "/images/concepts.svg" },
  { text: "Design", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Projects Built" },
  { value: 3.75, suffix: "/4.0", label: "CGPA at APU" },
  { value: 9, suffix: "As", label: "SPM Result" },
  { value: 2, suffix: "+", label: "Years at APU" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Problem Solving",
    desc: "I break down complex requirements into clear, workable technical solutions.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Team Collaboration",
    desc: "I communicate clearly with teammates and adapt quickly to shared workflows.",
  },
  {
    imgPath: "/images/time.png",
    title: "Continuous Learning",
    desc: "I consistently improve my skills through new projects, practice, and feedback.",
  },
];

const techStackImgs = [
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Java",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "HTML / CSS / JavaScript",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "Python",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "HTML / CSS / JavaScript",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Node / Backend",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Git",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const educationCards = [
  {
    review: "Completed secondary school education, achieving 9As in SPM and developing strong academic foundations.",
    imgPath: "/images/logo-smktbm.jpg",
    logoPath: "/images/logo-smktbm.jpg",
    title: "SMK Taman Bukit Maluri",
    date: "2019 – 2023/24",
    year: "2019 – 2024",
    responsibilities: [
      "Achieved 9As in SPM examinations.",
      "Served as Secretary for Camp Organization in 2022 and 2023.",
      "Developed discipline and time management skills throughout secondary education.",
    ],
  },
  {
    review: "Pursuing a Diploma in ICT specialising in Software Engineering with strong academic performance and active club involvement.",
    imgPath: "/images/logo-apu.png",
    logoPath: "/images/logo-apu.png",
    title: "Diploma in ICT (Software Engineering)",
    date: "May 2024 – May 2026 · Asia Pacific University",
    year: "2024 – 2026",
    responsibilities: [
      "Maintaining a CGPA of 3.75/4.0 as of Semester 4.",
      "Completed projects in Python, Java, HTML/CSS/JS, and MySQL.",
      "Active member of APU Hackthletes Club and APU Google Developer On Campus Club.",
    ],
  },
];

const workExpCards = [
  {
    review: "Built practical business, customer service, and money-handling skills through direct retail sales work.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Fruit Seller (Part-time)",
    date: "Part-time",
    year: "2023 – 2024",
    responsibilities: [
      "Managed daily fruit sales and handled customer transactions.",
      "Developed communication and customer service skills through direct interaction.",
      "Learned practical inventory management and basic money handling.",
    ],
  },
  {
    review: "Developed teamwork, time management, and physical task handling skills in a fast-paced event environment.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Exhibition Assistant (Part-time)",
    date: "Sureworks Exhibition, Midvalley",
    year: "2024",
    responsibilities: [
      "Assisted in dismantling and packing exhibition booths and equipment efficiently.",
      "Worked as part of a team to ensure tasks were completed on time.",
      "Maintained safety and followed all instructions during dismantling activities.",
    ],
  },
  {
    review: "Gained hands-on experience in marketing, admin, and IT support in an educational environment.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Admin Cum Marketing",
    date: "Aug 2025 – Jan 2026 · Northern KL International College",
    year: "2025 – 2026",
    responsibilities: [
      "Contacted prospective students via WhatsApp and phone calls to provide course information and follow up on enquiries.",
      "Designed social media posts and simple promotional materials for college platforms.",
      "Provided basic IT support, including setting up computers and assisting with technical issues.",
    ],
  },
];

const achievementCards = [
  {
    review: "Competed in a cybersecurity CTF challenge, sharpening problem-solving and hands-on vulnerability analysis skills.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "BAT CTF 2024",
    date: "2024",
    year: "2024",
    responsibilities: [
      "Completed cybersecurity challenges in a competitive environment.",
      "Gained hands-on exposure to vulnerability analysis and security concepts.",
      "Developed problem-solving skills under time pressure.",
    ],
  },
  {
    review: "Competed in a digital innovation challenge focused on secure identity systems and collaborative prototyping.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "GODAM LAH 2.0",
    date: "2025",
    year: "2025",
    responsibilities: [
      "Developed skills in secure digital identity system design.",
      "Worked on prototyping and collaborative problem-solving with a team.",
      "Presented solutions and ideas under competition conditions.",
    ],
  },
];

const extraCurricularCards = [
  {
    review: "Handled event planning and committee communication for school camp activities.",
    imgPath: "/images/logo-smktbm.jpg",
    logoPath: "/images/logo-smktbm.jpg",
    title: "Camp Organization",
    date: "Secretary · 2022 & 2023",
    year: "2022 – 2023",
    responsibilities: [
      "Coordinated event planning and prepared all required documentation.",
      "Managed communication between committees during camp operations.",
      "Ensured smooth execution of camp activities across both years.",
    ],
  },
  {
    review: "Led marketing efforts and boosted club visibility through active social media management.",
    imgPath: "/images/logo-hackthletes.png",
    logoPath: "/images/logo-hackthletes.png",
    title: "APU Hackthletes Club",
    date: "Marketing Team Leader · 2025/26",
    year: "2025 – 2026",
    responsibilities: [
      "Led the marketing team and planned promotional campaigns for club events.",
      "Managed the club's social media platforms to increase engagement and visibility.",
      "Coordinated with club leadership on announcements and event promotion.",
    ],
  },
  {
    review: "Supported club administration and communication for the APU Google Developer student community.",
    imgPath: "/images/logo-gdgoc.png",
    logoPath: "/images/logo-gdgoc.png",
    title: "APU Google Dev On Campus Club",
    date: "Secretary · 2025/26",
    year: "2025 – 2026",
    responsibilities: [
      "Managed meeting documentation and maintained official club records.",
      "Assisted in organising developer events and technical workshops.",
      "Communicated key updates between committee members and club members.",
    ],
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  educationCards,
  workExpCards,
  achievementCards,
  extraCurricularCards,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};