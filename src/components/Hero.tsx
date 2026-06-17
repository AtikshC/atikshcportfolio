import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";
import profile from "@/assets/profile-photo.png";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden py-16 md:py-24">
      {/* Floating brutalist blocks */}
      <div aria-hidden className="hidden md:block absolute top-24 left-12 w-20 h-20 bg-secondary border-[3px] border-ink shadow-brutal rotate-[-8deg] animate-wiggle" />
      <div aria-hidden className="hidden md:block absolute bottom-24 right-16 w-28 h-16 bg-primary border-[3px] border-ink shadow-brutal rotate-[6deg]" />
      <div aria-hidden className="hidden md:block absolute top-1/3 right-24 w-12 h-12 bg-accent border-[3px] border-ink shadow-brutal-sm rotate-[12deg]" />
      <div aria-hidden className="hidden md:block absolute bottom-12 left-24 w-16 h-16 bg-mint border-[3px] border-ink shadow-brutal rotate-[-4deg]" />

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center max-w-6xl mx-auto">
          <div>
            {/* Status badge — square brutalist */}
            <div className="animate-fade-up inline-block mb-8">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-mint border-[3px] border-ink shadow-brutal-sm text-sm text-ink font-bold uppercase tracking-wide">
                <span className="w-2.5 h-2.5 bg-ink" />
                Open to opportunities
              </span>
            </div>

            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-normal leading-[0.9] mb-6 text-ink animate-fade-up delay-100">
              Atiksh{" "}
              <span className="inline-block bg-primary border-[3px] border-ink px-3 -rotate-1 shadow-brutal-sm">
                Chawla
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-ink font-body font-medium mb-3 animate-fade-up delay-200">
              Software Developer & Computer Science Student.
            </p>

            <p className="text-base md:text-lg text-ink/80 mb-8 animate-fade-up delay-300">
              Honours Specialization in CS at{" "}
              <span className="font-bold underline decoration-secondary decoration-4 underline-offset-4">Western University</span>{" "}
              · <span className="bg-primary px-1.5 font-bold">4.0 GPA</span>
            </p>

            <p className="text-ink/70 max-w-xl mb-10 leading-relaxed animate-fade-up delay-400">
              I build pragmatic, opinionated software — full-stack apps, ML tools, and developer tooling that solves real problems.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-10 animate-fade-up delay-500">
              <Button variant="hero" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button variant="default" size="xl" asChild>
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            <div className="flex items-center gap-3 animate-fade-up delay-500">
              <a href="https://github.com/AtikshC" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-background border-[3px] border-ink shadow-brutal-sm hover:bg-primary hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <Github className="w-5 h-5 text-ink" />
              </a>
              <a href="https://www.linkedin.com/in/atiksh-chawla-77ab922a5" target="_blank" rel="noopener noreferrer"
                className="p-3 bg-background border-[3px] border-ink shadow-brutal-sm hover:bg-secondary hover:text-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="mailto:atiksh.chawla06@gmail.com"
                className="p-3 bg-background border-[3px] border-ink shadow-brutal-sm hover:bg-accent hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all">
                <Mail className="w-5 h-5 text-ink" />
              </a>
            </div>
          </div>

          {/* Photo card */}
          <div className="relative animate-fade-up delay-200 justify-self-center lg:justify-self-end">
            <div className="relative w-64 md:w-72 bg-primary border-[3px] border-ink shadow-brutal-lg rotate-2">
              <img src={profile} alt="Atiksh Chawla" className="w-full h-auto block border-b-[3px] border-ink" />
              <div className="p-3 bg-background text-center">
                <p className="font-display text-xl text-ink leading-none">Hi, I'm Atiksh 👋</p>
                <p className="text-xs uppercase tracking-widest text-ink/70 mt-1">est. Mississauga, ON</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center animate-fade-in delay-500">
          <a href="#about" className="flex items-center gap-2 text-ink font-bold uppercase text-xs tracking-widest border-[3px] border-ink bg-background px-4 py-2 shadow-brutal-sm hover:bg-primary transition-colors">
            Scroll <ArrowDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
