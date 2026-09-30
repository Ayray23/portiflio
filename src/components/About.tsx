import { Code2, Palette, Zap, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    { icon: Code2, title: "Production-Ready Code", description: "Clean, maintainable interfaces and application logic built for real users and real business needs." },
    { icon: Palette, title: "UI That Converts", description: "Modern, responsive experiences focused on clarity, usability, accessibility, and strong visual hierarchy." },
    { icon: Zap, title: "Reliable Delivery", description: "Clear communication, practical solutions, and focused execution from idea through deployment." },
  ];

  const strengths = [
    "Responsive web applications",
    "Business dashboards & management systems",
    "Android & iOS apps with Flutter",
    "Firebase & Supabase integrations",
    "REST API integration and debugging",
    "Deployment and production support",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">ABOUT RAYMOND</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">A developer focused on useful products.</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I help startups, small businesses, and teams turn ideas into polished digital products.
              My focus is not just writing code — it is understanding the problem, building the right solution,
              and delivering an experience people can actually use.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {highlights.map((item) => (
              <Card key={item.title} className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardContent className="pt-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-md border border-border">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-accent font-semibold mb-2">WHAT I CAN HELP WITH</p>
                <h3 className="text-3xl font-bold mb-5">From idea to deployed product.</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a landing page, customer-facing web app, internal dashboard, mobile app,
                  or custom management system, I can help turn your requirements into a working product.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {strengths.map((strength) => (
                  <div key={strength} className="flex gap-3 items-start">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-sm font-medium">{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
