import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-foreground">
      <div className="absolute inset-0 z-0">
        <img src="/bg-hero.jpg" alt="" className="w-full h-full object-cover opacity-35" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary/65 to-foreground/95" />
      </div>

      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-2 text-sm text-primary-foreground/90 mb-7 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-accent" />
            Available for freelance projects & remote opportunities
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-primary-foreground mb-6">
            I build digital products that{" "}
            <span className="text-accent">help businesses grow.</span>
          </h1>

          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 font-medium">
            Raymond Adebisi — Full-Stack Web & Mobile Developer
          </p>

          <p className="text-lg md:text-xl text-primary-foreground/75 mb-10 max-w-3xl mx-auto leading-relaxed">
            I design and develop responsive websites, web apps, mobile apps, dashboards,
            and custom business systems with React, Next.js, Flutter, Firebase, and Supabase.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="text-lg px-8 shadow-xl">
              <a href="#portfolio">
                View My Work <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground/60 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <a href="#contact">Start a Project</a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="text-lg px-8 text-primary-foreground hover:bg-primary-foreground/10">
              <a href="https://github.com/Ayray23" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 w-5 h-5" /> GitHub
              </a>
            </Button>
          </div>

          <div className="mt-14 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-primary-foreground/65">
            <span>React.js</span>
            <span>Next.js</span>
            <span>Flutter</span>
            <span>Firebase</span>
            <span>Supabase</span>
            <span>Tailwind CSS</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors">
          Explore
        </a>
      </div>
    </section>
  );
};

export default Hero;
