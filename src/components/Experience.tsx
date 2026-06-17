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
    role: "Software Developer",
    company: "Western University — Personal & Academic Projects",
    period: "2024 – Present",
    color: "bg-secondary text-white",
    bullets: [
      "Built full-stack applications used by the Western student community, including a campus lost & found platform.",
      "Designed REST APIs, authentication flows, and PostgreSQL schemas with a focus on maintainability and DX.",
      "Shipped ML side projects spanning computer vision, NLP, and data analysis.",
    ],
  },
  {
    role: "Open Source Contributor",
    company: "GitHub @AtikshC",
    period: "Ongoing",
    color: "bg-mint",
    bullets: [
      "Maintain a growing portfolio of public repos across web, ML, and data tooling.",
      "Mentor peers on git workflows, code review, and architectural decisions.",
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
