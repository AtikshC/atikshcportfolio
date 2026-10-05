import { Briefcase } from "lucide-react";

const experiences = [
  {
    role: "AI Research Intern",
    company: "BMO",
    period: "May 2026 – Sep 2026",
    color: "bg-primary",
    bullets: [
      "Leveraged GitHub Copilot and AI agents to automate debugging, code generation, and internal tooling, improving development efficiency by 20%.",
      "Developed AI-powered solutions using Python and ML frameworks to support enterprise research initiatives.",
      "Assisted in the deployment and debugging of home financing solutions for new immigrant and non-resident clients.",
      "Collaborated with engineering teams to evaluate models, automate workflows, and document technical findings.",
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "SalesCode.ai",
    period: "Jun 2025 – Sep 2025",
    color: "bg-secondary text-white",
    bullets: [
      "Developed voice-AI integration modules (Python, Node.js) for real-time speech recognition and intent parsing.",
      "Built microservices to preprocess audio streams, orchestrate ASR/NLU pipelines, and manage user sessions.",
    ],
  },
  {
    role: "Research Intern",
    company: "Western University",
    period: "May 2025 – Sep 2025",
    color: "bg-mint",
    bullets: [
      "Led applied research in adversarial machine learning, designing CNN-robustness experiments in PyTorch.",
      "Implemented and benchmarked defensive strategies against patch-based attacks.",
      "Used NumPy and Pandas for complex data analysis, presenting Matplotlib visualizations at lab briefings.",
      "Contributed to a research manuscript on adversarial robustness methods.",
    ],
  },
  {
    role: "Developer",
    company: "Western Developers Society",
    period: "Nov 2024 – Apr 2025",
    color: "bg-lilac",
    bullets: [
      "Designed and implemented React Native features with a Firebase backend for campus mobile apps.",
      "Facilitated sprint planning, code reviews, and CI/CD pipelines with GitHub Actions.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 border-t-[3px] border-ink bg-muted">
      <div className="container px-6">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16">
            <span className="inline-block bg-secondary text-white border-[3px] border-ink shadow-brutal-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              02 — Experience
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-normal text-ink leading-[0.95]">
              Where I've{" "}
              <span className="inline-block bg-accent border-[3px] border-ink px-3 rotate-1 shadow-brutal-sm">
                worked
              </span>.
            </h2>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-card border-[3px] border-ink shadow-brutal p-6 md:p-8 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-sm transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                  <div className="flex items-start gap-4">
                    <div className={`${exp.color} border-[3px] border-ink w-12 h-12 flex items-center justify-center shrink-0`}>
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-normal text-ink leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-ink/80 font-bold">{exp.company}</p>
                    </div>
                  </div>
                  <span className="inline-block bg-background border-[3px] border-ink px-3 py-1 text-xs font-bold uppercase tracking-wide shadow-brutal-sm self-start whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-2.5 text-ink/85 leading-relaxed pl-1">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-3">
                      <span className="mt-2 w-2 h-2 bg-ink shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
