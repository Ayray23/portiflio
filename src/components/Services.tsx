import { Smartphone, Globe, Rocket, Database, LayoutDashboard, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Services = () => {
  const services = [
    { icon: Globe, title: "Web Development", description: "Responsive business websites, landing pages, web apps, and SaaS interfaces built with modern React-based tools." },
    { icon: Smartphone, title: "Mobile App Development", description: "Cross-platform Android and iOS applications with Flutter, designed for smooth and practical user experiences." },
    { icon: LayoutDashboard, title: "Dashboards & Systems", description: "Admin dashboards, inventory tools, POS systems, school platforms, and custom management software." },
    { icon: Database, title: "Backend & Database", description: "Authentication, data storage, APIs, role-based access, and application integrations using Firebase and Supabase." },
    { icon: ShoppingCart, title: "E-commerce Solutions", description: "Product catalogs, customer flows, checkout experiences, inventory management, and marketplace features." },
    { icon: Rocket, title: "Fixes & Improvements", description: "UI implementation, responsive fixes, API integration, debugging, performance improvements, and deployment support." },
  ];

  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">SERVICES</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What I can build for you</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical development services for businesses, startups, and individuals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card key={service.title} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
                <CardContent className="p-7">
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
