import { Mail, MapPin, Phone, MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const Contact = () => {
  const contactInfo = [
    { icon: Mail, title: "Email", detail: "adebisiraymond16@gmail.com", href: "mailto:adebisiraymond16@gmail.com" },
    { icon: Phone, title: "Phone / WhatsApp", detail: "+234 813 467 3262", href: "tel:+2348134673262" },
    { icon: MapPin, title: "Available", detail: "Remote • Worldwide", href: "#contact" },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const subject = String(form.get("subject") || "Project Inquiry");
    const message = String(form.get("message") || "");
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const body = `Hi Raymond,

My name is ${name}.
Email: ${email}

${message}`;

    window.location.href = `mailto:adebisiraymond16@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-accent font-semibold mb-2">LET'S WORK TOGETHER</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Have a project in mind?</h2>
            <div className="w-20 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tell me what you are building, what you need fixed, or what you want to improve.
              I’ll get back to you with the next steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {contactInfo.map((info) => (
              <a key={info.title} href={info.href} className="block">
                <Card className="border-none shadow-md hover:shadow-lg transition-all h-full">
                  <CardContent className="pt-8 text-center">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-muted-foreground text-sm">{info.detail}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-stretch">
            <Card className="border-none shadow-lg">
              <CardContent className="p-8 md:p-10">
                <h3 className="text-2xl font-bold mb-2">Start a conversation</h3>
                <p className="text-muted-foreground mb-7">Share the basics and your email app will open with a ready-to-send project brief.</p>
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="name">Name</label>
                      <Input id="name" name="name" required placeholder="Your name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                      <Input id="email" name="email" required type="email" placeholder="you@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
                    <Input id="subject" name="subject" required placeholder="Website, mobile app, dashboard..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">Project details</label>
                    <Textarea id="message" name="message" required placeholder="What are you trying to build or improve?" className="min-h-[150px]" />
                  </div>
                  <Button type="submit" size="lg" className="px-8">
                    Send Project Brief <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg bg-foreground text-background">
              <CardContent className="p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <MessageCircle className="w-10 h-10 text-accent mb-6" />
                  <h3 className="text-3xl font-bold mb-4">Prefer a quick chat?</h3>
                  <p className="text-background/75 leading-relaxed">
                    For quick project discussions, reach out directly on WhatsApp or email.
                    Include your budget, timeline, and what you need built for a faster response.
                  </p>
                </div>
                <div className="mt-10 space-y-3">
                  <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    <a href="https://wa.me/2348134673262" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full border-background/40 bg-transparent text-background hover:bg-background hover:text-foreground">
                    <a href="mailto:adebisiraymond16@gmail.com">Email Raymond</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
