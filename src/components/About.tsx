import { Code2, Palette, Zap, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  const highlights = [
    { icon: Code2, title: "Product-minded development", description: "I focus on the user's problem first, then build clean interfaces and reliable application logic around it." },
    { icon: Palette, title: "Modern, responsive UI", description: "Interfaces are designed to feel clear and polished across phones, tablets, and desktop screens." },
    { icon: Zap, title: "From idea to deployment", description: "I can take a project from requirements and UI implementation through integrations, debugging, and launch." },
  ];

  const strengths = [
    "React.js & Next.js applications",
    "Flutter Android & iOS apps",
    "Dashboards & management systems",
    "Firebase & Supabase backends",
    "API integration & debugging",
    "Responsive UI implementation",
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-3xl mb-14">
            <p className="text-accent font-semibold mb-3 uppercase tracking-[0.18em] text-sm">About</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-5">A developer who thinks beyond the screen.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I help startups, small businesses, and teams turn ideas into useful digital products. My work combines frontend engineering, backend integrations, mobile development, and practical product thinking.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 mb-14">
            {highlights.map((item) => (
              <Card key={item.title} className="border-border/60 bg-card/70">
                <CardContent className="p-7">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="rounded-2xl border border-border bg-card/60 p-8 md:p-10">
            <div className="grid md:grid-cols-[1fr_1.2fr] gap-10 items-center">
              <div>
                <p className="text-accent font-semibold mb-3 uppercase tracking-[0.18em] text-sm">Core strengths</p>
                <h3 className="text-3xl font-bold mb-4">What I can bring to your project</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you need a customer-facing product or an internal tool, I can help translate requirements into a practical, maintainable application.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {strengths.map((strength) => (
                  <div key={strength} className="flex gap-3 items-start rounded-xl border border-border/70 bg-background/50 p-4">
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
