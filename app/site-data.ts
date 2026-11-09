export const profile = {
  name: "Win Htoo Naing",
  shortName: "WHN",
  title: "Full-Stack Developer · Frontend Focus",
  location: "Taungoo, Myanmar",
  availability: "Frontend team · Origin Business Solutions",
  intro:
    "I’m a full-stack developer with a strong focus on frontend engineering. I build responsive, accessible interfaces and bring the backend experience to connect them to reliable application logic and data.",
  heroDescription:
    "I build across the stack, with a particular interest in the frontend: turning product ideas into clear, responsive interfaces, then connecting them to the systems behind them.",
  about: [
    "I’m Win Htoo Naing, a full-stack developer and Computer Technology graduate from the University of Computer Studies, Taungoo. I’m most at home building frontend experiences—shaping interfaces that feel clear, responsive, and considered on every screen.",
    "I work with the frontend team at Origin Business Solutions. My projects also take me across the stack, using technologies such as React, Next.js, Node.js, Laravel, and React Native to build complete web and mobile applications.",
  ],
};

export const highlights = [
  { value: "Frontend first", label: "My development focus" },
  { value: "Full-stack", label: "How I build products" },
  { value: "Origin Business Solutions", label: "Current team" },
];

export const services = [
  {
    title: "Frontend engineering",
    description:
      "I build responsive interfaces with React and Next.js, focusing on clear structure, reusable components, accessibility, and the details that make products easy to use.",
  },
  {
    title: "UI implementation",
    description:
      "I translate product requirements and visual designs into consistent interfaces, thoughtful interactions, and reusable UI patterns.",
  },
  {
    title: "Full-stack development",
    description:
      "I connect frontend experiences to APIs, application logic, and databases to help deliver complete, maintainable products.",
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
    description: "Building reusable, interactive interfaces with components and state",
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
    description: "Building full-stack web applications with React and the App Router",
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
    description: "Exploring a progressive framework for building web interfaces",
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
    description: "Creating cross-platform mobile experiences with React",
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
    description: "Building server-side application logic and APIs",
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
    description: "Creating API routes and web applications with Node.js",
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
    description: "Building server-rendered applications and APIs with PHP",
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
    description: "Writing typed JavaScript across frontend and backend projects",
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
    description: "Modeling and querying application data in document databases",
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
    description: "Working with relational data and SQL-backed applications",
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
    description: "Using hosted databases and backend services in applications",
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
    description: "Working with type-safe database access in TypeScript",
    level: "Strong",
    levelTone: "strong",
    proficiency: 75,
    years: "1+ years",
    projects: "Personal projects",
    icon: "database",
  },
  {
    name: "Drizzle ORM",
    category: "Database",
    description: "Querying SQL databases from TypeScript applications",
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
    description: "Deploying and maintaining web projects with Vercel",
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
    description: "Managing code and collaborating with Git and GitHub",
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
    description: "Building responsive interfaces with utility-first CSS",
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
    description: "Communicating clearly and collaborating with a team",
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
    period: "Current",
    role: "Frontend Developer · Origin Business Solutions",
    details:
      "Part of the frontend team, contributing to web interface development and collaborating on product work.",
  },
  {
    period: "Education",
    role: "Computer Technology · University of Computer Studies, Taungoo",
    details:
      "Graduated in Computer Technology, developing a foundation in software development and technical problem solving.",
  },
  {
    period: "Independent work",
    role: "Web & mobile development",
    details:
      "Built web and mobile projects with React, Next.js, Node.js, Laravel, and React Native, taking ideas from interface through backend implementation.",
  },
];

export const projects = [
  {
    title: "Supermarket POS System",
    description:
      "A point-of-sale and retail management app for handling products, inventory, cashier workflows, and sales in one dashboard.",
    stack: ["Next.js", "Tailwind CSS", "Shadcn UI", "Drizzle ORM", "NeonDB"],
    image: "/projects/supermarket.png",
    imageAlt: "Preview card for Supermarket POS System",
    githubUrl: "https://github.com/WinHtooNaing/supermarket-system",
    liveUrl: "https://supermarket-system-7b8m.vercel.app",
  },
  {
    title: "Market.io",
    description:
      "A MERN-stack business platform that brings authentication, analytics, and day-to-day workflows into a single dashboard.",
    stack: ["MongoDB", "Express", "React", "Node.js", "Cloudinary"],
    image: "/projects/mern.png",
    imageAlt: "Preview card for Market.io business platform",
    githubUrl: "https://github.com/WinHtooNaing/market-place",
    liveUrl: "https://marketio-lilac.vercel.app/",
  },
  {
    title: "FotMob Blog",
    description:
      "A blog platform with authentication and image uploads, designed for a responsive writing and reading experience.",
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
      "A campus voting app built with React Native and Supabase, with sign-in and voting results.",
    stack: ["React Native", "Supabase"],
    image: "/projects/react-native.png",
    imageAlt: "Preview card for UCSTGO voting application",
    githubUrl: "https://github.com/WinHtooNaing/UCSTGO-Evote",
    liveUrl: "https://github.com/WinHtooNaing/UCSTGO-Evote",
  },
  {
    title: "Restaurant Management System",
    description:
      "A restaurant management app with admin, chef, and waiter workflows for managing menus and handling orders.",
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
    note: "For professional opportunities, project inquiries, and collaboration.",
  },
  {
    label: "GitHub",
    value: "github.com/winhtoonaing",
    href: "https://github.com/winhtoonaing",
    note: "Browse my code, projects, and experiments.",
  },
  {
    label: "LinkedIn",
    value: "win-htoo-naing",
    href: "https://www.linkedin.com/in/win-htoo-naing-51bb79275/",
    note: "Connect with me and view my professional background.",
  },
];
