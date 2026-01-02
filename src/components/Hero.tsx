import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      </div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container relative z-10 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border text-sm text-muted-foreground mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Open to opportunities
            </span>
          </div>

          {/* Main heading */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-up delay-100">
            <span className="text-foreground">Atiksh</span>{" "}
            <span className="text-gradient">Chawla</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground font-body mb-4 animate-fade-up delay-200">
            Software Developer & Computer Science Student
          </p>

          {/* University & GPA */}
          <p className="text-lg text-muted-foreground/80 mb-8 animate-fade-up delay-300">
            Honours Specialization in Computer Science at{" "}
            <span className="text-foreground font-medium">Western University</span>{" "}
            • <span className="text-primary font-semibold">4.0 GPA</span>
          </p>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-400">
            Passionate about building impactful software solutions. Experienced in full-stack development, 
            machine learning, and creating applications that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 animate-fade-up delay-500">
            <Button variant="hero" size="xl" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#contact">
                Get In Touch
              </a>
            </Button>
          </div>

          {/* Social links */}
          <div className="flex items-center justify-center gap-4 animate-fade-up delay-600">
            <a 
              href="https://github.com/AtikshC" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-surface-hover border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/atiksh-chawla-77ab922a5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary hover:bg-surface-hover border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="mailto:atiksh.chawla06@gmail.com"
              className="p-3 rounded-xl bg-secondary hover:bg-surface-hover border border-border hover:border-primary/30 transition-all duration-300 group"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up delay-600">
          <a 
            href="#about" 
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
