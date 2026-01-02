import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/50 via-background to-background" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section header */}
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Get In Touch
          </span>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
            Let's Build Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new opportunities, 
            collaborations, or just having a chat about technology and innovation.
          </p>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="w-4 h-4 text-primary" />
              <span>London, Ontario, Canada</span>
            </div>
            <div className="hidden sm:block w-1 h-1 rounded-full bg-muted-foreground" />
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail className="w-4 h-4 text-primary" />
              <a href="mailto:atiksh@example.com" className="hover:text-primary transition-colors">
                atiksh@example.com
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <Button variant="hero" size="xl" asChild className="mb-12">
            <a href="mailto:atiksh@example.com">
              Say Hello
              <ArrowUpRight className="w-5 h-5 ml-2" />
            </a>
          </Button>

          {/* Social links */}
          <div className="flex items-center justify-center gap-6">
            <a 
              href="https://github.com/AtikshC"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <a 
              href="https://linkedin.com/in/atikshchawla"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
