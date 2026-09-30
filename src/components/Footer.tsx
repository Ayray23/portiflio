import { Github, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Ayray23", label: "GitHub" },
    { icon: MessageCircle, href: "https://wa.me/2348134673262", label: "WhatsApp" },
    { icon: Mail, href: "mailto:adebisiraymond16@gmail.com", label: "Email" },
  ];

  return (
    <footer className="bg-foreground text-background py-14">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-black tracking-tight mb-3">Ray<span className="text-accent">echoz</span></h3>
          <p className="text-background/65 mb-7 max-w-xl mx-auto">
            Full-Stack Web & Mobile Developer building practical digital products for businesses, startups, and teams.
          </p>
          <div className="flex justify-center gap-3 mb-9">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined} aria-label={link.label} className="w-11 h-11 rounded-xl bg-background/10 flex items-center justify-center hover:bg-accent hover:scale-105 transition-all duration-300">
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          <div className="border-t border-background/15 pt-7">
            <p className="text-background/45 text-sm">© {new Date().getFullYear()} Rayechoz. Built with React, Vite & Tailwind CSS.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
