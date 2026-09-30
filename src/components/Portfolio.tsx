import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const Portfolio = () => {
  const projects = [
    { title: "CampusMart", category: "Next.js • Supabase • Marketplace", description: "A student marketplace with Google authentication, product listings, favorites, sold items, profiles, and storage.", image: "/11.png", link: "https://campus-mart-v10.vercel.app/" },
    { title: "Inventory Management App", category: "React • Vite • Firebase", description: "A practical inventory system for tracking products, stock levels, and business operations.", image: "/22.png", link: "https://inventory-app-one-gamma.vercel.app/" },
    { title: "SwiftCart Management Tool", category: "React • Firebase • POS", description: "A retail management and checkout system with product management, inventory tracking, roles, and sales processing.", image: "/33.png", link: "https://stockpro-six.vercel.app/" },
    { title: "Requirements Management Tool", category: "React • Vite • Firebase", description: "A requirements management platform designed around analyst workflows, traceability, collaboration, and structured project requirements.", image: "/1.png", link: "https://remt-60ae7.web.app/" },
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">SELECTED WORK</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Projects built for real use</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore live examples of websites, applications, and business systems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {projects.map((project) => (
              <a key={project.title} href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-full">
                  <div className="h-52 relative overflow-hidden bg-secondary">
                    <img src={project.image} alt={`${project.title} project preview`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/45 transition-all duration-300 flex items-center justify-center">
                      <span className="rounded-full bg-white/90 text-black px-4 py-2 text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                        View Live Project <ExternalLink className="inline w-4 h-4 ml-1" />
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <span className="text-xs text-accent font-semibold uppercase tracking-wide">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <a href="https://github.com/Ayray23" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-semibold text-primary hover:text-accent transition-colors">
              <Github className="w-5 h-5" /> See more code on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
