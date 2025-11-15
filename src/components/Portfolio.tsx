import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured online shopping platform with payment integration and admin dashboard.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Mobile Banking App",
      category: "Mobile Design",
      description: "Modern banking application with intuitive UI and secure transaction handling.",
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      description: "Creative portfolio showcasing work with smooth animations and modern aesthetics.",
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Task Management Tool",
      category: "SaaS Application",
      description: "Collaborative project management tool with real-time updates and team features.",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Restaurant Booking",
      category: "Web Application",
      description: "Online reservation system with table management and customer reviews.",
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "Fitness Tracker",
      category: "Mobile App",
      description: "Health and fitness application with workout plans and progress tracking.",
      color: "from-amber-500 to-yellow-500"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent projects and creative work
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                <div className={`h-48 bg-gradient-to-br ${project.color} relative`}>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <span className="text-sm text-accent font-medium">{project.category}</span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
