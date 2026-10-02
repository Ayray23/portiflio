import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { usePageMetadata } from "@/hooks/use-page-metadata";

const Index = () => {
  usePageMetadata({
    title: "Raymond Adebisi | Full-Stack Web & Mobile Developer",
    description: "Raymond Adebisi builds responsive websites, web apps, mobile apps, dashboards, marketplaces, and custom business systems for startups and businesses.",
    path: "/",
  });

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
