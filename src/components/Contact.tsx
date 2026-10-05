import { ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 border-t-[3px] border-ink bg-primary">
      <div className="container px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block bg-background border-[3px] border-ink shadow-brutal-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
            04 / Get In Touch
          </span>
          <h2 className="font-display text-5xl md:text-7xl font-normal text-ink mb-6 leading-[0.95]">
            Let's build something{" "}
            <span className="inline-block bg-secondary text-white border-[3px] border-ink px-3 -rotate-1 shadow-brutal-sm">
              amazing
            </span>.
          </h2>
          <p className="text-ink/85 text-lg mb-10 max-w-2xl mx-auto">
            I'm always interested in new opportunities, collaborations, or a chat about tech and what we should build next.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-background border-[3px] border-ink shadow-brutal-sm px-4 py-2">
              <MapPin className="w-4 h-4 text-ink" />
              <span className="text-ink font-medium text-sm">Toronto, ON, Canada</span>
            </div>
            <a href="mailto:atiksh.chawla06@gmail.com" className="flex items-center gap-2 bg-background border-[3px] border-ink shadow-brutal-sm px-4 py-2 hover:bg-accent transition-colors">
              <Mail className="w-4 h-4 text-ink" />
              <span className="text-ink font-medium text-sm">atiksh.chawla06@gmail.com</span>
            </a>
          </div>

          <Button variant="hero" asChild className="mb-12">
            <a href="mailto:atiksh.chawla06@gmail.com">
              Say Hello <ArrowUpRight className="w-5 h-5 ml-2" />
            </a>
          </Button>

          <div className="flex items-center justify-center gap-4">
            <a href="https://github.com/AtikshC" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background border-[3px] border-ink shadow-brutal-sm px-4 py-2 hover:bg-secondary hover:text-white transition-colors font-bold">
              <Github className="w-5 h-5" /> GitHub
            </a>
            <a href="https://www.linkedin.com/in/atiksh-chawla-77ab922a5" target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-2 bg-background border-[3px] border-ink shadow-brutal-sm px-4 py-2 hover:bg-secondary hover:text-white transition-colors font-bold">
              <Linkedin className="w-5 h-5" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
