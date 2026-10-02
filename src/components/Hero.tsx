import { ArrowRight, Github, MessageCircle, Sparkles, ArrowUpRight, Code2, Smartphone, Layers3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => (
  <section id="home" className="hero-showcase relative min-h-[92svh] lg:min-h-screen overflow-hidden text-white">
    <div className="hero-photo absolute inset-0" aria-hidden="true">
      <img src="/raymond-hero.jpg" alt="" className="h-full w-full object-cover object-[center_28%]" />
    </div>
    <div className="hero-shade absolute inset-0" aria-hidden="true" />
    <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
    <div className="hero-orbit hero-orbit-two" aria-hidden="true" />

    <div className="relative z-10 container mx-auto px-4 pt-28 pb-14 md:pt-36 md:pb-20 min-h-[92svh] lg:min-h-screen flex items-center">
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-[1.05fr_.95fr] gap-8 lg:gap-14 items-center">
        <div className="hero-copy max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#111322]/75 px-4 py-2 text-xs sm:text-sm text-white/90 mb-7 backdrop-blur-xl shadow-lg">
            <span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" /><span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" /></span>
            Available for freelance projects & remote roles
          </div>
          <p className="text-cyan-300 font-bold tracking-[0.22em] uppercase text-xs sm:text-sm mb-5">Rayechoz <span className="text-white/40 mx-2">/</span> Raymond Adebisi</p>
          <h1 className="text-[clamp(3.1rem,7.5vw,6.8rem)] font-black tracking-[-0.065em] leading-[.91] mb-7">
            Ideas into<br /><span className="hero-title-accent">digital products.</span>
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-white mb-4">Full-Stack Web & Mobile Developer</p>
          <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-xl mb-8">
            I design and build responsive websites, mobile apps, dashboards, marketplaces, and custom systems that help people get things done.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Button asChild size="lg" className="hero-primary-cta h-12 px-6 text-base font-bold">
              <a href="#portfolio">Explore my work <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button asChild size="lg" className="hero-glass-cta h-12 px-6 text-base">
              <a href="https://wa.me/2348134673262" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> Let's talk</a>
            </Button>
            <a href="/cv" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl px-4 font-semibold text-white/90 hover:text-white hover:bg-white/10 transition-colors">View CV <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>

        <div className="hero-side relative lg:justify-self-end w-full max-w-md lg:max-w-[430px]">
          <div className="hero-side-panel rounded-[2rem] border border-white/20 bg-[#101321]/75 backdrop-blur-xl p-5 sm:p-6 shadow-2xl">
            <div className="flex items-center justify-between gap-3 mb-7">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[.18em] text-white/75"><Sparkles className="h-4 w-4 text-cyan-300" /> What I build</div>
              <span className="text-[10px] rounded-full border border-white/20 px-2.5 py-1 text-white/70">01 — 03</span>
            </div>
            <div className="space-y-3">
              <div className="hero-skill-row"><span className="hero-skill-icon"><Code2 className="h-5 w-5" /></span><span><strong>Web experiences</strong><small>Websites, SaaS & dashboards</small></span><ArrowUpRight className="ml-auto h-4 w-4 text-white/55" /></div>
              <div className="hero-skill-row"><span className="hero-skill-icon"><Smartphone className="h-5 w-5" /></span><span><strong>Mobile applications</strong><small>Cross-platform product builds</small></span><ArrowUpRight className="ml-auto h-4 w-4 text-white/55" /></div>
              <div className="hero-skill-row"><span className="hero-skill-icon"><Layers3 className="h-5 w-5" /></span><span><strong>Business systems</strong><small>Tools shaped around real workflows</small></span><ArrowUpRight className="ml-auto h-4 w-4 text-white/55" /></div>
            </div>
            <div className="mt-6 pt-5 border-t border-white/20 flex items-center justify-between gap-4">
              <div><p className="text-white font-bold text-sm">Let's build something useful.</p><p className="text-white/65 text-xs mt-1">Based in Nigeria · Working worldwide</p></div>
              <a className="hero-round-link" href="https://github.com/Ayray23" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github className="h-5 w-5" /></a>
            </div>
          </div>
          <div className="hero-side-note hidden sm:flex"><span className="h-px w-8 bg-cyan-300" /> From concept to launch</div>
        </div>
      </div>
    </div>
    <a href="#about" className="hero-scroll-hint hidden md:flex" aria-label="Scroll to about section"><span /> Scroll to explore</a>
  </section>
);

export default Hero;
