import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen mb:pt-0 mb-4 flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-foreground"
    >
      <div className="absolute inset-0 z-0">
        <img
          src="/bg-hero.jpg" 
          alt="background"
          className="w-full h-full object-cover opacity-40"
        />
      </div>
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-foreground rounded-full filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container md:pt-4 mt-6 mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6">
            Hello, I'm <span className="text-accent">RAYMOND</span>
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Creative Developer & Designer
          </p>
          <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            Building elegant web and mobile apps with modern technologies, crafting experiences that are simple, intuitive, and visually striking.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8 shadow-lg hover:shadow-xl transition-all">
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary shadow-lg">
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <a href="#about" className="flex flex-col items-center text-primary-foreground/70 hover:text-primary-foreground transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-6 h-6" />
        </a>
      </div>

    </section>
  );
};

export default Hero;
