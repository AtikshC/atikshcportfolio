import { Award, BookOpen, Code2, Sparkles } from "lucide-react";

const About = () => {
  const highlights = [
    { icon: Award, title: "3.9 GPA", description: "Dean's List 2024–25, 2025–26", bg: "bg-primary" },
    { icon: BookOpen, title: "Ivey HBA + CS", description: "Western University", bg: "bg-secondary text-white" },
    { icon: Code2, title: "AWS ×2", description: "Cloud & AI Practitioner", bg: "bg-accent" },
    { icon: Sparkles, title: "AI / ML", description: "Research @ BMO & Western", bg: "bg-mint" },
  ];

  const skills = [
    "Python", "TypeScript", "JavaScript", "C", "Java", "SQL",
    "React.js", "React Native", "Node.js", "Flask", "Flutter", "Tailwind CSS",
    "PyTorch", "OpenCV", "NumPy", "Pandas", "Matplotlib",
    "Firebase", "SQLite", "AWS Cloud", "Git", "GitHub Actions", "Figma",
    "AWS Cloud Practitioner", "AWS AI Practitioner", "Google Cloud GenAI",
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-t-[3px] border-ink bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="inline-block bg-accent border-[3px] border-ink shadow-brutal-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              01 / About Me
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-normal text-ink mb-6 leading-[0.95]">
              Driven by curiosity,<br />
              powered by{" "}
              <span className="inline-block bg-primary border-[3px] border-ink px-3 -rotate-1 shadow-brutal-sm">
                code
              </span>.
            </h2>
            <p className="text-ink/80 max-w-2xl text-lg">
              I'm pursuing an Ivey HBA + Honours Specialization in Computer Science at Western University,
              building at the intersection of software engineering, AI, and business.
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
                <p>I'm in the Ivey HBA + Computer Science dual degree at Western (class of 2028), holding a 3.9 GPA and making the Dean's List every year.</p>
                <p>I've done AI research at BMO and in adversarial ML at Western, built voice-AI systems at SalesCode.ai, and shipped campus apps with the Western Developers Society.</p>
                <p>I'm AWS certified in Cloud and AI, and I love shipping things that solve real problems, like a lost & found platform for my whole campus.</p>
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
