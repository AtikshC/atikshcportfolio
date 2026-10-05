import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Campus Lost & Found",
      description: "A full-stack platform for reporting and searching lost items across Western University, with authenticated item listings, search, and status-tracking APIs.",
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind", "REST API"],
      githubUrl: "https://github.com/AtikshC/campus-lost-found",
      liveUrl: "https://campus-lost-found-omega.vercel.app/",
      featured: true,
      color: "bg-primary",
    },
    {
      title: "Codebase Analyzer",
      description: "A static analysis tool that scores codebases on readability, maintainability, complexity, and safety, generating automated reports with prioritized improvement suggestions.",
      technologies: ["Python", "TypeScript", "Static Analysis", "AST", "React"],
      githubUrl: "https://github.com/AtikshC/codebase-analyzer",
      color: "bg-mint",
    },
    {
      title: "Face Scanner & Gesture Interface",
      description: "A real-time face detection and scanning system written in C, with facial landmark extraction and identity-aware processing pipelines.",
      technologies: ["C", "Computer Vision", "Landmark Detection"],
      githubUrl: "https://github.com/AtikshC/face-scanner",
      color: "bg-lilac",
    },
    {
      title: "Earthquake SQL",
      description: "Database app for analyzing and visualizing global earthquake data with complex SQL queries, aggregations, and seismic visualizations.",
      technologies: ["SQL", "Python", "PostgreSQL", "Data Viz", "Pandas"],
      githubUrl: "https://github.com/AtikshC/earthquake-sql",
      color: "bg-accent",
    },
    {
      title: "Assistive Mouse Interface",
      description: "A hands-free navigation system mapping real-time facial landmarks and head tracking to precise cursor movement, improving accessibility for users with limited mobility.",
      technologies: ["Python", "OpenCV", "Facial Landmarks", "Accessibility"],
      githubUrl: "https://github.com/AtikshC",
      color: "bg-secondary text-white",
    },
    {
      title: "Voice AI Integration",
      description: "Real-time speech recognition and intent parsing modules with microservices orchestrating ASR/NLU pipelines — built during my SalesCode.ai internship.",
      technologies: ["Python", "Node.js", "ASR", "NLU", "Microservices"],
      githubUrl: "https://github.com/AtikshC",
      color: "bg-background",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32 border-t-[3px] border-ink bg-background">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <span className="inline-block bg-primary border-[3px] border-ink shadow-brutal-sm px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              03 — Portfolio
            </span>
            <h2 className="font-display text-5xl md:text-7xl font-normal text-ink mb-6 leading-[0.95]">
              Selected{" "}
              <span className="inline-block bg-secondary text-white border-[3px] border-ink px-3 rotate-1 shadow-brutal-sm">
                projects
              </span>.
            </h2>
            <p className="text-ink/80 max-w-2xl text-lg">
              Things I've built across full-stack development, machine learning, and data engineering.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((p, i) => (
              <ProjectCard key={i} {...p} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <a
              href="https://github.com/AtikshC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-card border-[3px] border-ink shadow-brutal px-6 py-4 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-brutal-sm transition-all"
            >
              <span className="text-ink font-bold">And many more on GitHub</span>
              <span className="font-bold text-ink">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
