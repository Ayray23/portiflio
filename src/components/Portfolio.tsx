import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "CampusMart",
      category: "Marketplace",
      stack: "Next.js • Supabase • Google Auth",
      description: "A student marketplace for discovering products, managing listings, saving favorites, viewing sold items, and managing profiles.",
      image: "/11.png",
      link: "https://campus-mart-v10.vercel.app/",
      repo: "https://github.com/Ayray23/Student-to-student-marketplace",
      featured: true,
    },
    {
      title: "CBT App",
      category: "EdTech Platform",
      stack: "React • Vite • Firebase • Capacitor",
      description: "A computer-based testing platform with exam creation, publishing, student submissions, automated MCQ grading, and result management.",
      image: "https://opengraph.githubassets.com/1/Ayray23/Cbt-app",
      link: "https://cbt-app-sooty.vercel.app/",
      repo: "https://github.com/Ayray23/Cbt-app",
      featured: true,
    },
    {
      title: "REMT",
      category: "SaaS / Project Management",
      stack: "React • Vite • Firebase • Express",
      description: "A requirements elicitation and management platform with dashboards, requirement workflows, analytics, collaboration, traceability, and AI-assisted workbench features.",
      image: "/1.png",
      link: "https://remt-60ae7.web.app/",
      repo: "https://github.com/Ayray23/Requirement-Management-tool",
      featured: true,
    },
    {
      title: "SwiftCart",
      category: "Business Management",
      stack: "React • Vite • Firebase • POS",
      description: "A retail management system for products, inventory, user roles, dashboard insights, and checkout operations.",
      image: "/33.png",
      link: "https://stockpro-six.vercel.app/",
      repo: "https://github.com/Ayray23/stockpro",
      featured: true,
    },
    {
      title: "LearnGrid LMS",
      category: "Education",
      stack: "React • Vite • Tailwind • Firebase",
      description: "A learning management platform concept for students, lecturers, and administrators, including course workflows and collaborative learning features.",
      image: "https://opengraph.githubassets.com/1/Ayray23/LearnGrid--lms-system",
      link: "https://github.com/Ayray23/LearnGrid--lms-system",
      repo: "https://github.com/Ayray23/LearnGrid--lms-system",
    },
    {
      title: "Student Complaint Management System",
      category: "Civic / Campus Software",
      stack: "React • Vite • Tailwind • Firebase",
      description: "A structured complaint platform for students and administrators with authentication, faculty and department management, and complaint workflows.",
      image: "https://opengraph.githubassets.com/1/Ayray23/SCMS",
      link: "https://github.com/Ayray23/SCMS",
      repo: "https://github.com/Ayray23/SCMS",
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
            <div className="max-w-3xl">
              <p className="text-accent font-semibold mb-3 uppercase tracking-[0.18em] text-sm">Selected work</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">Real products. Real workflows. <span className="text-gradient">Real code.</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                A focused selection of applications built around marketplaces, education, business operations, and project workflows.
              </p>
            </div>
            <a href="https://github.com/Ayray23?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold hover:text-accent transition-colors shrink-0">
              Explore GitHub <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className={`group overflow-hidden border-border/60 bg-card/70 backdrop-blur-sm hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl transition-all duration-300 ${project.featured ? "lg:first:col-span-2" : ""}`}>
                <div className="relative h-56 overflow-hidden bg-secondary">
                  <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  {project.featured && (
                    <span className="absolute top-4 left-4 rounded-full bg-background/85 backdrop-blur px-3 py-1.5 text-xs font-semibold">
                      Featured
                    </span>
                  )}
                  <span className="absolute bottom-4 left-4 rounded-full bg-black/55 backdrop-blur px-3 py-1.5 text-xs font-medium text-white">
                    {project.category}
                  </span>
                </div>

                <CardContent className="p-6">
                  <div className="text-xs text-accent font-semibold mb-2">{project.stack}</div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed min-h-[72px]">{project.description}</p>

                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity">
                      {project.link.startsWith("http") && project.link.includes("github.com") ? "View Code" : "View Project"}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code`} className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-secondary transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="font-semibold text-lg">Need something similar for your business?</p>
              <p className="text-muted-foreground text-sm mt-1">Tell me what you need built and I’ll help turn the idea into a working product.</p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 font-semibold whitespace-nowrap">
              Start a project <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
