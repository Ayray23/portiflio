import { useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const projects = [
  { slug: "campusmart", title: "CampusMart", category: "Marketplace", stack: "Next.js • Supabase", description: "Student marketplace with authentication, listings, favorites, sold items, profiles, and storage.", image: "/11.png", link: "https://campus-mart-v10.vercel.app/", repo: "https://github.com/Ayray23/Student-to-student-marketplace", featured: true },
  { slug: "cbt", title: "CBT App", category: "EdTech", stack: "React • Firebase • Capacitor", description: "Computer-based testing platform for exam creation, student assessments, automated grading, and results.", image: "https://opengraph.githubassets.com/1/Ayray23/Cbt-app", link: "https://cbt-app-sooty.vercel.app/", repo: "https://github.com/Ayray23/Cbt-app", featured: true },
  { slug: "remt", title: "REMT", category: "SaaS", stack: "React • Firebase • Express", description: "Requirements management platform with traceability, analytics, collaboration, version history, and AI-assisted workflows.", image: "/1.png", link: "https://remt-60ae7.web.app/", repo: "https://github.com/Ayray23/Requirement-Management-tool", featured: true },
  { slug: "swiftcart", title: "SwiftCart", category: "Business Systems", stack: "React • Firebase • POS", description: "Retail management system covering inventory, roles, dashboards, and checkout operations.", image: "/33.png", link: "https://stockpro-six.vercel.app/", repo: "https://github.com/Ayray23/stockpro", featured: true },
  { slug: "lms", title: "LearnGrid LMS", category: "Education", stack: "React • Vite • Firebase", description: "Learning management platform foundation for students, lecturers, and administrators.", image: "https://opengraph.githubassets.com/1/Ayray23/lms-system", repo: "https://github.com/Ayray23/lms-system" },
  { slug: "scms", title: "Student Complaint Management", category: "Campus Software", stack: "React • Firebase", description: "Structured complaint platform with authentication and faculty/department management workflows.", image: "https://opengraph.githubassets.com/1/Ayray23/SCMS", repo: "https://github.com/Ayray23/SCMS" },
];

const categories = ["All", "Marketplace", "EdTech", "SaaS", "Business Systems", "Education", "Campus Software"];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const filtered = useMemo(() => active === "All" ? projects : projects.filter((project) => project.category === active), [active]);

  return (
    <section id="portfolio" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="max-w-3xl">
              <p className="text-accent font-semibold mb-3 uppercase tracking-[0.18em] text-sm">Selected work</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">Projects built to solve <span className="text-gradient">real problems.</span></h2>
              <p className="text-lg text-muted-foreground leading-relaxed">Explore products across marketplaces, education, business operations, and custom software.</p>
            </div>
            <a href="https://github.com/Ayray23?tab=repositories" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold hover:text-accent transition-colors shrink-0">Explore GitHub <ArrowUpRight className="w-4 h-4" /></a>
          </div>

          <div className="flex gap-2 overflow-x-auto pb-3 mb-8 scrollbar-hide" role="tablist" aria-label="Filter projects">
            {categories.map((category) => (
              <button key={category} onClick={() => setActive(category)} role="tab" aria-selected={active === category} className={`whitespace-nowrap rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${active === category ? "bg-foreground text-background border-foreground" : "bg-card hover:border-primary/50"}`}>
                {category}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((project) => (
              <article key={project.slug} className="group rounded-2xl border border-border/70 bg-card/70 backdrop-blur-sm overflow-hidden hover:-translate-y-1 hover:border-primary/40 hover:shadow-2xl transition-all duration-300">
                <Link to={`/projects/${project.slug}`} className="block">
                  <div className="relative h-52 overflow-hidden bg-secondary">
                    <img src={project.image} alt={`${project.title} project preview`} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    {project.featured && <span className="absolute top-4 left-4 rounded-full bg-background/85 backdrop-blur px-3 py-1.5 text-xs font-semibold">Featured</span>}
                    <span className="absolute bottom-4 left-4 rounded-full bg-black/55 backdrop-blur px-3 py-1.5 text-xs font-medium text-white">{project.category}</span>
                  </div>
                </Link>
                <CardContent className="p-5 md:p-6">
                  <div className="text-xs text-accent font-semibold mb-2">{project.stack}</div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed min-h-[64px]">{project.description}</p>
                  <div className="flex items-center gap-2 mt-5 pt-5 border-t border-border">
                    <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-4 py-2.5 text-sm font-semibold hover:opacity-90 transition-opacity">Case study <ArrowUpRight className="w-4 h-4" /></Link>
                    {project.link && <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} live project`} className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-secondary transition-colors"><ExternalLink className="w-4 h-4" /></a>}
                    <a href={project.repo} target="_blank" rel="noopener noreferrer" aria-label={`View ${project.title} source code`} className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-border hover:bg-secondary transition-colors"><Github className="w-4 h-4" /></a>
                  </div>
                </CardContent>
              </article>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-12">
            {[
              ["6", "Featured projects"],
              ["4", "Live demos"],
              ["6", "Public codebases"],
              ["Remote", "Available worldwide"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-border bg-card p-5">
                <div className="text-2xl md:text-3xl font-black">{value}</div>
                <div className="text-sm text-muted-foreground mt-1">{label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-5">
            <div>
              <p className="font-semibold text-lg">Need something similar for your business?</p>
              <p className="text-muted-foreground text-sm mt-1">Tell me what you need built, improved, or fixed.</p>
            </div>
            <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground px-5 py-3 font-semibold whitespace-nowrap">Start a project <ArrowUpRight className="w-4 h-4" /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
