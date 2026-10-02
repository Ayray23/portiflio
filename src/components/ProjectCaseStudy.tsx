import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { projectsBySlug } from "@/data/projects";
import { usePageMetadata } from "@/hooks/use-page-metadata";

const ProjectCaseStudy = () => {
  const { slug } = useParams();
  const project = slug ? projectsBySlug[slug] : undefined;
  usePageMetadata({
    title: project ? `${project.title} | Raymond Adebisi` : "Project Not Found | Raymond Adebisi",
    description: project?.summary ?? "The requested project could not be found.",
    path: `/projects/${slug ?? ""}`,
    image: project?.image,
    robots: project ? "index, follow" : "noindex, nofollow",
  });

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
              <p className="text-accent font-semibold uppercase tracking-[0.18em] text-sm mb-4">{project.caseStudyCategory ?? project.category}</p>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-5">{project.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">{project.summary}</p>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.stack.split(" • ").map((item) => (
                  <span key={item} className="rounded-full border border-border bg-card px-3 py-1.5 text-sm">{item}</span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                {project.link && <Button asChild><a href={project.link} target="_blank" rel="noopener noreferrer">View live project <ExternalLink className="ml-2 w-4 h-4" /></a></Button>}
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
