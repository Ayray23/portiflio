import { ArrowRight, Github, MessageCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-foreground">
      <div className="absolute inset-0 z-0">
        <img src="/bg-hero.jpg" alt="" className="w-full h-full object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground/95 to-primary/35" />
      </div>

      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl" />
      <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 mb-7 backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-accent" />
              Available for freelance projects & remote opportunities
            </div>

            <p className="text-accent font-semibold tracking-[0.2em] uppercase text-sm mb-5">Rayechoz • Raymond Adebisi</p>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-[-0.04em] text-white leading-[0.95] mb-7">
              I build digital products <span className="text-gradient">people can use.</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/85 mb-5 font-medium max-w-3xl">
              Full-Stack Web & Mobile Developer
            </p>

            <p className="text-lg md:text-xl text-white/65 mb-10 max-w-3xl leading-relaxed">
              I build responsive websites, web apps, mobile apps, dashboards, marketplaces, and custom business systems using React, Next.js, Flutter, Firebase, and Supabase.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="text-base px-7 h-12">
                <a href="#portfolio">See selected work <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-base px-7 h-12 bg-white/5 border-white/20 text-white hover:bg-white hover:text-foreground">
                <a href="https://wa.me/2348134673262" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 w-4 h-4" /> Chat on WhatsApp</a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-base px-5 h-12 text-white/80 hover:bg-white/10 hover:text-white">
                <a href="/cv"><span className="mr-2">CV</span> View CV</a>
              </Button>
              <Button asChild size="lg" variant="ghost" className="text-base px-5 h-12 text-white/80 hover:bg-white/10 hover:text-white">
                <a href="https://github.com/Ayray23" target="_blank" rel="noopener noreferrer"><Github className="mr-2 w-4 h-4" /> GitHub</a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
              {["Web Apps", "Mobile Apps", "Business Systems", "Firebase / Supabase"].map((item) => (
                <div key={item} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur px-4 py-3 text-sm text-white/70">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
