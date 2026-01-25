import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import campusLostFoundImg from "@/assets/campus-lost-found.png";
import codebaseAnalyzerImg from "@/assets/codebase-analyzer.png";
import faceScannerImg from "@/assets/face-scanner.png";
import earthquakeSqlImg from "@/assets/earthquake-sql.png";
import assistiveMouseImg from "@/assets/assistive-mouse.png";
import voiceAiImg from "@/assets/voice-ai.png";
import { Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Campus Lost & Found",
      description: "A comprehensive lost and found platform built for Western University. Features real-time notifications, image uploads, location tagging, and smart matching algorithms to reunite students with their lost belongings.",
      image: campusLostFoundImg,
      technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
      githubUrl: "https://github.com/AtikshC/campus-lost-found",
      liveUrl: "https://campus-lost-found-omega.vercel.app/",
      featured: true
    },
    {
      title: "Codebase Analyzer",
      description: "A static analysis tool that scores codebases on readability, maintainability, complexity, and safety. Generates automated reports with normalized metrics and improvement suggestions.",
      image: codebaseAnalyzerImg,
      technologies: ["Python", "TypeScript", "Machine Learning", "AST", "React"],
      githubUrl: "https://github.com/AtikshC/Codebase_Analyzer"
    },
    {
      title: "Face Scanner & Gesture Interface",
      description: "Real-time face detection and scanning system using computer vision in C. Implements facial landmark extraction and identity-aware processing pipelines.",
      image: faceScannerImg,
      technologies: ["C", "OpenCV", "Computer Vision", "Real-time Processing"],
      githubUrl: "https://github.com/AtikshC/FaceScanner"
    },
    {
      title: "Earthquake SQL Analysis",
      description: "A powerful database application for analyzing and visualizing earthquake data. Features complex SQL queries, data aggregation, and interactive visualizations of seismic activity.",
      image: earthquakeSqlImg,
      technologies: ["SQL", "Python", "PostgreSQL", "Data Visualization", "Pandas"],
      githubUrl: "https://github.com/AtikshC/Earthquake_sql"
    },
    {
      title: "Assistive Mouse Interface",
      description: "Hands-free navigation system using OpenCV, mapping real-time facial landmarks and head-tracking algorithms to precise cursor movements for enhanced accessibility.",
      image: assistiveMouseImg,
      technologies: ["Python", "OpenCV", "Computer Vision", "Accessibility", "Real-time"],
      githubUrl: "https://github.com/AtikshC/MouseHead"
    },
    {
      title: "Voice AI Integration",
      description: "Voice-AI integration modules for real-time speech recognition and intent parsing. Built microservices for audio preprocessing and ASR/NLU pipeline orchestration.",
      image: voiceAiImg,
      technologies: ["Python", "Node.js", "Speech Recognition", "NLU", "Microservices"],
      githubUrl: "https://github.com/AtikshC"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      <div className="container relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Portfolio
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A showcase of my work in full-stack development, machine learning, 
              and computer vision.
            </p>
          </motion.div>

          {/* Projects grid */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {/* More projects teaser */}
          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <motion.a 
              href="https://github.com/AtikshC"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 group"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                View all projects on <span className="text-primary font-semibold">GitHub</span>
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
