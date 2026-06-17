import { Award, BookOpen, Code2, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Award, title: "4.0 GPA", description: "Dean's List every semester", bg: "bg-primary" },
    { icon: BookOpen, title: "Honours CS", description: "Western University", bg: "bg-secondary text-white" },
    { icon: Code2, title: "Full-Stack", description: "Frontend & Backend", bg: "bg-accent" },
    { icon: Sparkles, title: "AI / ML", description: "Applied ML projects", bg: "bg-mint" },
  ];

  const skills = [
    "TypeScript", "React", "Next.js", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "Docker", "Git", "REST APIs",
    "Machine Learning", "TensorFlow", "OpenCV", "Java", "C++",
    "Tailwind CSS", "Supabase", "AWS", "Agile", "CI/CD",
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-t-[3px] border-ink bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="inline-block bg-accent border-[3px] border-ink shadow-brutal-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              01 — About Me
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-normal text-ink mb-6 leading-[0.95]">
              Driven by curiosity,<br />
              powered by{" "}
              <span className="inline-block bg-primary border-[3px] border-ink px-3 -rotate-1 shadow-brutal-sm">
                code
              </span>.
            </h2>
            <p className="text-ink/80 max-w-2xl text-lg">
              I'm a CS student at Western University building things at the intersection of
              software engineering, AI, and developer tooling.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-20">
            {highlights.map((item, i) => (
              <div key={i} className={`${item.bg} border-[3px] border-ink shadow-brutal p-6 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-sm transition-all`}>
                <div className="w-10 h-10 bg-background border-[3px] border-ink flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-ink" />
                </div>
                <h3 className="font-display text-2xl font-normal mb-1 leading-tight">{item.title}</h3>
                <p className="text-sm font-medium opacity-90">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="bg-card border-[3px] border-ink shadow-brutal p-8">
              <h3 className="font-display text-3xl font-normal mb-6">My Journey</h3>
              <div className="space-y-4 text-ink/85 leading-relaxed">
                <p>As an Honours Specialization student at Western, I've maintained a perfect 4.0 GPA while diving deep into software, algorithms, and AI.</p>
                <p>My passion is shipping things that solve real problems — from a campus lost & found used by hundreds of students to ML tools and developer utilities.</p>
                <p>Outside coursework I contribute to open source, mentor peers, and explore anything that pushes the craft forward.</p>
              </div>
            </div>

            <div>
              <h3 className="font-display text-3xl font-normal mb-6">Skills & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, i) => {
                  const tones = ["bg-background", "bg-primary", "bg-mint", "bg-lilac", "bg-accent/70"];
                  return (
                    <span key={i} className={`${tones[i % tones.length]} px-3 py-1.5 border-[3px] border-ink text-sm font-bold text-ink shadow-brutal-sm hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all cursor-default`}>
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
