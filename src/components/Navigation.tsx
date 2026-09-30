import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#portfolio", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className={`text-2xl font-black tracking-tight ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
            Ray<span className="text-accent">echoz</span>
          </a>

          <div className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`font-medium transition-colors hover:text-accent ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
                {link.label}
              </a>
            ))}
            <Button asChild size="sm">
              <a href="#contact">Hire Me</a>
            </Button>
          </div>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle navigation">
            {isMobileMenuOpen ? <X className={isScrolled ? "text-foreground" : "text-primary-foreground"} /> : <Menu className={isScrolled ? "text-foreground" : "text-primary-foreground"} />}
          </Button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 py-4 bg-card/95 backdrop-blur rounded-xl shadow-xl border border-border">
            <div className="flex flex-col gap-1 px-4">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-foreground hover:text-accent py-3">
                  {link.label}
                </a>
              ))}
              <Button asChild className="mt-2">
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Hire Me</a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
