import { ArrowLeft, Download, Mail, Phone, MapPin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const CV = () => {
  const printCV = () => window.print();

  return (
    <main className="min-h-screen bg-background py-8 md:py-12">
      <div className="print-hidden container mx-auto px-4 max-w-4xl flex justify-between items-center gap-4 mb-6">
        <Button asChild variant="outline">
          <a href="/"><ArrowLeft className="mr-2 w-4 h-4" /> Back to Portfolio</a>
        </Button>
        <div className="flex flex-wrap justify-end gap-2">
          <Button asChild variant="outline">
            <a href="/Raymond_Adebisi_Cv.pdf" download="Raymond_Adebisi_Cv.pdf"><Download className="mr-2 w-4 h-4" /> Download CV PDF</a>
          </Button>
          <Button onClick={printCV}><Download className="mr-2 w-4 h-4" /> Print CV</Button>
        </div>
      </div>

      <article className="cv-paper bg-card text-card-foreground max-w-4xl mx-auto p-7 md:p-12 border border-border shadow-xl">
        <header className="border-b border-border pb-6 mb-7">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight">Adebisi-Rufus Raymond O.</h1>
          <p className="text-lg md:text-xl font-semibold text-primary mt-2">Software Developer | Full-Stack & Mobile Applications</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2 mt-4 text-sm text-muted-foreground">
            <span><Mail className="inline w-4 h-4 mr-1" />adebisiraymond16@gmail.com</span>
            <span><Phone className="inline w-4 h-4 mr-1" />08134673262</span>
            <span><MapPin className="inline w-4 h-4 mr-1" />Osun State, Nigeria</span>
            <a href="https://portiflio-delta.vercel.app" className="underline">Portfolio</a>
            <a href="https://github.com/Ayray23" className="underline"><Github className="inline w-4 h-4 mr-1" />github.com/Ayray23</a>
          </div>
        </header>

        <section className="mb-7">
          <h2 className="cv-heading">Professional Summary</h2>
          <p className="text-sm leading-7 text-muted-foreground">Software Engineering graduate and Full-Stack and Mobile Application Developer experienced in building responsive web applications, cross-platform mobile apps and database-backed management systems. Skilled in React.js, Next.js, React Native, Flutter, Node.js, JavaScript, Tailwind CSS, Firebase and Supabase. Experienced in REST API integration, frontend implementation, debugging and developing practical digital products, including inventory management and student marketplace platforms. Focused on delivering reliable, user-centered software and collaborating effectively across development teams.</p>
        </section>

        <section className="mb-7">
          <h2 className="cv-heading">Technical Skills</h2>
          <div className="space-y-2 text-sm leading-6">
            <p><strong>Frontend:</strong> React.js, Next.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap, Vite, responsive design</p>
            <p><strong>Mobile:</strong> React Native, Flutter, Dart, cross-platform app development, mobile UI implementation</p>
            <p><strong>Backend & APIs:</strong> Node.js, REST API integration, API debugging, backend application development</p>
            <p><strong>Databases:</strong> Firebase Authentication, Cloud Firestore, Firebase Storage, Supabase</p>
            <p><strong>Tools:</strong> Git, GitHub, Vercel, Visual Studio Code, deployment workflows</p>
            <p><strong>Core strengths:</strong> Problem-solving, collaboration, communication, debugging, UI/UX implementation</p>
          </div>
        </section>

        <section className="mb-7">
          <h2 className="cv-heading">Professional Experience</h2>
          <div className="space-y-4 text-sm leading-6">
            <div><h3 className="font-bold text-foreground">Hibertech Solution and Programming Consult <span className="font-normal text-muted-foreground">| Mobile App Developer · 2025–Present</span></h3><p className="text-muted-foreground">Contribute to cross-platform mobile application development and implementation. Develop mobile interfaces using Flutter and Dart, integrate REST APIs, support application functionality across devices, collaborate on debugging and delivery, and maintain clean, scalable code.</p></div>
            <div><h3 className="font-bold text-foreground">Strakins Tech Hub <span className="font-normal text-muted-foreground">| Frontend Developer · 2024–2025</span></h3><p className="text-muted-foreground">Developed responsive web application interfaces and frontend features using React.js, Next.js and Tailwind CSS. Translated design concepts and requirements into functional user experiences, implemented UI improvements, supported cross-browser compatibility and debugged frontend issues.</p></div>
          </div>
        </section>

        <section className="mb-7">
          <h2 className="cv-heading">Selected Projects</h2>
          <div className="space-y-4 text-sm leading-6">
            <div><h3 className="font-bold text-foreground">StockPro — Inventory Management System <span className="font-normal text-muted-foreground">| Live application</span></h3><p className="text-muted-foreground">Inventory and point-of-sale management application supporting product administration, cashier checkout and business monitoring. Implemented product workflows, administrator/cashier roles and dashboard views for business statistics.</p></div>
            <div><h3 className="font-bold text-foreground">CampusMart — Student Marketplace <span className="font-normal text-muted-foreground">| Live application</span></h3><p className="text-muted-foreground">Student marketplace built with Next.js and Supabase. Implemented Google authentication, product listings, favorites, sold status and user profiles, with responsive buying and selling interfaces.</p></div>
            <div><h3 className="font-bold text-foreground">Inventory Web App — Version 1 <span className="font-normal text-muted-foreground">| Live application</span></h3><p className="text-muted-foreground">Inventory application focused on product tracking and reporting, with responsive interfaces and inventory features.</p></div>
            <div><h3 className="font-bold text-foreground">Requirements Elicitation and Management Tool (REMT) <span className="font-normal text-muted-foreground">| Final-year project</span></h3><p className="text-muted-foreground">Requirements management application developed using React.js, Vite, Tailwind CSS and Firebase. Designed workflows for classification, prioritization, status tracking, stakeholder traceability and activity tracking.</p></div>
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-7">
          <div><h2 className="cv-heading">Education</h2><p className="text-sm leading-6"><strong className="text-foreground">Osun State University</strong><br />Bachelor of Science in Software Engineering<br /><span className="text-muted-foreground">2022–2026</span></p></div>
          <div><h2 className="cv-heading">Additional Information</h2><p className="text-sm leading-6"><strong>Language:</strong> English<br /><strong>Professional interests:</strong> Full-stack development, mobile applications, SaaS products, database-backed systems and digital solutions for public health.</p></div>
        </section>
      </article>
    </main>
  );
};

export default CV;
