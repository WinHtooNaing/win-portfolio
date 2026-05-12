export const profile = {
  name: "Win Htoo Naing",
  shortName: "WHN",
  title: "Portfolio Website",
  location: "Taungoo, Myanmar",
  availability: "Open to internships and junior roles",
  intro:
    "I build modern web and mobile experiences with a strong focus on clean UI, practical backend logic, and product-minded execution.",
  heroDescription: "Full-Stack Developer | MERN Stack , Next.js and Laravel.",
  about: [
    "Hello, I’m Win Htoo Naing, a final-year Computer Technology (CT) student and passionate full-stack developer. I specialize in MERN Stack, Next.js, Laravel, and React Native development. I enjoy building modern web and mobile applications and continuously learning new technologies to improve my skills and create impactful digital solutions.",
  ],
};

export const highlights = [
  { value: "3+", label: "Production-style projects" },
  { value: "10+", label: "Core tools in daily workflow" },
  { value: "99%", label: "Focus on responsive UI" },
];

export const services = [
  {
    title: "Frontend Development",
    description:
      "Modern and responsive interfaces built with React and Next.js.",
  },
  {
    title: "Full-Stack Development",
    description: "Complete web applications from database to deployment.",
  },
  {
    title: "API Development",
    description:
      "RESTful APIs with Laravel and Node.js for scalable applications.",
  },
];

// export const skills = [
//   "React.js",
//   "Next.js",
//   "Node.js",
//   "Express.js",
//   "Laravel",
//   "MongoDB",
//   "PostgreSQL",
//   "React Native",
//   "Supabase",
//   "Tailwind CSS",
//   "Git & GitHub",
//   "Drizzle ORM",
//   "Prisma ORM",
// ];
export const skillCategories = [
  "All",
  "Frontend",
  "Backend",
  "Database",
  "DevOps",
  "Tools",
  "Soft Skills",
] as const;

export type SkillCategory = (typeof skillCategories)[number];

export type SkillItem = {
  name: string;
  category: SkillCategory;
  description: string;
  level: string;
  levelTone: "expert" | "advanced" | "strong";
  proficiency: number;
  years: string;
  projects: string;
  icon: "react" | "next" | "server" | "database" | "cloud" | "tool" | "soft";
};

export const skillItems: SkillItem[] = [
  {
    name: "React",
    category: "Frontend",
    description: "Component-based UI library",
    level: "Expert",
    levelTone: "expert",
    proficiency: 90,
    years: "3+ years",
    projects: "10+ projects",
    icon: "react",
  },
  {
    name: "Next.js",
    category: "Frontend",
    description: "App Router and modern React web apps",
    level: "Expert",
    levelTone: "expert",
    proficiency: 90,
    years: "2+ years",
    projects: "10+ projects",
    icon: "next",
  },
  {
    name: "Vue.js",
    category: "Frontend",
    description: "Progressive JavaScript framework",
    level: "Strong",
    levelTone: "strong",
    proficiency: 70,
    years: "Currently learning",
    projects: "Personal projects",
    icon: "server",
  },
  {
    name: "React Native",
    category: "Frontend",
    description: "Cross-platform mobile apps with React",
    level: "Strong",
    levelTone: "strong",
    proficiency: 70,
    years: "1+ years",
    projects: "3+ projects",
    icon: "react",
  },
  {
    name: "Node.js",
    category: "Backend",
    description: "Backend logic, APIs, and server-side features",
    level: "Advanced",
    levelTone: "advanced",
    proficiency: 85,
    years: "3+ years",
    projects: "5+ projects",
    icon: "server",
  },
  {
    name: "Express.js",
    category: "Backend",
    description: "Web framework for Node.js applications",
    level: "Advanced",
    levelTone: "advanced",
    proficiency: 85,
    years: "3+ years",
    projects: "5+ projects",
    icon: "server",
  },
  {
    name: "Laravel",
    category: "Backend",
    description: "Structured PHP backend development",
    level: "Advanced",
    levelTone: "advanced",
    proficiency: 80,
    years: "1+ years",
    projects: "3+ projects",
    icon: "server",
  },
  {
    name: "TypeScript",
    category: "Tools",
    description: "Typed JavaScript for scalable applications",
    level: "Advanced",
    levelTone: "advanced",
    proficiency: 80,
    years: "2+ years",
    projects: "10+ projects",
    icon: "tool",
  },
  {
    name: "MongoDB",
    category: "Database",
    description: "Document database for MERN applications",
    level: "Advanced",
    levelTone: "advanced",
    proficiency: 80,
    years: "3+ years",
    projects: "10+ projects",
    icon: "database",
  },
  {
    name: "PostgreSQL",
    category: "Database",
    description: "Relational data modeling and querying",
    level: "Strong",
    levelTone: "strong",
    proficiency: 70,
    years: "1+ years",
    projects: "2+ projects",
    icon: "database",
  },
  {
    name: "Supabase",
    category: "Database",
    description: "Realtime backend and database workflows",
    level: "Strong",
    levelTone: "strong",
    proficiency: 70,
    years: "1+ years",
    projects: "2+ projects",
    icon: "database",
  },
  {
    name: "Prisma",
    category: "Database",
    description: "Modern TypeScript ORM for scalable applications",
    level: "Strong",
    levelTone: "strong",
    proficiency: 75,
    years: "1+ years",
    projects: "+ projects",
    icon: "database",
  },
  {
    name: "Drizzle ORM",
    category: "Database",
    description: "Lightweight and type-safe SQL ORM for TypeScript",
    level: "Advanced",
    levelTone: "advanced",
    proficiency: 80,
    years: "1+ years",
    projects: "Personal projects",
    icon: "database",
  },
  {
    name: "Deployment",
    category: "DevOps",
    description: "Vercel, hosting, and project shipping workflow",
    level: "Strong",
    levelTone: "strong",
    proficiency: 75,
    years: "2+ years",
    projects: "10+ projects",
    icon: "cloud",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    description: "Version control and collaboration workflow",
    level: "Advanced",
    levelTone: "advanced",
    proficiency: 86,
    years: "3+ years",
    projects: "20+ repos",
    icon: "tool",
  },
  {
    name: "Tailwind CSS",
    category: "Tools",
    description: "Utility-first styling for polished interfaces",
    level: "Advanced",
    levelTone: "advanced",
    proficiency: 90,
    years: "3+ years",
    projects: "20+ projects",
    icon: "tool",
  },
  {
    name: "Communication",
    category: "Soft Skills",
    description: "Team communication and clear project updates",
    level: "Strong",
    levelTone: "strong",
    proficiency: 75,
    years: "Ongoing",
    projects: "Team-based work",
    icon: "soft",
  },
];

export const skills = skillItems.map((skill) => skill.name);

export const experience = [
  {
    period: "Final Year",
    role: "Computer Technology Student",
    details:
      "Final-year Computer Technology (CT) student at University of Computer Studies (Taungoo), passionate about modern web and mobile development.",
  },
  {
    period: "Development Skills",
    role: "MERN Stack & Next.js Developer",
    details:
      "Building full-stack web applications using MongoDB, Express.js, React, Node.js, and Next.js with focus on scalable architecture and clean UI implementation.",
  },
  {
    period: "Backend & API Development",
    role: "Laravel Developer",
    details:
      "Developing RESTful APIs, authentication systems, and backend services using Laravel for modern web and mobile applications.",
  },
  {
    period: "Currently Learning",
    role: "React Native & Vue Developer",
    details:
      "Currently learning React Native and Vue.js to expand skills in cross-platform mobile development and modern frontend ecosystems.",
  },
];

export const projects = [
  {
    title: "Market.io",
    description:
      "A MERN business platform with authentication, analytics, role-aware dashboards, and practical operations workflows.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
    image: "/projects/mern.png",
    imageAlt: "Preview card for Market.io business platform",
    githubUrl: "https://github.com/WinHtooNaing/market-place",
    liveUrl: "https://marketio-lilac.vercel.app/",
  },
  {
    title: "FotMob Blog",
    description:
      "A modern Next.js blog platform with authentication, uploads, and a polished publishing-oriented UI.",
    stack: [
      "Next.js",
      "Tailwind",
      "Drizzle",
      "Shadcn",
      "Auth.js",
      "Uploadthing",
    ],
    image: "/projects/blog.png",
    imageAlt: "Preview card for FotMob Blog platform",
    githubUrl: "https://github.com/WinHtooNaing/fot-blog",
    liveUrl: "https://fot-blog.vercel.app/",
  },
  {
    title: "UCSTGO Voting App",
    description:
      "A secure voting experience with authentication, role-based access, and real-time result visibility for campus use.",
    stack: ["React Native", "Supabase"],
    image: "/projects/react-native.png",
    imageAlt: "Preview card for UCSTGO voting application",
    githubUrl: "https://github.com/WinHtooNaing/UCSTGO-Evote",
    liveUrl: "https://github.com/WinHtooNaing/UCSTGO-Evote",
  },
  {
    title: "Restaurant Management System",
    description:
      "A restaurant management system with admin, chef, and waiter roles for handling orders, menu management, and daily restaurant operations efficiently.",
    stack: ["Laravel", "Tailwind CSS", "MySQL", "Laravel Breeze"],
    image: "/projects/resturant.png",
    imageAlt: "Preview card for Restaurant Management System",
    githubUrl: "https://github.com/WinHtooNaing/Restaurant-Management-System",
    liveUrl: "https://github.com/WinHtooNaing/Restaurant-Management-System",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "winhtoonaing2003@gmail.com",
    href: "mailto:winhtoonaing2003@gmail.com",
    note: "Best for project inquiries, internships, and direct collaboration.",
  },
  {
    label: "GitHub",
    value: "github.com/winhtoonaing",
    href: "https://github.com/winhtoonaing",
    note: "Code samples, project history, and hands-on experiments.",
  },
  {
    label: "LinkedIn",
    value: "win-htoo-naing",
    href: "https://www.linkedin.com/in/win-htoo-naing-51bb79275/",
    note: "Professional profile and networking updates.",
  },
];
