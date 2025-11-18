import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A full-featured online shopping platform with payment integration and admin dashboard.",
      image: "/11.png",
      link: "https://campus-mart-v10.vercel.app/"
    },
    {
      title: "Inventory App",
      category: "Web Application",
      description: "A modern inventory management app for tracking products, stock levels, and real-time updates across multiple stores.",
      image: "/22.png",
      link: "https://inventory-app-one-gamma.vercel.app/"
    },
    {
      title: "SwiftCart Management Tool",
      category: "Retail POS / Inventory",
      description: "A full supermarket checkout system with real-time inventory tracking, product management, and seamless sales processing.",
      image:"/33.png",
      link: "https://stockpro-six.vercel.app"
    },
    {
      title: "Portfolio Website",
      category: "Web Design",
      description: "Creative portfolio showcasing work with smooth animations and modern aesthetics.",
      color: "from-orange-500 to-red-500",
      link: "https://portfolio-three-kappa-68.vercel.app/"
    },
    
    {
      title: "Restaurant Booking",
      category: "Web Application",
      description: "Online reservation system with table management and customer reviews.",
      color: "from-pink-500 to-rose-500",
      link: "https://your-restaurant-booking.com"
    },
    {
      title: "Fitness Tracker",
      category: "Mobile App",
      description: "Health and fitness application with workout plans and progress tracking.",
      color: "from-amber-500 to-yellow-500",
      link: "https://your-fitness-tracker.com"
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">

          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Portfolio</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of my recent projects and creative work
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <a 
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Card 
                  className="border-none shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
                >
                  
                  {/* Thumbnail */}
                  <div className="h-48 relative overflow-hidden">
                    
                    {/* If image exists → show image */}
                    {project.image ? (
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    ) : (
                      /* If no image → use gradient color */
                      <div className={`w-full h-full bg-gradient-to-br ${project.color} group-hover:scale-110 transition-transform duration-500`} />
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
                      <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>

                  {/* Text Content */}
                  <CardContent className="p-6">
                    <span className="text-sm text-accent font-medium">{project.category}</span>
                    <h3 className="text-xl font-bold mt-2 mb-3">{project.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Portfolio;