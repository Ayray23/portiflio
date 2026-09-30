import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/90 backdrop-blur-xl border-b border-border/60 shadow-sm py-3" : "bg-transparent py-4"}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#home" className={`text-xl md:text-2xl font-black tracking-tight ${isScrolled ? "text-foreground" : "text-white"}`}>Ray<span className="text-accent">echoz</span></a>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={`px-3 py-2 rounded-lg font-medium text-sm transition-colors hover:bg-foreground/5 hover:text-accent ${isScrolled ? "text-foreground" : "text-white/85"}`}>{link.label}</a>
            ))}
            <ThemeToggle />
            <Button asChild size="sm" className="ml-2"><a href="#contact">Hire Me</a></Button>
          </div>

          <div className="md:hidden flex items-center gap-1">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle navigation">
              {isMobileMenuOpen ? <X className={isScrolled ? "text-foreground" : "text-white"} /> : <Menu className={isScrolled ? "text-foreground" : "text-white"} />}
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-3 p-3 bg-background/95 backdrop-blur-xl rounded-2xl shadow-xl border border-border">
            <div className="flex flex-col">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="font-medium text-foreground hover:text-accent hover:bg-secondary rounded-xl px-4 py-3">{link.label}</a>
              ))}
              <Button asChild className="mt-2"><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Hire Me</a></Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
