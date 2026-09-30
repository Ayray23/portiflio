import { Download, Mail, Phone, MapPin, Github, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  const printCV = () => window.print();

  return (
    <main className="min-h-screen bg-background py-8 md:py-12">
      <div className="print-hidden container mx-auto px-4 max-w-4xl flex justify-between items-center mb-6">
        <a href="/" className="font-bold text-xl">Ray<span className="text-accent">echoz</span></a>
        <Button onClick={printCV}><Download className="mr-2 w-4 h-4" /> Download / Save as PDF</Button>
      </div>

      <article className="cv-paper bg-card text-card-foreground max-w-4xl mx-auto p-7 md:p-12 border border-border shadow-xl">
        <header className="border-b border-border pb-6 mb-7">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Raymond Adebisi</h1>
          <p className="text-xl font-semibold text-primary mt-2">Full-Stack Web & Mobile Developer</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-muted-foreground">
            <span><Mail className="inline w-4 h-4 mr-1" />adebisiraymond16@gmail.com</span>
            <span><Phone className="inline w-4 h-4 mr-1" />+234 813 467 3262</span>
            <span><MapPin className="inline w-4 h-4 mr-1" />Nigeria • Remote</span>
            <span><Github className="inline w-4 h-4 mr-1" />github.com/Ayray23</span>
          </div>
        </header>

        <section className="mb-7">
          <h2 className="cv-heading">Professional Summary</h2>
          <p className="text-sm leading-7 text-muted-foreground">Software Engineering graduate and Full-Stack Web & Mobile Developer experienced in building responsive web applications, cross-platform mobile apps, dashboards, marketplaces, and database-backed management systems.</p>
        </section>

        <section className="mb-7">
          <h2 className="cv-heading">Core Skills</h2>
          <p className="text-sm leading-7 text-muted-foreground">React.js, Next.js, Vite, JavaScript, TypeScript, Tailwind CSS, Flutter, Dart, Firebase, Supabase, REST APIs, responsive UI development, authentication, database integration, debugging, deployment.</p>
        </section>

        <section className="mb-7">
          <h2 className="cv-heading">Selected Projects</h2>
          <div className="space-y-5 text-sm">
            <div><h3 className="font-bold">CampusMart — Next.js / Supabase</h3><p className="text-muted-foreground">Student marketplace with authentication, listings, favorites, profiles, sold items, and storage.</p></div>
            <div><h3 className="font-bold">CBT App — React / Firebase</h3><p className="text-muted-foreground">Computer-based testing platform with exam management, question workflows, student submissions, and results.</p></div>
            <div><h3 className="font-bold">REMT — React / Firebase</h3><p className="text-muted-foreground">Requirements management platform with traceability, analytics, collaboration, version history, and AI-assisted workflows.</p></div>
            <div><h3 className="font-bold">SwiftCart — React / Firebase</h3><p className="text-muted-foreground">Inventory, role management, dashboard, and POS/checkout system for retail operations.</p></div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-7">
          <div><h2 className="cv-heading">Experience</h2><div className="space-y-3 text-sm text-muted-foreground"><p><strong className="text-foreground">Hibertech Solution and Programming Consult</strong><br />Mobile App Developer</p><p><strong className="text-foreground">Thynk Unlimited</strong><br />Frontend Developer</p><p><strong className="text-foreground">Tripledots Technologies</strong><br />SIWES / Internship Frontend Developer & Tutor</p></div></div>
          <div><h2 className="cv-heading">Education</h2><p className="text-sm text-muted-foreground"><strong className="text-foreground">Bachelor of Science — Software Engineering</strong><br />Software Engineering graduate</p></div>
        </section>
      </article>
    </main>
  );
};

export default CV;
