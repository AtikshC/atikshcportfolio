import ProjectCard from "./ProjectCard";
import campusLostFoundImg from "@/assets/campus-lost-found.png";
import codebaseAnalyzerImg from "@/assets/codebase-analyzer.png";
import faceScannerImg from "@/assets/face-scanner.png";
import earthquakeSqlImg from "@/assets/earthquake-sql.png";

const Projects = () => {
  const projects = [
    {
      title: "Campus Lost & Found",
      description: "A comprehensive lost and found platform built for Western University. Features real-time notifications, image uploads, location tagging, and smart matching algorithms to reunite students with their lost belongings. Integrated authentication system with secure data handling.",
      image: campusLostFoundImg,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS", "REST API"],
      githubUrl: "https://github.com/AtikshC/campus-lost-found",
      liveUrl: "https://campus-lost-found-omega.vercel.app/",
      featured: true
    },
    {
      title: "Codebase Analyzer",
      description: "An intelligent code analysis tool that provides insights into code quality, complexity metrics, and potential improvements. Uses AST parsing and machine learning for smart suggestions.",
      image: codebaseAnalyzerImg,
      technologies: ["Python", "TypeScript", "Machine Learning", "AST", "React"],
      githubUrl: "https://github.com/AtikshC/codebase-analyzer"
    },
    {
      title: "Face Scanner",
      description: "A facial recognition application using computer vision and deep learning. Features real-time detection, emotion analysis, and secure identity verification capabilities.",
      image: faceScannerImg,
      technologies: ["Python", "OpenCV", "TensorFlow", "Deep Learning", "Flask"],
      githubUrl: "https://github.com/AtikshC/FaceScanner"
    },
    {
      title: "Earthquake SQL",
      description: "A powerful database application for analyzing and visualizing earthquake data. Features complex SQL queries, data aggregation, and interactive visualizations of seismic activity.",
      image: earthquakeSqlImg,
      technologies: ["SQL", "Python", "PostgreSQL", "Data Visualization", "Pandas"],
      githubUrl: "https://github.com/AtikshC/earthquake-sql"
    }
  ];

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A showcase of my work in full-stack development, machine learning, 
              and data engineering.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* More projects teaser */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl bg-card border border-border">
              <span className="text-muted-foreground">
                And <span className="text-primary font-semibold">many more</span> projects on GitHub
              </span>
              <a 
                href="https://github.com/AtikshC"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-gold-glow transition-colors font-medium"
              >
                View All →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
