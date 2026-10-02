import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const projects: Record<string, {
  title: string; category: string; stack: string; image: string; live?: string; repo: string;
  summary: string; problem: string; solution: string; highlights: string[];
}> = {
  campusmart: {
    title: "CampusMart", category: "Marketplace", stack: "Next.js • Supabase • Google Auth", image: "/11.png",
    live: "https://campus-mart-v10.vercel.app/", repo: "https://github.com/Ayray23/Student-to-student-marketplace",
    summary: "A student-focused marketplace for discovering, listing, saving, and managing products.",
    problem: "Students needed a simple way to discover products and manage marketplace activity without relying on scattered social channels.",
    solution: "Built a responsive marketplace experience with authentication, listings, favorites, sold items, profiles, and Supabase storage.",
    highlights: ["Google authentication", "Product listings and profiles", "Favorites and sold-item flows", "Supabase storage and database"],
  },
  cbt: {
    title: "CBT App", category: "EdTech Platform", stack: "React • Vite • Firebase • Capacitor", image: "https://opengraph.githubassets.com/1/Ayray23/Cbt-app",
    live: "https://cbt-app-sooty.vercel.app/", repo: "https://github.com/Ayray23/Cbt-app",
    summary: "A computer-based testing platform for schools to manage exams, questions, submissions, and results.",
    problem: "Schools needed a more structured way to create exams, manage students, run assessments, and review results.",
    solution: "Created role-aware exam workflows with question management, student submissions, automated objective grading, and result views.",
    highlights: ["Exam and question management", "Student assessment flow", "Automated MCQ grading", "Admin and result workflows"],
  },
  remt: {
    title: "REMT", category: "SaaS / Project Management", stack: "React • Vite • Firebase • Express", image: "/1.png",
    live: "https://remt-60ae7.web.app/", repo: "https://github.com/Ayray23/Requirement-Management-tool",
    summary: "A requirements elicitation and management platform built around analyst workflows and traceability.",
    problem: "Requirements can become difficult to organize, track, validate, and collaborate on as projects grow.",
    solution: "Built structured requirement workflows with dashboards, analytics, collaboration, traceability, version history, and an AI-assisted workbench.",
    highlights: ["Requirements workflow", "Traceability and version history", "Analytics and dashboards", "AI-assisted workbench"],
  },
  swiftcart: {
    title: "SwiftCart", category: "Business Management", stack: "React • Vite • Firebase • POS", image: "/33.png",
    live: "https://stockpro-six.vercel.app/", repo: "https://github.com/Ayray23/stockpro",
    summary: "A retail management system for inventory, products, roles, dashboards, and checkout operations.",
    problem: "Small retail operations need simple tools to keep product, stock, staff, and sales workflows organized.",
    solution: "Built a practical management interface with role-based workflows, inventory operations, dashboard insights, and checkout.",
    highlights: ["Inventory management", "Role-based access", "Dashboard insights", "POS / checkout workflow"],
  },
  lms: {
    title: "LearnGrid LMS", category: "Education", stack: "React • Vite • Tailwind • Firebase", image: "https://opengraph.githubassets.com/1/Ayray23/lms-system",
    repo: "https://github.com/Ayray23/lms-system",
    summary: "A learning management platform concept for students, lecturers, and administrators.",
    problem: "Education teams need one place for learning workflows, course information, and role-specific experiences.",
    solution: "Developed a responsive LMS foundation with separate student, lecturer, and administrator experiences and collaborative learning features.",
    highlights: ["Student and lecturer experiences", "Admin workflows", "Responsive learning UI", "Firebase-backed architecture"],
  },
  scms: {
    title: "Student Complaint Management System", category: "Campus Software", stack: "React • Vite • Tailwind • Firebase", image: "https://opengraph.githubassets.com/1/Ayray23/SCMS",
    live: "https://scms-seven-nu.vercel.app/", repo: "https://github.com/Ayray23/SCMS",
    summary: "A structured complaint platform connecting students with administrative workflows.",
    problem: "Student complaints can be difficult to route, track, and manage when handled through informal channels.",
    solution: "Built authentication and complaint workflows with faculty and department structure for a more organized process.",
    highlights: ["Student authentication", "Complaint submission flow", "Faculty and department structure", "Admin management workflow"],
  },
};

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const project = slug ? projects[slug] : undefined;

  if (!project) {
    return (
      <main className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Project not found</h1>
          <Link to="/#portfolio" className="text-primary font-semibold">Back to portfolio</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <Link to="/#portfolio" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-10 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to projects
          </Link>

          <div className="grid lg:grid-cols-[1.15fr_.85fr] gap-10 items-center mb-14">
            <div>
              <p className="text-accent font-semibold uppercase tracking-[0.18em] text-sm mb-4">{project.category}</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5">{project.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.split(" • ").map((item) => (
                  <span key={item} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">{item}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.live && <Button asChild><a href={project.live} target="_blank" rel="noopener noreferrer">View live project <ExternalLink className="ml-2 w-4 h-4" /></a></Button>}
                <Button asChild variant="outline"><a href={project.repo} target="_blank" rel="noopener noreferrer"><Github className="mr-2 w-4 h-4" /> View source</a></Button>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-border shadow-2xl bg-secondary">
              <img src={project.image} alt={`${project.title} preview`} className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <section className="rounded-2xl border border-border bg-card p-7">
              <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">The challenge</p>
              <h2 className="text-2xl font-bold mb-3">What needed solving</h2>
              <p className="text-muted-foreground leading-relaxed">{project.problem}</p>
            </section>
            <section className="rounded-2xl border border-border bg-card p-7">
              <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">The approach</p>
              <h2 className="text-2xl font-bold mb-3">How it was built</h2>
              <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
            </section>
          </div>

          <section className="rounded-2xl border border-border bg-card p-7 md:p-9 mb-10">
            <p className="text-accent font-semibold uppercase tracking-widest text-xs mb-3">Highlights</p>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </section>

          <div className="rounded-2xl bg-foreground text-background p-8 md:p-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Need a product like this?</h2>
            <p className="text-background/65 mb-6">Tell me what you are trying to build and I can help turn the requirements into a working product.</p>
            <Button asChild size="lg" variant="secondary"><Link to="/#contact">Start a project</Link></Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectCaseStudy;
