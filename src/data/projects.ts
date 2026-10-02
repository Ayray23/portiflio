export type Project = {
  slug: string;
  title: string;
  category: string;
  caseStudyCategory?: string;
  stack: string;
  description: string;
  image: string;
  link?: string;
  repo: string;
  featured?: boolean;
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "campusmart",
    title: "CampusMart",
    category: "Marketplace",
    stack: "Next.js • Supabase • Google Auth",
    description: "Student marketplace with authentication, listings, favorites, sold items, profiles, and storage.",
    image: "/11.png",
    link: "https://campus-mart-v10.vercel.app/",
    repo: "https://github.com/Ayray23/Student-to-student-marketplace",
    featured: true,
    summary: "A student-focused marketplace for discovering, listing, saving, and managing products.",
    problem: "Students needed a simple way to discover products and manage marketplace activity without relying on scattered social channels.",
    solution: "Built a responsive marketplace experience with authentication, listings, favorites, sold items, profiles, and Supabase storage.",
    highlights: ["Google authentication", "Product listings and profiles", "Favorites and sold-item flows", "Supabase storage and database"],
  },
  {
    slug: "cbt",
    title: "CBT App",
    category: "EdTech",
    caseStudyCategory: "EdTech Platform",
    stack: "React • Vite • Firebase • Capacitor",
    description: "Computer-based testing platform for exam creation, student assessments, automated grading, and results.",
    image: "/44.png",
    link: "https://cbt-app-sooty.vercel.app/",
    repo: "https://github.com/Ayray23/Cbt-app",
    featured: true,
    summary: "A computer-based testing platform for schools to manage exams, questions, submissions, and results.",
    problem: "Schools needed a more structured way to create exams, manage students, run assessments, and review results.",
    solution: "Created role-aware exam workflows with question management, student submissions, automated objective grading, and result views.",
    highlights: ["Exam and question management", "Student assessment flow", "Automated MCQ grading", "Admin and result workflows"],
  },
  {
    slug: "remt",
    title: "REMT",
    category: "SaaS",
    caseStudyCategory: "SaaS / Project Management",
    stack: "React • Vite • Firebase • Express",
    description: "Requirements management platform with traceability, analytics, collaboration, version history, and AI-assisted workflows.",
    image: "/1.png",
    link: "https://remt-60ae7.web.app/",
    repo: "https://github.com/Ayray23/Requirement-Management-tool",
    featured: true,
    summary: "A requirements elicitation and management platform built around analyst workflows and traceability.",
    problem: "Requirements can become difficult to organize, track, validate, and collaborate on as projects grow.",
    solution: "Built structured requirement workflows with dashboards, analytics, collaboration, traceability, version history, and an AI-assisted workbench.",
    highlights: ["Requirements workflow", "Traceability and version history", "Analytics and dashboards", "AI-assisted workbench"],
  },
  {
    slug: "swiftcart",
    title: "SwiftCart",
    category: "Business Systems",
    caseStudyCategory: "Business Management",
    stack: "React • Vite • Firebase • POS",
    description: "Retail management system covering inventory, roles, dashboards, and checkout operations.",
    image: "/33.png",
    link: "https://stockpro-six.vercel.app/",
    repo: "https://github.com/Ayray23/stockpro",
    featured: true,
    summary: "A retail management system for inventory, products, roles, dashboards, and checkout operations.",
    problem: "Small retail operations need simple tools to keep product, stock, staff, and sales workflows organized.",
    solution: "Built a practical management interface with role-based workflows, inventory operations, dashboard insights, and checkout.",
    highlights: ["Inventory management", "Role-based access", "Dashboard insights", "POS / checkout workflow"],
  },
  {
    slug: "lms",
    title: "LearnGrid LMS",
    category: "Education",
    stack: "React • Vite • Tailwind • Firebase",
    description: "Learning management platform foundation for students, lecturers, and administrators.",
    image: "https://opengraph.githubassets.com/1/Ayray23/lms-system",
    repo: "https://github.com/Ayray23/lms-system",
    featured: true,
    summary: "A learning management platform concept for students, lecturers, and administrators.",
    problem: "Education teams need one place for learning workflows, course information, and role-specific experiences.",
    solution: "Developed a responsive LMS foundation with separate student, lecturer, and administrator experiences and collaborative learning features.",
    highlights: ["Student and lecturer experiences", "Admin workflows", "Responsive learning UI", "Firebase-backed architecture"],
  },
  {
    slug: "scms",
    title: "Student Complaint Management System",
    category: "Campus Software",
    stack: "React • Vite • Tailwind • Firebase",
    description: "Structured complaint platform with authentication and faculty/department management workflows.",
    image: "https://opengraph.githubassets.com/1/Ayray23/SCMS",
    link: "https://scms-seven-nu.vercel.app/",
    repo: "https://github.com/Ayray23/SCMS",
    featured: true,
    summary: "A structured complaint platform connecting students with administrative workflows.",
    problem: "Student complaints can be difficult to route, track, and manage when handled through informal channels.",
    solution: "Built authentication and complaint workflows with faculty and department structure for a more organized process.",
    highlights: ["Student authentication", "Complaint submission flow", "Faculty and department structure", "Admin management workflow"],
  },
];

export const projectsBySlug = Object.fromEntries(projects.map((project) => [project.slug, project])) as Record<string, Project>;
export const projectCategories = ["All", ...new Set(projects.map((project) => project.category))];